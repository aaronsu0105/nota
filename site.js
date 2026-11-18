/* Nota — the website's demos. Everything here is sample data, worked out in the page. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = (n) => String(n).padStart(2, '0');
  const clock = (hm) => {
    const [h, m] = hm.split(':').map(Number);
    return `${((h + 11) % 12) + 1}${m ? `:${pad(m)}` : ''} ${h >= 12 ? 'pm' : 'am'}`;
  };
  const toMin = (hm) => Number(hm.slice(0, 2)) * 60 + Number(hm.slice(3));
  const toHM = (m) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;

  /* ------------------------------------------------------------- the day passes */
  const layers = $$('.sky i');
  let skyFrame = 0;
  const paintSky = () => {
    skyFrame = 0;
    const max = document.documentElement.scrollHeight - innerHeight;
    // Dawn at the top to a soft dusk by the footer.
    const t = Math.min(1, Math.max(0, scrollY / Math.max(1, max))) * 3;
    layers.forEach((layer, i) => (layer.style.opacity = String(i === 0 ? 1 : Math.max(0, Math.min(1, t - i + 1)))));
  };
  addEventListener('scroll', () => (skyFrame ||= requestAnimationFrame(paintSky)), { passive: true });
  paintSky();

  /* ------------------------------------------------------------------ the buddy */
  const buddy = $('#buddy');
  const buddyImg = $('#buddy-img');
  const poses = {};
  const pose = (name) => {
    const src = `assets/buddy-${name}.webp`;
    if (buddyImg.getAttribute('src') === src) return;
    if (!poses[name]) (poses[name] = new Image()).src = src;
    buddyImg.src = src;
  };
  ['curious', 'cheering', 'thinking', 'waving'].forEach((n) => ((poses[n] = new Image()).src = `assets/buddy-${n}.webp`));
  let poseTimer = 0;
  const momentary = (name, ms = 2200) => {
    clearTimeout(poseTimer);
    pose(name);
    poseTimer = setTimeout(() => pose('happy'), ms);
  };
  const hop = () => {
    buddy.classList.remove('hop');
    void buddy.offsetWidth;
    buddy.classList.add('hop');
  };

  // It turns toward the pointer: a small lean and tilt, and the tiles drift the other way.
  const stage = $('#stage');
  const tiles = $$('.tile', stage);
  if (!still && matchMedia('(pointer: fine)').matches) {
    let frame = 0;
    addEventListener('pointermove', (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const box = buddy.getBoundingClientRect();
        if (box.bottom < 0 || box.top > innerHeight) return;
        const dx = (e.clientX - (box.left + box.width / 2)) / innerWidth;
        const dy = (e.clientY - (box.top + box.height / 2)) / innerHeight;
        buddy.style.transform = `rotate(${dx * 7}deg) translateX(${dx * 14}px) translateY(${Math.max(-6, dy * 8)}px)`;
        tiles.forEach((tile, i) => {
          const depth = 8 + (i % 3) * 6;
          tile.style.setProperty('--dx', `${-dx * depth}px`);
          tile.style.setProperty('--dy', `${-dy * depth}px`);
        });
      });
    });
  }

  /* ------------------------------------------------------- reading a day and time */
  // The same idea as the app's time reader, kept small: a day, a time or a range, and whether it is due.
  const DAYS = { mon: 0, monday: 0, tue: 1, tues: 1, tuesday: 1, wed: 2, wednesday: 2, thu: 3, thur: 3, thurs: 3, thursday: 3, fri: 4, friday: 4 };
  const TODAY = 1; // the sample week's Tuesday
  function readLine(text) {
    const s = ` ${text.toLowerCase()} `;
    let day = null;
    const dm = s.match(/\b(today|tomorrow|mon(?:day)?|tues?(?:day)?|wed(?:nesday)?|thu(?:rs?(?:day)?)?|fri(?:day)?)\b/);
    if (dm) day = dm[1] === 'today' ? TODAY : dm[1] === 'tomorrow' ? TODAY + 1 : DAYS[dm[1]];
    const due = /\b(due|deadline|submit|hand in|by)\b/.test(s);
    const re = /\b(?:at|from|by)?\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*(?:(?:-|–|to|until)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?)?/g;
    let best = null;
    for (const m of s.matchAll(re)) {
      if (!m[2] && !m[3] && !m[4] && !/\b(at|from|by)\s*$/.test(s.slice(0, m.index + m[0].indexOf(m[1])))) continue;
      best = m;
    }
    if (!best) return day === null ? null : { day, start: null, end: null, due, title: titleOf(text, dm, null) };
    const hour = (h, m, ap, ref) => {
      let H = Number(h);
      if (ap === 'pm' && H < 12) H += 12;
      if (ap === 'am' && H === 12) H = 0;
      if (!ap) H = ref !== undefined ? (H < ref / 60 % 24 && H + 12 <= 23 ? H + 12 : H) : H >= 1 && H <= 7 ? H + 12 : H;
      return H * 60 + (m ? Number(m) : 0);
    };
    const endAp = best[6];
    let start = hour(best[1], best[2], best[3] || (endAp && Number(best[1]) <= Number(best[4] || 0) ? endAp : undefined));
    let end = best[4] ? hour(best[4], best[5], endAp || best[3]) : null;
    if (end !== null && end <= start) end += 12 * 60;
    if (start > 23 * 60 + 59) start = 23 * 60 + 59;
    return { day, start: toHM(start), end: end !== null ? toHM(Math.min(end, 23 * 60 + 59)) : null, due: due && end === null, title: titleOf(text, dm, best) };
  }
  function titleOf(text, dm, tm) {
    let t = ` ${text} `;
    if (tm) t = t.replace(new RegExp(tm[0].trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), ' ');
    if (dm) t = t.replace(new RegExp(`\\b${dm[1]}\\b`, 'i'), ' ');
    t = t.replace(/\b(on|at|this|next|from|due|by)\b/gi, ' ').replace(/\s+/g, ' ').trim();
    return t ? t[0].toUpperCase() + t.slice(1) : 'Something';
  }
  const dayName = (d) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][d];
  const describe = (r) => `${dayName(r.day ?? TODAY)}${r.start ? (r.due ? `, due ${clock(r.start)}` : `, ${clock(r.start)}${r.end ? ` to ${clock(r.end)}` : ''}`) : ''}`;

  /* --------------------------------------------------------------- the hero line */
  const askInput = $('#ask-input');
  const askRead = $('#ask-read');
  const calTile = $('[data-tile="calendar"]');
  askInput.addEventListener('input', () => {
    const r = readLine(askInput.value);
    if (askInput.value.trim()) pose('curious');
    askRead.innerHTML = r && (r.start || r.day !== null) ? `Got it: <b>${describe(r)}</b>. Press enter and I'll put it in your week.` : askInput.value.trim() ? 'When is it? Add a day or a time, like friday 2pm.' : 'Try a quiz, a lab or a study session, with a day and a time.';
  });
  askInput.addEventListener('blur', () => pose('happy'));
  $('#ask').addEventListener('submit', (e) => {
    e.preventDefault();
    const r = readLine(askInput.value);
    if (!r) {
      askRead.textContent = 'When is it? Add a day or a time, like friday 2pm.';
      return;
    }
    const item = addToWeek(r);
    calTile.querySelector('[data-tile-title]').textContent = r.title;
    calTile.querySelector('[data-tile-sub]').textContent = describe(r);
    calTile.classList.add('lit');
    setTimeout(() => calTile.classList.remove('lit'), 2400);
    askRead.innerHTML = `Done. <b>${item.title}</b> is in your week, ${describe(r)}. <a href="#calendar">Take a look</a>`;
    askInput.value = '';
    momentary('cheering');
    hop();
  });

  /* ------------------------------------------------------------------ the week */
  const C = { bio: '#7f9f74', chem: '#8f84c4', phys: '#5f97b8', calc: '#c9a24a', mine: '#c4583a' };
  const week = [
    { id: 'c1', day: 0, title: 'BIOL 1001 lecture', start: '09:30', end: '10:30', c: C.bio, kind: 'class' },
    { id: 'c2', day: 2, title: 'BIOL 1001 lecture', start: '09:30', end: '10:30', c: C.bio, kind: 'class' },
    { id: 'c3', day: 1, title: 'CHEM 1301 lecture', start: '11:30', end: '12:30', c: C.chem, kind: 'class' },
    { id: 'c4', day: 3, title: 'CHEM 1301 lecture', start: '11:30', end: '12:30', c: C.chem, kind: 'class' },
    { id: 'c5', day: 4, title: 'PHYS 1028 lab', start: '13:30', end: '16:30', c: C.phys, kind: 'class' },
    { id: 's1', day: 1, title: 'Review membranes', start: '15:00', end: '16:30', c: C.bio, kind: 'block' },
    { id: 's2', day: 3, title: 'Study group', start: '16:00', end: '17:00', c: C.phys, kind: 'block' },
    { id: 'd1', day: 2, title: 'Cell biology quiz', start: '14:00', c: C.bio, kind: 'due' },
    { id: 'd2', day: 4, title: 'Chem midterm', start: '18:30', c: C.chem, kind: 'exam' },
  ];
  const H0 = 9, H1 = 18, PX = 44;
  const weekEl = $('#week');
  const flag = '<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 11V1.5M2.5 2h6.5l-1.5 2.2L9 6.5H2.5" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" style="color:#c4583a"/></svg>';
  function renderWeek(freshId) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    let html = '<span></span>' + days.map((d, i) => `<div class="daytile${i === TODAY ? ' today' : ''}">${d}<b>${16 + i}</b></div>`).join('');
    html += '<span class="hlabel" style="position:static;text-align:right;padding-top:6px">due</span>';
    for (let d = 0; d < 5; d++) {
      html += `<div class="due-row">${week.filter((e) => e.day === d && (e.kind === 'due' || e.kind === 'exam')).map((e) => `<button class="due${e.kind === 'exam' ? ' exam' : ''}${e.id === freshId ? ' block fresh' : ''}" style="position:static" data-id="${e.id}">${e.kind === 'exam' ? '' : flag}<span>${e.title}<br><span style="opacity:.7">${e.kind === 'exam' ? '' : 'due '}${clock(e.start)}</span></span></button>`).join('')}</div>`;
    }
    const h = (H1 - H0) * PX;
    html += `<div class="hours" style="height:${h}px">${Array.from({ length: H1 - H0 }, (_, i) => `<span class="hlabel" style="top:${i * PX}px">${i ? clock(toHM((H0 + i) * 60)).replace(':00', '') : ''}</span>`).join('')}</div>`;
    for (let d = 0; d < 5; d++) {
      html += `<div class="col${d === TODAY ? ' today' : ''}" data-day="${d}" style="height:${h}px">${Array.from({ length: H1 - H0 }, (_, i) => `<i class="hline" style="top:${i * PX}px"></i>`).join('')}`;
      for (const e of week.filter((x) => x.day === d && (x.kind === 'class' || x.kind === 'block'))) {
        const top = ((toMin(e.start) - H0 * 60) / 60) * PX + 1;
        const ht = ((toMin(e.end) - toMin(e.start)) / 60) * PX - 3;
        html += `<button class="block ${e.kind === 'class' ? 'class' : ''}${e.id === freshId ? ' fresh' : ''}" data-id="${e.id}" style="top:${top}px;height:${ht}px;--c:${e.c}" ${e.kind === 'class' ? 'tabindex="-1"' : ''} aria-label="${e.title}, ${days[d]} ${clock(e.start)} to ${clock(e.end)}${e.kind === 'class' ? '' : '. Arrow keys move it.'}"><b>${e.title}</b>${ht > 34 ? `<span>${clock(e.start)}–${clock(e.end)}</span>` : ''}</button>`;
      }
      html += '</div>';
    }
    weekEl.innerHTML = html;
  }
  renderWeek();

  function addToWeek(r) {
    const due = r.due || !r.start || false;
    const start = r.start ?? '23:59';
    const item = { id: `n${Date.now()}`, day: r.day ?? TODAY, title: r.title, start: due ? start : clampStart(start), c: C.mine, kind: due ? 'due' : 'block' };
    if (!due) item.end = r.end && toMin(r.end) > toMin(item.start) ? clampEnd(r.end) : toHM(Math.min(H1 * 60, toMin(item.start) + 60));
    week.push(item);
    renderWeek(item.id);
    return item;
  }
  const clampStart = (hm) => toHM(Math.max(H0 * 60, Math.min((H1 - 1) * 60, toMin(hm))));
  const clampEnd = (hm) => toHM(Math.min(H1 * 60, toMin(hm)));

  // Drag a block to another time or day; the arrow keys do the same.
  let drag = null;
  weekEl.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.block:not(.class)');
    if (!el || el.classList.contains('due')) return;
    const item = week.find((x) => x.id === el.dataset.id);
    if (!item || !item.end) return;
    el.setPointerCapture(e.pointerId);
    drag = { el, item, x: e.clientX, y: e.clientY, s: toMin(item.start), len: toMin(item.end) - toMin(item.start), day: item.day };
    el.classList.add('dragging');
  });
  weekEl.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dy = e.clientY - drag.y;
    const cols = $$('.col', weekEl);
    const colW = cols[0].getBoundingClientRect().width + 8;
    const dd = Math.round((e.clientX - drag.x) / colW);
    const s = Math.max(H0 * 60, Math.min(H1 * 60 - drag.len, drag.s + Math.round(((dy / PX) * 60) / 15) * 15));
    drag.el.style.transform = `translate(${dd * colW}px, ${((s - drag.s) / 60) * PX}px)`;
    drag.next = { s, day: Math.max(0, Math.min(4, drag.day + dd)) };
  });
  const drop = () => {
    if (!drag) return;
    if (drag.next) {
      drag.item.start = toHM(drag.next.s);
      drag.item.end = toHM(drag.next.s + drag.len);
      drag.item.day = drag.next.day;
      momentary('curious', 1200);
    }
    const id = drag.item.id;
    drag = null;
    renderWeek();
    weekEl.querySelector(`[data-id="${id}"]`)?.focus();
  };
  weekEl.addEventListener('pointerup', drop);
  weekEl.addEventListener('pointercancel', drop);
  weekEl.addEventListener('keydown', (e) => {
    const el = e.target.closest('.block:not(.class)');
    if (!el || !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const item = week.find((x) => x.id === el.dataset.id);
    if (!item?.end) return;
    e.preventDefault();
    const len = toMin(item.end) - toMin(item.start);
    let s = toMin(item.start);
    if (e.key === 'ArrowUp') s = Math.max(H0 * 60, s - 15);
    if (e.key === 'ArrowDown') s = Math.min(H1 * 60 - len, s + 15);
    if (e.key === 'ArrowLeft') item.day = Math.max(0, item.day - 1);
    if (e.key === 'ArrowRight') item.day = Math.min(4, item.day + 1);
    item.start = toHM(s);
    item.end = toHM(s + len);
    renderWeek();
    weekEl.querySelector(`[data-id="${item.id}"]`)?.focus();
  });

  // The add line: read as you type, and the student says block or deadline.
  const addInput = $('#add-input');
  const guess = $('#guess');
  let asDue = null;
  const showGuess = () => {
    const r = readLine(addInput.value);
    if (!r || (!r.start && r.day === null)) {
      guess.innerHTML = addInput.value.trim() ? '<span>When is it? Add a day or a time.</span>' : '';
      return;
    }
    const due = asDue ?? r.due;
    guess.innerHTML = `<span>Sounds like <b>${dayName(r.day ?? TODAY)}${r.start ? `, ${clock(r.start)}${r.end && !due ? `–${clock(r.end)}` : ''}` : ''}</b>.</span>
      <span class="seg" role="radiogroup" aria-label="Block or deadline"><button type="button" role="radio" aria-pressed="${!due}" aria-checked="${!due}" data-as="block">Time to block out</button><button type="button" role="radio" aria-pressed="${due}" aria-checked="${due}" data-as="due">Something due</button></span>`;
  };
  addInput.addEventListener('input', () => {
    asDue = null;
    showGuess();
  });
  guess.addEventListener('click', (e) => {
    const b = e.target.closest('[data-as]');
    if (!b) return;
    asDue = b.dataset.as === 'due';
    showGuess();
  });
  $('#add').addEventListener('submit', (e) => {
    e.preventDefault();
    const r = readLine(addInput.value);
    if (!r) return;
    if (asDue !== null) r.due = asDue;
    addToWeek(r);
    addInput.value = '';
    guess.innerHTML = `<span>Added <b>${r.title}</b>, ${describe(r)}.</span>`;
    asDue = null;
  });

  /* ------------------------------------------------------------- the reminder ladder */
  const LADDER = [
    ['a week away', 'Chem lab report, due Thursday', "It's just a quiet line in your week for now."],
    ['five days away', 'Chem lab report, in 5 days', "I'll mention it once, gently."],
    ['three days away', 'Chem lab report, in 3 days. Maybe start it this weekend?', 'A little nudge, so the weekend has a plan.'],
    ['tomorrow', 'Due tomorrow at 11:59 pm: chem lab report', "It's tomorrow. You'll see it first thing."],
    ['this morning', 'Due tonight: chem lab report', 'Today it sits on top of everything else.'],
    ['two hours left', 'Two hours left: submit your chem lab report on OWL', "I won't let this one slip by."],
    ['due now', 'Due now: chem lab report', 'Still here until you deal with it.'],
    ['a day late', 'A day late: chem lab report. Open it?', 'Late happens. It stays calm, and it stays put.'],
  ];
  const LEVEL = [0, 1, 1, 2, 3, 4, 4, 5];
  const alarm = $('#alarm');
  const ladder = $('#ladder');
  const paintLadder = () => {
    const i = Number(ladder.value);
    alarm.className = `alarm glass lvl-${LEVEL[i]}`;
    $('#alarm-bar').innerHTML = `${LEVEL[i] >= 2 ? flag : ''}<span>${LADDER[i][1]}</span>`;
    $('#alarm-says').textContent = LADDER[i][2];
    ladder.setAttribute('aria-valuetext', LADDER[i][0]);
  };
  ladder.addEventListener('input', paintLadder);
  paintLadder();

  /* --------------------------------------------------------------------- search */
  const DOCS = [
    { file: 'CHEM 1301 · Course outline.pdf', kind: 'PDF', page: 4, text: 'Evaluation: Lab reports 30%, Midterm 30% (Friday, November 20, 6:30 to 8:30 pm, in class), Weekly quizzes 10%, Final exam 30%.' },
    { file: 'CHEM 1301 · Course outline.pdf', kind: 'PDF', page: 5, text: 'The midterm covers Units 1 to 4: atomic structure, bonding, stoichiometry and gases. Bring a non-programmable calculator.' },
    { file: 'BIOL 1001 · Lecture 7 · Membrane transport.pdf', kind: 'PDF', page: 12, text: 'Osmosis is the diffusion of water across a selectively permeable membrane, from lower to higher solute concentration.' },
    { file: 'BIOL 1001 · Lecture 7 · Membrane transport.pdf', kind: 'PDF', page: 15, text: 'The sodium-potassium pump moves 3 Na+ out and 2 K+ in for each ATP, keeping the resting membrane potential.' },
    { file: 'PHYS 1028 · Lab manual.pdf', kind: 'PDF', page: 3, text: 'Lab reports are due one week after your lab session at 11:59 pm on OWL. Late reports lose 10% per day.' },
    { file: 'BIOL 1001 · Lecture 7 · recording', kind: 'REC', page: 22, text: 'So when you see tonicity on the quiz, think about the cell, not the solution: does water move in or out of it?' },
    { file: 'My notes · Week 9.md', kind: 'NOTE', page: 1, text: 'Quiz Wednesday 2pm covers lectures 6 and 7. Review osmosis and the Na/K pump first.' },
  ];
  const ANSWERS = [
    [/midterm.*(worth|weight|percent|%)|weight.*midterm/, 'The midterm is worth 30% of CHEM 1301.', 0],
    [/when.*(chem )?midterm|midterm.*when|midterm.*date/, 'Friday, November 20, 6:30 to 8:30 pm, in class.', 0],
    [/(lab report|lab).*(due|late)/, 'One week after your lab session, at 11:59 pm on OWL, with 10% off per late day.', 4],
  ];
  const CHIPS = ['When is the chem midterm?', 'What is the midterm worth?', 'Osmosis', 'When is my lab report due?', 'The Na K pump'];
  const ICON = {
    PDF: ['', '<svg viewBox="0 0 20 20" fill="none"><path d="M5 2.5h7l3.5 3.5v11.5h-10.5z" fill="#fff"/><path d="M8 10h5M8 13h4" stroke="#c9532f" stroke-width="1.5" stroke-linecap="round"/></svg>'],
    REC: ['', '<svg viewBox="0 0 20 20" fill="none"><rect x="7.5" y="3" width="5" height="9" rx="2.5" fill="#fff"/><path d="M5 10a5 5 0 0010 0M10 15v2.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>'],
    NOTE: ['', '<svg viewBox="0 0 20 20" fill="none"><rect x="4" y="3" width="12" height="14" rx="2.5" fill="#fff"/><path d="M7 7.5h6M7 10.5h6M7 13.5h3" stroke="#8f7bd6" stroke-width="1.5" stroke-linecap="round"/></svg>'],
  };
  $('#chips').innerHTML = CHIPS.map((c) => `<button class="chip" type="button">${c}</button>`).join('');
  const q = $('#q');
  const results = $('#results');
  const words = (s) => s.toLowerCase().replace(/[^a-z0-9%+ ]/g, ' ').split(/\s+/).filter((w) => w.length > 1 && !['is', 'the', 'what', 'when', 'a', 'of', 'in', 'my'].includes(w));
  const highlight = (text, ws) => ws.reduce((t, w) => t.replace(new RegExp(`(${w.replace(/[^a-z0-9]/g, '')}[a-z]*)`, 'gi'), '<mark>$1</mark>'), text);
  function runSearch() {
    const value = q.value.trim().toLowerCase();
    if (!value) {
      results.innerHTML = '';
      return;
    }
    const ws = words(value);
    const scored = DOCS.map((d, i) => ({ d, i, s: ws.reduce((n, w) => n + (d.text.toLowerCase().includes(w) ? 2 : 0) + (d.file.toLowerCase().includes(w) ? 1 : 0), 0) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 3);
    const answer = ANSWERS.find(([re]) => re.test(value));
    let html = scored.length
      ? scored.map(({ d }) => `<article class="result"><span class="doc" style="--c:${ICON[d.kind][0]}">${ICON[d.kind][1]}</span><div><h4>${d.file}</h4><p>${highlight(d.text, ws)}</p></div><span class="cite">Page ${d.page}</span></article>`).join('')
      : '<p style="font-size:15px;opacity:.8">Nothing about that in these sample files. In Nota, this looks through everything you have added.</p>';
    if (answer) {
      const src = DOCS[answer[2]];
      html += `<div class="followup glass-dark"><img src="assets/buddy-curious-sm.webp" alt="" /><div>${answer[1]} <span class="cite">${src.file.split(' · ')[0]}, page ${src.page}</span><br><small>Want more? Ask a follow-up in the chat.</small></div></div>`;
    }
    results.innerHTML = html;
  }
  q.addEventListener('input', runSearch);
  $('#chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    q.value = chip.textContent.replace(/\?$/, '');
    runSearch();
    q.focus();
  });

  /* --------------------------------------------------------------------- island */
  const HOTS = [
    ['Lectures', 'Houses', 'Every lecture is a little house. Its windows light up once you understand it.', 31, 48],
    ['Objectives', 'Trees', 'Every objective starts as a sapling and grows into a tree as you practise.', 40, 66],
    ['Deadlines', 'Flags', 'A flag marks something due. The closer it gets, the brighter it waves.', 56, 15],
    ['Your week', 'Windmills', 'The windmills spin faster the more you studied this week.', 38, 32],
    ['Unread pages', 'Mist', 'Mist hangs over anything you haven\'t opened yet.', 56, 42],
  ];
  const view = $('#island-view');
  const tip = $('#hot-tip');
  const legend = $('#legend');
  HOTS.forEach(([kind, name, text, x, y], i) => {
    const b = document.createElement('button');
    b.className = 'hot';
    b.style.left = `${x}%`;
    b.style.top = `${y}%`;
    b.setAttribute('aria-label', `${name}: ${text}`);
    b.dataset.i = i;
    view.appendChild(b);
    const li = document.createElement('li');
    li.innerHTML = `<button type="button" data-i="${i}"><i style="--c:${['#f1e9e2', '#f1e9e2', '#f6dfd5', '#f1e9e2', '#f1e9e2'][i]}"></i><span><b style="font-weight:600">${name}</b> are ${kind.toLowerCase()}</span></button>`;
    legend?.appendChild(li);
  });
  const showHot = (i) => {
    $$('[data-i]').forEach((el) => el.setAttribute('aria-pressed', String(Number(el.dataset.i) === i)));
    if (i === null) {
      tip.style.opacity = '0';
      return;
    }
    const [, name, text, x, y] = HOTS[i];
    tip.innerHTML = `<b style="font-weight:500">${name}</b><br>${text}`;
    tip.style.left = `${Math.min(80, Math.max(20, x))}%`;
    tip.style.top = `${y}%`;
    tip.style.opacity = '1';
  };
  [view, legend].filter(Boolean).forEach((root) => {
    root.addEventListener('pointerover', (e) => {
      const el = e.target.closest('[data-i]');
      if (el) showHot(Number(el.dataset.i));
    });
    root.addEventListener('focusin', (e) => {
      const el = e.target.closest('[data-i]');
      if (el) showHot(Number(el.dataset.i));
    });
    root.addEventListener('click', (e) => {
      const el = e.target.closest('[data-i]');
      if (el) showHot(Number(el.dataset.i));
    });
  });
  view.addEventListener('pointerleave', () => showHot(null));

  // The day passes over the island as the section scrolls by.
  const shots = $$('img[data-phase]', view);
  const islandSection = $('#island');
  const names = ['Early morning', 'Late afternoon', 'Evening', 'Night'];
  let islandFrame = 0;
  const paintIsland = () => {
    islandFrame = 0;
    const box = islandSection.getBoundingClientRect();
    const span = Math.max(1, box.height - innerHeight);
    const t = Math.min(1, Math.max(0, -box.top / span)) * (shots.length - 1);
    shots.forEach((img, i) => (img.style.opacity = String(i === 0 ? 1 : Math.max(0, Math.min(1, t - i + 1)))));
    $('#island-time').textContent = names[Math.round(t)];
  };
  const islandWatch = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) addEventListener('scroll', onIslandScroll, { passive: true });
    else removeEventListener('scroll', onIslandScroll);
  });
  const onIslandScroll = () => (islandFrame ||= requestAnimationFrame(paintIsland));
  islandWatch.observe(islandSection);
  paintIsland();

  /* ----------------------------------------------------------------- flashcards */
  const CARDS = [
    ['What is osmosis?', 'The diffusion of water across a selectively permeable membrane, toward the higher solute concentration.', 'BIOL 1001 · Lecture 7 · p.12'],
    ['What does the Na⁺/K⁺ pump move for each ATP?', 'Three Na⁺ out of the cell and two K⁺ in.', 'BIOL 1001 · Lecture 7 · p.15'],
    ['Ideal gas law', 'PV = nRT, with R = 8.314 J/(mol·K).', 'CHEM 1301 · Unit 4 · p.6'],
    ['A cell in a hypertonic solution…', 'loses water and shrinks: water moves out, toward the higher solute concentration.', 'BIOL 1001 · Lecture 7 · p.13'],
  ];
  const deck = $('#deck');
  let order = CARDS.map((_, i) => i);
  let seen = 0;
  const renderDeck = () => {
    deck.innerHTML = order
      .slice(0, 3)
      .map((i, k) => `<div class="card" data-k="${k}" style="z-index:${3 - k};--y:${k * 10}px;--s:${1 - k * 0.04};--o:${1 - k * 0.3}"${k ? ' aria-hidden="true"' : ''}><div class="inner"><div class="face front"><span class="sample">A sample card</span><p class="q">${CARDS[i][0]}</p><span class="src">Tap to turn it over</span></div><div class="face back"><span class="sample">The answer</span><p class="a">${CARDS[i][1]}</p><span class="src">${CARDS[i][2]}</span></div></div></div>`)
      .join('');
    $('#deck-count').textContent = `Card ${(seen % CARDS.length) + 1} of ${CARDS.length}`;
  };
  renderDeck();
  const top = () => deck.querySelector('[data-k="0"]');
  const flip = () => top()?.classList.toggle('flipped');
  let leaving = false;
  const rate = (r) => {
    const card = top();
    if (!card || leaving) return;
    leaving = true;
    card.style.setProperty('--out', r === 0 ? '-120%' : '120%');
    card.style.setProperty('--tilt', r === 0 ? '-8deg' : '8deg');
    card.classList.add('gone');
    if (r === 3) {
      pose('celebrating');
      clearTimeout(poseTimer);
      poseTimer = setTimeout(() => pose('happy'), 1800);
    }
    setTimeout(() => {
      order.push(order.shift());
      seen += 1;
      renderDeck();
      leaving = false;
    }, still ? 0 : 340);
  };
  // A swipe rates the card; a tap that did not travel turns it.
  let sx = null;
  let swiped = false;
  deck.addEventListener('pointerdown', (e) => ((sx = e.clientX), (swiped = false)));
  deck.addEventListener('pointerup', (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx;
    sx = null;
    if (Math.abs(dx) > 70) ((swiped = true), rate(dx < 0 ? 0 : 2));
  });
  deck.addEventListener('click', () => (swiped ? (swiped = false) : flip()));
  deck.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      flip();
    }
    if (['1', '2', '3', '4'].includes(e.key)) rate(Number(e.key) - 1);
    if (e.key === 'ArrowRight') rate(2);
  });
  $('#next').addEventListener('click', () => rate(2));
  $('#rate').addEventListener('click', (e) => {
    const b = e.target.closest('[data-r]');
    if (b) rate(Number(b.dataset.r));
  });

  // Explore the island: the app's own scene, loaded only when asked for, and unloaded on close.
  const dlg = $('#explore-dlg');
  const frame = $('iframe', dlg);
  $('#explore').addEventListener('click', () => {
    frame.src = 'world/island.html';
    dlg.showModal();
    frame.addEventListener('load', () => frame.contentWindow?.focus(), { once: true });
  });
  dlg.addEventListener('close', () => {
    frame.src = 'about:blank';
    $('#explore').focus();
  });
  addEventListener('message', (e) => e.data === 'nota-island-close' && dlg.open && dlg.close());

  /* ------------------------------------------------------------------- grades */
  const MARKS = [['Lab reports', 30, 84], ['Weekly quizzes', 10, 90], ['Midterm', 30, 72]];
  const MC = ['#5c5160', '#8a7f86', '#b3a9ae'];
  $('#marks').innerHTML = MARKS.map(([n, w, m], i) => `<div class="mark"><span>${n}</span><span class="w">worth ${w}%</span><output>${m}%</output><span class="bar"><i style="width:${m}%;--c:${MC[i]}"></i></span></div>`).join('') + '<div class="mark"><span>Final exam</span><span class="w">worth 30%</span><output>?</output></div>';
  const target = $('#target');
  const paintNeed = () => {
    const t = Number(target.value);
    $('#target-out').textContent = `${t}%`;
    const have = MARKS.reduce((s, [, w, m]) => s + (w * m) / 100, 0);
    const need = ((t - have) / 30) * 100;
    $('#need').textContent = need > 100 ? '—' : `${Math.max(0, Math.round(need))}%`;
    $('#need-text').textContent = need > 100 ? `${t}% is out of reach now. ${Math.floor(have + 30)}% is still possible.` : need <= 0 ? `You already have ${t}%, whatever happens on the final.` : `is what you need on the final to finish with ${t}%.`;
  };
  target.addEventListener('input', paintNeed);
  paintNeed();

  // A month of study as dots, filling in when it comes into view.
  const heat = $('#heat');
  const levels = Array.from({ length: 28 * 4 }, (_, i) => {
    const day = i % 7;
    const v = (Math.sin(i * 1.7) + 1) / 2 + (day === 5 || day === 6 ? -0.35 : 0.1);
    return v > 0.85 ? 3 : v > 0.6 ? 2 : v > 0.35 ? 1 : 0;
  });
  heat.innerHTML = levels.map(() => '<i></i>').join('');
  const fill = () => $$('i', heat).forEach((dot, i) => setTimeout(() => levels[i] && dot.classList.add(`on${levels[i]}`), still ? 0 : i * 8));
  new IntersectionObserver(([e], o) => {
    if (e.isIntersecting) {
      fill();
      o.disconnect();
    }
  }, { threshold: 0.4 }).observe(heat);

  /* ------------------------------------------------------------ totals that rise */
  $$('[data-count]').forEach((el) =>
    new IntersectionObserver(([e], o) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const to = Number(el.dataset.count);
      if (still) return void (el.textContent = String(to));
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1200);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.6 }).observe(el),
  );

  /* ---------------------------------------------------------------- bento */
  // A week you can rearrange: chips dragged from day to day.
  const mw = $('#mw');
  if (mw) {
    const MD = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    mw.innerHTML = MD.map((d) => `<div class="d"><span>${d}</span></div>`).join('');
    const chips = [['Read L8', 0, 30], ['Lab 3', 1, 76], ['Quiz', 2, 40, 'exam'], ['30 cards', 3, 92], ['Lab report', 4, 56]];
    chips.forEach(([t, d, y, k]) => {
      const el = document.createElement('div');
      el.className = `mchip${k ? ' exam' : ''}`;
      el.textContent = t;
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', `${t}, ${MD[d]}. Arrow keys move it.`);
      el.style.top = `${y}px`;
      mw.children[d].appendChild(el);
      let start = null;
      el.addEventListener('pointerdown', (e) => {
        el.setPointerCapture(e.pointerId);
        start = { x: e.clientX, y: e.clientY, top: parseFloat(el.style.top) };
        el.classList.add('dragging');
      });
      el.addEventListener('pointermove', (e) => {
        if (!start) return;
        el.style.transform = `translate(${e.clientX - start.x}px, ${e.clientY - start.y}px)`;
      });
      el.addEventListener('pointerup', (e) => {
        if (!start) return;
        el.classList.remove('dragging');
        el.style.transform = '';
        const target = document.elementsFromPoint(e.clientX, e.clientY).find((n) => n.classList?.contains('d') && mw.contains(n));
        const col = target ?? el.parentElement;
        const h = col.getBoundingClientRect().height;
        el.style.top = `${Math.max(26, Math.min(h - 40, start.top + (e.clientY - start.y)))}px`;
        col.appendChild(el);
        start = null;
      });
      el.addEventListener('keydown', (e) => {
        const cols = [...mw.children];
        const i = cols.indexOf(el.parentElement);
        if (e.key === 'ArrowLeft' && i > 0) cols[i - 1].appendChild(el);
        else if (e.key === 'ArrowRight' && i < 4) cols[i + 1].appendChild(el);
        else return;
        e.preventDefault();
        el.focus();
      });
    });
  }

  // An outline whose dates land on the month when you hover or focus it.
  const mm = $('#minimonth');
  if (mm) {
    mm.innerHTML = Array.from({ length: 28 }, (_, i) => `<i class="${i + 3 === 20 || i + 3 === 26 ? 'hit' : ''}">${i + 3}</i>`).join('');
    const card = $('#outline-card');
    ['pointerenter', 'focus'].forEach((ev) => card.addEventListener(ev, () => card.classList.add('go')));
    ['pointerleave', 'blur'].forEach((ev) => card.addEventListener(ev, () => card.classList.remove('go')));
  }

  // Find it as you type.
  const ms = $('#msearch');
  const mres = $('#mres');
  if (ms) {
    const find = () => {
      const v = ms.value.trim().toLowerCase();
      const hit = v.length > 1 && DOCS.find((d) => d.text.toLowerCase().includes(v) || d.file.toLowerCase().includes(v));
      mres.innerHTML = hit ? `<b>${hit.file.split(' · ').slice(0, 2).join(', ')}</b>, page ${hit.page}<br>${highlight(hit.text.slice(0, 90) + '…', words(v))}` : v.length > 1 ? 'Nothing in the sample files. Try osmosis.' : '';
      mres.classList.toggle('show', v.length > 1);
    };
    ms.addEventListener('input', find);
    // Types itself once when it comes into view, so it is never an empty box.
    new IntersectionObserver(([e], o) => {
      if (!e.isIntersecting || ms.value) return;
      o.disconnect();
      const word = 'osmosis';
      if (still) return void ((ms.value = word), find());
      [...word].forEach((ch, i) => setTimeout(() => { if (document.activeElement !== ms) { ms.value += ch; find(); } }, 400 + i * 110));
    }, { threshold: 0.7 }).observe(ms);
  }

  // What the final needs, as the goal slides. The rest of the course stands at 81%, worth 70%.
  const gt = $('#g-target');
  if (gt) {
    const paint = () => {
      const t = Number(gt.value);
      const need = Math.max(0, Math.round((t - 0.7 * 81) / 0.3));
      $('#g-need').textContent = need > 100 ? 'Over 100%' : `${need}%`;
      $('#g-line').textContent = need > 100 ? `An ${t} is out of reach. Try a little lower.` : `on the final, for ${t >= 80 ? 'an' : 'a'} ${t} in the course`;
    };
    gt.addEventListener('input', paint);
    paint();
  }

  // A card that turns over.
  const mf = $('#mflip');
  if (mf) {
    const turn = () => mf.classList.toggle('on');
    mf.addEventListener('click', turn);
    mf.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), turn()));
  }

  // The chat writes itself in when it is seen.
  const chat = $('#chat');
  if (chat) new IntersectionObserver(([e], o) => e.isIntersecting && (chat.classList.add('show'), o.disconnect()), { threshold: 0.6 }).observe(chat);

  // A recording lined up with its slides: scrub, and the slide being spoken about lifts.
  const wave = $('#wave');
  const scrub = $('#scrub');
  if (wave) {
    wave.innerHTML = Array.from({ length: 48 }, (_, i) => `<i style="height:${20 + Math.abs(Math.sin(i * 1.3) * 60 + Math.sin(i * 0.4) * 20)}%"></i>`).join('');
    const paint = () => {
      const v = Number(scrub.value);
      $$('i', wave).forEach((bar, i) => bar.classList.toggle('past', i / 48 < v / 100));
      $$('i', $('#slides')).forEach((sl, i) => sl.classList.toggle('on', Math.min(2, Math.floor(v / 34)) === i));
    };
    scrub.addEventListener('input', paint);
    paint();
  }

  // A lock that closes around the file.
  const lock = $('#lock');
  if (lock) {
    const toggle = () => $('#lock-card').classList.toggle('locked');
    lock.addEventListener('click', toggle);
    lock.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle()));
    new IntersectionObserver(([e], o) => e.isIntersecting && (setTimeout(() => $('#lock-card').classList.add('locked'), 500), o.disconnect()), { threshold: 0.7 }).observe(lock);
  }

  // A readiness ring that fills, and one more objective when you say you know it.
  const ring = $('#ring');
  if (ring) {
    let known = 14;
    const set = () => {
      const k = known / 20;
      ring.style.strokeDashoffset = String(301.6 * (1 - k));
      $('#ring-val').textContent = `${Math.round(k * 100)}%`;
      ring.parentElement.nextElementSibling.querySelector('p').textContent = `${known} of 20 objectives secure`;
    };
    new IntersectionObserver(([e], o) => e.isIntersecting && (set(), o.disconnect()), { threshold: 0.6 }).observe(ring.closest('.b'));
    $('#ring-know').addEventListener('click', () => {
      known = Math.min(20, known + 1);
      set();
      if (known === 20) $('#ring-know').textContent = 'All secure. Nice.';
    });
  }

  /* ---------------------------------------------------------------- the ending */
  const foot = $('.foot');
  if (foot) new IntersectionObserver(([e], o) => e.isIntersecting && (foot.classList.add('in'), o.disconnect()), { threshold: 0.2 }).observe(foot);
})();
