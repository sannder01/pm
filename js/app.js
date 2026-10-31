/* Навигация, прогресс и учебные взаимодействия. */
'use strict';
const main=document.querySelector('main'), reduce=matchMedia('(prefers-reduced-motion: reduce)');
let solved=new Set();try{const a=JSON.parse(localStorage.getItem('tush-solved')||'[]');if(Array.isArray(a))solved=new Set(a.filter(id=>COURSE.some(t=>t.id===id)))}catch{}
const subjects={physics:'Физика',math:'Математика'};
const math=f=>`<div class="formula math" data-tex="${f}">${f}</div>`;
const steps=a=>a.map((s,i)=>`<details><summary>Шаг ${i+1}</summary><p>${s}</p></details>`).join('');
const header=(n,title,desc)=>`<div class="page-head reveal"><div class="eyebrow">${n} / ТЕТРАДЬ ИССЛЕДОВАТЕЛЯ</div><h1>${title}</h1><p>${desc}</p></div>`;
function progress(){let xp=solved.size*25;document.querySelector('#xp').textContent=xp+' XP';document.querySelector('#level').textContent=String(1+Math.floor(xp/100)).padStart(2,'0')}
function home(){return `<section class="hero">
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="eyebrow">ОНЛАЙН-ТЕТРАДЬ · ФИЗИКА И МАТЕМАТИКА</div>
      <h1>Меньше зубрить<br><em>Больше понимать</em></h1>
      <p>У сложных вещей есть простые объяснения<br>Исследуй законы мира, решай задачи и собирай знания шаг за шагом</p>
      <a class="btn primary" href="#theory">Начать исследование <span>↗</span></a>
      <div class="meta"><span>12 ТЕМ ДЛЯ ПЕРВОГО ШАГА</span><span>7–10 КЛАССЫ</span><span>В ТВОЁМ ТЕМПЕ</span></div>
    </div>
    <figure class="hero-visual" data-state="static" aria-label="Жидкая монохромная сфера и поле частиц">
      <div class="scene-grid" aria-hidden="true"></div>
      <svg class="scene-guides" viewBox="0 0 600 600" aria-hidden="true">
        <circle class="guide-orbit" cx="300" cy="300" r="240"/>
        <ellipse cx="300" cy="300" rx="265" ry="110" transform="rotate(-28 300 300)"/>
        <path d="M32 300h24m488 0h24M300 32v24m0 488v24"/>
      </svg>
      <div class="ink-static" aria-hidden="true"></div>
      <div class="scene-shadow" aria-hidden="true"></div>
      <img class="scene-fallback" src="assets/orb-static.svg" width="600" height="600" alt="" aria-hidden="true">
      <canvas id="fluid" aria-hidden="true"></canvas>
      <canvas id="scene" aria-hidden="true"></canvas>
      <span class="scene-label">ФОРМА · ДВИЖЕНИЕ · СВЯЗЬ</span>
      <figcaption class="scene-note"><span class="live-note">ДВИГАЙ КУРСОРОМ<br>НАБЛЮДАЙ ЗА ФОРМОЙ</span><span class="static-note">У КАЖДОЙ ФОРМЫ<br>ЕСТЬ СВОЙ ЗАКОН</span></figcaption>
    </figure>
  </div>
  <span class="hero-number">01 ВСЁ НАЧИНАЕТСЯ С ВОПРОСА</span>
</section><div class="ribbon"><span>ЗНАНИЯ НЕ ТРЕБУЮТ ПОДПИСКИ</span><span>НИКАКИХ ОЦЕНОК. ТОЛЬКО ПРОГРЕСС.</span><span>ЛЮБОПЫТСТВО ПРИВЕТСТВУЕТСЯ ↗</span></div><section class="wrap"><div class="section-head reveal"><div><div class="eyebrow">01 / ВЫБЕРИ НАПРАВЛЕНИЕ</div><h2>Две науки.<br>Один мир.</h2></div><p>От движения мяча до движения мысли. Начни с того, что вызывает вопросы.</p></div><div class="grid"><a class="card subject reveal" href="#theory/physics"><span class="eyebrow">01 / ФИЗИКА</span><span class="symbol">F</span><div><h3>Как устроен мир</h3><p>Движение, силы, энергия и электричество. Проверь законы на практике.</p></div><div class="card-bottom"><span>6 ТЕМ · 6 ЗАДАЧ</span><span>Исследовать ↗</span></div></a><a class="card subject dark reveal" href="#theory/math"><span class="eyebrow">02 / МАТЕМАТИКА</span><span class="symbol">∑</span><div><h3>Язык закономерностей</h3><p>От дробей до производных. Находи связи и учись рассуждать.</p></div><div class="card-bottom"><span>6 ТЕМ · 6 ЗАДАЧ</span><span>Разобраться ↗</span></div></a></div></section><section class="quote reveal"><p>«Важнее не переставать задавать вопросы»</p><span>ПРИНЦИП НАШЕЙ ТЕТРАДИ</span></section><section class="wrap"><div class="eyebrow">02 / ТВОЙ МАРШРУТ</div><h2 class="reveal">Знание оставляет след.</h2><div class="method"><article class="reveal"><b>01 РАЗБЕРИСЬ</b><h3>Одна идея за раз</h3><p>Короткая теория, смысл формул и примеры из жизни.</p></article><article class="reveal"><b>02 ПОПРОБУЙ</b><h3>Ошибаться можно</h3><p>Решения по шагам и подсказки помогут найти свой путь.</p></article><article class="reveal"><b>03 ПРОДВИГАЙСЯ</b><h3>Каждый шаг считается</h3><p>25 XP за задачу. Новый уровень каждые 100 XP. Прогресс сохраняется в этом браузере.</p></article></div></section>`}
function filters(subject=''){return `<div class="filters no-print"><select id="subject" aria-label="Предмет"><option value="">Все предметы</option value="physics" ${subject==='physics'?'selected':''}>Физика</option><option value="math" ${subject==='math'?'selected':''}>Математика</option></select><select id="grade" aria-label="Класс"><option value="">Все классы</option>${[7,8,9,10].map(g=>`<option value="${g}">${g} класс</option>`).join('')}</select><input class="search" id="search" aria-label="Поиск по темам" placeholder="Найти тему…" type="search"></div>`}
function catalog(page,subject){const info={theory:['01','Понять суть.','Короткие главы, в которых у каждой формулы есть смысл. Выбери предмет и класс.'],examples:['02','Разобрать по шагам.','Не торопись смотреть ответ. Попробуй предположить следующий шаг, затем раскрой его.'],tasks:['03','Твоя очередь.','Введи число без единиц измерения. Принимаются десятичные числа с точкой или запятой и дроби вроде 3/4. За первое решение 25 XP.'],formulas:['04','Всё под рукой.','Справочник основных формул из наших уроков. Отфильтруй нужные темы и сохрани их через «Печать → Сохранить как PDF».']};return `<div class="wrap">${header(...info[page])}${page==='tasks'?`<p class="mono">РЕШЕНО ${solved.size} / ${COURSE.length} <span class="muted">· ${solved.size*25} XP</span></p><div class="xp-bar"><span style="width:${solved.size/COURSE.length*100}%"></span></div>`:''}${filters(subject)}${page==='formulas'?'<button class="btn small no-print" id="print">Печать / PDF ↗</button>':''}<div id="results"></div>${page==='theory'?lab():''}</div>`}
function lab(){return `<section class="lab reveal"><div class="eyebrow">МИНИ-ЛАБОРАТОРИЯ / ВТОРОЙ ЗАКОН НЬЮТОНА</div><h3>Сдвинь с места.</h3><p class="muted">Меняй силу и массу. Наблюдай движение из состояния покоя без трения в течение 3 секунд.</p><div class="lab-controls"><label>Сила: <output id="force-value">10</output> Н<input id="force" type="range" min="0" max="30" value="10"></label><label>Масса: <output id="mass-value">5</output> кг<input id="mass" type="range" min="1" max="15" value="5"></label></div><div class="track"><div class="cart" id="cart"></div></div><p class="lab-output" id="lab-output"></p><button class="btn small" id="run">Запустить опыт ↗</button><p class="muted">Масштаб: длина дорожки соответствует 150 м. При уменьшенной анимации показываем конечное положение.</p></section>`}
function renderResults(page){const sub=document.querySelector('#subject').value,grade=document.querySelector('#grade').value,q=document.querySelector('#search').value.toLowerCase().trim();const list=COURSE.filter(t=>(!sub||t.subject===sub)&&(!grade||t.grade===+grade)&&(!q||(t.title+' '+t.intro).toLowerCase().includes(q)));const results=document.querySelector('#results');if(!list.length){results.innerHTML='<p class="empty">Такой темы пока нет в этой тетради. Попробуй другой запрос или класс.</p>';return}if(page==='formulas'){results.innerHTML=`<table class="formula-table"><thead><tr><th>Тема</th><th>Формула</th><th>Обозначения / условия</th></tr></thead><tbody>${list.map(t=>`<tr><td>${t.title}<br><small>${subjects[t.subject]} · ${t.grade} класс</small></td><td><span class="math" data-tex="${t.formula}">${t.formula}</span></td><td>${t.units}</td></tr>`).join('')}</tbody></table>`}else results.innerHTML=`<div class="grid">${list.map(t=>`<article class="card lesson" id="${t.id}"><div class="tag">${subjects[t.subject].toUpperCase()} / ${t.grade} КЛАСС</div><h3>${t.title}</h3>${page==='theory'?`<p>${t.intro}</p>${math(t.formula)}<p class="mono muted" style="font-size:11px">${t.units}</p><p class="muted">${t.note}</p><a class="btn small" href="#tasks/${t.subject}">Закрепить ↗</a>`:page==='examples'?`<p>${t.example}</p>${steps(t.exampleSteps)}`:`${solved.has(t.id)?'<span class="task-done">✓ РЕШЕНО</span>':''}<p>${t.question}</p><form data-task="${t.id}"><label class="mono" style="font-size:11px" for="answer-${t.id}">ТВОЙ ОТВЕТ</label><input class="answer" id="answer-${t.id}" name="answer" autocomplete="off" placeholder="Введи число или дробь" required><button class="btn small primary" type="submit">Проверить ↗</button><p class="feedback" aria-live="polite"></p></form><details><summary>Нужна подсказка?</summary><p>${t.hint}</p></details><details><summary>Показать решение</summary><div>${t.steps.map(s=>`<p>${s}</p>`).join('')}</div></details>`}</article>`).join('')}</div>`;renderMath();cleanInterfaceText()}
function renderMath(){if(window.katex)document.querySelectorAll('[data-tex]').forEach(el=>katex.render(el.dataset.tex,el,{throwOnError:false,output:'html',strict:false}))}
function about(){return `<div class="wrap">${header('05','Место для любопытства.','pm открытая учебная тетрадь по физике и математике. Без оплаты и регистрации.')}<div class="about-copy"><h2>Понять значит связать.</h2><p>Формула становится полезной, когда ты понимаешь, что за ней стоит. Здесь можно читать объяснения, разбирать примеры по шагам и проверять себя без страха получить плохую оценку.</p><p>Первая тетрадь охватывает 12 вводных тем для 7–10 классов. Это отправная точка, а не полный школьный курс. Классы указаны ориентировочно: порядок тем в разных программах отличается.</p><h2>Твой прогресс принадлежит тебе.</h2><p>Решённые задачи сохраняются только в браузере на этом устройстве. Для сохранения нужен доступ к локальному хранилищу. Если очистить данные сайта, прогресс исчезнет. За каждую уникальную задачу начисляется 25 XP.</p><h2>На связи.</h2><p>Автор: Maxim Samarin. Нашёл ошибку или придумал тему? Напиши в обсуждение задачи на GitHub.</p><a class="btn" href="https://github.com/sannder01/pm/issues" target="_blank" rel="noopener">Предложить улучшение ↗</a><p style="margin-top:30px;font-size:13px">Код проекта: <a href="https://github.com/sannder01/pm">github.com/sannder01/pm</a><br>Чернила: адаптация WebGL Fluid Simulation Павла Добрякова (MIT). Формулы: KaTeX. Анимация появления: GSAP ScrollTrigger. Жидкая форма и частицы: собственные шейдеры pm на WebGL.</p></div></div>`}
let routeTimer,homeEffects;function route(){homeEffects?.destroy();homeEffects=null;window.stopTushFluid?.();cancelAnimationFrame(labFrame);const [raw,subject]=location.hash.slice(1).split('/'),page=['theory','examples','tasks','formulas','about'].includes(raw)?raw:'home';main.innerHTML=page==='home'?home():page==='about'?about():catalog(page,subject);document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+page));document.title=({home:'Понять, а не запомнить',theory:'Теория',examples:'Примеры',tasks:'Задачи',formulas:'Справочник формул',about:'О проекте'}[page])+' pm';if(document.querySelector('#results')){renderResults(page);document.querySelectorAll('.filters select,.filters input').forEach(el=>el.addEventListener('input',()=>renderResults(page)))}document.querySelector('#print')?.addEventListener('click',()=>window.print());if(page==='theory')initLab();if(page==='home')homeEffects=window.PMScene?.mount(document.querySelector('.hero'),{startFluid:initFluid,stopFluid:()=>window.stopTushFluid?.()});cleanInterfaceText();animate();window.scrollTo(0,0)}
function animate(){if(!reduce.matches&&window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);ScrollTrigger.getAll().forEach(t=>t.kill());document.querySelectorAll('.reveal').forEach(el=>{gsap.fromTo(el,{opacity:0,y:18,clipPath:'inset(0 15% 0 0)'},{opacity:1,y:0,clipPath:'inset(0 0% 0 0)',duration:.9,ease:'power1.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}})})}}
window.addEventListener('hashchange',()=>{clearTimeout(routeTimer);if(reduce.matches||!window.gsap){route();return}gsap.killTweensOf('#transition');gsap.fromTo('#transition',{scale:0,opacity:0},{scale:2.5,opacity:1,duration:.6,ease:'power1.out',onComplete:()=>{route();gsap.to('#transition',{scale:3,opacity:0,duration:.6,ease:'power1.out'})}})});
document.addEventListener('pointermove',e=>{const b=e.target.closest('.btn');if(b){const r=b.getBoundingClientRect();b.style.setProperty('--x',(e.clientX-r.left)+'px');b.style.setProperty('--y',(e.clientY-r.top)+'px')}});
function parseAnswer(value){const s=value.trim().replace(',','.');if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return Number(s);const f=s.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*\/\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/);return f&&Number(f[2])!==0?Number(f[1])/Number(f[2]):NaN}
document.addEventListener('submit',e=>{const form=e.target;if(!form.dataset.task)return;e.preventDefault();const t=COURSE.find(t=>t.id===form.dataset.task),value=parseAnswer(new FormData(form).get('answer')),out=form.querySelector('.feedback');if(!Number.isFinite(value)){out.textContent='Введи число или дробь с ненулевым знаменателем.';return}if(Math.abs(value-t.answer)>1e-8*Math.max(1,Math.abs(t.answer))){out.textContent='Пока не сходится. Проверь вычисления или открой подсказку.';return}out.textContent='✓ Верно! Ты разобрался.';out.classList.add('success');if(!solved.has(t.id)){solved.add(t.id);try{localStorage.setItem('tush-solved',JSON.stringify([...solved]))}catch{out.textContent+=' Прогресс сохранён только до закрытия страницы.'}progress();const toast=document.querySelector('#toast');toast.textContent='+25 XP · Ещё один понятный закон';toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),2500);form.closest('article').insertAdjacentHTML('afterbegin','<span class="task-done">✓ РЕШЕНО</span>')}});
/* Мини-лаборатория: s = at² / 2, дорожка соответствует 150 м. */
let labFrame;function initLab(){const f=document.querySelector('#force'),m=document.querySelector('#mass'),cart=document.querySelector('#cart');function values(){cancelAnimationFrame(labFrame);document.querySelector('#force-value').textContent=f.value;document.querySelector('#mass-value').textContent=m.value;document.querySelector('#lab-output').textContent=`a = F / m = ${(+f.value/+m.value).toFixed(2)} м/с²`;cart.style.transform='translateX(0)'}f.oninput=m.oninput=values;values();document.querySelector('#run').onclick=()=>{cancelAnimationFrame(labFrame);const a=+f.value/+m.value,max=cart.parentElement.clientWidth-40,start=performance.now();function frame(now){if(!cart.isConnected)return;const t=reduce.matches?3:Math.min((now-start)/1000,3),s=.5*a*t*t;cart.style.transform=`translateX(${s/150*max}px)`;document.querySelector('#lab-output').textContent=`a = ${a.toFixed(2)} м/с² · t = ${t.toFixed(1)} с · s = ${s.toFixed(2)} м`;if(t<3)labFrame=requestAnimationFrame(frame)}labFrame=requestAnimationFrame(frame)}}
/* Загрузка чернил по запросу видимой сцены, с проверкой после загрузки */
let fluidReady;
function initFluid() {
  const visual=document.querySelector('.hero-visual');
  if (!visual || reduce.matches || innerWidth<=900 || document.hidden) return;
  if (window.startTushFluid) { window.startTushFluid(); return; }
  if (!fluidReady) fluidReady=new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.src='vendor/fluid.js';
    script.onload=resolve;
    script.onerror=()=>{script.remove();fluidReady=null;reject(new Error('Чернила недоступны'))};
    document.body.append(script);
  });
  fluidReady.then(()=>{
    if (visual.isConnected && !reduce.matches && innerWidth>900 && !document.hidden && homeEffects?.isRunning()) window.startTushFluid?.();
  }).catch(()=>{});
}
progress();route();

/* Редакционный стиль: без конечных точек, многоточий и длинных тире. */
function cleanInterfaceText() {
    const clean = text => text.replace(/\s*[—]\s*/g, ' ').replace(/--+/g, ' ').replace(/[.\u2026]+(\s*)$/u, '$1');
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.parentElement.closest('script, style, code, pre, .katex, [data-tex]')) nodes.push(node);
    }
    nodes.forEach(node => { node.nodeValue = clean(node.nodeValue); });
    document.querySelectorAll('[placeholder], [aria-label]').forEach(el => {
        for (const attr of ['placeholder', 'aria-label']) {
            if (el.hasAttribute(attr)) el.setAttribute(attr, clean(el.getAttribute(attr)));
        }
    });
}
cleanInterfaceText();
document.addEventListener('submit', () => queueMicrotask(cleanInterfaceText));
