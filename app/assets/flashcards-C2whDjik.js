import{p as T,e as ne,o as N,a as L,s as E,n as O,u as me}from"./main-CJdVn3aH.js";import{w as V}from"./embedding-C1Zjxi2X.js";import{a as R}from"./llm-router-CIbfePBe.js";import{i as B,s as se}from"./study-mode-shXXLD-U.js";import{withTranscripts as Y}from"./transcript-pairs-CI6HDWrQ.js";class C extends Error{constructor(t,n,i){super(i),this.status=t,this.code=n,this.name="PageRenderError"}}const fe=24,j=new Map;function pe(e){const t=j.get(e);if(t)return j.delete(e),j.set(e,t),t}function ge(e,t){if(j.set(e,t),j.size>fe){const n=j.keys().next().value;n!==void 0&&j.delete(n)}}function ot(e){for(const t of j.keys())t.startsWith(`${e}:`)&&j.delete(t)}async function at(e){const t=await T.document.findUnique({where:{id:e.documentId},select:{id:!0,filePath:!0,fileName:!0,kind:!0}});if(!t)throw new C(404,"not_found","Document not found");if(t.kind!=="pdf")throw new C(415,"not_a_pdf",`${t.fileName} is ${t.kind}, which has no pages to render.`);if(!ne(t.filePath))throw new C(409,"source_missing",`The original file for ${t.fileName} is no longer at ${t.filePath}. Re-add it to the library to see page images.`);const n=e.scale??2,i=`${t.id}:${e.page}:${n}:${e.format??"webp"}`;let o=pe(i);o||(o=await V.renderPage({path:t.filePath,page:e.page,scale:n,format:e.format}),ge(i,o));const a=(await T.chunk.findMany({where:{documentId:t.id,page:e.page,NOT:{bbox:null}},select:{id:!0,bbox:!0},orderBy:{ordinal:"asc"}})).flatMap(r=>{const u=G(r.bbox);return u?[{chunkId:r.id,bbox:u}]:[]});let d=null;if(e.chunkId){const r=await T.chunk.findUnique({where:{id:e.chunkId},select:{documentId:!0,page:!0,bbox:!0}});r&&r.documentId===t.id&&r.page===e.page&&(d=G(r.bbox))}return{...o,documentId:t.id,bbox:d,bboxes:a}}function G(e){if(!e)return null;try{const t=JSON.parse(e);return!Array.isArray(t)||t.length!==4?null:t.every(n=>typeof n=="number"&&Number.isFinite(n))?t:null}catch{return null}}const z=new Map;async function it(e,t){const n=`${e}:${t}`,i=z.get(n);if(i)return i;const o=await T.document.findUnique({where:{id:e},select:{id:!0,filePath:!0,fileName:!0,kind:!0}});if(!o)throw new C(404,"not_found","Document not found");if(o.kind!=="pdf")return{page:t,pageWidth:0,pageHeight:0,figures:[]};if(!ne(o.filePath))throw new C(409,"source_missing",`The original file for ${o.fileName} is missing.`);const s=await V.pageFigures({path:o.filePath,page:t});return z.set(n,s),s}function rt(e){for(const t of z.keys())t.startsWith(`${e}:`)&&z.delete(t)}const oe=/learning objectives?|learning outcomes?|by the end of (?:this|the) (?:lecture|session|class|module|week)|you (?:will|should) be able to|objectives?:/i,we=new RegExp(["office hours?","grad(?:e|ing) (?:breakdown|scheme|distribution)","% of (?:the |your )?(?:final|course) grade","late (?:penalty|submissions?)","academic (?:integrity|offen[cs]es?|accommodations?)","accessibility services","course (?:outline|syllabus|website|coordinator)","required (?:reading|text(?:book)?)","brightspace","e-?mail","@[a-z0-9-]+\\.(?:ca|com|edu|org)","teaching assistants?","copyright","all rights reserved","doi:","\\bet al\\.","retrieved from","midterm (?:date|exam(?:ination)? (?:will|is))","due (?:date|on|by)","submit(?:ted)? (?:via|on|through)","zoom link","attendance"].join("|"),"gi");function be(e){const t=e.match(we)?.length??0;return t>=2||t>=1&&e.length<400}function ye(e){return/syllabus|course outline|course information|course schedule/i.test(e)}const J=/^(?:to |be able to |\d+\s*)?(?:describe|explain|list|identify|compare|contrast|define|discuss|outline|differentiate|distinguish|recogni[sz]e|understand|apply|calculate|predict|interpret|summari[sz]e|name|classify|relate|evaluate|analy[sz]e|state|recall|illustrate|know|demonstrate|determine|characteri[sz]e|appreciate|use|design|construct|assess|propose|justify|label|draw|compute|estimate)\b/i;function X(e,t=24){const n=[],i=new Set;for(const o of e){const s=o.search(oe);if(s<0)continue;const a=o.slice(s).split(`
`).slice(1,30),d=[];for(const r of a){const u=/^\s*(?:\d{1,2}\s*[.)]?|[•▪◦●\-–*])\s+/.test(r),l=r.replace(/^\s*(?:\d{1,2}\s*[.)]?|[•▪◦●\-–*])\s+/,"").trim();l&&(u||J.test(l)||d.length===0?d.push(l):d[d.length-1]+=` ${l}`)}for(const r of d){const u=r.replace(/\s+/g," ").replace(/\s+[A-Z]{3,}\s?\d{3,4}\b.*$/,"").replace(/^(.{20,}?[.?!])\s+[A-Z].*$/,"$1").trim();if(u.length<12||u.length>300||!J.test(u)||/^\w+\s*:/.test(u))continue;const l=u.toLowerCase();if(!i.has(l)&&(i.add(l),n.push(u),n.length>=t))return n}}return n}async function ve(e){const t=await T.document.findMany({where:{id:{in:e}},select:{id:!0,fileName:!0}}),n=new Set(t.filter(r=>ye(r.fileName)).map(r=>r.id)),o=(await T.chunk.findMany({where:{documentId:{in:e}},select:{id:!0,documentId:!0,ordinal:!0,text:!0,repairedText:!0,page:!0,pageStart:!0,pageEnd:!0},orderBy:[{documentId:"asc"},{ordinal:"asc"}]})).map(r=>({id:r.id,documentId:r.documentId,ordinal:r.ordinal,text:r.repairedText??r.text,page:r.page??r.pageStart,pageEnd:r.pageEnd})),s=X(o.filter(r=>!n.has(r.documentId)).map(r=>r.text)),a=s.length?s:X(o.map(r=>r.text));return{passages:o.filter(r=>!n.has(r.documentId)&&!be(r.text)&&!oe.test(r.text.slice(0,200))),objectives:a}}function ke(e){return e.length?`LEARNING OBJECTIVES:
${e.map((t,n)=>`${n+1}. ${t}`).join(`
`)}`:"LEARNING OBJECTIVES: (none found; choose what a lecture like this would examine)"}const xe=[/\b[A-Za-z]{3,}(?:ase|ases|ine|ines|ide|ides|ate|ates|ol|one|in|ins|itis|emia|aemia|oma|osis|opathy|cyte|cytes|blast|plasty|mab|nib|pril|sartan|olol|statin|cillin|mycin|azole|vir)\b/g,/\b(?:[A-Z]{1,5}-?\d{1,3}[A-Za-z]?|[A-Z]{2,6}-[αβγδκA-Za-z0-9]{1,3}|p\d{2,3})\b/g,/\b[A-Z]{2,6}s?\b/g,/\b(?:is|are) (?:a|an|the) [a-z]+|\b(?:defined as|refers to|known as|also called|stands for)\b/gi,/\*\*[^*]{2,60}\*\*/g];function Se(e){if(e.length<80)return 0;let t=0;for(const n of xe)t+=e.match(n)?.length??0;return t/e.length*1e3}const P=12e3,Ee=6;function je(e,t,n=[]){const i=Math.min(Ee*P,Math.max(P,t*700)),o=n.map(c=>b(c)).filter(c=>c.length>3),s=c=>{const h=b(c);return o.filter(m=>h.includes(m)).length},a=e.map(c=>({p:c,score:Se(c.text)/(1+s(c.text))})).filter(c=>c.score>0).sort((c,h)=>h.score-c.score),d=[];let r=0;for(const{p:c}of a){const h=Math.min(c.text.length,2500);r+h>i||(d.push({...c,text:c.text.slice(0,2500)}),r+=h)}d.sort((c,h)=>c.documentId.localeCompare(h.documentId)||c.ordinal-h.ordinal);const u=[];let l=[],p=0;for(const c of d)p+c.text.length>P&&l.length&&(u.push(l),l=[],p=0),l.push(c),p+=c.text.length;return l.length&&u.push(l),u}const W=N({front:E().min(1).max(120),back:E().min(2).max(500),quote:E().max(300).nullish(),category:E().max(30).nullish(),source:O().int().min(1).max(40).nullish(),objective:O().int().min(0).max(40).nullish(),example:E().max(240).nullish(),concept:E().max(400).nullish()}),H=N({cards:L(me())}),Te=`You make flashcards for MEMORISATION from a student's course material.
Reply with JSON only: {"cards": [{"front": string, "back": string, "example": string, "quote": string, "category": string, "objective": number, "source": number}]}

Cards serve the LEARNING OBJECTIVES: make cards for the items a student needs
to meet them, and give that objective's number. A clearly examinable item that
no objective quite fits may still have a card, with objective 0. Never make
cards from course admin (instructors, dates, grading, course codes,
references, reading lists, slide titles).

Make cards for specific, named things a student must know by name: proteins,
enzymes, receptors, genes, hormones, drugs and drug classes, chemicals,
diseases and syndromes, pathogens, cells and structures, named tests, signs,
classifications, abbreviations, AND named concepts with a precise meaning:
parameters and quantities ("Bioavailability (F)", "Volume of distribution
(Vd)", "Half-life", "Therapeutic index"), types and kinds ("Partial agonist",
"Competitive antagonist"), named effects and processes ("First-pass effect",
"Facilitated diffusion"), laws and formulas.

A process or mechanism gets a card by its NAME, defined on the back. Do NOT
make "why", "how" or comparison questions as fronts, and do NOT make a card
for a generic word ("cell", "energy", "drug").

- front: the name or term alone, as the material writes it, with its
  abbreviation in brackets if it has one: "Tumour necrosis factor-α (TNF-α)".
  No question words, no "What is".
- back: what it means, in PLAIN WORDS, at most 35 words: the way you would
  explain it to a friend who has never taken the course. Say what it is and
  what it does or why it matters, in everyday language and full sentences.
  Begin with what kind of thing it is ("A type of cell death where…", "A
  protein that…"); never with "It" or the term itself. Every word a
  first-year student might not know is replaced with an everyday word or
  explained in a few words in brackets ("vasculitis (inflamed blood
  vessels)", "fibrin (the stringy protein blood clots are made of)"). No
  abbreviations, symbols or arrows ("↑", "→"). Example: not "Autosomal recessive; ↓ protease inhibitor
  activity; emphysema, cirrhosis" but "An inherited condition where the body
  lacks a protein that protects the lungs and liver, so both get damaged
  over time (lung damage called emphysema, liver scarring called cirrhosis)."
  Only facts the PASSAGES state; never add outside knowledge.
- example: one concrete example that makes it stick, at most 25 words, in
  plain words: where it shows up, a classic case, a drug that does it, what it
  looks like in a patient ("e.g. Statins like atorvastatin block it to lower
  cholesterol."). Prefer the passages' own examples; otherwise a standard,
  well-known textbook example. Never a vague restatement of the back.
- objective: the number of the LEARNING OBJECTIVE the card serves (0 only when
  there are no objectives).
- quote: the words in the passage that define or describe it, copied exactly,
  at most 15 words.
- category: one lower-case word: protein, enzyme, receptor, transporter, gene, hormone,
  drug, chemical, disease, pathogen, structure, cell, test, abbreviation or term.
- source: the number of the passage it comes from.
- One card per item; skip an item already under ALREADY HAVE.`,U=4;function Ie(e){const t=[b(e)];for(const n of e.matchAll(/\(([^)]+)\)/g))t.push(b(n[1]));return t.filter(n=>n.length>=2)}const ae=new Set("about above after also among and are because been before being between both but can cause caused causes during each from have into its more most not only other over same some such than that the their them then there these they this those through under used using very what when where which while with within without".split(" "));function ie(e){return e.length>6?e.slice(0,6):e}function A(e){const t=b(e).split(" ").filter(n=>n.length>=4&&!ae.has(n));return new Set(t.map(ie))}const $e=/what to remember|by the end of this|learning (?:objectives|outcomes)|\boutline\b|\bsummary\b|\bagenda\b|\bcontents\b|\breview\b|\brecap\b/i;function re(e,t){const n=b(t),i=Ie(e.front).some(r=>n.includes(r)),o=A(e.back),s=new Set(n.split(" ").filter(r=>r.length>=4).map(ie));let a=0;for(const r of o)s.has(r)&&(a+=1);const d=(o.size?a/o.size:0)+(i?.5:0);return $e.test(t)?d*.6:d}async function Ae(e,t,n){const i=t.page??t.pageStart,o=t.pageEnd??i;if(!i||!o||o<=i||!n||!/\.pdf$/i.test(n))return i;try{const{pages:s}=await V.pageTexts({path:n,first:i,last:o});let a=i,d=-1;for(const r of s){const u=re(e,r.text);u>d&&(a=r.page,d=u)}return a}catch{return i}}function K(e,t,n){let i,o=-1;for(const s of t){const a=re(e,s.text)+(s===n?.15:0);a>o&&(i=s,o=a)}return o<.35&&n?n:i??n}function b(e){return e.toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9α-ω]+/g," ").trim()}async function Ne(e,t,n,i,o){const s=e.map((u,l)=>`[${l+1}]
${u.text}`).join(`

---

`),a=[ke(o),n?`THE STUDENT WANTS CARDS ON: ${n}`:"",i.length?`ALREADY HAVE: ${i.slice(-80).join("; ")}`:""].filter(Boolean).join(`

`),{value:d}=await R({messages:[{role:"system",content:Te},{role:"user",content:`Make ${t} cards (fewer only if the passages truly hold fewer distinct named items).

PASSAGES:

${s}${a?`

${a}`:""}`}],temperature:.2,maxTokens:Math.min(3200,160+t*110),prefer:"groq",reasoning:"low"},u=>H.parse(u)),r=[];for(const u of d.cards){const l=W.safeParse(u);if(!l.success)continue;const p=l.data.front.trim(),c=l.data.back.trim(),h=l.data.objective?o[l.data.objective-1]:void 0,m={front:p,back:`${c} ${l.data.quote??""}`.trim()},g=K(m,e,e[(l.data.source??1)-1]??e[0]);r.push({front:p,back:c,example:l.data.example?.trim().replace(/^e\.g\.,?\s*/i,"")||null,objective:h??null,category:l.data.category?.trim().toLowerCase()||null,documentId:g?.documentId??null,sourceChunkId:g?.id??null,page:g?.page??null,sourceMethod:U,match:m.back})}return r}const Me=`You make flashcards for ONE SECTION of a lecture, the way a great tutor drills it
before an exam: everything the section's learning objectives ask, from the
PASSAGES only.
Reply with JSON only: {"cards": [{"front": string, "back": string, "concept": string, "example": string, "quote": string, "category": string, "objective": number, "source": number}]}

Cover EVERY objective listed for the section, AND every real course term on
the SLIDE TERMS list (the named terms in the section's bullet points), AND
the examples the lecture uses. For each objective make:
- TERM cards for the named things it needs: terms, parameters, drugs and drug
  classes, receptors, enzymes, diseases, named effects, laws and formulas.
  front: the name alone, as the lecture writes it, abbreviation in brackets
  only when it has one: "Bioavailability (F)", "Tight junctions". No question
  words.
  back: what it is and why it matters, in plain words, at most 40 words,
  beginning with what kind of thing it is ("The fraction of a dose that…").
  Use the lecture's real numbers and formulas where it gives them.
  concept: the idea behind it, at most 40 words: how it works or what drives
  it, how it connects to the rest of the section, and why it matters
  ("Oral drugs pass the gut wall and liver first, so some is broken down
  before reaching the blood; this is why oral doses are often higher than
  IV doses."). Not a repeat of the back. Only on term cards; "" on concept
  cards.
- One CONCEPT card for every objective that is more than a plain definition
  (explain, describe, list, compare, predict, apply, evaluate, calculate).
  A "list" objective's concept card asks for the whole list.
  front: the exam question a tutor would check it with, at most 14 words,
  ending in "?": "Why does the first-pass effect lower oral bioavailability?"
  back: the answer as a chain of steps joined by "→", in plain words, at most
  45 words (the steps themselves, never the labels "cause" or "effect"); a
  comparison as "X: … · Y: …"; a calculation as the formula, then the
  lecture's numbers worked through.

- EXAMPLE cards for the named examples the section uses to illustrate a
  point: a drug, a disease, an organism, a patient case, a classic experiment
  or a worked case. front: the example's name, then what it is an example of
  in brackets: "Morphine (high first-pass drug)". back: what the example shows
  and why it fits, at most 35 words. category: example.
- A TERM card for every entry on the SLIDE TERMS list that is a real course
  term (skip headings, admin and everyday words), with its objective's number,
  or 0 when no objective fits.

What NOT to card:
- Trivia: product, instrument or software names, commands and file names,
  dates, people, course admin.
- Everyday words ("dose", "drug identity", "patient", "route"), list
  headings, slide titles, course admin.
- What OTHER SECTIONS cover: they get their own cards.
- The same thing twice: one card per idea. A term and its abbreviation are
  one card; a concept question whose answer is just a term card's back is
  not needed; nothing under ALREADY HAVE again, in any wording.

For every card:
- Plain words first. A course word a first-year might not know is explained
  in a few words in brackets: "first-pass effect (the liver breaking some of
  the drug down before it reaches the body)".
- example: one real-life application, at most 25 words: a patient, an
  everyday situation, a classic drug ("A patient on oral morphine needs a
  higher dose than by IV, because the liver clears much of it first.").
- Only what the PASSAGES state; never outside facts.
- objective: the number of the objective it serves (0 when none fits).
- THE STUDENT'S INSTRUCTIONS, when given, come first: what to include, leave
  out, or how to write. KEY WORDS and KEY EXAMPLES the student listed always
  get a card when the passages mention them.
- quote: the passage's own words for it, copied exactly, at most 15 words.
- category: one lower-case word: term, concept, example, drug, receptor,
  enzyme, protein, disease, cell, structure, test, formula or abbreviation.
- source: the number of the passage it comes from.`;function Oe(e){return b(`${e.title} ${e.objectives.join(" ")}`)}async function Re(e,t,n){const i=`${n?`${n} `:""}${e.title} ${e.objectives.join(" ")}`.slice(0,600),o=await se(i,{documentIds:e.documentIds,topK:10}),s=[];let a=0;for(const d of o){const r=t.get(d.id);if(!r)continue;const u=r.text.slice(0,2500);a+u.length>P||(s.push({...r,text:u}),a+=u.length)}return s.sort((d,r)=>d.documentId.localeCompare(r.documentId)||d.ordinal-r.ordinal)}function Ce(e){const t=n=>[...new Set((n??[]).map(i=>i.trim()).filter(i=>i.length>=2))].slice(0,80);return{instructions:e?.instructions?.trim()||null,keywords:t(e?.keywords),examples:t(e?.examples)}}const Pe=/^(?:learning (?:objectives|outcomes)|objectives|outline|overview|summary|review|recap|references?|questions?|introduction|agenda|contents|today|announcements?|readings?|key points?|conclusions?|background|examples?|figure|table|notes?|slide \d+)$/i;function De(e,t=40){const n=[],i=new Set;for(const o of e.split(/\r?\n/)){let s=o.trim();const a=/^(?:[•▪◦●○■□➢►‣⁃·*\-–—]|\d{1,2}[.)])\s+/.exec(s);if(a&&(s=s.slice(a[0].length)),!s||s.length>90)continue;const d=s.split(/\s*(?::|=|\s[–—-]\s)\s*/)[0].replace(/[.,;:]+$/,"").trim(),r=d.split(/\s+/).length,u=d.length<s.length;if(r<1||r>5||d.length<3||d.length>50||!a&&!u&&r>4||!/[A-Za-z]{3}/.test(d)||/^[a-z]/.test(d)&&!u&&!a||/[.!?]$/.test(d)||Pe.test(d)||/^(?:the|a|an|this|these|it|we|you|why|how|what|when|which|so|and|but|in|of|to|for|with)\b/i.test(d))continue;const l=b(d);if(!(!l||i.has(l))&&(i.add(l),n.push(d),n.length>=t))break}return n}async function qe(e,t,n,i,o,s,a={instructions:null,keywords:[],examples:[]},d=[]){const r=n.map((h,m)=>`[${m+1}]
${h.text}`).join(`

---

`),u=[`LECTURE: ${e.lectureName}`,`SECTION: ${e.title}`,`ITS OBJECTIVES:
${e.objectives.map((h,m)=>`${m+1}. ${h}`).join(`
`)}`,t.length?`OTHER SECTIONS (not this one's job): ${t.join("; ")}`:"",d.length?`SLIDE TERMS (from its bullet points): ${d.join("; ")}`:""].filter(Boolean).join(`
`),l=[a.instructions?`THE STUDENT'S INSTRUCTIONS: ${a.instructions}`:"",a.keywords.length?`KEY WORDS the student listed (card each one these passages mention): ${a.keywords.join("; ")}`:"",a.examples.length?`KEY EXAMPLES the student listed (card each one these passages mention): ${a.examples.join("; ")}`:"",s?`THE STUDENT WANTS CARDS ON: ${s}`:"",o.length?`ALREADY HAVE: ${o.slice(-80).join("; ")}`:""].filter(Boolean).join(`

`),{value:p}=await R({messages:[{role:"system",content:Me},{role:"user",content:`${u}

Make about ${i} cards covering every objective, slide term and example above (fewer only if the passages truly hold less).

PASSAGES:

${r}${l?`

${l}`:""}`}],temperature:.2,maxTokens:Math.min(6e3,200+i*130),prefer:"groq",reasoning:"low"},h=>H.parse(h)),c=[];for(const h of p.cards){const m=W.safeParse(h);if(!m.success)continue;const g=ce(m.data.front),x=m.data.back.trim().replace(/\s*\((?:cause|effect|consequence)\)/gi,""),y=m.data.objective?e.objectives[m.data.objective-1]:void 0,w=m.data.objective===0,k={front:g,back:`${x} ${m.data.quote??""}`.trim()},v=K(k,n,n[(m.data.source??1)-1]??n[0]);c.push({front:g,back:x,example:m.data.example?.trim().replace(/^e\.g\.,?\s*/i,"")||null,concept:m.data.concept?.trim()||null,objective:y??(w?null:e.objectives[0]??null),category:m.data.category?.trim().toLowerCase()||null,documentId:v?.documentId??null,sourceChunkId:v?.id??null,page:v?.page??null,sourceMethod:U,lecture:e.lectureName,section:e.title,match:k.back})}return c}function ze(e,t){if(e.trim().endsWith("?")||!/^(?:to\s+)?(?:describe|explain|list|summari[sz]e|outline|predict|analy[sz]e|compare|identify|discuss|evaluate|define|understand)\b/i.test(e.trim()))return!1;const n=A(e);return t.some(i=>{const o=A(i);let s=0;for(const a of n)o.has(a)&&(s+=1);return n.size>0&&s/n.size>=.8})}function ce(e){const t=e.trim().replace(/\[([^\]]+)\]/g,"($1)").replace(/\s+(?:definition|concept|overview|explained|(?:calculation\s+)?examples?)$/i,"").trim(),n=t.match(/^(.*?)\s*\(([^)]+)\)$/);return n&&b(n[1])===b(n[2])?n[1].trim():t}const Le=new Set(["dose","doses","drug","drugs","drug identity","patient","patients","route","cell","cells","energy","body","overview","summary","introduction","key points","key terms","definition","definitions","example","examples","learning objectives","objectives","review","recap","outline","background","conclusion","conclusions"]);function le(e){const t=b(e);return t.length<2||Le.has(t)}const Be={matrices:"matrix",vertices:"vertex",indices:"index",analyses:"analysis",hypotheses:"hypothesis",diagnoses:"diagnosis",bacteria:"bacterium",nuclei:"nucleus",foci:"focus",stimuli:"stimulus",mitochondria:"mitochondrion",criteria:"criterion"};function Z(e){return b(e).split(" ").filter(t=>t.length>=2&&!ae.has(t)&&t!=="of"&&t!=="the"&&t!=="an").map(t=>Be[t]??t).map(t=>t.length>4?t.replace(/(?:ies|es|s)$/,""):t).sort()}function Q(e){const t=e.replace(/\[([^\]]+)\]/g,"($1)"),n=t.trim().endsWith("?"),i=[b(t)];for(const o of t.matchAll(/\(([^)]+)\)/g)){const s=b(o[1]);s.length>=2&&i.push(s)}return{names:i.filter(o=>o.length>=2),words:Z(t.replace(/\(.*?\)/g," ")).join(" "),question:n?new Set(Z(t).filter(o=>o.length>=4)):null}}function D(e,t){const n=Q(e),i=Q(t);if(n.question&&i.question){if(n.question.size===0||i.question.size===0)return!1;let o=0;for(const s of n.question)i.question.has(s)&&(o+=1);return o/(n.question.size+i.question.size-o)>=.6}return n.question||i.question?!1:n.names.some(o=>i.names.includes(o))?!0:n.words.length>0&&n.words===i.words}const Ye=`You check the flashcards made for ONE section of a lecture before a student
drills them for an exam. Keep only the cards worth drilling.
Reply with JSON only: {"keep": [numbers]}

Keep a card when an exam on the section's OBJECTIVES could ask it: a term,
mechanism, comparison, number or formula the objectives need.
Always keep: a card for a term on the SLIDE TERMS list, an example card (a
drug, disease, organism or case the lecture uses to illustrate), and a card
for anything under THE STUDENT ASKED FOR.
Drop a card that is:
- trivia: a product, instrument or software name, a command or file name, a
  date, a person, course admin;
- an everyday word or a heading ("Dose", "Drug identity", "Overview");
- the same idea as another card in this list or under ALREADY HAVE, in other
  words: a term and its abbreviation, two questions asking the same, a
  comparison written once as a term ("X vs Y") and once as a question, a
  question that only asks what a term card already defines. Keep the
  clearer one: the question form for a comparison or a mechanism.
  A term card and a "why"/"how" question about it are NOT the same: one
  defines, the other explains. Keep both;
- a front that just copies an objective ("Describe the…") when another card
  already asks it;
- about something this section neither teaches nor mentions.
When unsure, keep it.`;async function _(e){try{return await e()}catch{return await new Promise(t=>setTimeout(t,2500)),e()}}async function Fe(e,t,n,i=[],o=[]){if(t.length<3)return t;const s=t.map((a,d)=>`${d+1}. ${a.front} — ${a.back.slice(0,120)}`).join(`
`);try{const{value:a}=await _(()=>R({messages:[{role:"system",content:Ye},{role:"user",content:`SECTION: ${e.title} (${e.lectureName})
OBJECTIVES:
${e.objectives.map((u,l)=>`${l+1}. ${u}`).join(`
`)}${i.length?`
SLIDE TERMS: ${i.join("; ")}`:""}${o.length?`
THE STUDENT ASKED FOR: ${o.join("; ")}`:""}

CARDS:
${s}${n.length?`

ALREADY HAVE: ${n.slice(-100).join("; ")}`:""}`}],temperature:0,maxTokens:400,prefer:"groq",reasoning:"low"},u=>N({keep:L(O().int())}).parse(u))),d=new Set(a.keep),r=t.filter((u,l)=>d.has(l+1));return r.length?r:t}catch{return t}}function Ve(e,t){if(e.size===0||t.size===0)return!1;let n=0;for(const i of e)t.has(i)&&(n+=1);return n/Math.min(e.size,t.size)>=.75}const We=(e,t)=>`${e}::${b(t).slice(0,80)}`;function F(e){const t=[],n=[];e.forEach((o,s)=>{o.sections.forEach((a,d)=>{const r=a.objectives.filter(u=>{const l=A(u);return t.some(p=>Ve(l,p))?!1:(t.push(l),!0)});r.length!==0&&n.push({title:a.title,objectives:r,lecture:s,order:s*1e3+d,lectureName:o.lecture??`Lecture ${s+1}`,documentIds:o.documentIds??(o.documentId?[o.documentId]:[]),key:We(o.documentId??String(s),a.title)})})});const i=o=>o.order%1e3;return n.sort((o,s)=>i(o)-i(s)||o.lecture-s.lecture)}function de(e,t,n){const i=t?.picked?e.filter(a=>t.picked.includes(a.key)):e,s=(t?.custom??[]).map(a=>a.trim()).filter(Boolean).map((a,d)=>{const r=A(a),u=h=>{const m=A(h);let g=0;for(const x of r)m.has(x)&&(g+=1);return r.size>0&&g/r.size>=.5},l=e.filter(h=>u(h.title)||h.objectives.some(u)),p=l.flatMap(h=>u(h.title)?h.objectives:h.objectives.filter(u)).slice(0,10),c=[...new Set(l.map(h=>h.lectureName))];return{title:a,objectives:p.length?p:[`What the lectures teach about ${a}`],lecture:900+d,order:9e5+d,lectureName:c.length===1?c[0]:"Your sections",documentIds:l.length?[...new Set(l.flatMap(h=>h.documentIds))]:n,key:`custom::${b(a).slice(0,80)}`,custom:!0}});return[...i,...s]}function ue(e){return/^\s*(?:to\s+)?(?:define|state|name)\b/i.test(e)?1:2}const $=e=>b(e).slice(0,160);function he(e,t){const n=new Map;for(const o of t)o&&n.set($(o),(n.get($(o))??0)+1);const i=e.flatMap(o=>o.objectives);return{total:i.length,covered:i.filter(o=>(n.get($(o))??0)>=ue(o)).length}}async function He(e,t){const n=await Y(e);return de(F(await B(n)),t,n)}async function ct(e,t,n){return he(await He(e,n),t)}async function lt(e){const t=await Y(e),n=await B(t),i=F(n);return n.map(o=>({lecture:o.lecture,documentId:o.documentId,mined:o.mined,sections:i.filter(s=>s.documentIds[0]===o.documentId).sort((s,a)=>s.order-a.order).map(s=>({key:s.key,title:s.title,objectives:s.objectives}))}))}async function dt(e,t){const n=await T.flashcard.findMany({where:{deckId:e,section:null,lecture:null},select:{id:!0,objective:!0,documentId:!0}});if(n.length===0)return 0;const i=await Y(t),o=await B(i),s=F(o),a=new Map;for(const u of s)for(const l of u.objectives)a.set($(l),u);const d=new Map;for(const u of o)for(const l of u.documentIds)d.set(l,u.lecture);let r=0;for(const u of n){const l=u.objective?a.get($(u.objective)):void 0,p=l?.lectureName??(u.documentId?d.get(u.documentId):void 0);p&&(await T.flashcard.update({where:{id:u.id},data:{lecture:p,section:l?.title??null}}),r+=1)}return r}async function Ue(e,t,n){let i=0;await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;i<e.length;)await n(e[i++])}))}async function ee(e,t,n){const i=new Map(n.map(c=>[c.id,c])),o=e.focus?b(e.focus).split(" ").filter(c=>c.length>3):[],s=o.length?t.filter(c=>o.some(h=>Oe(c).includes(h))):[],a=new Map;for(const c of e.existingObjectives)c&&a.set($(c),(a.get($(c))??0)+1);const d=(s.length?s:t).map(c=>({...c,objectives:e.again?c.objectives:c.objectives.filter(h=>(a.get($(h))??0)<ue(h))})).filter(c=>c.objectives.length>0),r=[...e.existingFronts],u=c=>!le(c)&&!r.some(h=>D(c,h)),l=[];let p=0;return await Ue(d,3,async c=>{const h=await Re(c,i,e.focus).catch(()=>[]);if(h.length===0)return;const m=De(h.map(f=>f.text).join(`
`)).filter(f=>!r.some(S=>D(f,S))),g=Math.min(30,Math.max(4,c.objectives.length*3+Math.ceil(m.length*.8)),e.count-p);if(g<=0)return;p+=g;const x=t.filter(f=>f.lectureName===c.lectureName&&f.key!==c.key).map(f=>f.title);let y;try{y=await _(()=>qe(c,x,h,g,r,e.focus,e.guide,m))}catch{return}const w=[];for(const f of y)u(f.front)&&!w.some(S=>D(f.front,S.front))&&w.push(f);const k=f=>ze(f.front,c.objectives);for(let f=w.length-1;f>=0;f-=1){const S=w[f];k(S)&&w.some(M=>M!==S&&M.objective===S.objective&&!k(M))&&w.splice(f,1)}const v=e.guide?[...e.guide.keywords,...e.guide.examples]:[],I=await Fe(c,w,r,m,v);for(const f of I)u(f.front)&&(r.push(f.front),l.push({card:f,order:c.order}))}),l.sort((c,h)=>c.order-h.order).map(c=>c.card)}const Ke=`You make flashcards for terms and examples a student asked for by name, from
passages of their own lectures.
Reply with JSON only: {"cards": [{"item": number, "front": string, "back": string, "concept": string, "example": string, "quote": string, "category": string, "source": number}]}

Exactly one card per ITEM, for every item listed.
- front: a TERM item as the lectures write it, abbreviation in brackets if it
  has one; an EXAMPLE item as its name, then what it is an example of in
  brackets: "Morphine (high first-pass drug)".
- back: plain words, at most 40 words. A term: what it is and why it matters,
  beginning with what kind of thing it is. An example: what it shows and why
  it fits. From the PASSAGES when they cover it; when they do not, a standard
  textbook account, ending with " (not in your lectures)".
- concept: for a term, the idea behind it in at most 35 words; "" for an example.
- example: for a term, one real-life application in at most 25 words; "" for an example.
- quote: the passage's own words for it, at most 15 words, or "".
- category: one lower-case word: example for an EXAMPLE item; otherwise term,
  drug, receptor, enzyme, protein, disease, cell, structure, test, formula or abbreviation.
- source: the number of the passage it comes from, or 0.
- THE STUDENT'S INSTRUCTIONS, when given, shape how the cards are written.`;function _e(e,t,n){const i=t?n.filter(d=>d.documentIds.includes(t)):[];if(!i.length)return null;const o=A(`${e.front} ${e.back}`);let s=i[0],a=-1;for(const d of i){const r=A(`${d.title} ${d.objectives.join(" ")}`);let u=0;for(const l of o)r.has(l)&&(u+=1);u>a&&(s=d,a=u)}return s}async function te(e,t,n,i,o,s){const a=l=>!t.some(p=>D(l,p)||b(p).startsWith(b(l))),d=[...e.keywords.filter(a).map(l=>({text:l,kind:"term"})),...e.examples.filter(a).map(l=>({text:l,kind:"example"}))];if(!d.length)return[];const r=new Map(i.map(l=>[l.id,l])),u=[];for(let l=0;l<d.length;l+=8){const p=d.slice(l,l+8),c=[];let h=0;for(const y of p){const w=await se(y.text,{documentIds:o,topK:3}).catch(()=>[]);for(const k of w){const v=r.get(k.id);if(!v||c.some(f=>f.id===v.id))continue;const I=v.text.slice(0,1800);if(h+I.length>P)break;c.push({...v,text:I}),h+=I.length}}const m=c.map((y,w)=>`[${w+1}]
${y.text}`).join(`

---

`),g=p.map((y,w)=>`${w+1}. ${y.kind==="example"?"EXAMPLE":"TERM"}: ${y.text}`).join(`
`);let x;try{({value:x}=await _(()=>R({messages:[{role:"system",content:Ke},{role:"user",content:`ITEMS:
${g}${e.instructions?`

THE STUDENT'S INSTRUCTIONS: ${e.instructions}`:""}

PASSAGES:

${m||"(none mention these)"}`}],temperature:.2,maxTokens:200+p.length*220,prefer:"groq",reasoning:"low"},y=>H.parse(y))))}catch{continue}for(const y of x.cards){const w=W.extend({item:O().int().nullish()}).safeParse(y);if(!w.success)continue;const k=ce(w.data.front);if(!a(k))continue;const v=w.data.back.trim(),I={front:k,back:`${v} ${w.data.quote??""}`.trim()},f=w.data.source?K(I,c,c[w.data.source-1]??c[0]):null,S=_e({front:k,back:v},f?.documentId??null,n),M=p[(w.data.item??0)-1]?.kind;t.push(k),u.push({front:k,back:v,example:w.data.example?.trim()||null,concept:w.data.concept?.trim()||null,objective:null,category:M==="example"?"example":w.data.category?.trim().toLowerCase()||"term",documentId:f?.documentId??null,sourceChunkId:f?.id??null,page:f?.page??null,sourceMethod:U,lecture:S?.lectureName??(f?.documentId?s.get(f.documentId)??null:null)??"Your key words",section:S?.title??(M==="example"?"Key examples":"Key words"),match:I.back})}}return u}async function ut(e){const t=await Y(e.documentIds),{passages:n,objectives:i}=await ve(t),o=await B(t).catch(()=>[]),s=de(F(o),e.sections,t),a=Ce(e.sections),d=new Map;for(const c of o)for(const h of c.documentIds)d.set(h,c.lecture);if(e.onlyGuide){const c=await te(a,[...e.existingFronts],s,n,t,d);return q(c,n,e.documentIds)}if(s.length>0){const c=await ee({...e,existingObjectives:e.existingObjectives??[],guide:a},s,n),h=[...e.existingFronts,...c.map(g=>g.front)],m=await te(a,h,s,n,t,d);if(c.length+m.length>0)return q([...c,...m],n,e.documentIds);if(!e.again&&e.existingFronts.length>0){const g=await ee({...e,existingObjectives:e.existingObjectives??[],guide:a,again:!0},s,n);if(g.length>0)return q(g,n,e.documentIds)}if(he(s,e.existingObjectives??[]).covered===s.flatMap(g=>g.objectives).length)return[]}const r=je(n,e.count,e.existingFronts);if(r.length===0)return[];const u=[...e.existingFronts],l=[],p=Math.max(5,Math.ceil(e.count/r.length));for(const c of r){if(l.length>=e.count)break;const h=Math.min(p,e.count-l.length);let m;try{m=await Ne(c,h,e.focus,u,i)}catch(g){if(l.length===0&&c===r[r.length-1])throw g;continue}for(const g of m)if(!(le(g.front)||u.some(x=>D(g.front,x)))&&(u.push(g.front),l.push(g),l.length>=e.count))break}return l.sort((c,h)=>+!!h.objective-+!!c.objective),q(l,n,e.documentIds)}async function q(e,t,n){const i=new Map(t.map(s=>[s.id,s])),o=new Map((await T.document.findMany({where:{id:{in:n}},select:{id:!0,filePath:!0,kind:!0}})).map(s=>[s.id,s.kind==="pdf"?s.filePath:null]));for(const s of e){s.documentId&&!o.get(s.documentId)&&(s.page=null);const a=s.sourceChunkId?i.get(s.sourceChunkId):void 0;!a||!a.pageEnd||!a.page||a.pageEnd<=a.page||(s.page=await Ae({front:s.front,back:s.match??s.back},{documentId:a.documentId,page:a.page,pageStart:a.page,pageEnd:a.pageEnd},o.get(a.documentId)??null))}return e}const Ge=`You rewrite flashcard backs so a student can actually understand and
remember them. Reply with JSON only: {"cards": [{"n": number, "back": string}]}

For each card, rewrite "back" in PLAIN WORDS, at most 35 words: the way you
would explain it to a friend who has never taken the course. Say what the
term is and what it does or why it matters, in everyday language and full
sentences. Begin with what kind of thing it is ("A type of cell death
where…", "A protein that…", "An inherited condition in which…"); never begin
with "It" or with the term itself.

Every word a first-year student might not know is either replaced with an
everyday word or explained in a few words in brackets: "vasculitis (inflamed
blood vessels)", "immune complexes (clumps of antibodies stuck to what they
attack)", "fibrin (the stringy protein blood clots are made of)". Before
answering, read each back word by word and fix any such word left
unexplained. No abbreviations, symbols or arrows ("↑", "→").

Keep every fact the current back states and add no new ones. Keep "n" as
given. Return every card.`,Je=N({cards:L(N({n:O().int(),back:E().min(2).max(500)}))});async function ht(e){const t=new Map;for(let n=0;n<e.length;n+=20){const i=e.slice(n,n+20),o=i.map((a,d)=>`${d+1}. ${a.front}: ${a.back}`).join(`
`),{value:s}=await R({messages:[{role:"system",content:Ge},{role:"user",content:`CARDS (n. term: current back):
${o}`}],temperature:.3,maxTokens:Math.min(6e3,1200+i.length*120),prefer:"groq",reasoning:"medium"},a=>Je.parse(a));for(const a of s.cards){const d=i[a.n-1];d&&a.back.trim()&&t.set(d.id,a.back.trim())}}return t}const Xe=`You add "the concept" to flashcards a student already has: the idea
behind each term, so turning the card teaches more than a definition.
Reply with JSON only: {"cards": [{"n": number, "concept": string, "example": string}]}

- concept: at most 40 words, plain words: how it works or what drives it, how
  it connects to the lecture around it, and why it matters. Not a repeat of
  the back. Use the PASSAGE given with the card; never facts it does not
  support.
- example: one real-life application, at most 25 words (a patient, an
  everyday situation, a classic drug), or "" when the card already has one.
Keep "n" as given. Return every card.`,Ze=N({cards:L(N({n:O().int(),concept:E().max(400),example:E().max(240).nullish()}))});async function mt(e){const t=new Map;for(let n=0;n<e.length;n+=10){const i=e.slice(n,n+10),o=i.map((s,a)=>`${a+1}. ${s.front}: ${s.back}${s.example?`
   (has an example)`:""}${s.passage?`
   PASSAGE: ${s.passage.slice(0,700)}`:""}`).join(`

`);try{const{value:s}=await R({messages:[{role:"system",content:Xe},{role:"user",content:`CARDS:

${o}`}],temperature:.2,maxTokens:Math.min(4e3,400+i.length*160),prefer:"groq",reasoning:"low"},a=>Ze.parse(a));for(const a of s.cards){const d=i[a.n-1];!d||!a.concept.trim()||t.set(d.id,{concept:a.concept.trim(),example:d.example?null:a.example?.trim()||null})}}catch{}}return t}export{P as B,C as P,U as S,rt as a,lt as b,mt as c,it as d,ct as e,ve as f,ut as g,ye as h,ot as i,dt as l,b as n,ke as o,ht as p,at as r,re as s};
