import{p as E,e as le,o as j,a as A,s as v,n as I,u as Se,f as J}from"./main-rr7QRyb8.js";import{w as B}from"./embedding-DU7qAZmo.js";import{a as P,s as ue}from"./llm-router-mfHvS6vZ.js";import{s as de}from"./buddy-cases-BNlccDOf.js";import{g as H,s as he}from"./study-mode-COYY_krZ.js";import{withTranscripts as _}from"./transcript-pairs-Ddm01gdJ.js";class z extends Error{constructor(t,n,r){super(r),this.status=t,this.code=n,this.name="PageRenderError"}}const Ee=24,N=new Map;function je(e){const t=N.get(e);if(t)return N.delete(e),N.set(e,t),t}function Ie(e,t){if(N.set(e,t),N.size>Ee){const n=N.keys().next().value;n!==void 0&&N.delete(n)}}function Nt(e){for(const t of N.keys())t.startsWith(`${e}:`)&&N.delete(t)}async function At(e){const t=await E.document.findUnique({where:{id:e.documentId},select:{id:!0,filePath:!0,fileName:!0,kind:!0}});if(!t)throw new z(404,"not_found","Document not found");if(t.kind!=="pdf")throw new z(415,"not_a_pdf",`${t.fileName} is ${t.kind}, which has no pages to render.`);if(!le(t.filePath))throw new z(409,"source_missing",`The original file for ${t.fileName} is no longer at ${t.filePath}. Re-add it to the library to see page images.`);const n=e.scale??2,r=`${t.id}:${e.page}:${n}:${e.format??"webp"}`;let i=je(r);i||(i=await B.renderPage({path:t.filePath,page:e.page,scale:n,format:e.format}),Ie(r,i));const s=(await E.chunk.findMany({where:{documentId:t.id,page:e.page,NOT:{bbox:null}},select:{id:!0,bbox:!0},orderBy:{ordinal:"asc"}})).flatMap(c=>{const u=te(c.bbox);return u?[{chunkId:c.id,bbox:u}]:[]});let d=null;if(e.chunkId){const c=await E.chunk.findUnique({where:{id:e.chunkId},select:{documentId:!0,page:!0,bbox:!0}});c&&c.documentId===t.id&&c.page===e.page&&(d=te(c.bbox))}return{...i,documentId:t.id,bbox:d,bboxes:s}}function te(e){if(!e)return null;try{const t=JSON.parse(e);return!Array.isArray(t)||t.length!==4?null:t.every(n=>typeof n=="number"&&Number.isFinite(n))?t:null}catch{return null}}const Y=new Map;async function me(e,t){const n=`${e}:${t}`,r=Y.get(n);if(r)return r;const i=await E.document.findUnique({where:{id:e},select:{id:!0,filePath:!0,fileName:!0,kind:!0}});if(!i)throw new z(404,"not_found","Document not found");if(i.kind!=="pdf")return{page:t,pageWidth:0,pageHeight:0,figures:[]};if(!le(i.filePath))throw new z(409,"source_missing",`The original file for ${i.fileName} is missing.`);const o=await B.pageFigures({path:i.filePath,page:t});return Y.set(n,o),o}function Mt(e){for(const t of Y.keys())t.startsWith(`${e}:`)&&Y.delete(t)}const fe=/learning objectives?|learning outcomes?|by the end of (?:this|the) (?:lecture|session|class|module|week)|you (?:will|should) be able to|objectives?:/i,Te=new RegExp(["office hours?","grad(?:e|ing) (?:breakdown|scheme|distribution)","% of (?:the |your )?(?:final|course) grade","late (?:penalty|submissions?)","academic (?:integrity|offen[cs]es?|accommodations?)","accessibility services","course (?:outline|syllabus|website|coordinator)","required (?:reading|text(?:book)?)","brightspace","e-?mail","@[a-z0-9-]+\\.(?:ca|com|edu|org)","teaching assistants?","copyright","all rights reserved","doi:","\\bet al\\.","retrieved from","midterm (?:date|exam(?:ination)? (?:will|is))","due (?:date|on|by)","submit(?:ted)? (?:via|on|through)","zoom link","attendance"].join("|"),"gi");function $e(e){const t=e.match(Te)?.length??0;return t>=2||t>=1&&e.length<400}function K(e){return/syllabus|course outline|course information|course schedule/i.test(e)}const ne=/^(?:to |be able to |\d+\s*)?(?:describe|explain|list|identify|compare|contrast|define|discuss|outline|differentiate|distinguish|recogni[sz]e|understand|apply|calculate|predict|interpret|summari[sz]e|name|classify|relate|evaluate|analy[sz]e|state|recall|illustrate|know|demonstrate|determine|characteri[sz]e|appreciate|use|design|construct|assess|propose|justify|label|draw|compute|estimate)\b/i;function oe(e,t=24){const n=[],r=new Set;for(const i of e){const o=i.search(fe);if(o<0)continue;const s=i.slice(o).split(`
`).slice(1,30),d=[];for(const c of s){const u=/^\s*(?:\d{1,2}\s*[.)]?|[•▪◦●\-–*])\s+/.test(c),l=c.replace(/^\s*(?:\d{1,2}\s*[.)]?|[•▪◦●\-–*])\s+/,"").trim();l&&(u||ne.test(l)||d.length===0?d.push(l):d[d.length-1]+=` ${l}`)}for(const c of d){const u=c.replace(/\s+/g," ").replace(/\s+[A-Z]{3,}\s?\d{3,4}\b.*$/,"").replace(/^(.{20,}?[.?!])\s+[A-Z].*$/,"$1").trim();if(u.length<12||u.length>300||!ne.test(u)||/^\w+\s*:/.test(u))continue;const l=u.toLowerCase();if(!r.has(l)&&(r.add(l),n.push(u),n.length>=t))return n}}return n}async function D(e){const t=await E.document.findMany({where:{id:{in:e}},select:{id:!0,fileName:!0}}),n=new Set(t.filter(c=>K(c.fileName)).map(c=>c.id)),i=(await E.chunk.findMany({where:{documentId:{in:e}},select:{id:!0,documentId:!0,ordinal:!0,text:!0,repairedText:!0,page:!0,pageStart:!0,pageEnd:!0},orderBy:[{documentId:"asc"},{ordinal:"asc"}]})).map(c=>({id:c.id,documentId:c.documentId,ordinal:c.ordinal,text:c.repairedText??c.text,page:c.page??c.pageStart,pageEnd:c.pageEnd})),o=oe(i.filter(c=>!n.has(c.documentId)).map(c=>c.text)),s=o.length?o:oe(i.map(c=>c.text));return{passages:i.filter(c=>!n.has(c.documentId)&&!$e(c.text)&&!fe.test(c.text.slice(0,200))),objectives:s}}function F(e){return e.length?`LEARNING OBJECTIVES:
${e.map((t,n)=>`${n+1}. ${t}`).join(`
`)}`:"LEARNING OBJECTIVES: (none found; choose what a lecture like this would examine)"}const Ne=[/\b[A-Za-z]{3,}(?:ase|ases|ine|ines|ide|ides|ate|ates|ol|one|in|ins|itis|emia|aemia|oma|osis|opathy|cyte|cytes|blast|plasty|mab|nib|pril|sartan|olol|statin|cillin|mycin|azole|vir)\b/g,/\b(?:[A-Z]{1,5}-?\d{1,3}[A-Za-z]?|[A-Z]{2,6}-[αβγδκA-Za-z0-9]{1,3}|p\d{2,3})\b/g,/\b[A-Z]{2,6}s?\b/g,/\b(?:is|are) (?:a|an|the) [a-z]+|\b(?:defined as|refers to|known as|also called|stands for)\b/gi,/\*\*[^*]{2,60}\*\*/g];function Ae(e){if(e.length<80)return 0;let t=0;for(const n of Ne)t+=e.match(n)?.length??0;return t/e.length*1e3}const R=12e3,Me=6;function Oe(e,t,n=[]){const r=Math.min(Me*R,Math.max(R,t*700)),i=n.map(a=>y(a)).filter(a=>a.length>3),o=a=>{const h=y(a);return i.filter(f=>h.includes(f)).length},s=e.map(a=>({p:a,score:Ae(a.text)/(1+o(a.text))})).filter(a=>a.score>0).sort((a,h)=>h.score-a.score),d=[];let c=0;for(const{p:a}of s){const h=Math.min(a.text.length,2500);c+h>r||(d.push({...a,text:a.text.slice(0,2500)}),c+=h)}d.sort((a,h)=>a.documentId.localeCompare(h.documentId)||a.ordinal-h.ordinal);const u=[];let l=[],m=0;for(const a of d)m+a.text.length>R&&l.length&&(u.push(l),l=[],m=0),l.push(a),m+=a.text.length;return l.length&&u.push(l),u}const X=j({front:v().min(1).max(120),back:v().min(2).max(500),quote:v().max(300).nullish(),category:v().max(30).nullish(),source:I().int().min(1).max(40).nullish(),objective:I().int().min(0).max(40).nullish(),example:v().max(240).nullish(),concept:v().max(400).nullish()}),Z=j({cards:A(Se())}),Pe=`You make flashcards for MEMORISATION from a student's course material.
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
- One card per item; skip an item already under ALREADY HAVE.`,q=4;function Ce(e){const t=[y(e)];for(const n of e.matchAll(/\(([^)]+)\)/g))t.push(y(n[1]));return t.filter(n=>n.length>=2)}const ge=new Set("about above after also among and are because been before being between both but can cause caused causes during each from have into its more most not only other over same some such than that the their them then there these they this those through under used using very what when where which while with within without".split(" "));function pe(e){return e.length>6?e.slice(0,6):e}function O(e){const t=y(e).split(" ").filter(n=>n.length>=4&&!ge.has(n));return new Set(t.map(pe))}const Re=/what to remember|by the end of this|learning (?:objectives|outcomes)|\boutline\b|\bsummary\b|\bagenda\b|\bcontents\b|\breview\b|\brecap\b/i;function we(e,t){const n=y(t),r=Ce(e.front).some(c=>n.includes(c)),i=O(e.back),o=new Set(n.split(" ").filter(c=>c.length>=4).map(pe));let s=0;for(const c of i)o.has(c)&&(s+=1);const d=(i.size?s/i.size:0)+(r?.5:0);return Re.test(t)?d*.6:d}async function De(e,t,n){const r=t.page??t.pageStart,i=t.pageEnd??r;if(!r||!i||i<=r||!n||!/\.pdf$/i.test(n))return r;try{const{pages:o}=await B.pageTexts({path:n,first:r,last:i});let s=r,d=-1;for(const c of o){const u=we(e,c.text);u>d&&(s=c.page,d=u)}return s}catch{return r}}function Q(e,t,n){let r,i=-1;for(const o of t){const s=we(e,o.text)+(o===n?.15:0);s>i&&(r=o,i=s)}return i<.35&&n?n:r??n}function y(e){return e.toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9α-ω]+/g," ").trim()}async function qe(e,t,n,r,i){const o=e.map((u,l)=>`[${l+1}]
${u.text}`).join(`

---

`),s=[F(i),n?`THE STUDENT WANTS CARDS ON: ${n}`:"",r.length?`ALREADY HAVE: ${r.slice(-80).join("; ")}`:""].filter(Boolean).join(`

`),{value:d}=await P({messages:[{role:"system",content:Pe},{role:"user",content:`Make ${t} cards (fewer only if the passages truly hold fewer distinct named items).

PASSAGES:

${o}${s?`

${s}`:""}`}],temperature:.2,maxTokens:Math.min(3200,160+t*110),prefer:"groq",reasoning:"low"},u=>Z.parse(u)),c=[];for(const u of d.cards){const l=X.safeParse(u);if(!l.success)continue;const m=l.data.front.trim(),a=l.data.back.trim(),h=l.data.objective?i[l.data.objective-1]:void 0,f={front:m,back:`${a} ${l.data.quote??""}`.trim()},p=Q(f,e,e[(l.data.source??1)-1]??e[0]);c.push({front:m,back:a,example:l.data.example?.trim().replace(/^e\.g\.,?\s*/i,"")||null,objective:h??null,category:l.data.category?.trim().toLowerCase()||null,documentId:p?.documentId??null,sourceChunkId:p?.id??null,page:p?.page??null,sourceMethod:q,match:f.back})}return c}const ze=`You make flashcards for ONE SECTION of a lecture, the way a great tutor drills it
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
- source: the number of the passage it comes from.`;function Le(e){return y(`${e.title} ${e.objectives.join(" ")}`)}async function Be(e,t,n){const r=`${n?`${n} `:""}${e.title} ${e.objectives.join(" ")}`.slice(0,600),i=await he(r,{documentIds:e.documentIds,topK:10}),o=[];let s=0;for(const d of i){const c=t.get(d.id);if(!c)continue;const u=c.text.slice(0,2500);s+u.length>R||(o.push({...c,text:u}),s+=u.length)}return o.sort((d,c)=>d.documentId.localeCompare(c.documentId)||d.ordinal-c.ordinal)}function We(e){const t=n=>[...new Set((n??[]).map(r=>r.trim()).filter(r=>r.length>=2))].slice(0,80);return{instructions:e?.instructions?.trim()||null,keywords:t(e?.keywords),examples:t(e?.examples)}}const Ye=/^(?:learning (?:objectives|outcomes)|objectives|outline|overview|summary|review|recap|references?|questions?|introduction|agenda|contents|today|announcements?|readings?|key points?|conclusions?|background|examples?|figure|table|notes?|slide \d+)$/i;function He(e,t=40){const n=[],r=new Set;for(const i of e.split(/\r?\n/)){let o=i.trim();const s=/^(?:[•▪◦●○■□➢►‣⁃·*\-–—]|\d{1,2}[.)])\s+/.exec(o);if(s&&(o=o.slice(s[0].length)),!o||o.length>90)continue;const d=o.split(/\s*(?::|=|\s[–—-]\s)\s*/)[0].replace(/[.,;:]+$/,"").trim(),c=d.split(/\s+/).length,u=d.length<o.length;if(c<1||c>5||d.length<3||d.length>50||!s&&!u&&c>4||!/[A-Za-z]{3}/.test(d)||/^[a-z]/.test(d)&&!u&&!s||/[.!?]$/.test(d)||Ye.test(d)||/^(?:the|a|an|this|these|it|we|you|why|how|what|when|which|so|and|but|in|of|to|for|with)\b/i.test(d))continue;const l=y(d);if(!(!l||r.has(l))&&(r.add(l),n.push(d),n.length>=t))break}return n}async function _e(e,t,n,r,i,o,s={instructions:null,keywords:[],examples:[]},d=[]){const c=n.map((h,f)=>`[${f+1}]
${h.text}`).join(`

---

`),u=[`LECTURE: ${e.lectureName}`,`SECTION: ${e.title}`,`ITS OBJECTIVES:
${e.objectives.map((h,f)=>`${f+1}. ${h}`).join(`
`)}`,t.length?`OTHER SECTIONS (not this one's job): ${t.join("; ")}`:"",d.length?`SLIDE TERMS (from its bullet points): ${d.join("; ")}`:""].filter(Boolean).join(`
`),l=[s.instructions?`THE STUDENT'S INSTRUCTIONS: ${s.instructions}`:"",s.keywords.length?`KEY WORDS the student listed (card each one these passages mention): ${s.keywords.join("; ")}`:"",s.examples.length?`KEY EXAMPLES the student listed (card each one these passages mention): ${s.examples.join("; ")}`:"",o?`THE STUDENT WANTS CARDS ON: ${o}`:"",i.length?`ALREADY HAVE: ${i.slice(-80).join("; ")}`:""].filter(Boolean).join(`

`),{value:m}=await P({messages:[{role:"system",content:ze},{role:"user",content:`${u}

Make about ${r} cards covering every objective, slide term and example above (fewer only if the passages truly hold less).

PASSAGES:

${c}${l?`

${l}`:""}`}],temperature:.2,maxTokens:Math.min(6e3,200+r*130),prefer:"groq",reasoning:"low"},h=>Z.parse(h)),a=[];for(const h of m.cards){const f=X.safeParse(h);if(!f.success)continue;const p=be(f.data.front),g=f.data.back.trim().replace(/\s*\((?:cause|effect|consequence)\)/gi,""),x=f.data.objective?e.objectives[f.data.objective-1]:void 0,b=f.data.objective===0,k={front:p,back:`${g} ${f.data.quote??""}`.trim()},S=Q(k,n,n[(f.data.source??1)-1]??n[0]);a.push({front:p,back:g,example:f.data.example?.trim().replace(/^e\.g\.,?\s*/i,"")||null,concept:f.data.concept?.trim()||null,objective:x??(b?null:e.objectives[0]??null),category:f.data.category?.trim().toLowerCase()||null,documentId:S?.documentId??null,sourceChunkId:S?.id??null,page:S?.page??null,sourceMethod:q,lecture:e.lectureName,section:e.title,match:k.back})}return a}function Fe(e,t){if(e.trim().endsWith("?")||!/^(?:to\s+)?(?:describe|explain|list|summari[sz]e|outline|predict|analy[sz]e|compare|identify|discuss|evaluate|define|understand)\b/i.test(e.trim()))return!1;const n=O(e);return t.some(r=>{const i=O(r);let o=0;for(const s of n)i.has(s)&&(o+=1);return n.size>0&&o/n.size>=.8})}function be(e){const t=e.trim().replace(/\[([^\]]+)\]/g,"($1)").replace(/\s+(?:definition|concept|overview|explained|(?:calculation\s+)?examples?)$/i,"").trim(),n=t.match(/^(.*?)\s*\(([^)]+)\)$/);return n&&y(n[1])===y(n[2])?n[1].trim():t}const Ve=new Set(["dose","doses","drug","drugs","drug identity","patient","patients","route","cell","cells","energy","body","overview","summary","introduction","key points","key terms","definition","definitions","example","examples","learning objectives","objectives","review","recap","outline","background","conclusion","conclusions"]);function ye(e){const t=y(e);return t.length<2||Ve.has(t)}const Je={matrices:"matrix",vertices:"vertex",indices:"index",analyses:"analysis",hypotheses:"hypothesis",diagnoses:"diagnosis",bacteria:"bacterium",nuclei:"nucleus",foci:"focus",stimuli:"stimulus",mitochondria:"mitochondrion",criteria:"criterion"};function se(e){return y(e).split(" ").filter(t=>t.length>=2&&!ge.has(t)&&t!=="of"&&t!=="the"&&t!=="an").map(t=>Je[t]??t).map(t=>t.length>4?t.replace(/(?:ies|es|s)$/,""):t).sort()}function ae(e){const t=e.replace(/\[([^\]]+)\]/g,"($1)"),n=t.trim().endsWith("?"),r=[y(t)];for(const i of t.matchAll(/\(([^)]+)\)/g)){const o=y(i[1]);o.length>=2&&r.push(o)}return{names:r.filter(i=>i.length>=2),words:se(t.replace(/\(.*?\)/g," ")).join(" "),question:n?new Set(se(t).filter(i=>i.length>=4)):null}}function L(e,t){const n=ae(e),r=ae(t);if(n.question&&r.question){if(n.question.size===0||r.question.size===0)return!1;let i=0;for(const o of n.question)r.question.has(o)&&(i+=1);return i/(n.question.size+r.question.size-i)>=.6}return n.question||r.question?!1:n.names.some(i=>r.names.includes(i))?!0:n.words.length>0&&n.words===r.words}const Ue=`You check the flashcards made for ONE section of a lecture before a student
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
When unsure, keep it.`;async function ee(e){try{return await e()}catch{return await new Promise(t=>setTimeout(t,2500)),e()}}async function Ge(e,t,n,r=[],i=[]){if(t.length<3)return t;const o=t.map((s,d)=>`${d+1}. ${s.front} — ${s.back.slice(0,120)}`).join(`
`);try{const{value:s}=await ee(()=>P({messages:[{role:"system",content:Ue},{role:"user",content:`SECTION: ${e.title} (${e.lectureName})
OBJECTIVES:
${e.objectives.map((u,l)=>`${l+1}. ${u}`).join(`
`)}${r.length?`
SLIDE TERMS: ${r.join("; ")}`:""}${i.length?`
THE STUDENT ASKED FOR: ${i.join("; ")}`:""}

CARDS:
${o}${n.length?`

ALREADY HAVE: ${n.slice(-100).join("; ")}`:""}`}],temperature:0,maxTokens:400,prefer:"groq",reasoning:"low"},u=>j({keep:A(I().int())}).parse(u))),d=new Set(s.keep),c=t.filter((u,l)=>d.has(l+1));return c.length?c:t}catch{return t}}function Ke(e,t){if(e.size===0||t.size===0)return!1;let n=0;for(const r of e)t.has(r)&&(n+=1);return n/Math.min(e.size,t.size)>=.75}const Xe=(e,t)=>`${e}::${y(t).slice(0,80)}`;function V(e){const t=[],n=[];e.forEach((i,o)=>{i.sections.forEach((s,d)=>{const c=s.objectives.filter(u=>{const l=O(u);return t.some(m=>Ke(l,m))?!1:(t.push(l),!0)});c.length!==0&&n.push({title:s.title,objectives:c,lecture:o,order:o*1e3+d,lectureName:i.lecture??`Lecture ${o+1}`,documentIds:i.documentIds??(i.documentId?[i.documentId]:[]),key:Xe(i.documentId??String(o),s.title)})})});const r=i=>i.order%1e3;return n.sort((i,o)=>r(i)-r(o)||i.lecture-o.lecture)}function xe(e,t,n){const r=t?.picked?e.filter(s=>t.picked.includes(s.key)):e,o=(t?.custom??[]).map(s=>s.trim()).filter(Boolean).map((s,d)=>{const c=O(s),u=h=>{const f=O(h);let p=0;for(const g of c)f.has(g)&&(p+=1);return c.size>0&&p/c.size>=.5},l=e.filter(h=>u(h.title)||h.objectives.some(u)),m=l.flatMap(h=>u(h.title)?h.objectives:h.objectives.filter(u)).slice(0,10),a=[...new Set(l.map(h=>h.lectureName))];return{title:s,objectives:m.length?m:[`What the lectures teach about ${s}`],lecture:900+d,order:9e5+d,lectureName:a.length===1?a[0]:"Your sections",documentIds:l.length?[...new Set(l.flatMap(h=>h.documentIds))]:n,key:`custom::${y(s).slice(0,80)}`,custom:!0}});return[...r,...o]}function ve(e){return/^\s*(?:to\s+)?(?:define|state|name)\b/i.test(e)?1:2}const M=e=>y(e).slice(0,160);function ke(e,t){const n=new Map;for(const i of t)i&&n.set(M(i),(n.get(M(i))??0)+1);const r=e.flatMap(i=>i.objectives);return{total:r.length,covered:r.filter(i=>(n.get(M(i))??0)>=ve(i)).length}}async function Ze(e,t){const n=await _(e);return xe(V(await H(n)),t,n)}async function Ot(e,t,n){return ke(await Ze(e,n),t)}async function Pt(e){const t=await _(e),n=await H(t),r=V(n);return n.map(i=>({lecture:i.lecture,documentId:i.documentId,mined:i.mined,sections:r.filter(o=>o.documentIds[0]===i.documentId).sort((o,s)=>o.order-s.order).map(o=>({key:o.key,title:o.title,objectives:o.objectives}))}))}async function Ct(e,t){const n=await E.flashcard.findMany({where:{deckId:e,section:null,lecture:null},select:{id:!0,objective:!0,documentId:!0}});if(n.length===0)return 0;const r=await _(t),i=await H(r),o=V(i),s=new Map;for(const u of o)for(const l of u.objectives)s.set(M(l),u);const d=new Map;for(const u of i)for(const l of u.documentIds)d.set(l,u.lecture);let c=0;for(const u of n){const l=u.objective?s.get(M(u.objective)):void 0,m=l?.lectureName??(u.documentId?d.get(u.documentId):void 0);m&&(await E.flashcard.update({where:{id:u.id},data:{lecture:m,section:l?.title??null}}),c+=1)}return c}async function Qe(e,t,n){let r=0;await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;r<e.length;)await n(e[r++])}))}async function ie(e,t,n){const r=new Map(n.map(a=>[a.id,a])),i=e.focus?y(e.focus).split(" ").filter(a=>a.length>3):[],o=i.length?t.filter(a=>i.some(h=>Le(a).includes(h))):[],s=new Map;for(const a of e.existingObjectives)a&&s.set(M(a),(s.get(M(a))??0)+1);const d=(o.length?o:t).map(a=>({...a,objectives:e.again?a.objectives:a.objectives.filter(h=>(s.get(M(h))??0)<ve(h))})).filter(a=>a.objectives.length>0),c=[...e.existingFronts],u=a=>!ye(a)&&!c.some(h=>L(a,h)),l=[];let m=0;return await Qe(d,3,async a=>{const h=await Be(a,r,e.focus).catch(()=>[]);if(h.length===0)return;const f=He(h.map(w=>w.text).join(`
`)).filter(w=>!c.some($=>L(w,$))),p=Math.min(30,Math.max(4,a.objectives.length*3+Math.ceil(f.length*.8)),e.count-m);if(p<=0)return;m+=p;const g=t.filter(w=>w.lectureName===a.lectureName&&w.key!==a.key).map(w=>w.title);let x;try{x=await ee(()=>_e(a,g,h,p,c,e.focus,e.guide,f))}catch{return}const b=[];for(const w of x)u(w.front)&&!b.some($=>L(w.front,$.front))&&b.push(w);const k=w=>Fe(w.front,a.objectives);for(let w=b.length-1;w>=0;w-=1){const $=b[w];k($)&&b.some(C=>C!==$&&C.objective===$.objective&&!k(C))&&b.splice(w,1)}const S=e.guide?[...e.guide.keywords,...e.guide.examples]:[],T=await Ge(a,b,c,f,S);for(const w of T)u(w.front)&&(c.push(w.front),l.push({card:w,order:a.order}))}),l.sort((a,h)=>a.order-h.order).map(a=>a.card)}const et=`You make flashcards for terms and examples a student asked for by name, from
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
- THE STUDENT'S INSTRUCTIONS, when given, shape how the cards are written.`;function tt(e,t,n){const r=t?n.filter(d=>d.documentIds.includes(t)):[];if(!r.length)return null;const i=O(`${e.front} ${e.back}`);let o=r[0],s=-1;for(const d of r){const c=O(`${d.title} ${d.objectives.join(" ")}`);let u=0;for(const l of i)c.has(l)&&(u+=1);u>s&&(o=d,s=u)}return o}async function re(e,t,n,r,i,o){const s=l=>!t.some(m=>L(l,m)||y(m).startsWith(y(l))),d=[...e.keywords.filter(s).map(l=>({text:l,kind:"term"})),...e.examples.filter(s).map(l=>({text:l,kind:"example"}))];if(!d.length)return[];const c=new Map(r.map(l=>[l.id,l])),u=[];for(let l=0;l<d.length;l+=8){const m=d.slice(l,l+8),a=[];let h=0;for(const x of m){const b=await he(x.text,{documentIds:i,topK:3}).catch(()=>[]);for(const k of b){const S=c.get(k.id);if(!S||a.some(w=>w.id===S.id))continue;const T=S.text.slice(0,1800);if(h+T.length>R)break;a.push({...S,text:T}),h+=T.length}}const f=a.map((x,b)=>`[${b+1}]
${x.text}`).join(`

---

`),p=m.map((x,b)=>`${b+1}. ${x.kind==="example"?"EXAMPLE":"TERM"}: ${x.text}`).join(`
`);let g;try{({value:g}=await ee(()=>P({messages:[{role:"system",content:et},{role:"user",content:`ITEMS:
${p}${e.instructions?`

THE STUDENT'S INSTRUCTIONS: ${e.instructions}`:""}

PASSAGES:

${f||"(none mention these)"}`}],temperature:.2,maxTokens:200+m.length*220,prefer:"groq",reasoning:"low"},x=>Z.parse(x))))}catch{continue}for(const x of g.cards){const b=X.extend({item:I().int().nullish()}).safeParse(x);if(!b.success)continue;const k=be(b.data.front);if(!s(k))continue;const S=b.data.back.trim(),T={front:k,back:`${S} ${b.data.quote??""}`.trim()},w=b.data.source?Q(T,a,a[b.data.source-1]??a[0]):null,$=tt({front:k,back:S},w?.documentId??null,n),C=m[(b.data.item??0)-1]?.kind;t.push(k),u.push({front:k,back:S,example:b.data.example?.trim()||null,concept:b.data.concept?.trim()||null,objective:null,category:C==="example"?"example":b.data.category?.trim().toLowerCase()||"term",documentId:w?.documentId??null,sourceChunkId:w?.id??null,page:w?.page??null,sourceMethod:q,lecture:$?.lectureName??(w?.documentId?o.get(w.documentId)??null:null)??"Your key words",section:$?.title??(C==="example"?"Key examples":"Key words"),match:T.back})}}return u}async function Rt(e){const t=await _(e.documentIds),{passages:n,objectives:r}=await D(t),i=await H(t).catch(()=>[]),o=xe(V(i),e.sections,t),s=We(e.sections),d=new Map;for(const a of i)for(const h of a.documentIds)d.set(h,a.lecture);if(e.onlyGuide){const a=await re(s,[...e.existingFronts],o,n,t,d);return W(a,n,e.documentIds)}if(o.length>0){const a=await ie({...e,existingObjectives:e.existingObjectives??[],guide:s},o,n),h=[...e.existingFronts,...a.map(p=>p.front)],f=await re(s,h,o,n,t,d);if(a.length+f.length>0)return W([...a,...f],n,e.documentIds);if(!e.again&&e.existingFronts.length>0){const p=await ie({...e,existingObjectives:e.existingObjectives??[],guide:s,again:!0},o,n);if(p.length>0)return W(p,n,e.documentIds)}if(ke(o,e.existingObjectives??[]).covered===o.flatMap(p=>p.objectives).length)return[]}const c=Oe(n,e.count,e.existingFronts);if(c.length===0)return[];const u=[...e.existingFronts],l=[],m=Math.max(5,Math.ceil(e.count/c.length));for(const a of c){if(l.length>=e.count)break;const h=Math.min(m,e.count-l.length);let f;try{f=await qe(a,h,e.focus,u,r)}catch(p){if(l.length===0&&a===c[c.length-1])throw p;continue}for(const p of f)if(!(ye(p.front)||u.some(g=>L(p.front,g)))&&(u.push(p.front),l.push(p),l.length>=e.count))break}return l.sort((a,h)=>+!!h.objective-+!!a.objective),W(l,n,e.documentIds)}async function W(e,t,n){const r=new Map(t.map(o=>[o.id,o])),i=new Map((await E.document.findMany({where:{id:{in:n}},select:{id:!0,filePath:!0,kind:!0}})).map(o=>[o.id,o.kind==="pdf"?o.filePath:null]));for(const o of e){o.documentId&&!i.get(o.documentId)&&(o.page=null);const s=o.sourceChunkId?r.get(o.sourceChunkId):void 0;!s||!s.pageEnd||!s.page||s.pageEnd<=s.page||(o.page=await De({front:o.front,back:o.match??o.back},{documentId:s.documentId,page:s.page,pageStart:s.page,pageEnd:s.pageEnd},i.get(s.documentId)??null))}return e}const nt=`You rewrite flashcard backs so a student can actually understand and
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
given. Return every card.`,ot=j({cards:A(j({n:I().int(),back:v().min(2).max(500)}))});async function Dt(e){const t=new Map;for(let n=0;n<e.length;n+=20){const r=e.slice(n,n+20),i=r.map((s,d)=>`${d+1}. ${s.front}: ${s.back}`).join(`
`),{value:o}=await P({messages:[{role:"system",content:nt},{role:"user",content:`CARDS (n. term: current back):
${i}`}],temperature:.3,maxTokens:Math.min(6e3,1200+r.length*120),prefer:"groq",reasoning:"medium"},s=>ot.parse(s));for(const s of o.cards){const d=r[s.n-1];d&&s.back.trim()&&t.set(d.id,s.back.trim())}}return t}const st=`You add "the concept" to flashcards a student already has: the idea
behind each term, so turning the card teaches more than a definition.
Reply with JSON only: {"cards": [{"n": number, "concept": string, "example": string}]}

- concept: at most 40 words, plain words: how it works or what drives it, how
  it connects to the lecture around it, and why it matters. Not a repeat of
  the back. Use the PASSAGE given with the card; never facts it does not
  support.
- example: one real-life application, at most 25 words (a patient, an
  everyday situation, a classic drug), or "" when the card already has one.
Keep "n" as given. Return every card.`,at=j({cards:A(j({n:I().int(),concept:v().max(400),example:v().max(240).nullish()}))});async function qt(e){const t=new Map;for(let n=0;n<e.length;n+=10){const r=e.slice(n,n+10),i=r.map((o,s)=>`${s+1}. ${o.front}: ${o.back}${o.example?`
   (has an example)`:""}${o.passage?`
   PASSAGE: ${o.passage.slice(0,700)}`:""}`).join(`

`);try{const{value:o}=await P({messages:[{role:"system",content:st},{role:"user",content:`CARDS:

${i}`}],temperature:.2,maxTokens:Math.min(4e3,400+r.length*160),prefer:"groq",reasoning:"low"},s=>at.parse(s));for(const s of o.cards){const d=r[s.n-1];!d||!s.concept.trim()||t.set(d.id,{concept:s.concept.trim(),example:d.example?null:s.example?.trim()||null})}}catch{}}return t}const U=A(I()).length(4),it=j({useful:J(),title:v().max(120).nullish(),objective:I().int().min(0).max(40).nullish(),example:v().max(240).nullish(),diagram_box:U.nullish(),labels:A(j({text:v().min(1).max(80),box_2d:U})).default([])}),rt=(e,t)=>`This image is one slide of a student's lecture.
${F(e)}${t?`
THE STUDENT WANTS: ${t}`:""}

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
When it is not useful, reply {"useful": false}.`;function G(e,t,n){const[r,i,o,s]=e.map(d=>Math.min(1e3,Math.max(0,d)));return[i/1e3*t,r/1e3*n,s/1e3*t,o/1e3*n]}async function ct(e,t,n,r){const i=await E.document.findMany({where:{id:{in:e},kind:"pdf"},select:{id:!0,fileName:!0,filePath:!0}}),{passages:o}=await D(e),s=[...t,n??""].join(" "),d=[];for(const c of i.filter(u=>!K(u.fileName))){const u=new Map;for(const l of o.filter(m=>m.documentId===c.id&&m.page))for(let m=l.page;m<=(l.pageEnd??l.page);m+=1)u.set(m,[...u.get(m)??[],l]);for(const[l,m]of u){if(r.has(`${c.id}:${l}`))continue;const a=await me(c.id,l).catch(()=>null);if(!a?.figures.length||!a.pageWidth)continue;const h=a.pageWidth*a.pageHeight,f=a.figures.filter(g=>(g.bbox[2]-g.bbox[0])*(g.bbox[3]-g.bbox[1])/h>.06);if(!f.length)continue;const p=m.map(g=>g.text).join(" ");d.push({documentId:c.id,filePath:c.filePath,page:l,score:de(p,s)+f.length,chunkId:m[0]?.id??null})}}return d.sort((c,u)=>u.score-c.score)}async function lt(e,t,n,r){const i=await B.renderPage({path:e,page:t,scale:1.5,format:"png"}),o=await ue({prompt:rt(n,r),imageBase64:i.imageBase64,mimeType:i.mimeType,validate:a=>it.parse(a)});if(!o.useful||!o.title)return null;const{pageWidth:s,pageHeight:d}=i,c=o.labels.map(a=>({text:a.text.replace(/\s+/g," ").trim(),box:G(a.box_2d,s,d)})).filter(a=>/[a-z]/i.test(a.text)&&a.box[2]>a.box[0]&&a.box[3]>a.box[1]),u=c.filter((a,h)=>c.findIndex(f=>f.text.toLowerCase()===a.text.toLowerCase())===h).slice(0,8);if(u.length<3)return null;const l=o.diagram_box?G(o.diagram_box,s,d):u[0].box,m=[Math.max(0,Math.min(l[0],...u.map(a=>a.box[0]))-8),Math.max(0,Math.min(l[1],...u.map(a=>a.box[1]))-8),Math.min(s,Math.max(l[2],...u.map(a=>a.box[2]))+8),Math.min(d,Math.max(l[3],...u.map(a=>a.box[3]))+8)];return{title:o.title.trim(),example:o.example?.trim()||null,objective:o.objective??null,visual:{crop:m,labels:u}}}async function ut(e,t,n){const r=await lt(e.filePath,e.page,t,n);if(!r)return null;const{visual:i}=r;return{front:r.title,back:i.labels.map(o=>o.text).join(" · "),example:r.example,objective:r.objective?t[r.objective-1]??null:null,category:"diagram",documentId:e.documentId,sourceChunkId:e.chunkId,page:e.page,sourceMethod:q,kind:"diagram",visual:JSON.stringify(i)}}function dt(e,t){const n=s=>new Set(JSON.parse(s.visual??"{}").labels?.map(d=>d.text.toLowerCase())??[]),[r,i]=[n(e),n(t)];return[...r].filter(s=>i.has(s)).length>=Math.min(r.size,i.size)*.6}async function ht(e){const{objectives:t}=await D(e.documentIds),n=new Set(e.existing.map(d=>`${d.documentId}:${d.page}`)),r=(await ct(e.documentIds,t,e.focus,n)).slice(0,Math.min(30,e.count*2+4));if(r.length===0)throw new Error("No diagrams were found in these documents (diagram cards need PDF slides with pictures).");const i=[];let o=0,s=null;for(let d=0;d<r.length&&i.length<e.count;d+=2){const c=await Promise.allSettled(r.slice(d,d+2).map(u=>ut(u,t,e.focus)));for(const u of c)u.status==="fulfilled"&&u.value&&i.length<e.count&&!i.some(l=>dt(l,u.value))&&i.push(u.value),u.status==="rejected"&&(o+=1,s=u.reason);if(o>=4&&i.length===0)break}if(i.length===0&&s)throw s;return i}const mt=/\b(?:leads? to|lead(?:ing)? to|causes?|caused by|results? in|resulting in|triggers?|activates?|inhibits?|stimulates?|promotes?|blocks?|which (?:then|in turn)|in turn|followed by|due to|consequently|therefore|so that|thereby)\b|→|->|⇒/gi;function ft(e){return(e.match(mt)?.length??0)/Math.max(e.length,1)*1e3}const gt=j({chains:A(j({title:v().min(4).max(120),steps:A(v().min(2).max(140)).min(3).max(8),objective:I().int().min(0).max(40).nullish(),example:v().max(240).nullish(),source:I().int().min(1).max(40).nullish()}))}),pt=`You turn a student's lecture into MECHANISM CHAINS to memorise: how one thing
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
- Skip any chain already under ALREADY HAVE.`;async function wt(e){const{passages:t,objectives:n}=await D(e.documentIds),r=[...n,e.focus??""].join(" "),i=t.filter(h=>h.text.length>200).map(h=>({p:h,score:ft(h.text)+de(h.text,r)*.3})).filter(h=>h.score>1).sort((h,f)=>f.score-h.score).map(h=>({...h.p,text:h.p.text.slice(0,2500)})),o=[];let s=[],d=0;for(const h of i.slice(0,Math.max(4,e.count+2)))d+h.text.length>R&&s.length&&(o.push(s),s=[],d=0),s.push(h),d+=h.text.length;if(s.length&&o.push(s),o.length===0)throw new Error("No mechanisms were found to chart in these documents.");const c=new Set(e.existingFronts.map(y)),u=[...e.existingFronts],l=[],m=Math.max(3,Math.ceil(e.count/o.length));for(const h of o.slice(0,4)){if(l.length>=e.count)break;const f=h.map((g,x)=>`[${x+1}]
${g.text}`).join(`

---

`);let p;try{({value:p}=await P({messages:[{role:"system",content:pt},{role:"user",content:`Make up to ${Math.min(m,e.count-l.length)} chains.

${F(n)}${e.focus?`

THE STUDENT WANTS: ${e.focus}`:""}

PASSAGES:

${f}${u.length?`

ALREADY HAVE: ${u.slice(-40).join("; ")}`:""}`}],temperature:.2,maxTokens:2400,prefer:"groq",reasoning:"low"},g=>gt.parse(g)))}catch(g){if(l.length===0&&h===o[Math.min(3,o.length-1)])throw g;continue}for(const g of p.chains){const x=y(g.title),b=g.objective?n[g.objective-1]:void 0;if(!x||c.has(x)||n.length&&!b||/\bvs\.?\b|\bversus\b|differences?\b/i.test(g.title))continue;c.add(x),u.push(g.title);const k=h[(g.source??1)-1]??h[0],S=g.steps.map(T=>T.trim()).filter(Boolean);if(l.push({front:g.title.trim(),back:S.join(" → "),example:g.example?.trim()||null,objective:b??null,category:"mechanism",documentId:k.documentId,sourceChunkId:k.id,page:k.page,sourceMethod:q,kind:"flow",visual:JSON.stringify({steps:S})}),l.length>=e.count)break}}const a=new Set((await E.document.findMany({where:{id:{in:e.documentIds},kind:"pdf"},select:{id:!0}})).map(h=>h.id));for(const h of l)h.documentId&&!a.has(h.documentId)&&(h.page=null);return l}const ce=A(v().min(1).max(90)).max(6).default([]),bt=j({useful:J(),figure:v().max(30).nullish(),image_box:U.nullish(),what:v().max(90).nullish(),features:ce,clinical:ce,idea:v().max(200).nullish(),caption:v().max(200).nullish(),objective:I().int().min(0).max(40).nullish(),enough:J().default(!0)}),yt=e=>`This image is one slide of a student's science lecture.
${F(e)}

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
When nothing is worth studying, reply {"useful": false}.`;async function xt(e,t){const n=await E.document.findMany({where:{id:{in:e},kind:"pdf"},select:{id:!0,fileName:!0,filePath:!0,meta:!0}}),{passages:r}=await D(e),i=[];for(const o of n.filter(s=>!K(s.fileName))){const s=new Map;for(const a of r.filter(h=>h.documentId===o.id&&h.page))s.has(a.page)||s.set(a.page,a.id);const d=[],c=[...s.keys()].sort((a,h)=>a-h).filter(a=>!t.has(`${o.id}:${a}`));for(let a=0;a<c.length;a+=6){const h=await Promise.all(c.slice(a,a+6).map(f=>me(o.id,f).then(p=>({page:f,f:p}),()=>null)));for(const f of h){if(!f?.f.figures.length||!f.f.pageWidth)continue;const p=f.f.pageWidth*f.f.pageHeight;for(const g of f.f.figures){const x=(g.bbox[2]-g.bbox[0])*(g.bbox[3]-g.bbox[1])/p;x>.04&&d.push({page:f.page,bbox:g.bbox,share:x})}}}const u=a=>a.map(h=>Math.round(h/6)).join(","),l=new Map;for(const a of d)l.set(u(a.bbox),(l.get(u(a.bbox))??0)+1);const m=new Map;for(const a of d)(l.get(u(a.bbox))??0)<3&&m.set(a.page,Math.max(m.get(a.page)??0,a.share));for(const[a,h]of m)i.push({documentId:o.id,filePath:o.filePath,page:a,chunkId:s.get(a)??null,area:h})}return i}async function vt(e,t){const n=await B.renderPage({path:e.filePath,page:e.page,scale:1.5,format:"png"}),r=await ue({prompt:yt(t),imageBase64:n.imageBase64,mimeType:n.mimeType,validate:c=>bt.parse(c),timeoutMs:3e4});if(!r.useful||!r.what?.trim()||!r.image_box)return null;const i=G(r.image_box,n.pageWidth,n.pageHeight);if(i[2]-i[0]<40||i[3]-i[1]<40)return null;const o=c=>[...new Set(c.map(u=>u.replace(/\s+/g," ").trim()).filter(Boolean))],s={what:[r.what.trim()],features:o(r.features),clinical:o(r.clinical),idea:r.idea?.trim()?[r.idea.trim()]:[]},d={crop:i,figure:(r.figure??"other").toLowerCase(),groups:s,caption:r.caption?.trim()||null,thin:!r.enough||s.features.length<2};return{front:s.what[0],back:[...s.features,...s.clinical,...s.idea].join(" · ")||s.what[0],example:null,objective:r.objective?t[r.objective-1]??null:null,category:d.figure,documentId:e.documentId,sourceChunkId:e.chunkId,page:e.page,sourceMethod:q,kind:"image",visual:JSON.stringify(d)}}async function kt(e){const{objectives:t}=await D(e.documentIds),n=new Set(e.existing.map(c=>`${c.documentId}:${c.page}`)),r=(await xt(e.documentIds,n)).sort((c,u)=>u.area-c.area).slice(0,e.count+10);if(r.length===0)throw new Error("No pictures were found to drill in these documents (image drills need PDF slides with pictures).");const i=new Set(e.existing.map(c=>y(c.front))),o=[];let s=0,d=null;for(let c=0;c<r.length&&o.length<e.count;c+=3){const u=await Promise.allSettled(r.slice(c,c+3).map(l=>vt(l,t)));for(const l of u){if(l.status==="rejected"){s+=1,d=l.reason;continue}const m=l.value;!m||i.has(y(m.front))||o.length>=e.count||(i.add(y(m.front)),o.push(m))}if(s>=4&&o.length===0)break}if(o.length===0&&d)throw d;return o.sort((c,u)=>(c.documentId??"").localeCompare(u.documentId??"")||(c.page??0)-(u.page??0))}async function zt(e){return e.kind==="image"?kt(e):e.kind==="diagram"?ht({...e,existing:e.existing}):wt({...e,existingFronts:e.existing.map(t=>t.front)})}export{z as P,q as S,Mt as a,we as b,Pt as c,me as d,qt as e,Rt as f,zt as g,Ot as h,Nt as i,Ct as l,y as n,Dt as p,At as r,lt as s};
