import{o as y,a as v,s as p,n as k,f as M,p as T}from"./main-CJdVn3aH.js";import{w as _}from"./embedding-C1Zjxi2X.js";import{s as O,a as J}from"./llm-router-CIbfePBe.js";import{o as E,f as S,n as w,B as L,S as P,h as H,d as B}from"./flashcards-C2whDjik.js";import{s as D}from"./buddy-cases-BIwgqZyN.js";const I=v(k()).length(4),F=y({useful:M(),title:p().max(120).nullish(),objective:k().int().min(0).max(40).nullish(),example:p().max(240).nullish(),diagram_box:I.nullish(),labels:v(y({text:p().min(1).max(80),box_2d:I})).default([])}),R=(e,h)=>`This image is one slide of a student's lecture.
${E(e)}${h?`
THE STUDENT WANTS: ${h}`:""}

Decide whether the slide has a labelled diagram worth memorising for these
objectives: anatomy, a cell or tissue, a pathway or cycle, a process drawing,
a labelled structure. Not worth it: a photo with no labels, a logo, a chart of
numbers, a table of text, a title slide.

Reply with JSON only:
{"useful": boolean, "title": string, "objective": number, "example": string,
 "diagram_box": [ymin, xmin, ymax, xmax],
 "labels": [{"text": string, "box_2d": [ymin, xmin, ymax, xmax]}]}

- title: what the diagram shows, at most 8 words ("The blood-brain barrier").
- objective: the number of the objective it serves.
- example: one concrete example that ties it to real life or a patient, at
  most 25 words, in plain words.
- diagram_box: the diagram itself (with its labels), on a 0-1000 grid of the
  whole image.
- labels: 3 to 8 labels written ON the diagram that name things a student must
  know (structures, cells, molecules, steps). "text" exactly as written; box_2d
  must enclose every letter of that label (it will be covered up, so a box that
  misses part of the word gives the answer away), 0-1000 grid. Skip numbers, units,
  single letters, captions, and source or copyright lines.
When it is not useful, reply {"useful": false}.`;function N(e,h,d){const[o,l,a,i]=e.map(r=>Math.min(1e3,Math.max(0,r)));return[l/1e3*h,o/1e3*d,i/1e3*h,a/1e3*d]}async function Y(e,h,d,o){const l=await T.document.findMany({where:{id:{in:e},kind:"pdf"},select:{id:!0,fileName:!0,filePath:!0}}),{passages:a}=await S(e),i=[...h,d??""].join(" "),r=[];for(const c of l.filter(n=>!H(n.fileName))){const n=new Map;for(const u of a.filter(g=>g.documentId===c.id&&g.page))for(let g=u.page;g<=(u.pageEnd??u.page);g+=1)n.set(g,[...n.get(g)??[],u]);for(const[u,g]of n){if(o.has(`${c.id}:${u}`))continue;const t=await B(c.id,u).catch(()=>null);if(!t?.figures.length||!t.pageWidth)continue;const s=t.pageWidth*t.pageHeight,f=t.figures.filter(m=>(m.bbox[2]-m.bbox[0])*(m.bbox[3]-m.bbox[1])/s>.06);if(!f.length)continue;const b=g.map(m=>m.text).join(" ");r.push({documentId:c.id,filePath:c.filePath,page:u,score:D(b,i)+f.length,chunkId:g[0]?.id??null})}}return r.sort((c,n)=>n.score-c.score)}async function q(e,h,d,o){const l=await _.renderPage({path:e,page:h,scale:1.5,format:"png"}),a=await O({prompt:R(d,o),imageBase64:l.imageBase64,mimeType:l.mimeType,validate:t=>F.parse(t)});if(!a.useful||!a.title)return null;const{pageWidth:i,pageHeight:r}=l,c=a.labels.map(t=>({text:t.text.replace(/\s+/g," ").trim(),box:N(t.box_2d,i,r)})).filter(t=>/[a-z]/i.test(t.text)&&t.box[2]>t.box[0]&&t.box[3]>t.box[1]),n=c.filter((t,s)=>c.findIndex(f=>f.text.toLowerCase()===t.text.toLowerCase())===s).slice(0,8);if(n.length<3)return null;const u=a.diagram_box?N(a.diagram_box,i,r):n[0].box,g=[Math.max(0,Math.min(u[0],...n.map(t=>t.box[0]))-8),Math.max(0,Math.min(u[1],...n.map(t=>t.box[1]))-8),Math.min(i,Math.max(u[2],...n.map(t=>t.box[2]))+8),Math.min(r,Math.max(u[3],...n.map(t=>t.box[3]))+8)];return{title:a.title.trim(),example:a.example?.trim()||null,objective:a.objective??null,visual:{crop:g,labels:n}}}async function z(e,h,d){const o=await q(e.filePath,e.page,h,d);if(!o)return null;const{visual:l}=o;return{front:o.title,back:l.labels.map(a=>a.text).join(" · "),example:o.example,objective:o.objective?h[o.objective-1]??null:null,category:"diagram",documentId:e.documentId,sourceChunkId:e.chunkId,page:e.page,sourceMethod:P,kind:"diagram",visual:JSON.stringify(l)}}function U(e,h){const d=i=>new Set(JSON.parse(i.visual??"{}").labels?.map(r=>r.text.toLowerCase())??[]),[o,l]=[d(e),d(h)];return[...o].filter(i=>l.has(i)).length>=Math.min(o.size,l.size)*.6}async function V(e){const{objectives:h}=await S(e.documentIds),d=new Set(e.existing.map(r=>`${r.documentId}:${r.page}`)),o=(await Y(e.documentIds,h,e.focus,d)).slice(0,Math.min(30,e.count*2+4));if(o.length===0)throw new Error("No diagrams were found in these documents (diagram cards need PDF slides with pictures).");const l=[];let a=0,i=null;for(let r=0;r<o.length&&l.length<e.count;r+=2){const c=await Promise.allSettled(o.slice(r,r+2).map(n=>z(n,h,e.focus)));for(const n of c)n.status==="fulfilled"&&n.value&&l.length<e.count&&!l.some(u=>U(u,n.value))&&l.push(n.value),n.status==="rejected"&&(a+=1,i=n.reason);if(a>=4&&l.length===0)break}if(l.length===0&&i)throw i;return l}const G=/\b(?:leads? to|lead(?:ing)? to|causes?|caused by|results? in|resulting in|triggers?|activates?|inhibits?|stimulates?|promotes?|blocks?|which (?:then|in turn)|in turn|followed by|due to|consequently|therefore|so that|thereby)\b|→|->|⇒/gi;function K(e){return(e.match(G)?.length??0)/Math.max(e.length,1)*1e3}const Q=y({chains:v(y({title:p().min(4).max(120),steps:v(p().min(2).max(140)).min(3).max(8),objective:k().int().min(0).max(40).nullish(),example:p().max(240).nullish(),source:k().int().min(1).max(40).nullish()}))}),X=`You turn a student's lecture into MECHANISM CHAINS to memorise: how one thing
leads to the next, step by step, the way it would be drawn as boxes and arrows.
Reply with JSON only:
{"chains": [{"title": string, "steps": [string], "objective": number, "example": string, "source": number}]}

- Only mechanisms the PASSAGES explain, and only ones a LEARNING OBJECTIVE asks
  about; give that objective's number. Nothing from course admin.
- A chain is ONE cause-and-effect sequence. Never a comparison of two things
  ("necrosis vs apoptosis") and never a list of features: leave those out.
- title: a short question that names ONLY the trigger, never a later step or the
  outcome, at most 12 words ("What happens when a cell runs out of ATP?"). The
  steps are hidden behind it, so the title must not give any of them away.
- steps: 4 to 7 steps, in order, the first the trigger and the last the outcome.
  Each step one event, at most 12 words, in plain words, with the lecture's key
  term kept ("Na+/K+ pump fails", "Sodium and water flow into the cell").
- example: one concrete case where this chain happens, at most 25 words
  ("A heart attack: the blocked artery starves heart cells of oxygen…").
- source: the number of the passage it comes from.
- Skip any chain already under ALREADY HAVE.`;async function Z(e){const{passages:h,objectives:d}=await S(e.documentIds),o=[...d,e.focus??""].join(" "),l=h.filter(s=>s.text.length>200).map(s=>({p:s,score:K(s.text)+D(s.text,o)*.3})).filter(s=>s.score>1).sort((s,f)=>f.score-s.score).map(s=>({...s.p,text:s.p.text.slice(0,2500)})),a=[];let i=[],r=0;for(const s of l.slice(0,Math.max(4,e.count+2)))r+s.text.length>L&&i.length&&(a.push(i),i=[],r=0),i.push(s),r+=s.text.length;if(i.length&&a.push(i),a.length===0)throw new Error("No mechanisms were found to chart in these documents.");const c=new Set(e.existingFronts.map(w)),n=[...e.existingFronts],u=[],g=Math.max(3,Math.ceil(e.count/a.length));for(const s of a.slice(0,4)){if(u.length>=e.count)break;const f=s.map((m,x)=>`[${x+1}]
${m.text}`).join(`

---

`);let b;try{({value:b}=await J({messages:[{role:"system",content:X},{role:"user",content:`Make up to ${Math.min(g,e.count-u.length)} chains.

${E(d)}${e.focus?`

THE STUDENT WANTS: ${e.focus}`:""}

PASSAGES:

${f}${n.length?`

ALREADY HAVE: ${n.slice(-40).join("; ")}`:""}`}],temperature:.2,maxTokens:2400,prefer:"groq",reasoning:"low"},m=>Q.parse(m)))}catch(m){if(u.length===0&&s===a[Math.min(3,a.length-1)])throw m;continue}for(const m of b.chains){const x=w(m.title),$=m.objective?d[m.objective-1]:void 0;if(!x||c.has(x)||d.length&&!$||/\bvs\.?\b|\bversus\b|differences?\b/i.test(m.title))continue;c.add(x),n.push(m.title);const j=s[(m.source??1)-1]??s[0],A=m.steps.map(W=>W.trim()).filter(Boolean);if(u.push({front:m.title.trim(),back:A.join(" → "),example:m.example?.trim()||null,objective:$??null,category:"mechanism",documentId:j.documentId,sourceChunkId:j.id,page:j.page,sourceMethod:P,kind:"flow",visual:JSON.stringify({steps:A})}),u.length>=e.count)break}}const t=new Set((await T.document.findMany({where:{id:{in:e.documentIds},kind:"pdf"},select:{id:!0}})).map(s=>s.id));for(const s of u)s.documentId&&!t.has(s.documentId)&&(s.page=null);return u}const C=v(p().min(1).max(90)).max(6).default([]),ee=y({useful:M(),figure:p().max(30).nullish(),image_box:I.nullish(),what:p().max(90).nullish(),features:C,clinical:C,idea:p().max(200).nullish(),caption:p().max(200).nullish(),objective:k().int().min(0).max(40).nullish(),enough:M().default(!0)}),te=e=>`This image is one slide of a student's science lecture.
${E(e)}

Is there a picture on it worth studying: microscopy or histology, a diagram, a
clinical photo, a chart, a pathway, or a graph? Not worth it: a logo, an icon,
clip art, a decorative photo, a photo of the lecturer, a table of text, a
title slide.

Reply with JSON only:
{"useful": boolean, "figure": "microscopy" | "diagram" | "clinical" | "chart" | "pathway" | "graph" | "other",
 "image_box": [ymin, xmin, ymax, xmax], "what": string, "features": [string],
 "clinical": [string], "idea": string, "caption": string, "objective": number, "enough": boolean}

- image_box: the picture itself, on a 0-1000 grid of the whole slide.
- what: what the picture shows, at most 8 words ("Fatty change in liver cells").
- features: 2 to 5 key features a student should spot or name, a few words each.
- clinical: 0 to 4 symptoms or signs, ONLY when the slide is about a disease or patient.
- idea: the big idea in one plain sentence, at most 20 words.
- caption: the slide's own words about the picture, if any, shortened.
- objective: the number of the objective it serves, when one fits.
- Use only what the slide says and what is plainly labelled in the picture.
  Never invent facts. If the slide says too little to fill these honestly,
  give only what it supports and set "enough": false.
When nothing is worth studying, reply {"useful": false}.`;async function oe(e,h){const d=await T.document.findMany({where:{id:{in:e},kind:"pdf"},select:{id:!0,fileName:!0,filePath:!0,meta:!0}}),{passages:o}=await S(e),l=[];for(const a of d.filter(i=>!H(i.fileName))){const i=new Map;for(const t of o.filter(s=>s.documentId===a.id&&s.page))i.has(t.page)||i.set(t.page,t.id);const r=[],c=[...i.keys()].sort((t,s)=>t-s).filter(t=>!h.has(`${a.id}:${t}`));for(let t=0;t<c.length;t+=6){const s=await Promise.all(c.slice(t,t+6).map(f=>B(a.id,f).then(b=>({page:f,f:b}),()=>null)));for(const f of s){if(!f?.f.figures.length||!f.f.pageWidth)continue;const b=f.f.pageWidth*f.f.pageHeight;for(const m of f.f.figures){const x=(m.bbox[2]-m.bbox[0])*(m.bbox[3]-m.bbox[1])/b;x>.04&&r.push({page:f.page,bbox:m.bbox,share:x})}}}const n=t=>t.map(s=>Math.round(s/6)).join(","),u=new Map;for(const t of r)u.set(n(t.bbox),(u.get(n(t.bbox))??0)+1);const g=new Map;for(const t of r)(u.get(n(t.bbox))??0)<3&&g.set(t.page,Math.max(g.get(t.page)??0,t.share));for(const[t,s]of g)l.push({documentId:a.id,filePath:a.filePath,page:t,chunkId:i.get(t)??null,area:s})}return l}async function ne(e,h){const d=await _.renderPage({path:e.filePath,page:e.page,scale:1.5,format:"png"}),o=await O({prompt:te(h),imageBase64:d.imageBase64,mimeType:d.mimeType,validate:n=>ee.parse(n),timeoutMs:3e4});if(!o.useful||!o.what?.trim()||!o.image_box)return null;const l=N(o.image_box,d.pageWidth,d.pageHeight);if(l[2]-l[0]<40||l[3]-l[1]<40)return null;const a=n=>[...new Set(n.map(u=>u.replace(/\s+/g," ").trim()).filter(Boolean))],i={what:[o.what.trim()],features:a(o.features),clinical:a(o.clinical),idea:o.idea?.trim()?[o.idea.trim()]:[]},r=o.objective?h[o.objective-1]??null:null,c={crop:l,figure:(o.figure??"other").toLowerCase(),groups:i,caption:o.caption?.trim()||null,thin:!o.enough||i.features.length<2,pick:"pending",key:`${e.documentId}:${e.page}:${l.map(n=>Math.round(n/8)).join(",")}`,objectives:r?[r]:[],ai:{relevant:!0,decorative:!1,objectives:r?[r]:[],reason:o.caption?.trim()?`The slide says: ${o.caption.trim().slice(0,140)}`:"Picked out as worth studying when the deck was made.",words:i.features,sure:!!r&&o.enough}};return{front:i.what[0],back:[...i.features,...i.clinical,...i.idea].join(" · ")||i.what[0],example:null,objective:r,category:c.figure,documentId:e.documentId,sourceChunkId:e.chunkId,page:e.page,sourceMethod:P,kind:"image",visual:JSON.stringify(c)}}async function ae(e){const{objectives:h}=await S(e.documentIds),d=new Set(e.existing.map(c=>`${c.documentId}:${c.page}`)),o=(await oe(e.documentIds,d)).sort((c,n)=>n.area-c.area).slice(0,e.count+10);if(o.length===0)throw new Error("No pictures were found to drill in these documents (image drills need PDF slides with pictures).");const l=new Set(e.existing.map(c=>w(c.front))),a=[];let i=0,r=null;for(let c=0;c<o.length&&a.length<e.count;c+=3){const n=await Promise.allSettled(o.slice(c,c+3).map(u=>ne(u,h)));for(const u of n){if(u.status==="rejected"){i+=1,r=u.reason;continue}const g=u.value;!g||l.has(w(g.front))||a.length>=e.count||(l.add(w(g.front)),a.push(g))}if(i>=4&&a.length===0)break}if(a.length===0&&r)throw r;return a.sort((c,n)=>(c.documentId??"").localeCompare(n.documentId??"")||(c.page??0)-(n.page??0))}async function ue(e){return e.kind==="image"?ae(e):e.kind==="diagram"?V({...e,existing:e.existing}):Z({...e,existingFronts:e.existing.map(h=>h.front)})}export{ue as g,q as s};
