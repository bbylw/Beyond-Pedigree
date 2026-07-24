const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let LANG = 'zh';
try { LANG = localStorage.getItem('beyondPedigree.lang') === 'en' ? 'en' : 'zh'; } catch (e) {}

const I18N = {
  zh: {
    title: '血统之外 · 生命不是家谱 — 买宠物别只看血统',
    meta: '血统可以证明一只动物从哪里来，却不能证明它会健康、温顺，也不能证明它适合你。一份基于 9 篇文献的循证拆解：迷思、数据、COI 实验室、话术翻译、红旗扫描与 12 项清单。',
    toTop: '回到顶部',
    labInit: '点选左侧任意一种配种关系，看后代的理论近交系数，以及它意味着什么。',
    lab: [
      '多数规范繁育追求的底线区间。但在封闭基因库的品种里，<b>「纸面上无近亲」不等于基因组相似度低</b>——这时基因组 COI 比家谱记录更接近真相。',
      '英国犬业俱乐部会对 COI 高于 <b>6.25%</b> 的登记幼犬向繁育者发出提醒。越过这条线，隐性有害变异相遇的机会开始明显抬头。',
      '已进入高风险区间。这也是「热门种公效应」的常见副产物：<b>同一只种公的后代，在不知情中互相交配</b>。',
      '理论 COI 25%，近交衰退的典型温床：<b>繁殖力下降、幼仔存活率降低、整体适应性变差</b>。这不是「提纯」，是拿整窝幼崽的健康做赌注。',
      '与亲兄妹交配同级的 25%。任何把这种配对<b>常态化、商品化</b>的繁育，都已越过动物福利的底线。'
    ],
    flags: [
      '暂未触发 —— 好迹象。但别停：把下面那份 12 项清单走完再付款。',
      '黄牌 —— 要求对方补齐证据；拿不出来，就转身离开。',
      '红旗密布 —— 血统故事再动听，也别付款。',
      '九中其六以上 —— 这不是繁育者，是出货的。跑。'
    ],
    ck: n =>
      n === 0 ? '先别急 —— 这份清单要用行动填，不是用想象勾。' :
      n <= 5 ? '暂缓 —— 最理性的决定不是降低标准，而是暂缓购买。' :
      n <= 9 ? '还差几步 —— 把功课做完再付款，别让「限时」「稀有」替你做决定。' :
      n <= 11 ? '基本就绪 —— 但最后一条最难：负责，是负责到底的那种。' :
      '你可以去见它了 —— 不是去挑一件商品，是去接住一个生命。',
    quiz: {
      tf: ['对', '错'],
      next: '下一题 →',
      result: '看结果',
      ok: '答对了。',
      no: '答错了。',
      retry: '再测一次',
      go: '去走 12 项清单',
      items: [
        { t: '「纯种犬一定比混种犬更健康。」', a: false, why: '27,254 只犬的研究比较 24 种疾病：仅 10 种纯种更高发，<b>13 种无显著差异</b>，前十字韧带断裂反而在混种中更常见。' },
        { t: '「血统证书可以证明一只宠物没有遗传病。」', a: false, why: '证书只登记品种、父母与祖先信息，<b>不含任何健康筛查</b>。只亮证书、回避筛查，是明确的警讯。' },
        { t: '「看品种就能准确预测一只幼犬的性格。」', a: false, why: '2022 年《Science》研究：品种平均只能解释<b>约 9%</b> 的行为变异。性格是遗传、早期环境与社会化共同塑造的。' },
        { t: '「苏格兰折耳猫的折耳只是装饰性耳形，与健康无关。」', a: false, why: '折耳是 <b>TRPV4 显性变异</b>的可见标志，与骨软骨发育不良直接相关——一份变异拷贝就足以影响软骨发育。' },
        { t: '「价格越高，繁育越负责。」', a: false, why: '高价只能证明卖方<b>成功建立了价格</b>。负责与否要看健康筛查、饲养环境与售后责任，而不是报价。' },
        { t: '「混种犬也可能患遗传病。」', a: true, why: '若亲本共享同一风险变异，或疾病本身是<b>多基因性</b>的，混种后代照样可能患病。「混种天然无病」同样是口号。' }
      ],
      scores: s =>
        s === 6 ? ['火眼金睛', '营销话术对你基本失效。下一步：把 12 项清单走完，然后去见那个具体的生命。'] :
        s >= 4 ? ['清醒派', '大方向没问题。补上漏掉的那一课，再决定付不付款。'] :
        s >= 2 ? ['半梦半醒', '你已经在话术的射程之内。往上翻，把数据区和红旗区重读一遍。'] :
        ['易感人群', '先别付款。把这一页从头看到尾，再回来考一次——这次你会不一样。']
    },
    copyHead: '【血统之外 · 带它回家之前 12 项清单】',
    copyLine: n => `我已确认 ${n} / 12：`,
    copied: '已复制 ✓'
  },
  en: {
    title: 'Beyond Pedigree — A Life Is Not a Pedigree',
    meta: 'A pedigree proves where an animal came from — not whether it will be healthy, gentle, or right for you. An evidence-based teardown built on 9 sources: myths, data, the COI lab, spin translation, red flags, and a 12-point checklist.',
    toTop: 'Back to top',
    labInit: 'Pick any mating type on the left to see the theoretical COI of the litter — and what it means.',
    lab: [
      'The floor most sound breeding programs aim for. But in breeds with closed gene pools, <b>"no recent relatives on paper" does not mean low genomic similarity</b> — genomic COI is closer to the truth than the pedigree.',
      'The UK Kennel Club flags registered litters with a COI above <b>6.25%</b>. Past this line, the odds of harmful recessive variants meeting start to climb noticeably.',
      'Already in the risk zone. This is also a classic by-product of the "popular sire effect": <b>offspring of the same sire bred to each other without anyone realizing</b>.',
      'A theoretical COI of 25% — the textbook breeding ground for inbreeding depression: <b>lower fertility, lower pup survival, poorer overall fitness</b>. This is not "refinement"; it is betting the whole litter\'s health.',
      'The same 25% as full-sibling mating. Any breeding operation that <b>normalizes and commodifies</b> this pairing has crossed the animal-welfare line.'
    ],
    flags: [
      'Nothing raised — a good sign. Don\'t stop now: finish the 12-point checklist before you pay.',
      'Yellow card — demand the missing evidence. If it doesn\'t come, walk away.',
      'A field of red flags — no matter how good the pedigree story sounds, don\'t pay.',
      'Six or more of nine — this isn\'t a breeder, it\'s a shipping operation. Run.'
    ],
    ck: n =>
      n === 0 ? 'No rush — this list is filled in with actions, not imagination.' :
      n <= 5 ? 'Hold off — the rational move isn\'t to lower the bar, but to postpone the purchase.' :
      n <= 9 ? 'Almost there — finish the homework before you pay. Don\'t let "limited time" or "rare" decide for you.' :
      n <= 11 ? 'Nearly ready — but the last item is the hardest: responsibility means to the end.' :
      'You may go meet it — not to pick a product, but to take on a life.',
    quiz: {
      tf: ['TRUE', 'FALSE'],
      next: 'Next →',
      result: 'See result',
      ok: 'Correct. ',
      no: 'Wrong. ',
      retry: 'Retake',
      go: 'Take the 12-point checklist',
      items: [
        { t: '"Purebred dogs are always healthier than mixed breeds."', a: false, why: 'In the 27,254-dog study comparing 24 conditions, only 10 were more common in purebreds, <b>13 showed no significant difference</b> — and cranial cruciate ligament rupture was actually more common in mixed breeds.' },
        { t: '"A pedigree certificate proves a pet is free of genetic disease."', a: false, why: 'A certificate registers breed, parents, and ancestry — <b>no health screening whatsoever</b>. Flashing the cert while dodging screening is a clear warning sign.' },
        { t: '"You can accurately predict a puppy\'s personality from its breed."', a: false, why: 'A 2022 <i>Science</i> study: breed explains only <b>about 9%</b> of behavioral variation on average. Temperament is shaped by genetics, early environment, and socialization together.' },
        { t: '"A Scottish Fold\'s folded ears are purely decorative and unrelated to health."', a: false, why: 'The fold is the visible sign of a dominant <b>TRPV4 variant</b> — one copy is enough to disrupt cartilage development.' },
        { t: '"The higher the price, the more responsible the breeding."', a: false, why: 'A high price only proves the seller <b>successfully set a price</b>. Responsibility shows in screening, conditions, and aftercare — not the quote.' },
        { t: '"Mixed-breed dogs can also suffer from genetic disease."', a: true, why: 'If both parents share the same risk variant, or the disease is <b>polygenic</b>, mixed-breed offspring can still be affected. "Naturally disease-free" is also a slogan.' }
      ],
      scores: s =>
        s === 6 ? ['Eagle-eyed', 'Marketing spin barely works on you anymore. Next: finish the 12-point checklist, then go meet a specific animal.'] :
        s >= 4 ? ['Wide awake', 'Your fundamentals are sound. Patch the one lesson you missed before you spend a cent.'] :
        s >= 2 ? ['Half asleep', 'You\'re already inside the spin\'s firing range. Scroll back up and reread the data and red-flag sections.'] :
        ['Highly susceptible', 'Don\'t pay yet. Read this page from top to bottom, then come back and retake the test — you\'ll be a different person.']
    },
    copyHead: '[Beyond Pedigree · Before You Bring It Home — 12 checks]',
    copyLine: n => `I've confirmed ${n} / 12:`,
    copied: 'Copied ✓'
  }
};
const T = () => I18N[LANG];

const pbar = $('#pbar');
addEventListener('scroll', () => {
  const h = document.documentElement;
  pbar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, { passive: true });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .16 });
$$('.rv').forEach(el => io.observe(el));

const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  cio.unobserve(e.target);
  const el = e.target, t = +el.dataset.count, dur = 1500, s = performance.now();
  (function f(now) {
    const p = Math.min(1, (now - s) / dur), ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(t * ease).toLocaleString('en-US');
    if (p < 1) requestAnimationFrame(f);
  })(s);
}), { threshold: .6 });
$$('[data-count]').forEach(el => cio.observe(el));

(function () {
  const ns = 'http://www.w3.org/2000/svg';
  const lines = $('#sireLines'), dots = $('#sireDots');
  if (!lines) return;
  const sires = [160, 320, 480], n = 22;
  for (let i = 0; i < n; i++) {
    const x = 40 + i * (560 / (n - 1)), sx = sires[i % 3];
    const l = document.createElementNS(ns, 'line');
    l.setAttribute('x1', x); l.setAttribute('y1', 308);
    l.setAttribute('x2', sx); l.setAttribute('y2', 108);
    l.setAttribute('class', 'sl');
    l.style.transitionDelay = (i * 45) + 'ms';
    lines.appendChild(l);
    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', 312); c.setAttribute('r', 5.5);
    c.setAttribute('class', 'sd');
    c.style.transitionDelay = (300 + i * 40) + 'ms';
    dots.appendChild(c);
  }
})();

const cert = $('#cert');
if (cert && matchMedia('(pointer:fine)').matches) {
  cert.addEventListener('mousemove', e => {
    const r = cert.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    cert.style.transform = `rotate(-2.5deg) perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  cert.addEventListener('mouseleave', () => cert.style.transform = 'rotate(-2.5deg)');
}

$$('.tr-head').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.parentElement, body = row.querySelector('.tr-body');
    const open = row.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
  });
});
const firstRow = $('.tr-row');
if (firstRow) {
  firstRow.classList.add('open');
  firstRow.querySelector('.tr-head').setAttribute('aria-expanded', 'true');
  firstRow.querySelector('.tr-body').style.maxHeight = firstRow.querySelector('.tr-body').scrollHeight + 'px';
}

const LAB = [
  { deg: -87, show: '0–1%' },
  { deg: -52.5, show: '6.25%' },
  { deg: -15, show: '12.5%' },
  { deg: 60, show: '25%' },
  { deg: 60, show: '25%' }
];
const needle = $('#gaugeNeedle'), coiVal = $('#coiVal'), coiMsg = $('#coiMsg');
let labSel = -1;
function labApply() {
  if (!needle) return;
  if (labSel < 0) {
    needle.style.transform = 'rotate(-90deg)';
    coiVal.textContent = '— —';
    coiMsg.innerHTML = T().labInit;
    return;
  }
  needle.style.transform = `rotate(${LAB[labSel].deg}deg)`;
  coiVal.textContent = LAB[labSel].show;
  coiMsg.innerHTML = T().lab[labSel];
}
$$('.lab-opt').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    $$('.lab-opt').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    labSel = i;
    labApply();
  });
});

const flagRows = $$('.flag-row');
const flagCount = $('#flagCount'), flagVerdict = $('#flagVerdict');
function flagMsg(n) {
  const f = T().flags;
  if (n === 0) return [f[0], 'ok'];
  if (n <= 2) return [f[1], 'mid'];
  if (n <= 5) return [f[2], 'high'];
  return [f[3], 'max'];
}
function flagUpd() {
  const n = flagRows.filter(r => r.classList.contains('on')).length;
  flagCount.textContent = n;
  const [msg, lv] = flagMsg(n);
  flagVerdict.textContent = msg;
  flagVerdict.dataset.lv = lv;
  if (lv === 'high' || lv === 'max') {
    flagCount.classList.remove('shake');
    void flagCount.offsetWidth;
    flagCount.classList.add('shake');
  }
}
flagRows.forEach(row => {
  const input = row.querySelector('input');
  input.addEventListener('change', () => {
    row.classList.toggle('on', input.checked);
    flagUpd();
  });
});

const rfs = $$('.rf'), riskCards = $$('.risk-card');
rfs.forEach(btn => {
  btn.addEventListener('click', () => {
    rfs.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.filter;
    riskCards.forEach(c => {
      const show = f === 'all' || c.dataset.sp === f;
      c.classList.toggle('hide', !show);
      if (show) {
        c.classList.remove('pop');
        void c.offsetWidth;
        c.classList.add('pop');
      }
    });
  });
});

const quizBox = $('#quizPlay'), quizFinal = $('#quizFinal');
let qi = 0, qScore = 0, qPick = null, qAnswered = false, qDone = false;
window.__qHist = [];

function qDots() {
  return `<div class="quiz-dots">${I18N.zh.quiz.items.map((_, i) => {
    let cls = 'qd';
    if (i < qi) cls += window.__qHist[i] ? ' done' : ' bad';
    else if (i === qi) cls += ' cur';
    return `<span class="${cls}"></span>`;
  }).join('')}</div>`;
}

function qRender() {
  qDone = false;
  qAnswered = false;
  const Q = T().quiz, q = Q.items[qi];
  quizBox.innerHTML = `
    <div class="quiz-top"><span class="quiz-no">Q${qi + 1} / ${Q.items.length}</span>${qDots()}</div>
    <p class="quiz-q">${q.t}</p>
    <div class="quiz-btns">
      <button class="qb" data-v="true">${Q.tf[0]}</button>
      <button class="qb" data-v="false">${Q.tf[1]}</button>
    </div>
    <div class="quiz-why" id="qWhy"></div>
    <button class="btn btn-red quiz-next" id="qNext">${qi === Q.items.length - 1 ? Q.result : Q.next}</button>`;
  const why = $('#qWhy'), next = $('#qNext');
  function answer(pick, replay) {
    if (qAnswered) return;
    qAnswered = true;
    qPick = pick;
    const right = pick === q.a;
    if (!replay) {
      window.__qHist[qi] = right;
      if (right) qScore++;
    }
    quizBox.querySelectorAll('.qb').forEach(x => {
      x.disabled = true;
      if ((x.dataset.v === 'true') === q.a) x.classList.add('right');
    });
    if (!right) quizBox.querySelector(`.qb[data-v="${pick}"]`).classList.add('wrong');
    why.innerHTML = `<b>${right ? Q.ok : Q.no}</b>${q.why}`;
    why.classList.add('show');
    next.classList.add('show');
    const dots = quizBox.querySelectorAll('.qd');
    dots[qi].classList.remove('cur');
    dots[qi].classList.add(right ? 'done' : 'bad');
  }
  quizBox.querySelectorAll('.qb').forEach(b => {
    b.addEventListener('click', () => answer(b.dataset.v === 'true', false));
  });
  next.addEventListener('click', () => {
    qi++; qPick = null;
    if (qi < Q.items.length) qRender();
    else qFinish();
  });
  if (qPick !== null) answer(qPick, true);
}

function qFinish() {
  qDone = true;
  quizBox.style.display = 'none';
  const Q = T().quiz;
  const [title, desc] = Q.scores(qScore);
  quizFinal.innerHTML = `
    <div class="qf-stamp">${qScore} / ${Q.items.length}</div>
    <h3 class="qf-title">${title}</h3>
    <p class="qf-desc">${desc}</p>
    <div class="qf-actions">
      <button class="btn" id="qRetry">${Q.retry}</button>
      <a class="btn btn-red" href="#checklist">${Q.go}</a>
    </div>`;
  quizFinal.classList.add('show');
  $('#qRetry').addEventListener('click', () => {
    qi = 0; qScore = 0; qPick = null; window.__qHist = [];
    quizFinal.classList.remove('show');
    quizFinal.innerHTML = '';
    quizBox.style.display = '';
    qRender();
  });
}

const KEY = 'beyondPedigree.checklist';
const cks = $$('.ck input');
const ckFill = $('#ckFill'), ckCount = $('#ckCount'), verdict = $('#verdict');
function ckUpd(save) {
  const n = cks.filter(c => c.checked).length;
  ckFill.style.width = (n / 12 * 100) + '%';
  ckCount.textContent = n;
  verdict.textContent = T().ck(n);
  verdict.dataset.lv = n === 12 ? 'max' : n >= 6 ? 'mid' : 'low';
  if (save) {
    try { localStorage.setItem(KEY, JSON.stringify(cks.map(c => c.checked))); } catch (e) {}
  }
}
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || '[]');
  saved.forEach((v, i) => { if (cks[i]) cks[i].checked = !!v; });
} catch (e) {}
cks.forEach(c => c.addEventListener('change', () => ckUpd(true)));

const btnReset = $('#btnReset');
if (btnReset) btnReset.addEventListener('click', () => {
  cks.forEach(c => c.checked = false);
  try { localStorage.removeItem(KEY); } catch (e) {}
  ckUpd(false);
});

const btnPrint = $('#btnPrint');
if (btnPrint) btnPrint.addEventListener('click', () => window.print());

const btnCopy = $('#btnCopy');
if (btnCopy) btnCopy.addEventListener('click', async () => {
  const labels = $$('.ck-text').map(el => (el.querySelector('[data-' + LANG + ']') || el).textContent.trim());
  const n = cks.filter(c => c.checked).length;
  const lines = cks.map((c, i) => `${c.checked ? '✓' : '✗'} ${labels[i]}`).join('\n');
  const text = `${T().copyHead}\n${T().copyLine(n)}\n${lines}`;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
  }
  const old = btnCopy.innerHTML;
  btnCopy.textContent = T().copied;
  setTimeout(() => { btnCopy.innerHTML = old; }, 1600);
});

const spyIds = ['myths', 'cert', 'data', 'lab', 'translate', 'flags', 'cost', 'risks', 'five', 'quiz', 'checklist'];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  $$('.nlinks a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
spyIds.forEach(id => { const el = document.getElementById(id); el && spy.observe(el); });

const toTop = $('#toTop');
addEventListener('scroll', () => {
  toTop.classList.toggle('show', scrollY > 600);
}, { passive: true });
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

const langBtn = $('#langBtn');
function applyLang() {
  document.body.classList.toggle('en', LANG === 'en');
  document.documentElement.lang = LANG === 'en' ? 'en' : 'zh-CN';
  document.title = T().title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', T().meta);
  $$('.term').forEach(t => { t.dataset.def = LANG === 'en' ? t.dataset.defEn : t.dataset.defZh; });
  langBtn.textContent = LANG === 'en' ? '中文' : 'EN';
  toTop.setAttribute('aria-label', T().toTop);
  labApply();
  flagUpd();
  ckUpd(false);
  if (qDone) qFinish();
  else if (quizBox) qRender();
}
langBtn.addEventListener('click', () => {
  LANG = LANG === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('beyondPedigree.lang', LANG); } catch (e) {}
  applyLang();
});
applyLang();
