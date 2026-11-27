import{p,o as v,s as g,a as N,n as O,f as C}from"./main-CJdVn3aH.js";import{a as I}from"./llm-router-CIbfePBe.js";const P=/\b\w*(?:itis|osis|emia|aemia|oma|pathy|plasia|trophy|necrosis|infection|syndrome|deficiency|disease|disorder|failure|toxicity|overdose|poisoning|tension|o?edema|shock|an(?:a)?emia|diabetes|tumou?r|cancer|lesion|ulcer|stroke|infarct\w*|thromb\w*|embol\w*|sepsis|fever|inflammation)\b/gi,D={pathology:null,microbiology:/\b(?:infect\w*|bacteri\w*|vir(?:us|al|ions?)\w*|pathogen\w*|immun\w*|antibod\w*|antigen\w*|toxin\w*|fung\w*|parasit\w*|colonis\w*|coloniz\w*|resistan\w*|vaccin\w*)\b/gi,pharmacology:/\b(?:toxic\w*|overdos\w*|adverse|side[- ]effects?|interaction\w*|accumulat\w*|clearance|half-life|bioavailab\w*|first[- ]pass|renal|hepatic|impair\w*|induc\w*|inhibit\w*|narrow therapeutic|therapeutic (?:window|index)|dose\w*|elimination)\b/gi,physiology:/\b(?:hypo\w+|hyper\w+|imbalance|dehydrat\w*|o?edema|ischemi\w*|ischaemi\w*|failure|insufficien\w*|pressure|gradient|acidosis|alkalosis|deficien\w*|disturb\w*|dysfunction)\b/gi,general:null},J={pathology:"The buddy has a disease or an injury to cells or tissue that the passages explain.",microbiology:"The buddy has an infection, or a problem with their immune response, that the passages explain.",pharmacology:"Something has gone wrong with a drug the buddy is taking, as the passages explain it: a toxic effect or overdose, a harmful interaction, a drug building up because it is not cleared, or a dose that does not work because of how the drug is absorbed, distributed or eliminated.",physiology:"A normal body function has gone wrong for the buddy (fluid, pressure, balance, an organ not keeping up), as the passages explain it.",general:"The buddy has an illness, or something going wrong in their body, that the passages explain."},M=/learning objectives?|learning outcomes?|by the end of (?:this|the) (?:lecture|session|class|module)|you (?:will|should) be able to/i,T=2200,U=9e3;async function A(t){const s=await p.libraryFolder.findMany({select:{id:!0,parentId:!0}}),e=new Map(s.map(r=>[r.id,r.parentId])),i=r=>{for(let d=r,m=0;d&&m<32;m+=1){if(d===t)return!0;d=e.get(d)??null}return!1},o=s.filter(r=>i(r.id)).map(r=>r.id);return(await p.document.findMany({where:{folderId:{in:o},status:"ready"},select:{id:!0}})).map(r=>r.id)}const G=(t,s)=>{const e=D[s];return((t.match(P)?.length??0)+(e?t.match(e)?.length??0:0))/Math.max(t.length,1)*1e3};function b(t){const s=[...t];for(let e=s.length-1;e>0;e-=1){const i=Math.floor(Math.random()*(e+1));[s[e],s[i]]=[s[i],s[e]]}return s}async function B(t,s){const e=await A(t);if(e.length===0)return{objectives:[],illness:[]};const o=(await p.chunk.findMany({where:{documentId:{in:e}},select:{id:!0,documentId:!0,text:!0,repairedText:!0,page:!0,pageStart:!0}})).map(n=>({id:n.id,documentId:n.documentId,page:n.page??n.pageStart,text:(n.repairedText??n.text).slice(0,T)})),l=o.filter(n=>M.test(n.text)),r=o.filter(n=>!l.includes(n)&&n.text.length>200).map(n=>({p:n,score:G(n.text,s)})).filter(n=>n.score>1).sort((n,h)=>h.score-n.score).slice(0,14).map(n=>n.p),d=b(r)[0]?.documentId,m=b(l.filter(n=>n.documentId===d)).slice(0,2),w=[];let a=m.reduce((n,h)=>n+h.text.length,0);for(const n of[...b(r.filter(h=>h.documentId===d)),...b(r.filter(h=>h.documentId!==d))])if(!(a+n.text.length>U)&&(w.push(n),a+=n.text.length,w.length>=3))break;return{objectives:m,illness:w}}const Y=v({hasCondition:C(),condition:g().max(160).optional(),presentation:g().max(900).optional(),task:g().max(400).optional(),objective:g().max(400).nullish(),keyPoints:N(g().max(240)).max(6).optional(),source:O().int().nullish()}),q=`You write a short case for a study game. The student's study buddy has fallen ill
with a condition that the course PASSAGES teach. The student reads how the buddy is,
and must explain what is wrong the way the course's LEARNING OBJECTIVES ask.
Reply with JSON only:
{"hasCondition": boolean, "condition": string, "presentation": string, "task": string,
 "objective": string, "keyPoints": [string], "source": number}

- What is wrong is described under KIND OF ILLNESS. Pick ONE such problem that the
  PASSAGES actually explain (not one they only name). A sequence or database record,
  a file format, code, a reading list or a syllabus that names a disease does not
  explain it. Only when the passages explain nothing of the kind, reply
  {"hasCondition": false} and nothing else.
- presentation: 2 to 4 sentences in plain, everyday words about the buddy, by name:
  only what can be SEEN, FELT or MEASURED — how they feel, what a doctor sees, test
  results, what a scan or biopsy shows — as the passages describe it. It is the
  puzzle, not the answer: NEVER name the condition, and NEVER say why it is happening
  (no cause, no mechanism, nothing from keyPoints after the first). Say "her drug
  levels are three times higher than expected", not "the drug is building up because
  it is not cleared". Give findings, not what they mean: "the biopsy shows clear
  vacuoles in the cells", never "…, indicating fat in the cells".
- task: one question to the student, in the spirit of a learning objective, e.g.
  "What is going wrong in Kai's liver cells, and why?" Ask them to name what is wrong
  and explain how it happens. The task must not name the condition either.
- objective: the one learning objective this case tests, copied from LEARNING
  OBJECTIVES only if it is about this condition; otherwise write one in the course's
  words, like "Explain how changes in pressure across capillaries lead to swelling".
  It must not name the condition or state the mechanism: it says WHAT to explain
  ("Explain how a drug's metabolism can lead to liver injury"), never the answer
  ("Explain how saturation of Phase II pathways causes toxic metabolites").
- keyPoints: 3 to 5 short points a good answer makes, each one taken from what the
  source passage says, in its own terms. The first is the name of the condition.
- source: the number of the passage the case comes from.
- Choose something not under ALREADY USED.`,K=new Set(["infection","disease","disorder","syndrome","chronic","acute","with","from","drug","drugs","cell","cells","injury","failure","effect","effects","induced","related","due","type","the","and","caused","because","increased","decreased","reduced","impaired"]);function j(t,s,e=""){const i=e.toLowerCase();return t.toLowerCase().split(/[^a-z0-9]+/).filter(o=>o.length>=4&&!K.has(o)&&!i.includes(o)).filter(o=>new RegExp(`\\b${o.replace(/(?:ia|a|s|e)$/,"")}`,"i").test(s))}function x(t,s,e=""){let i=s.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"),"this condition");for(const o of j(t,i,e))i=i.replace(new RegExp(`\\b${o.replace(/(?:ia|a|s|e)$/,"")}\\w*`,"gi"),"this");return i}const V=new Set(["about","after","because","before","being","between","cells","could","during","their","there","these","those","which","while","where","would","leads","cause","causes","result","results","normal","other","into","from","with","this","that"]);function S(t,s){const e=[...new Set(s.toLowerCase().match(/[a-z][a-z-]{4,}/g)??[])].filter(o=>!V.has(o)),i=t.toLowerCase();return e.filter(o=>i.includes(o)).length}function R(t,s){const e=s.slice(1).join(" "),i=S(e,e),o=S(t,e);return o>=4&&o>=i*.25}function $(t,s,e){let i,o=0;for(const l of t){const r=S(s(l),e);r>o&&(i=l,o=r)}return i}async function ne(t,s,e="general",i=3){for(let o=0;o<i;o+=1){const l=await _(t,s,e,o===i-1);if(l)return l}return null}async function _(t,s,e,i){const{objectives:o,illness:l}=await B(t,e);if(l.length===0)return null;const r=await p.buddyCase.findMany({where:{folderId:t},orderBy:{createdAt:"desc"},take:8,select:{condition:!0}}),d=l.map((u,L)=>`[${L+1}]
${u.text}`).join(`

---

`),m=o.length?`LEARNING OBJECTIVES:
${o.map(u=>u.text).join(`

`)}`:"LEARNING OBJECTIVES: (none found; use the passages)",w=r.length?`

ALREADY USED: ${r.map(u=>u.condition).join("; ")}`:"",{value:a}=await I({messages:[{role:"system",content:q},{role:"user",content:`The buddy's name is ${s}.

KIND OF ILLNESS: ${J[e]}

${m}

PASSAGES:

${d}${w}`}],temperature:.6,maxTokens:1400,prefer:"groq",reasoning:"low"},u=>Y.parse(u));if(!a.hasCondition||!a.condition||!a.presentation||!a.task||!a.keyPoints?.length)return null;const n=a.condition.trim(),h=a.presentation.trim();let f=a.task.trim(),c=a.objective?.trim()||null;const y=u=>j(n,u,h).length>0||u.toLowerCase().includes(n.toLowerCase());if(h.toLowerCase().includes(n.toLowerCase())||y(f)||c&&y(c)){if(!i)return null;f=x(n,f,h),c&&(c=x(n,c,h))}const k=$(l,u=>u.text,[n,...a.keyPoints].join(" "))??l[(a.source??1)-1]??l[0];return R(k.text,a.keyPoints)?{id:(await p.buddyCase.create({data:{folderId:t,condition:n,presentation:x(n,h,h),task:f,objective:c,keyPoints:JSON.stringify(a.keyPoints.map(u=>u.trim()).filter(Boolean)),sources:JSON.stringify([k,...l.filter(u=>u!==k),...o].map(u=>({chunkId:u.id,documentId:u.documentId,page:u.page})))}})).id}:null}const F=v({gist:C().default(!1),covered:N(O().int()).default([]),wellDone:g().max(600).default(""),improve:g().max(500).default(""),missed:g().max(500).default(""),hint:g().max(400).default("")}),z=`You are a friendly study buddy reading a student's attempt at explaining a study
case. This is low-stakes practice, not an exam: keywords, fragments and informal
words all count, and an honest attempt with the right general idea is a pass.
Reply with JSON only:
{"gist": boolean, "covered": [numbers], "wellDone": string, "improve": string, "missed": string, "hint": string}

- gist: true when the answer is a genuine attempt heading in the right direction:
  it names the condition or something close to it, or gets any key point, even as
  a keyword or two. False only when it is blank, off-topic, "idk", or wholly wrong.
- covered: the numbers of the KEY POINTS the answer touches. Be generous: a keyword,
  a synonym or a loose description of the idea counts.
- wellDone: one or two warm, specific sentences on what the answer got right.
- improve: one sentence on how to make the explanation stronger next time (a link
  to draw, a term to use, a step to add). Empty if it is already complete.
- missed: when gist is true, one or two plain sentences naming what the answer left
  out, so the student learns it. Empty when nothing is missing or gist is false.
- hint: when gist is false, one encouraging sentence nudging toward the idea without
  giving the answer away. Otherwise empty.`;function H(t,s){return S(t,s.join(" "))}function W(t){const s=t.covered.filter(e=>e>=1&&e<=t.total);return t.gist||s.length>=1||t.hits>=2}async function se(t,s){const e=await p.buddyCase.findUniqueOrThrow({where:{id:t}}),i=JSON.parse(e.keyPoints),o=JSON.parse(e.sources),r=(await p.chunk.findMany({where:{id:{in:o.map(a=>a.chunkId)}},select:{text:!0,repairedText:!0}})).map(a=>(a.repairedText??a.text).slice(0,T)).join(`

---

`),{value:d}=await I({messages:[{role:"system",content:z},{role:"user",content:`CASE: ${e.presentation}
QUESTION: ${e.task}
THE CONDITION: ${e.condition}

KEY POINTS:
${i.map((a,n)=>`${n+1}. ${a}`).join(`
`)}

COURSE MATERIAL:
${r}

STUDENT'S ANSWER:
${s.slice(0,3e3)}`}],temperature:0,maxTokens:800,prefer:"groq",reasoning:"low"},a=>F.parse(a)),m=[...new Set(d.covered.filter(a=>a>=1&&a<=i.length))].sort((a,n)=>a-n),w=W({gist:d.gist,covered:m,total:i.length,hits:H(s,i)});return await p.buddyCase.update({where:{id:e.id},data:{attempts:{increment:1},...w?{status:"solved",solvedAt:new Date}:{}}}),{cured:w,covered:m,keyPoints:i,feedback:d.wellDone.trim(),improve:d.improve.trim(),missedNote:w?d.missed.trim():"",hint:w?"":d.hint.trim(),condition:e.condition,sources:o}}const Q=v({lesson:g().min(40).max(3e3)}),X=`You teach a student the idea behind a study case, from their own course material,
so they can then explain the case themselves.
Reply with JSON only: {"lesson": string}

- lesson: markdown, in plain everyday words, as a friend who knows the course would
  explain it. One short opening sentence on the idea (do not repeat the objective
  word for word), then 3 to 5 bullets with what it needs, each explained, with the
  course's own terms in **bold** and what they mean. Use only the COURSE MATERIAL.
  Teach the idea in general, the way a lecture would; the student applies it to
  their case themselves, so never mention a patient or their findings.`,E=t=>`buddy.lesson.${t}`;async function oe(t){const s=await p.appSetting.findUnique({where:{key:E(t)}});if(s)return JSON.parse(s.value);const e=await p.buddyCase.findUniqueOrThrow({where:{id:t}}),i=[e.condition,...JSON.parse(e.keyPoints)].join(" "),o=JSON.parse(e.sources),l=await p.chunk.findMany({where:{documentId:{in:await A(e.folderId)}},select:{id:!0,documentId:!0,text:!0,repairedText:!0,page:!0,pageStart:!0}}),r=l.map(c=>({chunkId:c.id,documentId:c.documentId,page:c.page??c.pageStart})),d=new Map(l.map(c=>[c.id,(c.repairedText??c.text).slice(0,T)])),m=$(r,c=>d.get(c.chunkId)??"",i),w=[...m?[m]:[],...o.filter(c=>c.chunkId!==m?.chunkId&&d.has(c.chunkId))].slice(0,4),a=w.map((c,y)=>`[${y+1}]
${d.get(c.chunkId)}`).join(`

---

`),n=e.objective??e.task,{value:h}=await I({messages:[{role:"system",content:X},{role:"user",content:`LEARNING OBJECTIVE: ${n}

COURSE MATERIAL:

${a}`}],temperature:.3,maxTokens:1400,prefer:"groq",reasoning:"low"},c=>Q.parse(c)),f={lesson:h.lesson.trim(),source:m??w[0]??null};return await p.appSetting.upsert({where:{key:E(t)},create:{key:E(t),value:JSON.stringify(f)},update:{value:JSON.stringify(f)}}),f}async function ie(t){const s=JSON.parse(t.sources)[0],e=s?await p.chunk.findUnique({where:{id:s.chunkId},select:{text:!0,repairedText:!0}}):null;return e&&R(e.repairedText??e.text,JSON.parse(t.keyPoints))?!1:(await p.buddyCase.update({where:{id:t.id},data:{status:"retired"}}),!0)}export{se as m,ie as r,S as s,oe as t,ne as w};
