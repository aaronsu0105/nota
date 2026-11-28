import{p as l,o as b,s as p}from"./main-V-GLesso.js";import{a as w}from"./llm-router-DOJ9AeyO.js";import"./node-DLf4hNlh.js";const y=/^(?:course (?:outline|syllabus|information|schedule|overview)|syllabus|outline|overview|introduction|course introduction|untitled|lecture slides|slides|notes|reading|readings)$/i,T=t=>y.test(t.trim()),h=1;function S(t){return t.replace(/\.(pdf|docx?|pptx?|txt|md|markdown|epub)$/i,"").replace(/\(\s*\d+\s*\)/g," ").replace(/\((?:to post|students?|shared|final|draft|copy)\)/gi," ").replace(/[_]+/g," ").replace(/\b(?:brightspace|students?|shared|to post|final|approved|fw\s?\d{4}[-–]\d{2,4}|fall|winter|\d{4}[-–]\d{2,4}|20\d\d(?:sept?\d*)?)\b/gi," ").replace(/\b[A-Za-z]{2,8}\s?\d{4}[A-Za-z]?\b/g," ").replace(/\b(?:[A-Z]{1,3}\.?\s){1,2}(?=students?\b)/g," ").replace(/\b(?:L|Lec|Lecture|Slides)[\s#-]*0*(\d{1,2})\b/gi,"Lecture $1").replace(/\bWeek\s*0*(\d{1,2})\b/gi,"Week $1").replace(/\b(?:full\s+)?lecture\s+slides\b|\bpresentation\b|\bpre[\s-]?readings?\b/gi," ").replace(/(?<=[a-z0-9])-(?=[a-z])/gi," ").replace(/[-–—:,\s]+$/g,"").replace(/^[-–—:,\s]+/g,"").replace(/\s+/g," ").trim()||t.replace(/\.[a-z0-9]{2,5}$/i,"")}function v(t){let e={};if(typeof t.meta=="string")try{e=JSON.parse(t.meta)}catch{e={}}else t.meta&&(e=t.meta);const r=e.smartTitle;return r?.title?{title:r.title,label:r.label??null}:{title:S(t.fileName),label:null}}function E(t){const{title:e,label:r}=v(t);return r?`${r} · ${e}`:e}const L=`You name documents in a student's study library so they can see each lecture's topic at a glance.
Reply with JSON only: {"title": string, "label": string | null}

title: the topic in 2 to 7 words, as the slides themselves would title it
("Drug Absorption and Distribution", "Resting Membrane Potential", "Comparing
Sequences", "The Physical Storage of a Database"). Use the first page's own
heading when it names the topic. Never the course name or code, the instructor,
the university, a date, "Lecture", "Slides", "Presentation", "Pre-reading",
"Students" or other file noise. A syllabus, course outline, schedule or other course-wide document: title it
after the course it belongs to, by the course's own name on the page, ending in
"outline" ("Medical Bioinformatics outline", "General Pathology outline"), or
"schedule" for a schedule; never just "Course outline". Its label is then the
course code as written ("MBI 3100", "PATHOL 3500"), or null if none is given.
A transcript or notes: the topic they cover.

label: the lecture, week or part it is, written "Lecture 5", "Week 2" or
"Part 1", when the file name or first page states one ("L05" → "Lecture 5",
"PD II" → "Lecture 2", "Week 3 & 4" → "Weeks 3–4", "LECTURE #6" → "Lecture 6").
null when nothing states it; never guess.`,$=b({title:p().min(2).max(80),label:p().max(24).nullish()});async function m(t){const e=await l.document.findUnique({where:{id:t},select:{id:!0,fileName:!0,meta:!0,rawText:!0,status:!0,updatedAt:!0,folder:{select:{name:!0}}}});if(!e||e.status!=="ready")return null;let r={};try{r=JSON.parse(e.meta)}catch{r={}}const n=((await l.chunk.findMany({where:{documentId:t},orderBy:{ordinal:"asc"},take:3,select:{text:!0,repairedText:!0}})).map(s=>s.repairedText??s.text).join(`

`)||e.rawText||"").slice(0,1800),o=typeof r.title=="string"&&!/powerpoint presentation|^untitled/i.test(r.title)?r.title:"";try{const{value:s}=await w({messages:[{role:"system",content:L},{role:"user",content:`FILE NAME: ${e.fileName}
${o?`PDF TITLE: ${o}
`:""}${e.folder?`FOLDER: ${e.folder.name}
`:""}
FIRST PAGES:
${n}`}],temperature:0,maxTokens:120,prefer:"groq",reasoning:"low"},g=>$.parse(g)),d={title:s.title.trim().replace(/\.$/,""),label:s.label?.trim()||null,v:h,course:!0},f=await l.document.findUnique({where:{id:t},select:{meta:!0}});let c={};try{c=JSON.parse(f?.meta??"{}")}catch{c={}}return await l.document.update({where:{id:t},data:{meta:JSON.stringify({...c,smartTitle:d}),updatedAt:e.updatedAt}}),d}catch{return null}}let i=null,u=0;function x(){return i||(i=(async()=>{const e=(await l.document.findMany({where:{status:"ready"},select:{id:!0,meta:!0}})).filter(a=>{try{const n=JSON.parse(a.meta).smartTitle;return(n?.v??0)<h||T(n?.title??"")&&!n?.course}catch{return!0}}).map(a=>a.id);let r=0;for(const a of e){let n=await m(a);n||(await new Promise(o=>setTimeout(o,4e3)),n=await m(a)),n&&(r+=1)}return r<e.length&&u<3?(u+=1,setTimeout(()=>void x().catch(()=>{}),12e4).unref?.()):r===e.length&&(u=0),r})().finally(()=>{i=null}),i)}export{S as cleanName,E as displayTitle,T as isGenericTitle,v as smartTitleOf,m as titleDocument,x as titleLibrary};
