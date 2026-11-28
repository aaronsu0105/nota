import{p as i,g as a,t as b}from"./main-V-GLesso.js";import{w as M}from"./embedding-BMQ426qY.js";import{a as E}from"./llm-router-DOJ9AeyO.js";import{s as _}from"./outline-dates-qzu8oclx.js";import"./node-DLf4hNlh.js";const A=["exam","assignment","quiz","reading","project","weekly_task"],x=/^\d{4}-\d{2}-\d{2}$/,L=`You extract dated commitments and the class timetable from one course's syllabus.

Return a single JSON object and nothing else — no prose, no code fences:
{"courseStart": "YYYY-MM-DD"|null,
 "milestones": [{"title": string,
   "kind": "exam"|"assignment"|"quiz"|"reading"|"project"|"weekly_task",
   "dueDate": "YYYY-MM-DD", "weekNumber": number|null,
   "confidence": number, "evidence": string}],
 "schedule": [{"day": "Mon"|"Tue"|"Wed"|"Thu"|"Fri"|"Sat"|"Sun",
   "start": "HH:MM", "end": "HH:MM"|null,
   "type": "lecture"|"lab"|"tutorial"|"seminar"|"other",
   "location": string|null, "evidence": string}]}

Rules that matter more than completeness:
- Extract ONLY dates that are actually stated or that follow from a stated week
  number and the course start. Never estimate and never spread items evenly
  across a term. Returning an empty list is a correct answer.
- "evidence" is the verbatim sentence or table row the date came from. If you
  cannot quote it, you did not find it: leave the item out.
- "confidence" is your honest probability that this date is right and belongs to
  this title. A guessed year, an ambiguous "week 5" with no anchor, a number
  that might be a room or a page — all of these are below 0.5.
- "courseStart" is this course's own first day if the document states one.
- "weekNumber" is the week the source named, when it counted weeks rather than
  giving a date. Give the resolved dueDate as well; if you cannot resolve it,
  omit the item.
- Do not invent titles. Use the wording of the source.
- "schedule" is the recurring weekly class time the document states ("Lectures
  Mon/Wed 10:30–11:20, Room 2032"). One entry per day it meets. 24-hour times.
  Quote the line in "evidence". No stated timetable means an empty list.
- Readings assigned for a class ("read Ch. 3 before Tuesday") are milestones of
  kind "reading" dated the day of that class.`,Y=new Set(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]),k=/^([01]?\d|2[0-3]):[0-5]\d$/;function O(n){if(!Array.isArray(n))return[];const e=[];for(const t of n)!t||!Y.has(String(t.day))||typeof t.start!="string"||!k.test(t.start)||typeof t.evidence!="string"||t.evidence.trim().length<6||e.push({day:t.day,start:t.start.padStart(5,"0"),end:typeof t.end=="string"&&k.test(t.end)?t.end.padStart(5,"0"):null,type:typeof t.type=="string"?t.type.slice(0,20):"other",location:typeof t.location=="string"?t.location.trim().slice(0,80):null,evidence:t.evidence.trim().slice(0,300)});return e.slice(0,14)}function N(n){if(typeof n!="string"||!x.test(n))return!1;const e=new Date(`${n}T00:00:00Z`);return!Number.isNaN(e.getTime())&&e.toISOString().slice(0,10)===n}function R(n){const e=n;if(!Array.isArray(e?.milestones))throw new Error("milestones array missing");const t=new Set,c=[];for(const s of e.milestones){if(typeof s?.title!="string"||!s.title.trim()||!N(s.dueDate)||typeof s.evidence!="string"||s.evidence.trim().length<8)continue;const u=`${s.dueDate}|${s.title.trim().toLowerCase()}`;t.has(u)||(t.add(u),c.push({title:s.title.trim().slice(0,200),kind:A.includes(s.kind)?s.kind:"reading",dueDate:s.dueDate,weekNumber:typeof s.weekNumber=="number"&&Number.isFinite(s.weekNumber)?Math.trunc(s.weekNumber):null,confidence:Math.max(0,Math.min(1,Number(s.confidence)||0)),evidence:s.evidence.trim().slice(0,500)}))}return{courseStart:N(e.courseStart)?e.courseStart:null,milestones:c,schedule:O(e.schedule)}}async function q(n){const e=await i.document.findUnique({where:{id:n.documentId},select:{id:!0,fileName:!0,rawText:!0,folder:{select:{courseId:!0}}}});if(!e)throw new Error("No such document.");let t=e.rawText??"";if(t.trim()||(t=(await i.chunk.findMany({where:{documentId:e.id},orderBy:{ordinal:"asc"},select:{text:!0}})).map(d=>d.text).join(`

`)),!t.trim())throw new Error("This document has no readable text.");const c=await M.prepareSyllabus({text:t}),s=_(c.markdown,e.fileName),u=await i.chunk.findMany({where:{documentId:e.id},select:{id:!0,ordinal:!0,charStart:!0,charEnd:!0}}),f=[];for(const o of s){const d=o.charStart,v=d+o.text.length,T=u.filter(r=>(r.charStart??0)<v&&(r.charEnd??0)>d).map(r=>r.id),D=n.courseStart?`

If a date is relative (for example "week 3"), this course starts on ${n.courseStart}.`:a.DEFAULT_COURSE_START_DATE?`

If a date is relative and the document gives no start, assume ${a.DEFAULT_COURSE_START_DATE}.`:`

If the document states no start date, do not resolve relative dates like "week 3".`,{value:l,text:I}=await E({messages:[{role:"system",content:L+D},{role:"user",content:o.text.slice(0,24e3)}],temperature:0,maxTokens:a.SYLLABUS_MAX_TOKENS},R),m=e.folder?.courseId??await C(o.courseName),w=await i.syllabus.findFirst({where:{documentId:e.id,courseName:o.courseName},select:{id:!0}}),y={documentId:e.id,courseName:o.courseName,courseId:m,courseStart:n.courseStart??l.courseStart,timeZone:n.timeZone??a.DEFAULT_TIME_ZONE,rawOutput:a.SYLLABUS_STORE_RAW_OUTPUT?I.slice(0,2e4):null,schedule:b(l.schedule)},h=w?await i.syllabus.update({where:{id:w.id},data:y}):await i.syllabus.create({data:y});let g=0;for(const r of l.milestones){r.confidence<a.SYLLABUS_CONFIDENCE_MIN&&(g+=1);const p=`${r.dueDate}-${U(r.title)}`.slice(0,80),S={syllabusId:h.id,sourceDocumentId:e.id,title:r.title,kind:r.kind,dueDate:r.dueDate,weekNumber:r.weekNumber,courseLabel:s.length>1?o.courseName:null,sourceChunkIds:b(T.slice(0,10)),confidence:r.confidence,evidence:r.evidence};await i.milestone.upsert({where:{courseId_sourceKey:{courseId:m,sourceKey:p}},create:{courseId:m,sourceKey:p,status:"pending",...S},update:S})}f.push({id:h.id,courseName:o.courseName,courseStart:h.courseStart,milestones:l.milestones.length,belowThreshold:g})}return{documentId:e.id,syllabi:f,stats:c.stats}}function U(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"milestone"}async function C(n){const e=await i.course.findFirst({where:{title:n}});return e?e.id:(await i.course.create({data:{title:n}})).id}export{L as SYLLABUS_SYSTEM_PROMPT,q as ingestSyllabus,R as validateSyllabus};
