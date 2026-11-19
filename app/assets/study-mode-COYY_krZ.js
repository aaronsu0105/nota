import{g as j,p as g,b as q,o as G,a as W,s as N,n as _e,f as Me,t as at}from"./main-rr7QRyb8.js";import{c as ct,t as ve,b as re,d as dt,m as ut,a as me}from"./llm-router-mfHvS6vZ.js";import{d as lt,o as ht,i as mt,x as qe}from"./document-focus-1dNiXwJJ.js";import{d as pe,s as x,c as pt,r as ft,e as wt,g as Le,w as gt,u as Pe,a as yt,o as ke}from"./understanding-DfRbhbts.js";import{smartTitleOf as bt,displayTitle as De}from"./smart-title-D4OiN3sb.js";import{s as vt}from"./transcript-match-pp9MpgYC.js";import{c as fe,d as kt}from"./context-profile-DG8nmLi_.js";import{R as oe,F as $t,b as St,a as xt}from"./prompts-DGHG7o0j.js";import{w as $e}from"./embedding-DU7qAZmo.js";import{withTranscripts as Nt}from"./transcript-pairs-Ddm01gdJ.js";const Et=280,Tt=/^\s*\[\[CHUNK\s+(\d{1,6})\]\]\s*/i;function It(e){const t=e.match(Tt);return t?{ordinal:Number(t[1]),clean:e.slice(t[0].length)}:{ordinal:null,clean:e}}const jt={strict:.02,soft:.005},Ot=2e3,At=2,Se=.62,Ct=new Set(["what","which","when","where","does","that","this","with","from","about","there","their","have","explain","describe","define","tell","give","show","list","mean","means","between","into","your","they","them","were","will","would","should","could","some","more","most","other","than","then","please","example","examples","difference","work","works","role","happens","lecture","slides","notes"]);function ee(e){return[...new Set(e.toLowerCase().split(/[^a-z0-9+-]+/).map(t=>t.replace(/^[-+]+|[-]+$/g,"")).filter(t=>(t.length>=4||/\d/.test(t)||/\+/.test(t))&&!Ct.has(t)))].slice(0,8)}function V(e){const t=ee(e);if(t.length<2)return null;const n=t.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return new RegExp(`\\b${n.join("[\\s#.:-]*(?:no\\.?\\s*)?")}\\b`,"i")}function Rt(e,t,n){const s=e.replace(/\s+/g," ");if(s.length<=n)return s;const o=V(t)?.exec(s),i=o?null:ee(t).filter(c=>!/^\d+$/.test(c)).map(c=>s.toLowerCase().indexOf(c)).filter(c=>c>=0).sort((c,u)=>c-u)[0],a=o?.index??i??0,r=Math.max(0,Math.min(a-Math.floor(n/3),s.length-n));return`${r>0?"…":""}${s.slice(r,r+n)}${r+n<s.length?"…":""}`}const _t=.3;function Mt(e,t){const n=ee(e).filter(o=>!/^\d+$/.test(o));if(n.length<2)return 0;const s=t.toLowerCase();return n.filter(o=>s.includes(o)).length/n.length}const qt=2/3,Lt=.25;async function Pt(e,t,n){const s=ee(e);if(s.length===0)return[];const o=await g.chunk.findMany({where:{...t?{documentId:{in:t}}:{},OR:s.map(a=>({text:{contains:a}}))},select:{id:!0,text:!0},take:400}),i=V(e);return o.map(a=>{const r=a.text.toLowerCase(),c=s.filter(u=>r.includes(u)).length;return{id:a.id,score:c/s.length+(i?.test(a.text)?1:0)}}).filter(a=>a.score>=Math.min(1,2/s.length)).sort((a,r)=>r.score-a.score).slice(0,n).map(a=>a.id)}async function H(e,t={}){const n=await Dt(e,t);if(!t.prefer?.length||n.length<2)return n;const s=new Set(t.prefer),o=(i,a)=>n.length-a+(s.has(i.documentId)?n.length*.25:0);return n.map((i,a)=>({chunk:i,w:o(i,a)})).sort((i,a)=>a.w-i.w).map(({chunk:i})=>i)}async function Dt(e,t={}){const n=t.topK??6,s=t.rerank??j.RERANK_ENABLED,o=t.relevance??"none",i=s?Math.max(n,Math.min(j.RERANK_CANDIDATES,16)):n,a=t.documentIds?.length?await Nt(t.documentIds):void 0,[{hits:r},c]=await Promise.all([ve("vector",()=>$e.search({query:e,topK:i,documentIds:a})),s?Pt(e,a,8).catch(()=>[]):Promise.resolve([])]);if(r.length===0&&c.length===0)return[];const u=new Map(r.map(l=>[l.id,l.score])),d=(await g.chunk.findMany({where:{id:{in:[...new Set([...r.map(l=>l.id),...c])]}},include:{document:{select:{fileName:!0}}}})).map(l=>({id:l.id,documentId:l.documentId,documentName:l.document.fileName,ordinal:l.ordinal,text:l.text,tokenCount:l.tokenCount,type:fe(l.type),location:{page:l.page??void 0,pageStart:l.pageStart??void 0,pageEnd:l.pageEnd??void 0,bbox:q(l.bbox,void 0),headingPath:q(l.headingPath,[]),charStart:l.charStart??void 0,charEnd:l.charEnd??void 0},score:u.get(l.id)??0,vectorScore:u.get(l.id)??0,createdAt:l.createdAt.toISOString()})).sort((l,w)=>w.score-l.score),f=()=>{const l=d.filter(w=>u.has(w.id));return(o==="strict"?l.filter(w=>w.score>=Se):l).slice(0,n)};if(!s||d.length<=1)return f();const y=()=>{const l=new Map(r.map((v,k)=>[v.id,k])),w=new Map(c.map((v,k)=>[v,k])),m=V(e),h=v=>(l.has(v.id)?1/(60+l.get(v.id)):0)+(w.has(v.id)?1/(60+w.get(v.id)):0)+(m?.test(v.text)?1:0),b=[...d].sort((v,k)=>h(k)-h(v));return(o==="strict"?b.filter(v=>v.score>=Se||w.has(v.id)):b).slice(0,n)};try{const l=d.map(k=>({id:k.id,text:`${k.location.headingPath?.length?`${k.location.headingPath.join(" › ")}: `:""}${Rt(k.text,e,480)}`})),w=await ve("rerank",()=>Promise.race([$e.rerank({query:e,passages:l}),new Promise(k=>setTimeout(()=>k(null),Ot))]));if(!w)return re("rerankTimedOut"),y();const{results:m}=w,h=new Map(d.map(k=>[k.id,k])),b=V(e),v=m.flatMap(k=>{const $=h.get(k.id);if(!$)return[];const I=a?Mt(e,$.text):0,S=b?.test($.text)?_t:I>=qt?Lt*I:0,rt=Math.max(k.score,S);return[{...$,score:$.score||k.score,rerankScore:rt,priorRank:k.priorRank}]}).sort((k,$)=>($.rerankScore??0)-(k.rerankScore??0));if(v.length>0){if(o==="none")return v.slice(0,n);const k=jt[o],$=v.filter(S=>(S.rerankScore??0)>=k),I=o==="soft"?At:0;return($.length>=I?$:v.slice(0,I)).slice(0,n)}}catch(l){console.warn(`rerank unavailable, falling back to fused order: ${l.message}`)}return y()}function Ft(e){return e.replace(/\s*\[(?:(?:student|your|my|the|library|open|week(?:ly)?|files?|list)\s*)*(?:schedule|timetable|calendar|library|files|to-?dos?|week)(?:\s+(?:block|files?|list|for\s+week\s*\d+))?\]/gi,"")}function Wt(e){return e.replace(/\s*\[[^\]\n]*?\.(?:pdf|docx?|pptx?|txt|md|epub|html?)\b[^\]\n]*\]/gi,"")}function zt(e){return e.replace(/\[(\d{1,3})\s*[-–—]\s*(\d{1,3})\]/g,(t,n,s)=>{const o=Number(n),i=Number(s);return i<=o||i-o>12?t:Array.from({length:i-o+1},(a,r)=>`[${o+r}]`).join("")}).replace(/\[(\d{1,3}(?:\s*,\s*\d{1,3})+)\]/g,(t,n)=>n.split(",").map(s=>`[${s.trim()}]`).join(""))}function Ut(e,t){return e.split(/(```[\s\S]*?```)/g).map((n,s)=>s%2===1?n:t(n)).join("")}function P(e){return Ut(e,t=>{const n=Wt(Ft(t)).replace(/[[【［]\s*(\d{1,3})\s*[\]】］]/g,"[$1]");return zt(n)})}function Kt(e,t){const n=new Set,s=e.replace(/```[\s\S]*?```/g," ");for(const o of s.matchAll(/\[(\d+)\]/g)){const i=Number(o[1]);i>=1&&i<=t&&n.add(i)}return[...n].sort((o,i)=>o-i)}function J(e,t){return Kt(e,t.length).map(n=>{const s=t[n-1];return{marker:n,chunkId:s.id,documentId:s.documentId,documentName:s.documentName,page:s.location.page,snippet:s.text.slice(0,Et).trim(),score:s.score}})}async function ae(e,t,n,s){const o=await g.chatMessage.create({data:{sessionId:e,role:"assistant",content:t,provider:s.provider,model:s.model,promptTokens:s.promptTokens,completionTokens:s.completionTokens,latencyMs:s.latencyMs,usedFallback:s.usedFallback,citations:{create:n.map(i=>({chunkId:i.chunkId,marker:i.marker,score:i.score,snippet:i.snippet}))}}});return await g.chatSession.update({where:{id:e},data:{updatedAt:new Date}}),o}const Bt=`You also know the student's own schedule, given below under STUDENT SCHEDULE.
It comes from their timetable, calendar and to-do list and is authoritative for
what happens when. Refer to it as "your schedule" or "your timetable" — it has
no passage number: never write a bracket for it — not [Student Schedule], not
[schedule], nothing — plain words only. For a question about today,
tomorrow or the week: (1) list the classes and due items from the schedule with
their times, in order; (2) for each class, say what to prepare — the file the
schedule names for this week, or the reading, chapter or topic the syllabus
assigns — and teach its main points so the student walks in ready, citing the
passages by their numbers only (never a file name in brackets); (3) if nothing
names a preparation for that class, say so rather than guessing; (4) end with
the open to-dos that are relevant. Times in the schedule are the student's
local time; write every time the way it is given there — "10:30 am",
"5 pm", "9:30 pm" — never as 24-hour "17:00".`,Ht=/\b(everything|all (?:the|of the|my)|entire|whole|complete(?:ly)?|in detail|detailed|thorough(?:ly)?|summari[sz]e|summary|outline|overview|go (?:over|through)|walk me through|cover|list (?:all|every)|every(?:thing)?)\b/i;function Jt(e){return Ht.test(e)}const Qt=4;async function Yt(e,t,n){const s=e?.length?e:t?[t]:null;return!s||s.length>Qt?null:Fe(s,n)}async function Fe(e,t){const n=await qe(e,t,j.CHAT_CONTEXT_TOKENS);if(n.rows.length===0)return null;const s=[...new Set(n.rows.map(i=>i.document.fileName))].join(", "),o=n.complete?`The passages below are ${s} in full (${n.total} passages, in order).`:`The passages below are ${n.rows.length} of ${n.total} passages of ${s}: every passage matching the question (${n.matched}) plus as much of the rest, in order, as fits. Say so if something you would expect seems to be missing.`;return{chunks:n.rows.map(We),note:o}}function We(e){return{id:e.id,documentId:e.documentId,documentName:e.document.fileName,ordinal:e.ordinal,text:e.repairedText??e.text,tokenCount:e.tokenCount,type:fe(e.type),location:{page:e.page??void 0,pageStart:e.pageStart??void 0,pageEnd:e.pageEnd??void 0,bbox:q(e.bbox,void 0),headingPath:q(e.headingPath,[]),charStart:e.charStart??void 0,charEnd:e.charEnd??void 0},score:1,createdAt:e.createdAt.toISOString()}}async function ze(e){const t=e.sessionId?await g.chatSession.findUniqueOrThrow({where:{id:e.sessionId}}):await g.chatSession.create({data:{title:e.question.slice(0,60),documentIds:JSON.stringify(e.documentIds??[]),profileId:e.profileId??null}}),n=e.documentIds;e.sessionId&&await g.chatSession.update({where:{id:t.id},data:{documentIds:JSON.stringify(n??[])}}),await g.chatMessage.create({data:{sessionId:t.id,role:"user",content:e.question}});const{ordinal:s,clean:o}=It(e.question);let i=[],a,r=[],c=null;if(e.contextProfileId){const h=await kt(e.contextProfileId,o||e.question);h&&(r=h.contextChunks,i=h.gaps,a=h.stats)}if(r.length===0){const h=o||e.question,b=e.retrievalQuery?.trim()||(e.followFrom?`${e.followFrom} ${h}`:h);if(e.retrievalQuery?.trim())r=await H(b,{documentIds:n,topK:e.topK??j.CHAT_TOP_K,relevance:"soft"});else{const v=await lt(b,n),k=v.length?await Fe(v.map($=>$.id),b):Jt(b)?await Yt(n,e.activeDocumentId??null,b):null;k?(r=k.chunks,c=k.note):r=await H(b,{documentIds:n,topK:e.topK??j.CHAT_TOP_K,relevance:"soft",prefer:n?void 0:e.preferDocumentIds})}}const u=await ht(e.profileId),p=mt(e.question);if(u&&p){const h=u.todaysCourses.length?u.todaysCourses:u.weeksCourses,b=new Set(r.map($=>$.id)),k=new Date().toLocaleDateString("en-US",{month:"long",day:"numeric"});for(const $ of h.slice(0,5)){const I=await H(`${$} schedule ${u.week?`week ${u.week}`:"this week"} ${k} topic readings prepare before lecture`,{documentIds:n,topK:4,relevance:"strict"});for(const S of I)b.has(S.id)||(b.add(S.id),r.push(S))}for(const $ of u.weekFiles){const I=await g.chunk.findMany({where:{documentId:$.documentId},orderBy:{ordinal:"asc"},take:4,include:{document:{select:{fileName:!0}}}});for(const S of I)b.has(S.id)||(b.add(S.id),r.push(We(S)))}}const d=e.activeDocumentId??(n?.length===1?n[0]:void 0);if(s!==null&&d){const h=await g.chunk.findFirst({where:{documentId:d,ordinal:s},include:{document:{select:{fileName:!0}}}});h&&(r=[{id:h.id,documentId:h.documentId,documentName:h.document.fileName,ordinal:h.ordinal,text:h.text,tokenCount:h.tokenCount,type:fe(h.type),location:{page:h.page??void 0,pageStart:h.pageStart??void 0,pageEnd:h.pageEnd??void 0,bbox:q(h.bbox,void 0),headingPath:q(h.headingPath,[]),charStart:h.charStart??void 0,charEnd:h.charEnd??void 0},score:1,createdAt:h.createdAt.toISOString()},...r.filter(v=>v.id!==h.id)].slice(0,e.topK??6))}const y=(await g.chatMessage.findMany({where:{sessionId:t.id},orderBy:{createdAt:"desc"},take:e.systemExtra?3:8,select:{role:!0,content:!0}})).reverse().slice(0,-1).map(h=>({role:h.role,content:h.content})),l=u?p?`${oe}

${Bt}

STUDENT SCHEDULE:
${u.text}`:`${oe}

${u.text.split(`
`)[0]} This question is about the material, not the
student's timetable: answer it directly and do not list their classes,
due dates or to-dos unless they ask.`:oe,w=e.systemExtra?`${$t}

${e.systemExtra}`:l,m=e.memoryNote?`${w}

${e.memoryNote}`:w;return{session:t,chunks:r,gaps:i,contextStats:a,messages:[{role:"system",content:m},...y,{role:"user",content:St(e.promptOverride??(s!==null?`${o}

(The student is reading passage [1] and is asking about it.)`:e.question),r,c)}]}}const Gt=24e3;function Ue(e,t){return e.preferProvider&&t.reduce((s,o)=>s+o.content.length,0)<Gt?e.preferProvider:void 0}async function*vs(e,t){re("routed");const{session:n,chunks:s,messages:o,gaps:i,contextStats:a}=await ze(e);re("retrieved");let r="",c=0,u;try{for await(const w of dt({messages:o,temperature:.2,maxTokens:j.CHAT_ANSWER_TOKENS,stream:!0,prefer:Ue(e,o)},t)){if(w.usage&&(u=w.usage),w.done)break;r+=w.delta;const m=J(P(r),s),h=m.length>c;h&&(c=m.length),yield{delta:w.delta,done:!1,...h?{citations:m}:{}}}}catch(w){if(t?.aborted){if(r.trim()){const m=`${P(r)}

_[stopped]_`,h=J(m,s),b=await ae(n.id,m,h,{provider:"groq",model:"aborted",promptTokens:0,completionTokens:0,latencyMs:0,usedFallback:!1});yield{delta:"",done:!0,content:m,citations:h,messageId:b.id,sessionId:n.id}}return}yield{delta:"",done:!0,error:w.message,sessionId:n.id};return}const d=t?.aborted??!1?`${P(r)}

_[stopped]_`:P(r),f=J(d,s),y=u??{provider:"groq",model:"unknown",promptTokens:0,completionTokens:0,latencyMs:0,usedFallback:!1},l=await ae(n.id,d,f,y);yield{delta:"",done:!0,content:d,citations:f,messageId:l.id,sessionId:n.id,usage:y,meter:ut(),contextChars:o.reduce((w,m)=>w+m.content.length,0),...i.length>0?{gaps:i}:{},...a?{contextStats:a}:{}}}async function ks(e){const{session:t,chunks:n,messages:s,gaps:o,contextStats:i}=await ze(e),a=await ct({messages:s,temperature:.2,maxTokens:j.CHAT_ANSWER_TOKENS,prefer:Ue(e,s)}),r=P(a.text),c=J(r,n),u=await ae(t.id,r,c,a.usage);return{sessionId:t.id,message:{id:u.id,sessionId:t.id,role:"assistant",content:u.content,citations:c,usage:a.usage,createdAt:u.createdAt.toISOString()},gaps:o,contextStats:i}}const L=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Vt(e,t){const n=L(e).split(" "),s=L(t);if(!s)return 0;for(let o=n.length;o>=1;o-=1){const i=n.slice(0,o).join(" ");if(i===s)return i.length+100;if(o===1&&i.length>=3&&s.split(" ")[0]===i)return i.length+50;const a=s.split(" ")[0];if(o===1&&i.length>=4&&i.length<=a.length&&(a.startsWith(i)||i.length>=5&&pe(i,a,1)<=1))return i.length+40}return 0}async function Ke(e){if(!e.trim())return null;const t=await g.libraryFolder.findMany({select:{id:!0,name:!0,parentId:!0}});let n=null;for(const c of t){const u=Vt(e,c.name);u>(n?.score??0)&&(n={id:c.id,name:c.name,score:u})}if(!n)return null;const s=new Set([n.id]);for(let c=!0;c;){c=!1;for(const u of t)u.parentId&&s.has(u.parentId)&&!s.has(u.id)&&(s.add(u.id),c=!0)}const o=await g.document.findMany({where:{folderId:{in:[...s]},status:"ready"},select:{id:!0}});if(o.length===0)return null;const i=e.trim().split(/\s+/),a=L(n.name).split(" ").length,r=n.score>=100?a:1;return{folderId:n.id,name:n.name,documentIds:o.map(c=>c.id),rest:i.slice(r).join(" ")}}const Be=new Set(["lecture","lectures","week","part","unit","module","chapter","lab","notes","slides","reading","readings","syllabus","outline","course","class","exam","midterm","final","the","and","for","intro","introduction","essentials","template","students","fall","winter","summer"]);function xe(e){const t=L(e.replace(/([a-z])(\d)/gi,"$1 $2").replace(/(\d)([a-z])/gi,"$1 $2")).split(" ").filter(Boolean),n=[];return t.forEach((s,o)=>{if(/^\d{4}$/.test(s)){n.push(s);const i=t[o-1];i&&/^[a-z]{2,}$/.test(i)&&!Be.has(i)&&n.push(i)}}),n}async function $s(e){const t=L(e.replace(/([a-z])(\d)/gi,"$1 $2").replace(/(\d)([a-z])/gi,"$1 $2")).split(" ").filter(Boolean),n=t.filter(m=>m.length>=2);if(n.length===0)return null;const[s,o]=await Promise.all([g.libraryFolder.findMany({select:{id:!0,name:!0,parentId:!0}}),g.document.findMany({where:{status:"ready",folderId:{not:null}},select:{id:!0,fileName:!0,meta:!0,folderId:!0}})]),i=new Map(s.map(m=>[m.id,m])),a=m=>{let h=i.get(m);for(let b=0;h?.parentId&&b<64;b+=1)h=i.get(h.parentId)??h;return h?.id??m},r=new Map,c=new Set,u=(m,h,b)=>{m.length<2||Be.has(m)||(r.set(m,(r.get(m)??new Set).add(h)),b&&c.add(m))};for(const m of s)if(!m.parentId){for(const h of L(m.name).split(" "))(!/^\d+$/.test(h)||h.length===4)&&u(h,m.id,!1);for(const h of xe(m.name))u(h,m.id,!0)}for(const m of o){const h=a(m.folderId),{label:b}=bt(m);for(const v of xe(`${m.fileName} ${b??""}`))u(v,h,!0)}const p=new Set,d=new Set;let f=!1;for(const m of n)for(const[h,b]of r)b.size!==1||!(m===h||m.length>=5&&h.length>=5&&!/\d/.test(m)&&pe(m,h,1)<=1)||(p.add([...b][0]),d.add(m),f||=c.has(h));if(p.size===0)return null;const y=new Set(p);for(let m=!0;m;){m=!1;for(const h of s)h.parentId&&y.has(h.parentId)&&!y.has(h.id)&&(y.add(h.id),m=!0)}const l=o.filter(m=>y.has(m.folderId)).map(m=>m.id);if(l.length===0)return null;const w=t.filter(m=>!d.has(m)).join(" ");return{folderIds:[...p],names:[...p].map(m=>i.get(m).name),documentIds:l,rest:w,byCode:f}}const z=["A","B","C","D"];function Xt(e){const t=/\b(scenarios?|cases?|clinical|vignettes?|exam[- ]style|exam|applied|application)\b/gi,n=/\b(concepts?|definitions?|recall|terms?|basics?)\b/gi;return t.test(e)?{style:"scenario",rest:e.replace(t," ").replace(/\s+/g," ").trim()}:n.test(e)?{style:"concept",rest:e.replace(n," ").replace(/\s+/g," ").trim()}:{style:"mix",rest:e}}function Zt(e,t){return e==="concept"?"concept":e==="scenario"?"scenario":t%3===2?"concept":"scenario"}function ce(){return{asked:0,correct:0,answered:0,current:null,queue:[],recent:[],usedChunks:[],results:[]}}function He(e,t,n=Math.random){const s=[e,...t.slice(0,3)];for(let o=s.length-1;o>0;o-=1){const i=Math.floor(n()*(o+1));[s[o],s[i]]=[s[i],s[o]]}return{options:s,answer:s.indexOf(e)}}function en(e){const t=e.options[e.answer],n=e.options.filter((o,i)=>i!==e.answer),s=He(t,n);return{...e,...s,revisit:!0,id:`${e.id}~`}}function de(e,t){const n={id:e.id,number:t,scenario:e.scenario??null,question:e.question,options:e.options,lecture:e.documentName?x(e.documentName):null,revisit:!!e.revisit};return`\`\`\`quiz
${JSON.stringify(n)}
\`\`\``}function Ne(e,t,n){const s={id:e.id,answer:e.answer,chosen:n,outcome:t};return`\`\`\`quiz-result
${JSON.stringify(s)}
\`\`\``}const tn=/^\s*(?:(?:is\s+it|it'?s|it\s+is|i\s+think(?:\s+it'?s)?|i'?d\s+say|answer(?:\s+is)?|option|maybe|probably|my\s+answer\s+is)\s*[:\-]?\s*)?\(?([a-d])\)?\s*[.?!]*\s*$/i,nn=/^\s*(?:i\s+)?(?:don'?t|do\s+not|dont|dunno)\s+know\b|^\s*idk\b|^\s*no\s+(?:idea|clue)\b|^\s*not\s+sure\b|^\s*(?:skip|pass)\b|^\s*\?+\s*$|^\s*(?:i\s+)?(?:have\s+)?no\s+idea\b|^\s*i\s+forgot\b/i,sn=/\?\s*$|^\s*(?:what|why|how|when|where|which|who|whats|what's|can\s+you|could\s+you|would\s+you|explain|tell\s+me|remind\s+me|define|is\s+there|does|do\s+you|what\s+does)\b/i;function on(e,t){const n=e.trim(),s=n.match(tn);if(s)return{kind:"choice",index:z.indexOf(s[1].toUpperCase())};const o=n.match(/^\(?([a-d])\)?\s*[.):—–-]\s+(.+)$/is);if(o){const a=z.indexOf(o[1].toUpperCase()),r=t.options[a]?.trim().toLowerCase()??"",c=o[2].trim().toLowerCase();if(r&&(c===r||r.startsWith(c.slice(0,24))))return{kind:"choice",index:a}}const i=t.options.findIndex(a=>a.trim().toLowerCase()===n.toLowerCase());return i>=0?{kind:"choice",index:i}:nn.test(n)?{kind:"unknown"}:sn.test(n)?{kind:"asking"}:{kind:"free"}}function Ee(e,t){const n=[...e];for(let s=n.length-1;s>0;s-=1){const o=Math.floor(Math.random()*(s+1));[n[s],n[o]]=[n[o],n[s]]}return n.slice(0,t)}async function rn(e,t,n,s){if(t.length>0){const r=await g.chunk.findMany({where:{documentId:{in:t}},select:{id:!0,text:!0,repairedText:!0,documentId:!0,document:{select:{fileName:!0}}}});let c=r.filter(d=>!e.usedChunks.includes(d.id)&&(d.repairedText??d.text).length>200);const u=n.toLowerCase().match(/[a-z]{4,}/g)??[],p=u.length?c.filter(d=>u.some(f=>(d.repairedText??d.text).toLowerCase().includes(f))):[];return p.length>=4&&(c=p),c.length<4&&(e.usedChunks=[],c=r),Ee(c,5).map(d=>({id:d.id,text:d.repairedText??d.text,documentId:d.documentId,documentName:d.document.fileName}))}const o=[n,...s].filter(Boolean).join(" ")||"key concepts",i=await H(o,{topK:14}),a=i.filter(r=>!e.usedChunks.includes(r.id));return Ee(a.length>=4?a:i,5).map(r=>({id:r.id,text:r.text,documentId:r.documentId,documentName:r.documentName}))}const an=G({scenario:N().max(1200).nullish(),question:N().min(8).max(500),correct:N().min(1).max(300),wrong:W(N().min(1).max(300)).length(3),explanation:N().min(8).max(700),concept:N().min(2).max(80),source:_e().int().min(1).max(10)}),cn=`You write one multiple-choice question for a student, from their course
material. Reply with JSON only:

{"question": string, "correct": string, "wrong": [string, string, string],
 "explanation": string, "concept": string, "source": number}

- question: answerable from the numbered PASSAGES alone, at the level of the
  course's own exams. Test understanding — a mechanism, a consequence, a
  comparison — rather than a word that merely appears in a slide. Phrase it
  so it can be answered WITHOUT seeing the options, because the student may
  answer in writing: "What does the first-pass effect do to an oral drug's
  bioavailability, and why?" — never "Which of the following…".
- correct: the right answer, one short line.
- wrong: three wrong answers a student who half-knows the topic would find
  believable: the same length and style as the right one, each wrong for a
  reason. Never "all of the above", "none of the above", or a joke option.
- Do not letter or number the options; they are shuffled after you write
  them.
- explanation: one or two sentences on why the right answer is right, in
  your own words — never "see passage 2" or any passage number; the student
  never sees the passages' numbers.
- concept: the concept tested, two to five words, in the course's terms.
- source: the number of the passage the question comes from.

When a point listed under STILL TO REFINE fits the passages, test that —
it is what the student most needs practice on. Never repeat, or closely
rephrase, a question under ALREADY ASKED.`,dn=`THIS QUESTION IS A SCENARIO, written like an exam case. Add to the JSON:
 "scenario": string

- scenario: 2 to 4 sentences describing a realistic situation that can only be
  worked out with the concepts in the PASSAGES. For a health science (pathology,
  pharmacology, physiology, microbiology, anatomy…) make it a patient: age and
  sex, what they present with, the findings, lab values with units, drugs and
  doses, timeline. For any other subject make it an experiment, a dataset, a
  lab result, a worked problem or a real-world situation (e.g. two sequences
  and a scoring scheme; a program's output; an observation in the field),
  with no patient-style details (no age or sex) unless the subject is health.
  Use the lecture's real numbers, terms and mechanisms; invent only the
  person or the setting, never a fact the passages do not support.
- The scenario must NOT name the condition, the mechanism or the answer: the
  student works it out from the findings.
- question: asks them to APPLY the lecture to the case: predict what happens
  next, explain a finding, identify the process or condition, choose the best
  next step or drug, or interpret a result. One clear question about THIS case
  ("What best explains her rising potassium?"), never a definition.
- correct and wrong: answers about this case, each a plausible line of
  reasoning; the wrong ones are what a student who half-knows the lecture
  would pick.
- explanation: walk from the case's findings to the answer in one or two
  sentences, naming the lecture's concept.`,un='THIS QUESTION IS A CONCEPT QUESTION: no scenario. Return "scenario": null.';async function ln(e){const t=e.kind??"concept",n=e.passages.map((c,u)=>`[${u+1}] (${c.documentName})
${c.text.slice(0,1400)}`).join(`

---

`),s=[e.refine.length?`STILL TO REFINE:
${e.refine.map(c=>`- ${c}`).join(`
`)}`:"",e.recent.length?`ALREADY ASKED:
${e.recent.map(c=>`- ${c}`).join(`
`)}`:"",e.howTheyLikeIt?`HOW THE STUDENT WANTS TO BE QUIZZED:
${e.howTheyLikeIt}`:""].filter(Boolean).join(`

`),{value:o}=await me({messages:[{role:"system",content:`${cn}

${t==="scenario"?dn:un}`},{role:"user",content:`PASSAGES:

${n}${s?`

${s}`:""}`}],temperature:.6,maxTokens:1800,prefer:"groq",reasoning:"low"},c=>an.parse(c)),i=e.passages[o.source-1]??e.passages[0],a=He(o.correct.trim(),o.wrong.map(c=>c.trim())),r=t==="scenario"&&o.scenario?.trim()||void 0;return{id:Math.random().toString(36).slice(2,10),...r?{scenario:r}:{},question:o.question.trim(),...a,explanation:o.explanation.trim(),concept:o.concept.trim(),documentId:i?.documentId??null,documentName:i?.documentName??null}}async function hn(e,t){const n=await rn(e,t.documentIds,t.topic,t.refine);if(n.length===0)throw new Error("There is nothing in your library to quiz you on yet.");const s=await ln({passages:n,refine:t.refine,recent:e.recent,howTheyLikeIt:t.howTheyLikeIt,kind:Zt(e.style,e.asked)});return e.usedChunks.push(...n.map(o=>o.id)),e.usedChunks=e.usedChunks.slice(-200),s}const mn=G({correct:Me(),closest:_e().int().min(1).max(4).nullable().optional(),got:W(N().max(240)).max(4).default([]),missing:W(N().max(240)).max(4).default([])});async function pn(e,t){const n=e.options.map((i,a)=>`${a+1}. ${i}`).join(`
`),{value:s}=await me({messages:[{role:"system",content:`A student answered a quiz question in their own words, and may have
explained their reasoning. Judge it against the correct option. Reply with
JSON only:

{"correct": boolean, "closest": 1-4 or null, "got": string[], "missing": string[]}

- correct: their answer means the same as the correct option. Accept other
  wording of the right idea; do not accept a vaguer statement that would
  also fit a wrong option.
- closest: the option their answer amounts to, or null.
- got: each specific point in their answer or reasoning that is right, as
  a short phrase. Empty if none.
- missing: each specific point that is missing or wrong in their answer or
  reasoning, named as the idea itself. Empty if it is complete.`},{role:"user",content:`${e.scenario?`CASE: ${e.scenario}

`:""}QUESTION: ${e.question}

OPTIONS:
${n}

CORRECT OPTION: ${e.answer+1}

THE STUDENT WROTE: ${t.slice(0,1e3)}`}],temperature:0,maxTokens:500,prefer:"groq",reasoning:"low"},i=>mn.parse(i)),o=[s.got.length?`**✓ You've got:** ${s.got.join("; ")}`:"",s.missing.length?`**↻ To refine:** ${s.missing.join("; ")}`:""].filter(Boolean);return{correct:s.correct,chosen:s.closest?s.closest-1:null,note:o.join(`  
`),got:s.got,missing:s.missing}}function fn(e,t,n,s=""){const o=`**${z[e.answer]}.** ${e.options[e.answer]}`,i=e.explanation;if(t==="correct")return`✓ **Correct** — ${o}

${s?`${s}

`:""}${i}`;if(t==="unknown")return`**The answer is** ${o}

${i}

_That one will come back in a few questions._`;const a=n!==null&&n!==e.answer?`

You chose **${z[n]}.** ${e.options[n]}`:"";return`✗ **Not quite — the answer is** ${o}${a}

${s?`${s}

`:""}${i}

_That one will come back in a few questions._`}async function wn(e,t,n=null){const s=(e.explanation.split(/(?<=[.!?])\s/)[0]??e.explanation).slice(0,200);try{await pt({concept:e.concept,understood:n?.got.length?n.got:t?[s]:[],refine:n?.missing.length?n.missing:t?[]:[s],score:t?1:0,documentId:e.documentId,documentName:e.documentName})}catch(o){console.warn(`quiz: could not remember a result: ${o.message}`)}}const gn=3;function ie(e,t,n){const s=t.id.replace(/~+$/,"");e.queue=e.queue.filter(o=>o.question.id.replace(/~+$/,"")!==s),e.queue.push({question:t,dueAt:e.asked+gn,reason:n})}function yn(e){const t=e.trim().match(/^\/([a-z][a-z0-9_-]{0,31})\b[ \t]*([\s\S]*)$/i);return t?{keyword:t[1].toLowerCase(),rest:t[2].trim()}:null}function bn(e,t){const n=e.length>=7?2:e.length>=3?1:0;return t.map(s=>({keyword:s,d:e.length>=3&&s.startsWith(e)?0:n?pe(e,s,n):n+1})).filter(s=>s.d<=n).sort((s,o)=>s.d-o.d).slice(0,3).map(s=>s.keyword)}function vn(e){const t=e.trim().match(/^(?:(?:can|could|would) you |please |pls |ok |okay )*(?:quiz|test) me(?:\s+(?:on|about|over|in|with|from))?\b\s*([\s\S]*)$/i);return t?{keyword:"quiz",rest:t[1].split(/[:\n]/)[0].replace(/\b(please|pls|now|again)\b/gi," ").replace(/[?.!]+$/,"").replace(/\s+/g," ").trim()}:null}const Te=[{keyword:"skim",title:"Skim a lecture",description:"Objectives first, then your keywords, then the concept — one at a time. One lecture or several: /skim pharmacodynamics I and II.",instructions:"",position:10},{keyword:"teach",title:"Teach me a lecture",description:"A guided lesson through everything a lecture asks you to know, section by section, around one real-life case. One lecture or several: /teach pharmacodynamics I and II.",instructions:"",position:12},{keyword:"calendar",title:"Add to the calendar",description:"Put something on your calendar exactly as you say it, no guessing: /calendar PATH quiz Friday 2pm. Move, rename or delete too: /calendar move my PHYS midterm to Nov 13.",instructions:"",position:4},{keyword:"cases",title:"Practise with cases",description:"Exam-style cases from your lectures, one learning objective at a time: answer in your own words, get feedback, and keep going. A lecture, several, or a whole course: /cases pathology.",instructions:"",position:14},{keyword:"objectives",title:"Show the objectives",description:"Learning objectives, grouped — /objectives <lecture>, several (week 1-3, PD I & II), or where you are in a skim.",instructions:"",position:20},{keyword:"next",title:"Next objective",description:"Skip ahead without finishing this one.",instructions:"",position:30},{keyword:"back",title:"Previous objective",description:"Go back to the objective before this one.",instructions:"",position:40},{keyword:"stop",title:"End the run",description:"Stop the framework and go back to ordinary questions.",instructions:"",position:50},{keyword:"tidy",title:"Tidy the calendar",description:'Find duplicates and vague entries ("Quiz 2" — which course?) and fix them in one go.',instructions:"",position:55},{keyword:"review",title:"What to review",description:"The units and concepts your answers say need work, weakest first.",instructions:"",position:57},{keyword:"commands",title:"List commands",description:"Every keyword you can type, including your own.",instructions:"",position:60},{keyword:"quiz",title:"Quiz me",description:"Multiple choice, marked at once; what you miss or skip comes back until you get it.",instructions:`Run a quiz, do not lecture.

Ask ONE question at a time, in the style of the course's own assessments, on
the material in the passages. Number it. Then stop and wait — do not answer it
yourself in the same message.

When the student's next message is an attempt, mark it first: say what was
right, what was missing, and the one thing that would have earned the mark.
Keep the marking under 120 words, cite the passage the answer comes from, and
then ask the next question.`,position:70},{keyword:"diagram",title:"Draw it",description:"A graph or diagram of a concept, drawn for you — curves, processes, B+ trees, joins and unions.",instructions:`Draw what the student named as ONE figure, then explain it.

Choose the kind that shows it best: a plot for anything that changes with
time or with another quantity, bars to compare a few values, steps for a
process in order; for computer science, a tree (B+ tree, BST, heap), a
relational figure (tables in, operator, table out) or a Venn diagram, with
frames to step through an operation. Then, under the figure, explain what it shows in under
150 words, cited from the passages — what each curve, bar or step means,
and the one thing to notice.

${xt}`,position:75},{keyword:"eli5",title:"Explain simply",description:"The concept in plain words and an everyday analogy, then the proper terms.",instructions:`Explain it as you would to someone who has never taken the course.

Plain words and short sentences first, with one everyday analogy that actually
maps onto the mechanism. Then a short "**In the course's words**" section that
gives the proper terminology for each piece you just described, cited. Say
where the analogy breaks down. Under 300 words.`,position:80}],kn=new Set(["skim","teach","cases","quiz","tidy","review","objectives","next","back","stop","commands"]);function $n(e,t){const n=s=>s.trim().split(`
`)[0].trim();return e.title===t.title&&n(e.instructions)===n(t.instructions)}async function ue(){const e=await g.studyCommand.findMany(),t=new Set(e.map(s=>s.keyword)),n=Te.filter(s=>!t.has(s.keyword));n.length>0&&await g.studyCommand.createMany({data:n.map(s=>({...s,builtin:!0}))});for(const s of e){const o=Te.find(i=>i.keyword===s.keyword);!s.builtin||!o||$n(s,o)&&(s.description===o.description&&s.instructions===o.instructions||await g.studyCommand.update({where:{id:s.id},data:{description:o.description,instructions:o.instructions}}))}return g.studyCommand.findMany({orderBy:[{position:"asc"},{keyword:"asc"}]})}async function Je(e){return await ue(),g.studyCommand.findUnique({where:{keyword:e}})}function C(e){try{const t=JSON.parse(e.objectives);return Array.isArray(t)?t:[]}catch{return[]}}function E(e){try{const t=JSON.parse(e.documentIds);return Array.isArray(t)?t:[]}catch{return[]}}const Sn=G({groups:W(G({title:N().min(1).max(80),objectives:W(N().min(3).max(400)).min(1)})).min(1),derived:Me().default(!1)}),xn=`You read one lecture and return its learning objectives as JSON.

A deck states them as "learning objectives", "learning outcomes", "by the end
of this lecture you should be able to…", or a list of "you will be able to…"
bullets, usually in the first few slides and sometimes repeated per section.
Those are the objectives: return them in the lecture's own words, lightly
tidied into one sentence each. Do not invent, merge or generalise them.

If the lecture states none anywhere, write one objective per major section
yourself — start each with a verb the section actually demands ("Describe",
"Compare", "Calculate") — and set "derived" to true.

Every objective, found or written, is a sentence saying what the student
should be able to DO, and begins with a verb. Some of this material is a
transcript of the lecture being spoken, mis-heard words and all. Never
return a sentence lifted from speech or narration — "What is inflammation?",
"Let's start with the vascular phase", "Okay, so the complement system" are
not objectives, they are the teacher talking. Write what that passage
teaches the student to do instead, and set "derived" to true. Correct
obvious mis-hearings from context ("information" for "inflammation") and use
the subject's proper terms.

Then group the objectives into 2 to 6 groups of objectives that are about the
same thing, keeping the lecture's own order within and between groups. Title
each group with three or four words naming what it covers.

Return at most 24 objectives in total. Reply with JSON only:
{"derived": false, "groups": [{"title": "...", "objectives": ["...", "..."]}]}`,Nn=j.CHAT_CONTEXT_TOKENS;function En(e){return e.map(t=>`${t.page?` (p.${t.page})`:""}
${t.repairedText??t.text}`).join(`

`)}async function Tn(e,t){const{value:n}=await me({messages:[{role:"system",content:xn},{role:"user",content:`LECTURE:

${e}`}],temperature:.1,maxTokens:2e3,prefer:t},o=>Sn.parse(o)),s=[];for(const o of n.groups)for(const i of o.objectives){if(s.length>=24)break;s.push({group:o.title.trim(),text:i.trim()})}return{objectives:s,derived:n.derived}}async function Qe(e){const t=JSON.stringify(e),n=await g.studyRun.findFirst({where:{command:"skim",documentIds:t},orderBy:{createdAt:"desc"}});if(!n)return null;const s=C(n);return s.length===0||await g.document.findFirst({where:{id:{in:e},updatedAt:{gt:n.createdAt}},select:{id:!0}})?null:{objectives:s,derived:n.derived}}const Ye=e=>`objectives.mined.${[...e].sort().join(",")}`;async function Ge(e){const t=await g.appSetting.findUnique({where:{key:Ye(e)}});if(!t)return null;try{const n=JSON.parse(t.value);return await g.document.findFirst({where:{id:{in:e},updatedAt:{gt:new Date(n.at)}},select:{id:!0}})||n.objectives.length===0?null:{objectives:n.objectives,derived:n.derived}}catch{return null}}async function Ve(e){return await Ge(e)??await Qe(e)}async function X(e){const t=await Ge(e)??await Qe(e);if(t)return t;const n=await qe(e,"learning objectives",Nn);if(n.rows.length===0)return{objectives:[],derived:!1};const s=En(n.rows).slice(0,6e4),o=await Tn(s,s.length<Rn?A:void 0);if(o.objectives.length){const i=Ye(e),a=JSON.stringify({...o,at:new Date().toISOString()});await g.appSetting.upsert({where:{key:i},create:{key:i,value:a},update:{value:a}}).catch(()=>{})}return o}function In(e,t,n){const s=t[n];return`${n+1} of ${t.length}${s?` · ${s.group}`:""}`}function F(e,t,n){const s=t[n];return`**${In(e,t,n)}**

> ${s.text}

**First words that come to mind?** Type anything — one word is enough, and "no idea" is an answer.`}const Xe=.45,jn=.2;async function we(e,t,n,s){const o=[s.best,...s.others].filter(d=>!!(d&&d.score>=jn)),i=[...new Set([...(n?.docs??[]).map(d=>d.id),...o.map(d=>d.id)])];if(i.length===0){const d=["teach","skim","cases"].includes(e)?`, or type \`/${e}\` alone to see your lectures`:"";return`Nothing in your library looks like "${t}". Try a few words from its title or what it covers${d}.`}const a=await g.document.findMany({where:{id:{in:i}},select:{id:!0,fileName:!0,meta:!0}}),r=new Map(a.map(d=>[d.id,d])),c=[],u=(n?.docs??[]).map(d=>r.get(d.id)).filter(d=>!!d);u.length>1&&c.push(`- \`/${e} ${u.map(ke).join(" + ")}\` — all ${u.length} together`);const p=new Set;for(const d of o){const f=r.get(d.id);if(!f)continue;const y=ke(f);if(!p.has(y.toLowerCase())&&(p.add(y.toLowerCase()),c.push(`- \`/${e} ${y}\``),p.size>=4))break}return`Which lecture did you mean by "${t}"?

${c.join(`
`)}

_Click one to start it, or type the command again with more of its name._`}function On(e,t,n){return we(e,t,null,n)}async function te(e,t,n){const s=await Le(t,Xe,n);return s.docs.length===0?{found:s,ask:await On(e,t,s.single)}:s.confident?{found:s,ask:null}:{found:s,ask:await we(e,t,s,s.single)}}function An(e,t){if(t.clear)return"";const n=t.others.filter(s=>t.best&&t.best.score-s.score<.12).slice(0,2);return n.length===0?"":`

_Not the one? ${n.map(s=>`\`/${e} ${x(s.fileName)}\``).join(" or ")}_`}async function ne(e){if(e.length===1)return X([e[0].id]);const t=await Promise.all(e.map(o=>X([o.id]))),n=[];let s=!1;return t.forEach((o,i)=>{s||=o.derived;for(const a of o.objectives)n.push({group:`${x(e[i].fileName)} · ${a.group}`,text:a.text})}),{objectives:n,derived:s}}function Ze(e,t){return t>1?e?"_Where a lecture states no objectives, they are one per section. In lecture order._":"_Straight from the lectures, in their order._":e?"_This lecture states no objectives, so these are one per section, in its order._":"_Straight from the lecture, in its order._"}const T=e=>e.map(t=>t.fileName).join(" + ");function et(e,t){const n=[];return t.series&&n.push(`All ${t.docs.length} parts. For one, type \`/${e} ${x(t.docs[0].fileName)}\`.`),t.missing.length&&n.push(`Couldn't find ${t.missing.map(s=>`"${s}"`).join(", ")}.`),t.docs.length===1&&!t.series?An(e,t.single):n.length?`

_${n.join(" ")}_`:""}async function Cn(e,t){const{found:n,ask:s}=await te("objectives",e,t);if(s)return{text:s};const o=n.docs,{objectives:i,derived:a}=await ne(o);if(i.length===0)return{text:`I couldn't read any objectives out of **${T(o)}**: it may still be processing.`};const r={cursor:-1},c=Ze(a,o.length);return{text:`## Objectives — ${T(o)}

**${i.length} objectives.** ${c}${et("objectives",n)}

${ge(r,i)}

---

To work through them one at a time — your words first, then the key terms, then the concept — type \`/skim ${e}\`.`}}function ge(e,t){const n=[];let s="";return t.forEach((o,i)=>{o.group!==s&&(s=o.group,n.push(`
### ${s}`));const a=i===e.cursor?" ← you are here":"",r=i<e.cursor?"~~":"";n.push(`${i+1}. ${r}${o.text}${r}${a}`)}),n.join(`
`).trim()}const B=6,A="groq",Rn=2e4,R=`You are running a study framework the student started, not answering a
question. The instructions below replace the general rules about answer
length and shape for this turn; the rules about grounding, citing passages by
number and writing mathematics inside dollar signs still hold.`,_n=`${R}

FRAMEWORK: /skim — the student is working through one lecture's learning
objectives. They have just been shown an objective and have typed the first
words that came to mind. You are not explaining the concept yet.

Write exactly these things and nothing else:

1. What they understood and what needs refining, as two lines:
   "**✓ You've got:** " and what in their words is on target, specifically;
   "**↻ To refine:** " and the one or two ideas they are missing or have
   wrong, named. If they wrote "no idea" or anything like it, leave out the
   ✓ line and write "**↻ To refine:** all of it — a fine place to start."
   If they asked a question instead of recalling, answer it in two sentences
   first, then carry on — a student who stops to ask is still working.
2. A "**Key terms**" heading, then 3 to 6 bullets — the words a marker looks
   for in this objective. Each bullet is the term in bold, an em dash, and at
   most fifteen words saying what it means here, cited.
3. One line, starting "**The thread:**", tying those terms into a single
   sentence.
4. Exactly this line, last, on its own:
   Type anything and I'll build the whole concept.

No headings other than those. Nothing longer than two sentences anywhere.
Under 220 words in total. Do not explain the mechanism — that is the next
turn, and giving it now takes the objective away from them.`;function Mn(e,t){return`${R}

FRAMEWORK: /quiz — the student is part-way through a quiz question and has
asked you something instead of answering it.

THE QUESTION ON SCREEN: ${e}
ITS OPTIONS: ${t.map((n,s)=>`(${s+1}) ${n}`).join("  ")}

1. Answer what they asked, in under 150 words, cited from the passages.
2. Do NOT say, hint at or rule out which option is correct. Explain the idea
   they asked about; leave choosing the answer to them.
3. Stop there. Do not repeat the question; it is put back on screen for them.`}function qn(e){return`${R}

FRAMEWORK: /skim — the student was shown an objective, gave their own words
for it, and has been given the key terms. Now build the concept.

Write:

1. A "## " heading naming the concept.
2. The concept itself, in three or four short paragraphs. Start from what the
   student already had right, add one idea per paragraph, and end where the
   objective says they should be able to stand. Use the key terms you just
   gave them, in bold on first use. Cite the passages.
3. A "**In one line**" sentence they could write in an exam.
4. A horizontal rule, then the block below copied out exactly as it is
   written, and nothing after it.

Under 350 words before the rule. No preamble, no "great question", no recap
of what they typed. If their message asked something, answer it as part of
the explanation rather than separately.

THE BLOCK TO COPY VERBATIM:

${e}`}function Ie(e,t,n,s,o){return`OBJECTIVE ${t+1} of ${n} (group: ${e.group}):
${e.text}

THE STUDENT'S OWN WORDS FOR IT:
${s||"(they did not write any)"}

${o==="keywords"?"Give them the key terms for this objective.":"Now build the whole concept for this objective."}`}function Ln(e,t,n){const s=n+1;return s>=t.length?`**That was the last objective — ${t.length} of ${t.length}.**

You have been through every objective in ${e.documentName}. Ask me anything about it, or start another lecture with \`/skim\`.`:`${t[s].group!==t[n].group?`### ${t[s].group}

`:""}${F(e,t,s)}`}async function Ss(e,t={}){const s=(await g.document.findMany({where:{id:{in:e},status:"ready",OR:[{pairedWithId:null},{pairedWithId:{notIn:e}}]},select:{id:!0,fileName:!0,meta:!0},orderBy:{createdAt:"asc"}})).filter(r=>!/syllabus|course outline|course information|course schedule/i.test(r.fileName)).filter((r,c,u)=>!u.slice(0,c).some(p=>vt(p.fileName,r.fileName))),o=await g.document.findMany({where:{pairedWithId:{in:s.map(r=>r.id)},status:"ready"},select:{id:!0,pairedWithId:!0}}),i=new Array(s.length).fill(null);let a=0;return await Promise.all([0,1].map(async()=>{for(;a<s.length;){const r=a++,c=s[r].id;if(t.cachedOnly){i[r]=await Ve([c]);continue}i[r]=await X([c]).catch(async()=>(await new Promise(u=>setTimeout(u,2e3)),X([c]).catch(()=>null)))}})),s.map((r,c)=>{const u=De(r),p=i[c]?.objectives??[],d=p.length?nt(p):[{title:u,objectives:[`The key terms, mechanisms and numbers of ${u}`]}];return{lecture:u,documentId:r.id,documentIds:[r.id,...o.filter(f=>f.pairedWithId===r.id).map(f=>f.id)],sections:d,mined:p.length>0}})}function O(e){try{const t=JSON.parse(e.state);return{sections:t.sections??[],story:t.story??"",check:t.check??"",noteId:t.noteId??null}}catch{return{sections:[],story:"",check:"",noteId:null}}}const tt="teach.lesson.",le=e=>`${tt}${[...e].sort().join(",")}`;async function se(){const e=await g.appSetting.findMany({where:{key:{startsWith:tt}}}),t=[];for(const n of e)try{t.push(JSON.parse(n.value))}catch{}return t.sort((n,s)=>s.updatedAt.localeCompare(n.updatedAt))}async function Pn(e){const t=await se(),n=le(e),s=t.find(r=>le(r.documentIds)===n)??t.find(r=>r.documentIds.some(c=>e.includes(c)));if(s)return s;const i=(await g.studyRun.findMany({where:{command:"teach",cursor:{gt:0}},orderBy:{updatedAt:"desc"},take:20})).find(r=>JSON.parse(r.documentIds).some(c=>e.includes(c)));if(!i)return null;const a=O(i);return{documentIds:JSON.parse(i.documentIds),documentName:i.documentName,topic:i.topic??"",objectives:i.objectives,derived:i.derived,cursor:i.cursor,state:a,finished:!i.active&&i.cursor>=a.sections.length,updatedAt:i.updatedAt.toISOString()}}async function U(e,t,n,s=!1){const o=JSON.parse(e.documentIds),i={documentIds:o,documentName:e.documentName,topic:e.topic??"",objectives:e.objectives,derived:e.derived,cursor:t,state:n,finished:s,updatedAt:new Date().toISOString()},a=le(o),r=JSON.stringify(i);await g.appSetting.upsert({where:{key:a},create:{key:a,value:r},update:{value:r}})}function je(e){return`Teach — ${e.replace(/\.(pdf|docx?|pptx?)\b/gi,"").replace(/_Brightspace|\(\d+\)|_/g," ").replace(/\s+/g," ").trim()}`.slice(0,190)}async function Dn(e,t){if(!j.NOTA_LOCAL_FEATURES)return null;if(e?.state.noteId){const a=await g.noteDoc.findUnique({where:{id:e.state.noteId},select:{id:!0}});if(a)return a.id}const{title:n,folderId:s}=await Fn(t.map(a=>a.id)),o=[n,n.replace(/^Notes on /,"Lesson · "),je(T(t)),...t.map(a=>je(a.fileName))],i=await g.noteDoc.findFirst({where:{title:{in:o}},orderBy:{updatedAt:"desc"},select:{id:!0}});return i?i.id:(await g.noteDoc.create({data:{title:n,folderId:s},select:{id:!0}})).id}async function Fn(e){const t=await g.document.findMany({where:{id:{in:e}},select:{id:!0,fileName:!0,meta:!0,folderId:!0}}),n=e.map(o=>t.find(i=>i.id===o)).filter(o=>!!o),s=n.map(o=>De(o));return{title:`Notes on ${s.length>2?`${s[0]} and ${s.length-1} more`:s.join(" & ")||"lecture"}`.slice(0,190),folderId:n.find(o=>o.folderId)?.folderId??null}}async function xs(e){return(await se()).find(n=>n.state.noteId===e)?.state.sections??[]}async function Ns(e,t){const n=await be(e);if(!n||n.command!=="teach"||!await g.noteDoc.findUnique({where:{id:t},select:{id:!0}}))return!1;const o={...O(n),noteId:t};return await g.studyRun.update({where:{sessionId:e},data:{state:JSON.stringify(o)}}),await U(n,n.cursor,o),!0}function Wn(e,t){const n=t.sections.length,s=Math.min(e.cursor,n),o=t.sections.map((c,u)=>`${u+1}. ${u<s?`~~${c.title}~~ ✓`:u===s?`**${c.title}** ← next`:c.title}`).join(`
`),i=s>=n?"Every section is taught. Answer the last check and I'll put the whole lecture together.":`Answer the last check to carry on with section ${s+1}, or \`/next\` to go straight to it.`,a=t.story?`
**The case so far:** ${t.story.split(`
`)[0]}
`:"",r=t.check?`
**Check yourself:** ${t.check}
`:"";return`## Teach — ${e.documentName}, continued

Welcome back. You've done **${s} of ${n}** sections.

${o}
${a}${r}
${i} _\`/teach ${e.topic||e.documentName} from the start\` begins again._`}function nt(e){const t=[];for(const n of e){const s=t[t.length-1];s&&s.title===n.group?s.objectives.push(n.text):t.push({title:n.group,objectives:[n.text]})}return t}const zn=`${R}

FRAMEWORK: /teach — you are teaching the student a whole lecture, section by
section, the way a great tutor would before an exam: everything its learning
objectives ask, built up from the basics, connected to what came before, and
anchored in ONE real-life case that runs through the whole lesson.

How to teach a section, from the PASSAGES:
- Cover every objective listed for the section, each under a "### " subheading
  in your own words (not the objective copied out).
- Plain words first, then the course's terms in **bold**, each defined where it
  first appears. Build each idea step by step; write a mechanism as a chain
  (cause → effect → consequence). Use the lecture's real numbers. Cite the
  passages.
- Connect it: one sentence on how this section builds on the last, when there
  was one.
- "**In the case:**" — a short paragraph applying this section to the running
  case: what it explains about it, or a new finding or development it predicts.
  Same person or situation throughout.
- "**Picture it:**" — one everyday example or analogy, only where it truly helps.
- "**Exam angle:**" — one or two lines: how this is usually examined, and the
  trap students fall into.
- End with "**Check yourself:**" and ONE short question about the case that
  needs this section's ideas applied (never a definition), then on its own
  line, exactly: _Answer in a few words, or type \`/next\` to move on._

Under 700 words for the section. No preamble, no "great question".`,Un=`THE CASE (introduce it in this first turn): 3 to 4 sentences describing a
realistic situation that the whole lecture explains, built only from the
lecture's concepts and numbers. For a health science, a patient: age, sex,
what they present with, findings, labs, drugs and doses. For any other
subject, an experiment, a dataset, a lab result or a real-world problem, with
no patient-style details. Describe only what is OBSERVED: findings, numbers,
what happened. Never the cause, the mechanism or the diagnosis ("due to…",
"because…"): the lesson works those out, section by section. Write it under a
line starting "**The case:**".`;function st(e,t){return e.sections.map((n,s)=>`${s+1}. ${n.title}${s<t?" (taught)":s===t?" ← now":""}`).join(`
`)}function Kn(e,t){const n=e.sections[t];return`SECTION ${t+1} of ${e.sections.length}: ${n.title}
Its objectives:
${n.objectives.map(s=>`- ${s}`).join(`
`)}`}function Z(e,t,n,s,o){const i=E(e),a=t.sections[n],r=`## Teach — ${e.documentName}

**${t.sections.length} sections, ${t.sections.reduce((p,d)=>p+d.objectives.length,0)} objectives.** We'll go section by section around one case. Answer each check in a few words; \`/next\` moves on, \`/back\` goes back a section, \`/stop\` ends.`,c=o?`Begin your reply with this header copied exactly:

${r}

Then "**The big picture:**" in three to five sentences: what this lecture is about and how its sections connect, in order. Then the case. Then a horizontal rule, then teach section 1.

${Un}`:s?`Begin with feedback on their answer to the last check, in two lines: "**✓ You've got:** " what was right, specifically; "**↻ Add:** " what was missing or wrong. If they wrote "no idea" or skipped, leave out the ✓ line and give the answer in two sentences under "**↻ The answer:**". Then a horizontal rule, then teach this section.`:"Teach this section.",u=`LECTURE: ${e.documentName}

THE LESSON'S SECTIONS:
${st(t,n)}

${Kn(t,n)}
${t.story?`
THE CASE SO FAR:
${t.story}
`:""}${!o&&t.check?`
THE LAST CHECK QUESTION:
${t.check}

THEIR ANSWER:
${s??"(they skipped it)"}
`:""}
${c}`;return{ask:{documentIds:i,systemExtra:zn,retrievalQuery:`${a.title} ${a.objectives.join(" ")}`.slice(0,600),promptOverride:u,topK:10,prefer:A},advance:async p=>{const d=O(e),f=p.match(/\*\*The case:\*\*\s*([\s\S]*?)(?:\n\s*\n|\n---|$)/)?.[1]?.trim(),y=p.match(/\*\*In the case:\*\*\s*([\s\S]*?)(?:\n\s*\n|\n---|$)/)?.[1]?.trim();d.story=[f??d.story,y].filter(Boolean).join(`
`).slice(-1800),d.check=p.match(/\*\*Check yourself:\*\*\s*([\s\S]*?)(?:\n|$)/)?.[1]?.trim()??"",await g.studyRun.update({where:{sessionId:e.sessionId},data:{cursor:n+1,stage:n+1>=d.sections.length?"wrap":"lesson",state:JSON.stringify(d)}}),await U(e,n+1,d)}}}function ot(e,t,n){const s=`LECTURE: ${e.documentName}

THE LESSON'S SECTIONS (all taught):
${st(t,t.sections.length)}

THE CASE SO FAR:
${t.story||"(none)"}

THE LAST CHECK QUESTION:
${t.check||"(none)"}

THEIR ANSWER:
${n}

Begin with feedback on that answer: "**✓ You've got:** " and "**↻ Add:** " lines (or "**↻ The answer:**" if they did not know). Then a horizontal rule, then:

## Putting it together
5 to 8 bullets that connect the sections into one story of the lecture, each naming the key terms in bold, cited.

**The case, solved:** walk from the case's findings to what is going on, in four to six sentences, naming each concept from the lecture that explains a step.

**Before the exam:** the three things from this lecture most worth being able to explain cold.

End with exactly this line: Ready to test it? Type \`/quiz ${x(e.documentName.split(" + ")[0]??e.documentName)} cases\` for exam-style questions.

Under 550 words.`;return{ask:{documentIds:E(e),systemExtra:`${R}

FRAMEWORK: /teach — the last turn of a guided lesson. Pull the whole lecture together.`,retrievalQuery:t.sections.map(o=>o.title).join(" ").slice(0,600),promptOverride:s,topK:10,prefer:A},advance:async()=>{await M(e,{active:!1}),await U(e,t.sections.length,O(e),!0)}}}const Oe=/\s*\b(from the (start|beginning)|start(ing)? over|restart|afresh)\b\s*/i;async function Bn(e,t,n){if(!t){const[l,w]=await Promise.all([g.document.findMany({where:{status:"ready"},orderBy:{createdAt:"desc"},take:6,select:{fileName:!0}}),se()]),m=w.filter(v=>!v.finished&&v.cursor>0).slice(0,4),h=m.length?`Pick up where you left off:

${m.map(v=>`- \`/teach ${v.topic||x(v.documentName)}\` — section ${Math.min(v.cursor+1,v.state.sections.length)} of ${v.state.sections.length}`).join(`
`)}

`:"",b=l.map(v=>`- \`/teach ${x(v.fileName)}\``).join(`
`);return{reply:{text:`${h}Name the lecture to be taught, a few words is enough, or several: \`/teach pharmacodynamics I and II\`.

Recently added:

${b}`}}}const s=Oe.test(t),o=t.replace(Oe," ").trim(),{found:i,ask:a}=await te("teach",o,n);if(a)return{reply:{text:a}};const r=i.docs,c=await Pn(r.map(l=>l.id)),u=await Dn(c,r);if(c&&!s&&!c.finished&&c.cursor>0&&c.state.sections.length>0){const l={...c.state,noteId:u},w={id:e,sessionId:e,command:"teach",documentIds:JSON.stringify(c.documentIds),documentName:c.documentName,objectives:c.objectives,derived:c.derived,cursor:c.cursor,stage:c.cursor>=l.sections.length?"wrap":"lesson",active:!0,pending:null,topic:c.topic||o,state:JSON.stringify(l)};return await g.studyRun.upsert({where:{sessionId:e},create:w,update:{...w,createdAt:new Date,updatedAt:new Date}}),await U(w,w.cursor,l),{reply:{text:Wn(w,l)}}}const{objectives:p,derived:d}=await ne(r);if(p.length===0)return{reply:{text:`I couldn't read any objectives out of **${T(r)}**: it may still be processing.`}};const f={sections:nt(p),story:"",check:"",noteId:u},y={id:e,sessionId:e,command:"teach",documentIds:JSON.stringify(r.map(l=>l.id)),documentName:T(r),objectives:JSON.stringify(p),derived:d,cursor:0,stage:"lesson",active:!0,pending:null,topic:o,state:JSON.stringify(f)};return await g.studyRun.upsert({where:{sessionId:e},create:y,update:{...y,createdAt:new Date,updatedAt:new Date}}),await U(y,0,f),Z(y,f,0,null,!0)}function Hn(e,t){const n=O(e);return e.cursor>=n.sections.length?ot(e,n,t):Z(e,n,e.cursor,t,!1)}function Jn(e,t){const n=O(e);if(t==="objectives"){const s=n.sections.map((o,i)=>`${i+1}. **${o.title}**${i<e.cursor?" ✓":""}
${o.objectives.map(a=>`   - ${a}`).join(`
`)}`).join(`
`);return{reply:{text:`## ${e.documentName}

${s}

_Answer the last check, or \`/next\` to move on._`}}}if(t==="back"){const s=Math.max(0,e.cursor-2);return Z({...e,cursor:s},{...n,check:""},s,null,!1)}return e.cursor>=n.sections.length?ot(e,n,"(they skipped it)"):Z(e,n,e.cursor,null,!1)}function K(e){try{const t=JSON.parse(e.state);return{objectives:t.objectives??C(e),practised:t.practised??{},current:t.current??null,past:t.past??[],given:t.given??0}}catch{return{objectives:C(e),practised:{},current:null,past:[],given:0}}}const he="cases.progress.",it=e=>`${he}${[...e].sort().join(",")}`.slice(0,900);async function Es(){const e=await g.appSetting.findMany({where:{key:{startsWith:he}}}),t=[];for(const n of e)try{const s=JSON.parse(n.value),o=n.key.slice(he.length).split(",").filter(Boolean),i=s.objectives??(o.length===1?(await Ve(o))?.objectives.map(r=>r.text):void 0);if(!i)continue;const a=Object.entries(s.practised??{}).map(([r,c])=>({text:i[Number(r)]??"",...c})).filter(r=>r.text&&r.solid+r.weak>0);a.length&&t.push({documentIds:o,objectives:a})}catch{}return t}async function Ts(){return(await se()).map(e=>{const t=e.finished?e.state.sections.length:e.cursor;return{documentIds:e.documentIds,objectives:e.state.sections.slice(0,t).flatMap(n=>n.objectives),at:e.updatedAt}})}async function Qn(e){const t=await g.appSetting.findUnique({where:{key:it(e)}});if(!t)return null;try{return JSON.parse(t.value)}catch{return null}}async function Yn(e,t){const n=it(E(e)),s=JSON.stringify({practised:t.practised,past:t.past.slice(-40),given:t.given,objectives:t.objectives.map(o=>o.text)});await g.appSetting.upsert({where:{key:n},create:{key:n,value:s},update:{value:s}})}function Gn(e){if(!e.current)return e;const t={...e.practised};for(const n of[e.current.index,e.current.second]){if(n===null)continue;const s=t[String(n)]??{cases:0,solid:0,weak:0};t[String(n)]={...s,cases:s.cases+1}}return{...e,practised:t}}function Ae(e){return/\b(apply|predict|interpret|evaluate|analy[sz]e|calculate|distinguish|differentiate|compare|contrast|relate|choose|select|justify)\b/i.test(e)?3:/\b(explain|describe|discuss|outline|illustrate|characteri[sz]e)\b/i.test(e)?2:1}const _=e=>e.includes(" · ")?e.split(" · ")[0]:null;function Vn(e){const t=e.objectives.length,n=u=>e.practised[String(u)]??{cases:0,solid:0,weak:0},s=e.objectives.map((u,p)=>p).filter(u=>n(u).cases===0);if(s.length){if(!_(e.objectives[s[0]].group))return{index:s[0],second:null};const u=new Map;e.objectives.forEach((f,y)=>{const l=_(f.group)??"";u.set(l,(u.get(l)??0)+n(y).cases)});const p=f=>e.objectives.findIndex(y=>_(y.group)===_(e.objectives[f].group));return{index:[...s].sort((f,y)=>{const l=u.get(_(e.objectives[f].group)??"")??0,w=u.get(_(e.objectives[y].group)??"")??0;return l-w||p(f)-p(y)||Ae(e.objectives[y].text)-Ae(e.objectives[f].text)||f-y})[0],second:null}}const o=e.current?.index??-1,i=e.objectives.map((u,p)=>p).filter(u=>u!==o||t===1).sort((u,p)=>{const d=n(u),f=n(p);return f.weak-f.solid-(d.weak-d.solid)||d.cases-f.cases||u-p}),a=i[0]??0;if(e.given%3!==2||t<2)return{index:a,second:null};const r=e.objectives[a].group,c=i.find(u=>u!==a&&e.objectives[u].group!==r)??i.find(u=>u!==a);return{index:a,second:c??null}}const Xn=`HOW TO WRITE THE CASE, from the PASSAGES:
- Start with the line "### Case {n}" and nothing else on it.
- "**The patient:**" 3 to 5 sentences, like an exam vignette: age and sex,
  what they present with, the history and timeline, examination findings,
  vital signs and lab values with units, drugs and doses where relevant. For
  physiology a situation can serve instead of a patient (exercise, altitude,
  dehydration, a meal, a lab experiment with measurements). Use the
  lecture's own numbers, terms, drugs and mechanisms; invent only the person
  and the setting, never a fact the passages do not support.
- NEVER name the diagnosis, the mechanism, the drug class or anything else
  the questions ask for: the student works it out from the findings.
- "**Questions:**" 1 or 2 numbered questions that make them APPLY the
  objective to this case: what is going on and why (the mechanism, as a
  chain), what a finding means, what happens next, which drug or next step
  and why. Never "define X".
- End with exactly: _Answer in your own words: a few words is fine. \`/next\` shows the answer and a new case._
- A new case: different patient, presentation and answer from every case
  under CASES ALREADY GIVEN.`,Zn=`HOW TO MARK THEIR ANSWER, kindly and on the gist (keywords and the idea
count; perfect wording does not matter). Four short paragraphs, each
starting with its bold label exactly as shown, no bullets, no quotation marks:

**✓ You've got:** what they got right, specifically. Leave this paragraph out if they skipped or got nothing right.

**↻ Add:** what was missing or wrong, in one or two sentences.

**The answer:** 2 to 4 sentences walking from the case's findings to the answer, naming the lecture's concept, cited from the passages.

**Verdict:** solid, partly or missed (missed when they skipped).

Then a horizontal rule (---), then the next case.`;function es(e,t,n,s,o,i){const a=t.objectives[n.index],r=n.second!==null?t.objectives[n.second]:null,c=Object.keys(t.practised).length,u=`## Case practice — ${e.documentName}

**${t.objectives.length} learning objectives${c?`, ${c} practised before`:""}.** A case at a time, each on one objective. Answer in your own words; \`/next\` shows the answer and gives a new case, \`/objectives\` shows what you have covered, \`/stop\` ends.`,p=t.current?`THE LAST CASE (objective: ${t.objectives[t.current.index]?.text??""}${t.current.second!==null?`; and: ${t.objectives[t.current.second]?.text??""}`:""}):
${t.current.text}

THEIR ANSWER:
${o?"(they skipped it: no ✓ line, give the answer, verdict missed)":s}
`:"";return`LECTURE(S): ${e.documentName}

THE NEXT CASE PRACTISES THIS LEARNING OBJECTIVE (${a.group}):
${a.text}${r?`
AND JOINS IT WITH THIS ONE, the way an exam case does (${r.group}):
${r.text}`:""}

CASES ALREADY GIVEN (never repeat one):
${t.past.length?t.past.slice(-20).map(d=>`- ${d}`).join(`
`):"(none yet)"}

${p}
${i?`Begin with this header copied exactly:

${u}

Then a horizontal rule, then the case.

`:t.current?`${Zn}

`:""}${Xn.replace("{n}",String(t.given+1))}`}function ye(e,t,n,s,o=!1){const i=Vn(Gn(t)),a=t.objectives[i.index],r=i.second!==null?t.objectives[i.second]:null,c=t.current?t.objectives[t.current.index]?.text??"":"";return{ask:{documentIds:E(e),systemExtra:`${R}

FRAMEWORK: /cases — case practice. You write exam-style cases from the student's own lectures and mark their answers kindly. Every case is built from the PASSAGES.`,retrievalQuery:`${a.text} ${r?.text??""} ${c}`.slice(0,600),promptOverride:es(e,t,i,n,s,o),topK:10,prefer:A},advance:async u=>{const p=K(e);if(p.current){const l=u.match(/\*\*Verdict:\*\*\s*(solid|partly|missed)/i)?.[1]?.toLowerCase()??(s?"missed":"partly");for(const w of[p.current.index,p.current.second]){if(w===null)continue;const m=p.practised[String(w)]??{cases:0,solid:0,weak:0};m.cases+=1,l==="solid"?m.solid+=1:m.weak+=1,p.practised[String(w)]=m}}const d=u.slice(Math.max(0,u.search(/###\s*Case\b/i))),f=d.match(/\*\*The patient:\*\*\s*([\s\S]*?)(?:\n\s*\n|\*\*Questions)/i)?.[1]?.trim()??"",y=d.match(/\*\*Questions:\*\*\s*([\s\S]*?)(?:\n_|\n\s*\n_|$)/i)?.[1]?.trim()??"";p.current={index:i.index,second:i.second,text:`${f}
${y}`.trim().slice(0,1400)},f&&p.past.push(`${a.text.slice(0,60)}: ${f.split(/(?<=\.)\s/)[0].slice(0,140)}`),p.past=p.past.slice(-40),p.given+=1,await g.studyRun.update({where:{sessionId:e.sessionId},data:{cursor:Object.keys(p.practised).length,stage:"case",state:JSON.stringify(p)}}),await Yn(e,p)}}}function ts(e){let t="";const n=[];return e.objectives.forEach((s,o)=>{s.group!==t&&(t=s.group,n.push(`
**${t}**`));const i=e.practised[String(o)],a=i?i.weak>i.solid?"↻":"✓":"·";n.push(`- ${a} ${s.text}${i?` _(${i.cases} case${i.cases===1?"":"s"})_`:""}`)}),n.join(`
`).trim()}function ns(e,t){const n=Object.entries(t.practised),s=n.filter(([,i])=>i.solid>=i.weak).length,o=n.filter(([,i])=>i.weak>i.solid).map(([i])=>t.objectives[Number(i)]?.text).filter(Boolean).slice(0,5);return`## Case practice stopped — ${e.documentName}

**${t.given} cases** so far · **${n.length} of ${t.objectives.length}** objectives practised · ${s} solid.
${o.length?`
Worth another look:
${o.map(i=>`- ${i}`).join(`
`)}
`:""}
\`/cases ${e.topic||e.documentName}\` carries on with new cases (your progress is kept)${o.length?`; \`/teach ${e.topic||e.documentName}\` goes back over the ideas`:""}.`}function ss(e,t){const n=K(e);return t==="objectives"?{reply:{text:`## ${e.documentName}: what you have practised

${ts(n)}

_✓ solid · ↻ worth another case · · not yet. Answer the case above, or \`/next\` for a new one._`}}:t==="back"?{reply:{text:"Cases only go forward: answer the one above, or `/next` for its answer and a new case."}}:ye(e,n,null,!0)}async function os(e,t,n){if(!t){const p=await g.document.findMany({where:{status:"ready"},orderBy:{createdAt:"desc"},take:5,select:{fileName:!0}}),d=await g.libraryFolder.findMany({where:{parentId:null},select:{name:!0},take:6});return{reply:{text:`Name a lecture, several, or a whole course: \`/cases ${d[0]?.name.toLowerCase()??"pathology"}\`.

Courses:

${d.map(f=>`- \`/cases ${f.name}\``).join(`
`)}

Recently added:

${p.map(f=>`- \`/cases ${x(f.fileName)}\``).join(`
`)}`}}}const s=await Ke(t);let o=[],i="";if(s&&!s.rest.trim())o=(await g.document.findMany({where:{id:{in:s.documentIds},OR:[{pairedWithId:null},{pairedWithId:{notIn:s.documentIds}}]},select:{id:!0,fileName:!0},orderBy:{createdAt:"asc"}})).filter(d=>!/syllabus|course outline|course information|course schedule/i.test(d.fileName)).map(d=>({...d,score:1})),i=s.name;else{const{found:p,ask:d}=await te("cases",t,n);if(d)return{reply:{text:d}};o=p.docs,i=T(o)}if(o.length===0)return{reply:{text:`There are no lectures in **${s?.name??t}** yet.`}};const{objectives:a}=await ne(o);if(a.length===0)return{reply:{text:`I couldn't read any objectives out of **${i}**: it may still be processing.`}};const r=await Qn(o.map(p=>p.id)),c={objectives:a,practised:r?.practised??{},current:null,past:r?.past??[],given:r?.given??0},u={id:e,sessionId:e,command:"cases",documentIds:JSON.stringify(o.map(p=>p.id)),documentName:i,objectives:JSON.stringify(a),derived:!1,cursor:Object.keys(c.practised).length,stage:"case",active:!0,pending:null,topic:t,state:JSON.stringify(c)};return await g.studyRun.upsert({where:{sessionId:e},create:u,update:{...u,createdAt:new Date,updatedAt:new Date}}),ye(u,c,null,!1,!0)}async function be(e){if(!e)return null;const t=await g.studyRun.findUnique({where:{sessionId:e}});return t&&t.active?t:null}function Ce(e){return`## Commands

${e.map(n=>`- \`/${n.keyword}\` — **${n.title}**. ${n.description}`).join(`
`)}

Type \`/\` in the box to pick one. You can write your own in Commands — a keyword, and what you want me to do when you type it.`}async function is(e,t,n){if(!t)return{text:`Name the lecture you want to skim — a few words is enough.

Recently added:

${(await g.document.findMany({where:{status:"ready"},orderBy:{createdAt:"desc"},take:6,select:{fileName:!0}})).map(y=>`- \`/skim ${x(y.fileName)}\``).join(`
`)}`};const{found:s,ask:o}=await te("skim",t,n);if(o)return{text:o};const i=s.docs,{objectives:a,derived:r}=await ne(i);if(a.length===0)return{text:`I couldn't read any objectives out of **${T(i)}**: it may still be processing.`};const c={id:e,sessionId:e,command:"skim",documentIds:JSON.stringify(i.map(d=>d.id)),documentName:T(i),objectives:JSON.stringify(a),derived:r,cursor:0,stage:"keywords",active:!0,pending:null,topic:"",state:"{}"};await g.studyRun.upsert({where:{sessionId:e},create:c,update:{...c,createdAt:new Date,updatedAt:new Date}});const u=et("skim",s),p=Ze(r,i.length);return{text:`## Skim — ${T(i)}

**${a.length} objectives.** ${p}${u}

${ge(c,a)}

---

We'll take them one at a time. **Alt+→** skips ahead and **Alt+←** goes back, or type \`/next\`, \`/back\`, \`/stop\`.

${F(c,a,0)}`}}async function M(e,t){await g.studyRun.update({where:{sessionId:e.sessionId},data:t})}async function Re(e){const t=e.createdAt??new Date(Date.now()-216e5),n=await g.conceptUnderstanding.findMany({where:{lastAssessedAt:{gte:t}},orderBy:{mastery:"asc"}});return n.length===0?"":`

**What I'll remember from this session:**
${n.map(o=>{const i=JSON.parse(o.refine)[0];return`- **${o.concept}** — ${Math.round(o.mastery*100)}%${i?` · still to refine: ${i}`:""}`}).join(`
`)}`}async function rs(){return(await Je("quiz"))?.instructions.trim()??""}async function as(e){const t=await Pe(e);return{items:t,prompt:yt(t)}}function Q(e){try{const t=JSON.parse(e.state||"{}");return{...ce(),...t}}catch{return ce()}}async function D(e,t,n={}){await g.studyRun.update({where:{sessionId:e.sessionId},data:{state:at(t),cursor:t.asked,pending:t.current?.question??null,...n}})}async function Y(e,t){const n=t.queue.findIndex(o=>o.dueAt<=t.asked);let s;if(n>=0)s=en(t.queue.splice(n,1)[0].question);else{const o=await Pe(e.topic||e.documentName,4);s=await hn(t,{documentIds:E(e),topic:e.topic||e.documentName,refine:o.flatMap(i=>i.refine.slice(0,2)).slice(0,5),howTheyLikeIt:await rs()})}return t.asked+=1,t.current=s,t.recent=[...t.recent,s.question].slice(-12),de(s,t.asked)}function cs(e){const t=e.answered;if(t===0)return"Stopped the quiz before any answers.";const n=e.results.filter(r=>r.outcome!=="correct"),s=new Map;for(const r of n){const c=r.documentName?x(r.documentName):"Other";s.set(c,(s.get(c)??0)+1)}const o=[...s.entries()].sort((r,c)=>c[1]-r[1]),i=[...new Set(n.map(r=>r.concept))],a=[`**Score: ${e.correct} / ${t}.**`];return o.length&&a.push(`
**Review these units:**
${o.map(([r,c])=>`- **${r}** — ${c} missed · \`/quiz ${r}\``).join(`
`)}`),i.length&&a.push(`
**Concepts to go over:** ${i.join(", ")}`),e.queue.length&&a.push(`
_${e.queue.length} missed question${e.queue.length===1?" was":"s were"} still waiting to come back — they are remembered, and the next quiz on this leans on them._`),a.join(`
`)}async function ds(e,t,n){const{style:s,rest:o}=Xt(t),i=o?await Ke(o):null,a=o.replace(/\bwith\b\s*$/i,"").trim(),r=o&&!i?await Le(a,Xe,n):null,c=r?.confident?r.docs:[],p=(r&&!r.confident&&r.docs.length>0?await we("quiz",a,r,r.single):null)?.split(`
`).filter(b=>b.startsWith("- "))??[],d=p.length?`

_Quizzing on "${a}" across your library. Meant one lecture? Pick it:_

${p.join(`
`)}`:"",f=o?[]:await gt(),y=i?i.rest:o||f.map(b=>b.concept).join(", "),l={id:e,sessionId:e,command:"quiz",documentIds:JSON.stringify(i?i.documentIds:c.map(b=>b.id)),documentName:i?.name??(c.length?T(c):""),objectives:"[]",derived:!1,cursor:0,stage:"answer",active:!0,pending:null,topic:y,state:"{}"};await g.studyRun.upsert({where:{sessionId:e},create:l,update:{...l,createdAt:new Date,updatedAt:new Date}});const w=ce();w.style=s;const m=await Y(l,w);return await D(l,w),{reply:{text:`## Quiz — ${i?[i.name,i.rest].filter(Boolean).join(" · "):c.length?c.map(b=>x(b.fileName)).join(" + "):y||"your material"}

${s==="concept"?"Concept questions.":s==="scenario"?"Exam-style scenarios: a case from your lectures, then a question about it.":"Mostly exam-style scenarios built from your lectures, with some concept questions. Say `/quiz … cases` for all scenarios, `/quiz … concepts` for none."}

Click an option on the card, or switch the card to **Written** and explain your answer in the box. Say “don't know”, ask me anything, or get one wrong, and it comes back a few questions later until you have it. \`/stop\` ends it and shows what to review.${d}

---

${m}`}}}async function Is(e){const t=yn(e.question)??vn(e.question),n=await be(e.sessionId);if(t){const d=await Je(t.keyword);if(!d){const f=await ue(),y=bn(t.keyword,f.map(l=>l.keyword));if(y.length){const l=y.map(w=>`- \`/${w}${t.rest?` ${t.rest}`:""}\``).join(`
`);return{reply:{text:`There's no \`/${t.keyword}\`. Did you mean:

${l}

_Click one to run it, or \`/commands\` for the full list._`}}}return{reply:{text:`I don't know \`/${t.keyword}\`.

${Ce(f)}`}}}if(t.keyword==="commands")return{reply:{text:Ce(await ue())}};if(t.keyword==="tidy")return{reply:{text:"Open the calendar and press **Tidy** to review duplicates and vague entries — nothing changes until you tick what to apply."}};if(t.keyword==="skim")return{reply:await is(await e.ensureSession(),t.rest,e.scope)};if(t.keyword==="teach")return Bn(await e.ensureSession(),t.rest,e.scope);if(t.keyword==="cases")return os(await e.ensureSession(),t.rest,e.scope);if(t.keyword==="quiz")return ds(await e.ensureSession(),t.rest,e.scope);if(t.keyword==="review")return{reply:{text:await ft()}};if(t.keyword==="objectives"&&t.rest)return{reply:await Cn(t.rest,e.scope)};if(kn.has(t.keyword)){if(!n)return{reply:{text:t.keyword==="objectives"?"Name the lecture, e.g. `/objectives drug absorption` — or start working through one with `/skim <lecture>`.":"Nothing is running in this chat. Start one with `/skim <lecture>` or `/quiz <topic>`."}};if(t.keyword==="stop"){if(await M(n,{active:!1}),n.command==="quiz")return{reply:{text:`${cs(Q(n))}

Ask me anything normally — or \`/review\` for everything your answers say to review.`}};if(n.command==="cases")return{reply:{text:ns(n,K(n))}};if(n.command==="teach"){const h=O(n).sections.length;return{reply:{text:`Stopped after section ${Math.min(n.cursor,h)} of ${h} of **${n.documentName}**. \`/teach ${n.topic}\` starts it again from the top.

Ask me anything normally.`}}}const w=await Re(n);return{reply:{text:`${`Stopped at objective ${n.cursor+1} of ${C(n).length} of **${n.documentName}**. \`/skim ${n.documentName}\` picks it up from the top.`}${w}

Ask me anything normally.`}}}if(n.command==="teach")return Jn(n,t.keyword);if(n.command==="cases")return ss(n,t.keyword);if(n.command==="quiz"){const w=Q(n);if(t.keyword==="back"||t.keyword==="objectives")return{reply:{text:`A quiz only goes forward — **Alt+→** or \`/next\` skips this one (it comes back later), \`/stop\` ends it.${w.current?`

${de(w.current,w.asked)}`:""}`}};const m=w.current;m&&ie(w,m,"unknown");const h=await Y(n,w);return await D(n,w),{reply:{text:`${m?`${Ne(m,"unknown",null)}

`:""}Skipped — it will come back later.

---

${h}`}}}const f=C(n);if(t.keyword==="objectives")return{reply:{text:`## ${n.documentName}

${ge(n,f)}

---

${F(n,f,Math.min(n.cursor,f.length-1))}`}};const y=t.keyword==="next"?1:-1,l=n.cursor+y;return l<0?{reply:{text:`You're on the first objective already.

${F(n,f,0)}`}}:l>=f.length?(await M(n,{active:!1}),{reply:{text:`That was the last objective of **${n.documentName}**. Run finished.${await Re(n)}`}}):(await M(n,{cursor:l,stage:"keywords"}),{reply:{text:F({...n},f,l)}})}return{ask:{documentIds:[],systemExtra:`${R}

FRAMEWORK: /${d.keyword} — ${d.title}.

${d.instructions}`,retrievalQuery:t.rest||e.question.replace(/^\/\S+\s*/,""),promptOverride:t.rest||"Continue with what we were just discussing.",topK:B,prefer:A}}}if(!n)return null;if(n.command==="teach")return Hn(n,e.question);if(n.command==="cases")return ye(n,K(n),e.question,!1);if(n.command==="quiz"){const d=Q(n),f=d.current;if(!f){const k=await Y(n,d);return await D(n,d),{reply:{text:k}}}const y=on(e.question,f);if(y.kind==="asking")return ie(d,f,"asked"),await D(n,d),{ask:{documentIds:E(n),systemExtra:Mn(f.question,f.options),retrievalQuery:`${e.question} ${f.question}`,promptOverride:e.question,topK:B,prefer:A,appendix:`---

**Back to the question:**

${de(f,d.asked)}`}};let l,w=null,m="",h=null;if(y.kind==="choice")w=y.index,l=y.index===f.answer?"correct":"wrong";else if(y.kind==="unknown")l="unknown";else{const k=await pn(f,e.question);w=k.chosen,m=k.note,l=k.correct?"correct":"wrong",h={got:k.got,missing:k.missing}}if(d.answered+=1,l==="correct"){d.correct+=1;const k=f.id.replace(/~+$/,"");d.queue=d.queue.filter($=>$.question.id.replace(/~+$/,"")!==k)}else ie(d,f,l==="unknown"?"unknown":"wrong");d.results.push({concept:f.concept,documentName:f.documentName,outcome:l,revisit:!!f.revisit}),wn(f,l==="correct",h);const b=fn(f,l,w,m),v=await Y(n,d);return await D(n,d),{reply:{text:`${Ne(f,l,w)}

${b}

---

${v}`}}}const s=C(n),o=Math.min(n.cursor,s.length-1),i=s[o];if(!i)return null;const a=E(n),r=n.stage==="concept"?"concept":"keywords",c=await as(i.text),u=d=>c.prompt?`${d}

${c.prompt}`:d;if(r==="keywords")return{ask:{documentIds:a,systemExtra:u(_n),retrievalQuery:`${i.text} ${e.question}`,promptOverride:Ie(i,o,s.length,e.question,"keywords"),topK:B,prefer:A},advance:async d=>{await M(n,{stage:"concept"}),wt({question:i.text,answer:e.question,reference:d,documentId:a[0]??null,documentName:n.documentName})}};const p=o+1>=s.length;return{ask:{documentIds:a,systemExtra:u(qn(Ln(n,s,o))),retrievalQuery:i.text,promptOverride:Ie(i,o,s.length,e.question,"concept"),topK:B,prefer:A},advance:async()=>{await M(n,p?{active:!1,stage:"keywords"}:{cursor:o+1,stage:"keywords"})}}}async function js(e){const t=await be(e);if(!t)return null;const n=C(t);if(t.command==="cases"){const s=K(t),o=s.current?.index??0;return{command:t.command,documentName:t.documentName,documentIds:E(t),cursor:s.given,total:s.objectives.length,practised:Object.keys(s.practised).length,stage:t.stage,topic:t.topic,group:s.objectives[o]?.group??"",objective:s.objectives[o]?.text??""}}if(t.command==="teach"){const s=O(t).sections,o=Math.min(Math.max(t.cursor-1,0),s.length-1);return{command:t.command,documentName:t.documentName,documentIds:E(t),cursor:o,total:s.length,stage:t.stage,topic:t.topic,group:s[o]?.title??"",objective:s[o]?.title??"",noteId:O(t).noteId??null}}return{command:t.command,documentName:t.documentName,documentIds:E(t),cursor:t.cursor,total:n.length,stage:t.stage,topic:t.topic,group:n[Math.min(t.cursor,n.length-1)]?.group??"",objective:n[Math.min(t.cursor,n.length-1)]?.text??t.pending??"",...t.command==="quiz"?(()=>{const s=Q(t);return{score:`${s.correct}/${s.answered}`,questionId:s.current?.id??null,choices:s.current?z.slice(0,s.current.options.length):[],revisitsWaiting:s.queue.length}})():{}}}export{Ns as a,ks as b,Is as c,$s as d,vs as e,ue as f,Ss as g,V as h,Rt as i,Es as j,xs as l,yn as p,js as r,H as s,Ts as t,Mt as w};
