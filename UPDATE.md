# Изменённые файлы

- index.html
- css/style.css
- js/app.js
- js/content.js
- README.md

# Полное содержимое

## index.html

````html
<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="pm физика и математика через понятные объяснения, эксперименты и задачи. Бесплатно, на русском.">
<title>pm понять, а не запомнить</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<link rel="stylesheet" href="css/style.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script defer src="js/content.js"></script><script defer src="js/app.js"></script>
</head>
<body>
<!-- Шапка и основная навигация -->
<header><a class="brand" href="#home" aria-label="pm главная">pm</a><nav aria-label="Разделы сайта"><a href="#theory">Теория</a><a href="#examples">Примеры</a><a href="#tasks">Задачи</a><a href="#formulas">Формулы</a><a href="#about">О проекте</a></nav><a class="progress-chip" href="#tasks"><span id="level">01</span> УРОВЕНЬ <span id="xp">0 XP</span></a></header>
<main id="main" tabindex="-1"></main>
<!-- Постоянные элементы интерфейса -->
<footer><a class="brand" href="#home">pm</a><p>Физика. Математика. Любопытство.</p><span>БЕСПЛАТНО · БЕЗ РЕГИСТРАЦИИ</span></footer>
<div id="transition" aria-hidden="true"></div><div class="toast" role="status" id="toast"></div>
<noscript>Для интерактивных уроков и проверки ответов включите JavaScript в браузере.</noscript>
</body></html>

````

## css/style.css

````css
/* Бумага, типографика и базовые элементы */
:root {
  --paper:#fafafa;
  --ink:#111;
  --muted:#555;
  --line:#d4d4d4;
  --sans:'IBM Plex Sans',Arial,sans-serif;
  --serif:'IBM Plex Serif',Georgia,serif;
  --mono:'IBM Plex Mono',monospace;
  --panel:rgba(250,250,250,.88)
}
* {
  box-sizing:border-box
}
body {
  margin:0;
  background:var(--paper);
  color:var(--ink);
  font-family:var(--sans);
  line-height:1.6
}
/* Процедурные складки. Текстура под содержимым, а не поверх букв. */
body {
  position:relative;
  isolation:isolate;
  text-align:left
}

body:before {
  content:'';
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:-1;
  opacity:.24;
  background-color:#fafafa;
  background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221000%22%20height%3D%221000%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cfilter%20id%3D%22paper%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeTurbulence%20type%3D%22turbulence%22%20baseFrequency%3D%22.009%20.014%22%20numOctaves%3D%223%22%20seed%3D%2217%22%20stitchTiles%3D%22stitch%22%20result%3D%22folds%22%2F%3E%3CfeDiffuseLighting%20in%3D%22folds%22%20surfaceScale%3D%2212%22%20diffuseConstant%3D%221%22%20lighting-color%3D%22%23fff%22%20result%3D%22relief%22%3E%3CfeDistantLight%20azimuth%3D%22225%22%20elevation%3D%2242%22%2F%3E%3C%2FfeDiffuseLighting%3E%3CfeColorMatrix%20in%3D%22relief%22%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23fafafa%22%20filter%3D%22url%28%23paper%29%22%2F%3E%3C%2Fsvg%3E");
  background-size:1000px 1000px;
  background-repeat:repeat
}

a {
  color:inherit;
  text-decoration:none
}
button,input,select {
  font:inherit
}
button,a,input,select {
  touch-action:manipulation
}
button {
  cursor:pointer
}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible {
  outline:2px solid #171717;
  outline-offset:5px
}
header {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
  padding:22px 5%;
  border-bottom:1px solid var(--line);
  position:relative;
  z-index:5;
  background:var(--panel);
  backdrop-filter:blur(5px);
  -webkit-backdrop-filter:blur(5px)
}
.brand {
  font-family:var(--serif);
  font-size:36px;
  font-weight:600;
  line-height:1
}
.brand span {
  font-family:serif;
  font-size:16px;
  margin-left:6px
}
nav {
  display:flex;
  gap:28px;
  font-size:13px
}
nav a {
  padding:6px 0;
  border-bottom:1px solid transparent
}
nav a.active,nav a:hover {
  border-color:var(--ink)
}
.progress-chip {
  border:1px solid var(--line);
  padding:10px 14px;
  font:10px var(--sans);
  white-space:nowrap
}
.progress-chip #level {
  background:var(--ink);
  color:white;
  padding:5px;
  margin-right:5px
}
.progress-chip #xp {
  color:var(--muted);
  margin-left:15px
}
main {
  min-height:75vh
}
h1,h2,h3,p {
  margin-top:0
}
h1,h2 {
  font-family:var(--serif);
  font-weight:400;
  line-height:1.16;
  letter-spacing:normal;
  font-style:normal;
  text-shadow:none;
  text-align:left
}
h1 {
  font-size:clamp(48px,6.8vw,100px)
}
h2 {
  font-size:clamp(34px,4.5vw,60px)
}
h3 {
  font-family:var(--serif);
  font-style:normal;
  letter-spacing:normal;
  font-size:23px;
  font-weight:500;
  line-height:1.3
}
.eyebrow {
  font-family:var(--sans);
  font-weight:500
}
.mono {
  font-family:var(--mono)
}
.eyebrow {
  font-size:10px;
  letter-spacing:normal;
  text-transform:uppercase;
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:28px
}
.eyebrow:before {
  content:'';
  width:23px;
  height:1px;
  background:currentColor
}
.muted {
  color:var(--muted)
}
.btn {
  border:1px solid var(--ink);
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:35px;
  padding:15px 25px;
  background:transparent;
  color:var(--ink);
  position:relative;
  isolation:isolate;
  overflow:hidden;
  font-size:13px;
  min-height:50px
}
.btn:before {
  content:'';
  position:absolute;
  width:200%;
  aspect-ratio:1;
  background:var(--ink);
  border-radius:44% 56% 61% 39%;
  left:var(--x,50%);
  top:var(--y,50%);
  transform:translate(-50%,-50%) scale(0);
  transition:transform .8s ease-out;
  z-index:-1
}
.btn:hover:before {
  transform:translate(-50%,-50%) scale(1)
}
.btn:hover {
  color:white
}
.btn.primary {
  background:var(--ink);
  color:white
}
.btn.primary:before {
  background:#444
}
.btn.small {
  min-height:40px;
  padding:9px 16px;
  gap:12px
}
.btn:disabled {
  opacity:.5;
  cursor:default
}
.wrap {
  max-width:1240px;
  margin:auto;
  padding:76px 5%
}
.section-head {
  display:flex;
  justify-content:space-between;
  align-items:end;
  gap:30px;
  margin-bottom:35px
}
.section-head h2 {
  margin-bottom:0
}
.section-head p {
  max-width:340px;
  font-size:14px;
  color:var(--muted)
}

/* Главная: чернила и героический заголовок */
.hero {
  min-height:690px;
  position:relative;
  overflow:hidden;
  border-bottom:1px solid var(--line)
}
.hero canvas {
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  filter:invert(1) grayscale(1);
  mix-blend-mode:multiply;
  opacity:.65;
  pointer-events:none
}
.hero-inner {
  position:relative;
  z-index:2;
  max-width:1240px;
  margin:auto;
  padding:95px 5% 60px;
  pointer-events:none
}
.hero-inner a {
  pointer-events:auto
}
.hero h1 {
  max-width:1000px;
  margin-bottom:27px
}
.hero h1 em {
  font-style:normal;
  color:var(--ink)
}
.hero p {
  max-width:370px;
  font-size:15px;
  color:#555;
  margin-bottom:28px
}
.hero .meta {
  display:flex;
  gap:25px;
  font:10px var(--sans);
  margin-top:55px;
  color:#555
}
.ink-static {
  position:absolute;
  right:-8%;
  top:6%;
  width:60%;
  height:85%;
  opacity:.22;
  filter:blur(6px);
  transform:rotate(-28deg);
  background:radial-gradient(ellipse at 50% 47%,#171717 0%,#555 12%,#999 29%,transparent 58%),radial-gradient(ellipse at 65% 60%,#222,transparent 56%);
  border-radius:42% 58% 73% 27%
}
.hero-number {
  position:absolute;
  right:8%;
  bottom:45px;
  font:11px var(--sans);
  color:#555;
  writing-mode:vertical-rl
}
.ribbon {
  display:flex;
  justify-content:space-between;
  gap:20px;
  border-bottom:1px solid var(--line);
  padding:20px 5%;
  font:10px var(--sans);
  letter-spacing:normal
}
.grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:22px
}
.card {
  border:1px solid var(--line);
  padding:32px;
  background:var(--panel);
  backdrop-filter:blur(5px);
  -webkit-backdrop-filter:blur(5px);
  position:relative
}
.subject {
  min-height:310px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  overflow:hidden;
  transition:border-color .8s ease-out
}
.subject:hover {
  border-color:#171717
}
.subject .symbol {
  font:400 110px var(--serif);
  position:absolute;
  right:35px;
  top:20px;
  color:#b5b5b0;
  transform:none
}
.subject h3 {
  font-family:var(--serif);
  font-size:38px;
  margin:45px 0 12px
}
.subject p {
  max-width:280px;
  font-size:14px;
  color:var(--muted)
}
.subject .card-bottom {
  display:flex;
  justify-content:space-between;
  font:11px var(--sans)
}
.dark {
  background:rgba(250,250,250,.92);
  color:var(--ink)
}
.dark .symbol {
  color:#aaa
}
.dark p {
  color:var(--muted)
}
.method {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
  padding-top:35px
}
.method b {
  font:12px var(--sans);
  color:#555
}
.method h3 {
  margin:15px 0 12px
}
.method p {
  font-size:14px;
  color:var(--muted)
}
.quote {
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
  padding:65px 5%;
  text-align:left
}
.quote p {
  font:400 clamp(26px,3.4vw,42px)/1.35 var(--serif);
  max-width:1000px;
  margin:0 0 14px
}
.quote span {
  font:10px var(--sans);
  letter-spacing:normal
}

/* Учебные разделы */
.page-head {
  padding-bottom:35px;
  border-bottom:1px solid var(--line);
  margin-bottom:32px
}
.page-head h1 {
  font-size:clamp(42px,6vw,80px);
  margin-bottom:20px
}
.page-head p {
  max-width:640px;
  color:var(--muted)
}
.filters {
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin:25px 0
}
.filters select,.search {
  border:1px solid var(--line);
  padding:12px 15px;
  background:var(--panel);
  border-radius:0;
  max-width:100%
}
.lesson {
  margin-bottom:20px
}
.lesson .tag {
  font:10px var(--sans);
  color:var(--muted);
  margin-bottom:18px
}
.formula {
  font:18px var(--mono);
  padding:18px 10px;
  overflow-x:auto;
  background:rgba(235,235,235,.9);
  margin:20px 0
}
.lesson ul {
  padding-left:20px;
  color:var(--muted)
}
details {
  border-top:1px solid var(--line);
  padding:16px 0
}
summary {
  cursor:pointer;
  font-size:14px
}
details p {
  padding:15px 0 0;
  margin:0;
  color:var(--muted)
}
input.answer {
  width:100%;
  background:transparent;
  border:0;
  border-bottom:1px solid var(--ink);
  padding:16px 0;
  margin:10px 0 20px;
  color:var(--ink);
  border-radius:0
}
.actions {
  display:flex;
  gap:10px;
  flex-wrap:wrap
}
.feedback {
  min-height:27px;
  font:12px var(--sans);
  margin:15px 0 0
}
.success {
  font-weight:bold
}
.task-done {
  position:absolute;
  top:24px;
  right:24px;
  font:10px var(--sans)
}
.formula-table {
  width:100%;
  border-collapse:collapse
}
.formula-table td,.formula-table th {
  text-align:left;
  padding:20px 14px;
  border-bottom:1px solid var(--line)
}
.formula-table th {
  font:10px var(--mono);
  color:var(--muted);
  text-transform:uppercase;
  letter-spacing:normal
}
.formula-table td {
  font-size:14px
}
.formula-table .math {
  font-size:18px
}
.lab {
  border:1px solid var(--line);
  padding:28px;
  margin:25px 0
}
.lab-controls {
  display:flex;
  gap:30px;
  flex-wrap:wrap
}
.lab label {
  font:12px var(--mono);
  flex:1;
  min-width:150px
}
.lab input {
  width:100%;
  accent-color:#222
}
.track {
  height:70px;
  margin:30px 0 12px;
  border-bottom:1px solid #999;
  position:relative;
  overflow:hidden
}
.cart {
  position:absolute;
  bottom:4px;
  width:40px;
  height:24px;
  background:#222;
  left:0
}
.cart:after {
  content:'●　●';
  position:absolute;
  bottom:-13px;
  color:#222
}
.lab-output {
  font:13px var(--mono)
}
.about-copy {
  max-width:730px
}
.about-copy p {
  font-size:17px;
  color:#555
}
.about-copy h2 {
  margin-top:55px
}
.xp-bar {
  height:3px;
  background:#ddd;
  margin-top:20px
}
.xp-bar span {
  display:block;
  height:100%;
  background:#222
}
.empty {
  padding:40px;
  border:1px solid var(--line)
}
footer {
  padding:40px 5%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:25px;
  border-top:1px solid var(--line)
}
footer p {
  font-size:12px;
  margin:0;
  color:var(--muted)
}
footer>span {
  font:9px var(--sans);
  letter-spacing:normal
}
.toast {
  position:fixed;
  bottom:30px;
  left:50%;
  transform:translate(-50%,25px);
  background:#222;
  color:white;
  padding:15px 25px;
  z-index:50;
  font:12px var(--sans);
  opacity:0;
  transition:opacity .6s ease-out,transform .6s ease-out;
  pointer-events:none
}
.toast.visible {
  opacity:1;
  transform:translate(-50%,0)
}
#transition {
  position:fixed;
  inset:0;
  z-index:40;
  background:radial-gradient(ellipse at 30% 50%,#171717 30%,#444 60%,transparent 75%);
  pointer-events:none;
  transform:scale(0);
  opacity:0
}


/* Бумажные подложки защищают текст на тёмных складках и поверх чернил. */
.hero-inner h1,.hero-inner>p,.hero-inner>.eyebrow,.hero-inner>.meta {
  width:fit-content;
  background:var(--panel);
  backdrop-filter:blur(5px);
  -webkit-backdrop-filter:blur(5px);
  padding:10px 14px;
  border-radius:2px
}

.page-head,.section-head,.method article,.quote,.lab,.about-copy,.ribbon,.formula-table,.empty {
  background:var(--panel);
  backdrop-filter:blur(5px);
  -webkit-backdrop-filter:blur(5px)
}

.page-head,.section-head,.method article,.about-copy {
  padding:24px
}

.page-head h1,.section-head h2 {
  position:relative;
  padding-bottom:18px
}

/* Мазок лежит отдельно под заголовком, не перекрывая буквы. */
.page-head h1:before,.section-head h2:before {
  content:'';
  position:absolute;
  left:0;
  bottom:0;
  width:64px;
  height:5px;
  background:#111;
  border-radius:55% 35% 60% 40%;
  transform:rotate(-2deg);
  opacity:.8
}

.section-head p {
  margin-bottom:0
}

.formula-table {
  margin-top:24px
}

.about-copy a:not(.btn) {
  text-decoration:underline;
  text-underline-offset:3px
}

@media(max-width:900px) {
  body:before {
  position:absolute;
  background-size:750px 750px
}
.hero canvas {
  display:none
}

}

@media(max-width:600px) {
  .page-head,.section-head,.method article,.about-copy {
  padding:18px
}
.subject h3 {
  font-size:32px
}
.page-head h1 {
  overflow-wrap:anywhere
}
.hero-inner>.meta {
  max-width:100%
}

}


/* Адаптивная версия, доступность и печать */
@media(max-width:900px) {
  header {
  flex-wrap:wrap;
  gap:16px
}
nav {
  order:3;
  width:100%;
  justify-content:space-between;
  gap:10px;
  overflow:auto
}
.hero {
  min-height:630px
}
.hero-inner {
  padding-top:70px
}
.grid {
  gap:15px
}
.card {
  padding:24px
}
.method {
  gap:20px
}
.hero .meta {
  flex-wrap:wrap
}
.section-head {
  align-items:start
}
.ribbon {
  font-size:8px
}
.ink-static {
  width:100%;
  right:-30%
}
.hero-number {
  display:none
}

}

@media(max-width:600px) {
  h1 {
  font-size:46px
}
.hero {
  min-height:620px
}
.hero-inner {
  padding:55px 6%
}
.hero h1 {
  font-size:clamp(38px,9vw,54px);
  overflow-wrap:anywhere
}
.hero p {
  max-width:280px
}
.hero .meta {
  gap:15px;
  margin-top:35px
}
.wrap {
  padding:48px 6%
}
.grid,.method {
  grid-template-columns:1fr
}
.section-head {
  display:block
}
.section-head p {
  margin-top:22px
}
.ribbon span:last-child {
  display:none
}
.subject {
  min-height:280px
}
.formula-table td,.formula-table th {
  padding:12px 5px;
  font-size:11px
}
.formula-table .math {
  font-size:13px
}
footer {
  flex-wrap:wrap
}
.progress-chip {
  font-size:9px
}
.formula-table td:last-child {
  max-width:110px;
  overflow-wrap:anywhere
}

}

@media(prefers-reduced-motion:reduce) {
  *,*:before,*:after {
  animation:none!important;
  transition:none!important;
  scroll-behavior:auto!important
}
.hero canvas {
  display:none
}
#transition {
  display:none
}

}

@media print {
  html,body {
  background:#fff!important;
  color:#000!important
}
body {
  isolation:auto
}
body:before,body:after,header,footer,.filters,.no-print,.toast,#transition,.ink-static,.hero canvas,.hero-number,.symbol {
  display:none!important
}
.wrap {
  padding:0;
  max-width:none
}
.page-head {
  margin-bottom:12px;
  padding-bottom:8px
}
.page-head h1 {
  font-size:36px
}
.formula-table td,.formula-table th {
  padding:10px
}
.formula-table tr {
  break-inside:avoid
}
.reveal {
  opacity:1!important;
  transform:none!important;
  clip-path:none!important
}
* {
  text-shadow:none!important;
  box-shadow:none!important;
  backdrop-filter:none!important;
  -webkit-backdrop-filter:none!important
}
.card,.hero-inner h1,.hero-inner p,.hero-inner .eyebrow,.hero-inner .meta,.page-head,.section-head,.method article,.quote,.lab,.about-copy,.ribbon,.formula-table,.empty,.formula {
  background:#fff!important;
  color:#000!important
}
h1:before,h2:before,h3:before,.btn:before,.btn:after,.eyebrow:before {
  display:none!important
}
.hero {
  min-height:auto
}
.hero-inner {
  padding:0
}
.formula-table td,.formula-table th {
  color:#000!important
}
@page {
  margin:15mm
}

}


````

## js/app.js

````javascript
/* Навигация, прогресс и учебные взаимодействия. */
'use strict';
const main=document.querySelector('main'), reduce=matchMedia('(prefers-reduced-motion: reduce)');
let solved=new Set();try{const a=JSON.parse(localStorage.getItem('tush-solved')||'[]');if(Array.isArray(a))solved=new Set(a.filter(id=>COURSE.some(t=>t.id===id)))}catch{}
const subjects={physics:'Физика',math:'Математика'};
const math=f=>`<div class="formula math" data-tex="${f}">${f}</div>`;
const steps=a=>a.map((s,i)=>`<details><summary>Шаг ${i+1}</summary><p>${s}</p></details>`).join('');
const header=(n,title,desc)=>`<div class="page-head reveal"><div class="eyebrow">${n} / ТЕТРАДЬ ИССЛЕДОВАТЕЛЯ</div><h1>${title}</h1><p>${desc}</p></div>`;
function progress(){let xp=solved.size*25;document.querySelector('#xp').textContent=xp+' XP';document.querySelector('#level').textContent=String(1+Math.floor(xp/100)).padStart(2,'0')}
function home(){return `<section class="hero"><div class="ink-static"></div><canvas id="fluid" aria-hidden="true"></canvas><div class="hero-inner"><div class="eyebrow">ОНЛАЙН-ТЕТРАДЬ · ФИЗИКА И МАТЕМАТИКА</div><h1>Меньше зубрить.<br><em>Больше понимать.</em></h1><p>У сложных вещей есть простые объяснения. Исследуй законы мира, решай задачи и собирай знания шаг за шагом.</p><a class="btn primary" href="#theory">Начать исследование <span>↗</span></a><div class="meta"><span>12 ТЕМ ДЛЯ ПЕРВОГО ШАГА</span><span>7–10 КЛАССЫ</span><span>В ТВОЁМ ТЕМПЕ</span></div></div><span class="hero-number">01 ВСЁ НАЧИНАЕТСЯ С ВОПРОСА</span></section><div class="ribbon"><span>ЗНАНИЯ НЕ ТРЕБУЮТ ПОДПИСКИ</span><span>НИКАКИХ ОЦЕНОК. ТОЛЬКО ПРОГРЕСС.</span><span>ЛЮБОПЫТСТВО ПРИВЕТСТВУЕТСЯ ↗</span></div><section class="wrap"><div class="section-head reveal"><div><div class="eyebrow">01 / ВЫБЕРИ НАПРАВЛЕНИЕ</div><h2>Две науки.<br>Один мир.</h2></div><p>От движения мяча до движения мысли. Начни с того, что вызывает вопросы.</p></div><div class="grid"><a class="card subject reveal" href="#theory/physics"><span class="eyebrow">01 / ФИЗИКА</span><span class="symbol">F</span><div><h3>Как устроен мир</h3><p>Движение, силы, энергия и электричество. Проверь законы на практике.</p></div><div class="card-bottom"><span>6 ТЕМ · 6 ЗАДАЧ</span><span>Исследовать ↗</span></div></a><a class="card subject dark reveal" href="#theory/math"><span class="eyebrow">02 / МАТЕМАТИКА</span><span class="symbol">∑</span><div><h3>Язык закономерностей</h3><p>От дробей до производных. Находи связи и учись рассуждать.</p></div><div class="card-bottom"><span>6 ТЕМ · 6 ЗАДАЧ</span><span>Разобраться ↗</span></div></a></div></section><section class="quote reveal"><p>«Важнее не переставать задавать вопросы»</p><span>ПРИНЦИП НАШЕЙ ТЕТРАДИ</span></section><section class="wrap"><div class="eyebrow">02 / ТВОЙ МАРШРУТ</div><h2 class="reveal">Знание оставляет след.</h2><div class="method"><article class="reveal"><b>01 РАЗБЕРИСЬ</b><h3>Одна идея за раз</h3><p>Короткая теория, смысл формул и примеры из жизни.</p></article><article class="reveal"><b>02 ПОПРОБУЙ</b><h3>Ошибаться можно</h3><p>Решения по шагам и подсказки помогут найти свой путь.</p></article><article class="reveal"><b>03 ПРОДВИГАЙСЯ</b><h3>Каждый шаг считается</h3><p>25 XP за задачу. Новый уровень каждые 100 XP. Прогресс сохраняется в этом браузере.</p></article></div></section>`}
function filters(subject=''){return `<div class="filters no-print"><select id="subject" aria-label="Предмет"><option value="">Все предметы</option value="physics" ${subject==='physics'?'selected':''}>Физика</option><option value="math" ${subject==='math'?'selected':''}>Математика</option></select><select id="grade" aria-label="Класс"><option value="">Все классы</option>${[7,8,9,10].map(g=>`<option value="${g}">${g} класс</option>`).join('')}</select><input class="search" id="search" aria-label="Поиск по темам" placeholder="Найти тему…" type="search"></div>`}
function catalog(page,subject){const info={theory:['01','Понять суть.','Короткие главы, в которых у каждой формулы есть смысл. Выбери предмет и класс.'],examples:['02','Разобрать по шагам.','Не торопись смотреть ответ. Попробуй предположить следующий шаг, затем раскрой его.'],tasks:['03','Твоя очередь.','Введи число без единиц измерения. Принимаются десятичные числа с точкой или запятой и дроби вроде 3/4. За первое решение 25 XP.'],formulas:['04','Всё под рукой.','Справочник основных формул из наших уроков. Отфильтруй нужные темы и сохрани их через «Печать → Сохранить как PDF».']};return `<div class="wrap">${header(...info[page])}${page==='tasks'?`<p class="mono">РЕШЕНО ${solved.size} / ${COURSE.length} <span class="muted">· ${solved.size*25} XP</span></p><div class="xp-bar"><span style="width:${solved.size/COURSE.length*100}%"></span></div>`:''}${filters(subject)}${page==='formulas'?'<button class="btn small no-print" id="print">Печать / PDF ↗</button>':''}<div id="results"></div>${page==='theory'?lab():''}</div>`}
function lab(){return `<section class="lab reveal"><div class="eyebrow">МИНИ-ЛАБОРАТОРИЯ / ВТОРОЙ ЗАКОН НЬЮТОНА</div><h3>Сдвинь с места.</h3><p class="muted">Меняй силу и массу. Наблюдай движение из состояния покоя без трения в течение 3 секунд.</p><div class="lab-controls"><label>Сила: <output id="force-value">10</output> Н<input id="force" type="range" min="0" max="30" value="10"></label><label>Масса: <output id="mass-value">5</output> кг<input id="mass" type="range" min="1" max="15" value="5"></label></div><div class="track"><div class="cart" id="cart"></div></div><p class="lab-output" id="lab-output"></p><button class="btn small" id="run">Запустить опыт ↗</button><p class="muted">Масштаб: длина дорожки соответствует 150 м. При уменьшенной анимации показываем конечное положение.</p></section>`}
function renderResults(page){const sub=document.querySelector('#subject').value,grade=document.querySelector('#grade').value,q=document.querySelector('#search').value.toLowerCase().trim();const list=COURSE.filter(t=>(!sub||t.subject===sub)&&(!grade||t.grade===+grade)&&(!q||(t.title+' '+t.intro).toLowerCase().includes(q)));const results=document.querySelector('#results');if(!list.length){results.innerHTML='<p class="empty">Такой темы пока нет в этой тетради. Попробуй другой запрос или класс.</p>';return}if(page==='formulas'){results.innerHTML=`<table class="formula-table"><thead><tr><th>Тема</th><th>Формула</th><th>Обозначения / условия</th></tr></thead><tbody>${list.map(t=>`<tr><td>${t.title}<br><small>${subjects[t.subject]} · ${t.grade} класс</small></td><td><span class="math" data-tex="${t.formula}">${t.formula}</span></td><td>${t.units}</td></tr>`).join('')}</tbody></table>`}else results.innerHTML=`<div class="grid">${list.map(t=>`<article class="card lesson" id="${t.id}"><div class="tag">${subjects[t.subject].toUpperCase()} / ${t.grade} КЛАСС</div><h3>${t.title}</h3>${page==='theory'?`<p>${t.intro}</p>${math(t.formula)}<p class="mono muted" style="font-size:11px">${t.units}</p><p class="muted">${t.note}</p><a class="btn small" href="#tasks/${t.subject}">Закрепить ↗</a>`:page==='examples'?`<p>${t.example}</p>${steps(t.exampleSteps)}`:`${solved.has(t.id)?'<span class="task-done">✓ РЕШЕНО</span>':''}<p>${t.question}</p><form data-task="${t.id}"><label class="mono" style="font-size:11px" for="answer-${t.id}">ТВОЙ ОТВЕТ</label><input class="answer" id="answer-${t.id}" name="answer" autocomplete="off" placeholder="Введи число или дробь" required><button class="btn small primary" type="submit">Проверить ↗</button><p class="feedback" aria-live="polite"></p></form><details><summary>Нужна подсказка?</summary><p>${t.hint}</p></details><details><summary>Показать решение</summary><div>${t.steps.map(s=>`<p>${s}</p>`).join('')}</div></details>`}</article>`).join('')}</div>`;renderMath();cleanInterfaceText()}
function renderMath(){if(window.katex)document.querySelectorAll('[data-tex]').forEach(el=>katex.render(el.dataset.tex,el,{throwOnError:false,output:'html',strict:false}))}
function about(){return `<div class="wrap">${header('05','Место для любопытства.','pm открытая учебная тетрадь по физике и математике. Без оплаты и регистрации.')}<div class="about-copy"><h2>Понять значит связать.</h2><p>Формула становится полезной, когда ты понимаешь, что за ней стоит. Здесь можно читать объяснения, разбирать примеры по шагам и проверять себя без страха получить плохую оценку.</p><p>Первая тетрадь охватывает 12 вводных тем для 7–10 классов. Это отправная точка, а не полный школьный курс. Классы указаны ориентировочно: порядок тем в разных программах отличается.</p><h2>Твой прогресс принадлежит тебе.</h2><p>Решённые задачи сохраняются только в браузере на этом устройстве. Для сохранения нужен доступ к локальному хранилищу. Если очистить данные сайта, прогресс исчезнет. За каждую уникальную задачу начисляется 25 XP.</p><h2>На связи.</h2><p>Автор: Maxim Samarin. Нашёл ошибку или придумал тему? Напиши в обсуждение задачи на GitHub.</p><a class="btn" href="https://github.com/sannder01/pm/issues" target="_blank" rel="noopener">Предложить улучшение ↗</a><p style="margin-top:30px;font-size:13px">Код проекта: <a href="https://github.com/sannder01/pm">github.com/sannder01/pm</a><br>Чернила: адаптация WebGL Fluid Simulation Павла Добрякова (MIT). Формулы: KaTeX. Анимация появления: GSAP ScrollTrigger.</p></div></div>`}
let routeTimer;function route(){const [raw,subject]=location.hash.slice(1).split('/'),page=['theory','examples','tasks','formulas','about'].includes(raw)?raw:'home';main.innerHTML=page==='home'?home():page==='about'?about():catalog(page,subject);document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+page));document.title=({home:'Понять, а не запомнить',theory:'Теория',examples:'Примеры',tasks:'Задачи',formulas:'Справочник формул',about:'О проекте'}[page])+' pm';if(document.querySelector('#results')){renderResults(page);document.querySelectorAll('.filters select,.filters input').forEach(el=>el.addEventListener('input',()=>renderResults(page)))}document.querySelector('#print')?.addEventListener('click',()=>window.print());if(page==='theory')initLab();if(page==='home')initFluid();cleanInterfaceText();animate();window.scrollTo(0,0)}
function animate(){if(!reduce.matches&&window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);ScrollTrigger.getAll().forEach(t=>t.kill());document.querySelectorAll('.reveal').forEach(el=>{gsap.fromTo(el,{opacity:0,y:18,clipPath:'inset(0 15% 0 0)'},{opacity:1,y:0,clipPath:'inset(0 0% 0 0)',duration:.9,ease:'power1.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}})})}}
window.addEventListener('hashchange',()=>{clearTimeout(routeTimer);if(reduce.matches||!window.gsap){route();return}gsap.killTweensOf('#transition');gsap.fromTo('#transition',{scale:0,opacity:0},{scale:2.5,opacity:1,duration:.6,ease:'power1.out',onComplete:()=>{route();gsap.to('#transition',{scale:3,opacity:0,duration:.6,ease:'power1.out'})}})});
document.addEventListener('pointermove',e=>{const b=e.target.closest('.btn');if(b){const r=b.getBoundingClientRect();b.style.setProperty('--x',(e.clientX-r.left)+'px');b.style.setProperty('--y',(e.clientY-r.top)+'px')}});
function parseAnswer(value){const s=value.trim().replace(',','.');if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return Number(s);const f=s.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*\/\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/);return f&&Number(f[2])!==0?Number(f[1])/Number(f[2]):NaN}
document.addEventListener('submit',e=>{const form=e.target;if(!form.dataset.task)return;e.preventDefault();const t=COURSE.find(t=>t.id===form.dataset.task),value=parseAnswer(new FormData(form).get('answer')),out=form.querySelector('.feedback');if(!Number.isFinite(value)){out.textContent='Введи число или дробь с ненулевым знаменателем.';return}if(Math.abs(value-t.answer)>1e-8*Math.max(1,Math.abs(t.answer))){out.textContent='Пока не сходится. Проверь вычисления или открой подсказку.';return}out.textContent='✓ Верно! Ты разобрался.';out.classList.add('success');if(!solved.has(t.id)){solved.add(t.id);try{localStorage.setItem('tush-solved',JSON.stringify([...solved]))}catch{out.textContent+=' Прогресс сохранён только до закрытия страницы.'}progress();const toast=document.querySelector('#toast');toast.textContent='+25 XP · Ещё один понятный закон';toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),2500);form.closest('article').insertAdjacentHTML('afterbegin','<span class="task-done">✓ РЕШЕНО</span>')}});
/* Мини-лаборатория: s = at² / 2, дорожка соответствует 150 м. */
let labFrame;function initLab(){const f=document.querySelector('#force'),m=document.querySelector('#mass'),cart=document.querySelector('#cart');function values(){cancelAnimationFrame(labFrame);document.querySelector('#force-value').textContent=f.value;document.querySelector('#mass-value').textContent=m.value;document.querySelector('#lab-output').textContent=`a = F / m = ${(+f.value/+m.value).toFixed(2)} м/с²`;cart.style.transform='translateX(0)'}f.oninput=m.oninput=values;values();document.querySelector('#run').onclick=()=>{cancelAnimationFrame(labFrame);const a=+f.value/+m.value,max=cart.parentElement.clientWidth-40,start=performance.now();function frame(now){if(!cart.isConnected)return;const t=reduce.matches?3:Math.min((now-start)/1000,3),s=.5*a*t*t;cart.style.transform=`translateX(${s/150*max}px)`;document.querySelector('#lab-output').textContent=`a = ${a.toFixed(2)} м/с² · t = ${t.toFixed(1)} с · s = ${s.toFixed(2)} м`;if(t<3)labFrame=requestAnimationFrame(frame)}labFrame=requestAnimationFrame(frame)}}
/* Симуляция запускается только на большом экране без reduced-motion. */
let fluidLoaded=false;function initFluid(){if(reduce.matches||matchMedia('(max-width: 900px)').matches)return;if(fluidLoaded){window.startTushFluid?.();return}const script=document.createElement('script');script.src='vendor/fluid.js';script.onload=()=>{fluidLoaded=true;window.startTushFluid?.()};document.body.append(script)}
reduce.addEventListener('change',()=>{window.stopTushFluid?.();if(!reduce.matches&&location.hash.replace('#','')==='home')initFluid()});progress();route();

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

````

## js/content.js

````javascript
/* Учебные материалы: темы, формулы, примеры и задачи */
'use strict';
window.COURSE = [
  {
    "id": "speed",
    "subject": "physics",
    "grade": 7,
    "title": "Скорость и движение",
    "intro": "Скорость показывает, какой путь тело проходит за единицу времени. При равномерном движении она не меняется",
    "formula": "v=\\frac{s}{t}",
    "units": "v: м/с; s: м; t: с",
    "note": "Чтобы перевести км/ч в м/с, раздели на 3,6. Путь: длина всей траектории, а перемещение соединяет начальную и конечную точки",
    "question": "Велосипедист проехал 600 м за 120 с. Какова его средняя скорость в м/с?",
    "answer": 5,
    "hint": "Раздели весь путь на всё время",
    "steps": [
      "Записываем данные: s = 600 м, t = 120 с",
      "Используем v = s / t",
      "Подставляем: 600 / 120 = 5 м/с"
    ],
    "example": "Пешеход прошёл 900 м за 15 минут. Найдём его скорость",
    "exampleSteps": [
      "Переводим время: 15 · 60 = 900 с",
      "Делим путь на время: v = 900 / 900",
      "Ответ: 1 м/с, или 3,6 км/ч"
    ]
  },
  {
    "id": "density",
    "subject": "physics",
    "grade": 7,
    "title": "Масса и плотность",
    "intro": "Одинаковые по размеру куски дерева и железа имеют разную массу. Плотность связывает массу материала с занимаемым объёмом",
    "formula": "\\rho=\\frac{m}{V}",
    "units": "ρ: кг/м³; m: кг; V: м³",
    "note": "Плотность зависит от вещества и условий. Важно привести массу и объём к согласованным единицам",
    "question": "Масса детали 540 г, её объём 200 см³. Найди плотность в г/см³",
    "answer": 2.7,
    "hint": "В этой задаче можно сразу делить граммы на кубические сантиметры",
    "steps": [
      "ρ = m / V",
      "ρ = 540 / 200 = 2,7 г/см³",
      "В СИ это 2700 кг/м³"
    ],
    "example": "Масса 2 м³ воды: 2000 кг. Найдём плотность",
    "exampleSteps": [
      "ρ = m / V",
      "ρ = 2000 / 2 = 1000 кг/м³",
      "Каждый кубометр воды имеет массу около 1000 кг"
    ]
  },
  {
    "id": "ohm",
    "subject": "physics",
    "grade": 8,
    "title": "Закон Ома",
    "intro": "Напряжение создаёт ток в цепи. Сопротивление ограничивает его: при одном напряжении большее сопротивление означает меньший ток",
    "formula": "I=\\frac{U}{R}",
    "units": "I: А; U: В; R: Ом",
    "note": "Закон применяем к омическому участку цепи при неизменных физических условиях. Нельзя подключать амперметр напрямую к источнику",
    "question": "К резистору 6 Ом приложено напряжение 12 В. Найди ток в амперах",
    "answer": 2,
    "hint": "Используй I = U / R",
    "steps": [
      "I = U / R",
      "I = 12 / 6",
      "Ответ: 2 А"
    ],
    "example": "Какое напряжение нужно для тока 0,5 А через резистор 10 Ом?",
    "exampleSteps": [
      "Выражаем напряжение: U = I · R",
      "U = 0,5 · 10",
      "Ответ: 5 В"
    ]
  },
  {
    "id": "newton",
    "subject": "physics",
    "grade": 9,
    "title": "Сила и ускорение",
    "intro": "Равнодействующая всех сил меняет скорость тела. Чем больше сила, тем больше ускорение. Чем больше масса, тем труднее разогнать тело",
    "formula": "\\vec{F}_{\\text{рез}}=m\\vec{a}",
    "units": "F: Н; m: кг; a: м/с²",
    "note": "Закон работает в инерциальной системе отсчёта. Если силы уравновешены, тело покоится или движется равномерно и прямолинейно",
    "question": "На тело массой 4 кг действует равнодействующая 12 Н. Найди ускорение в м/с²",
    "answer": 3,
    "hint": "Вырази a из F = ma",
    "steps": [
      "a = F / m",
      "a = 12 / 4",
      "Ответ: 3 м/с²"
    ],
    "example": "Тележку массой 5 кг тянут с силой 20 Н. Трение равно 5 Н. Найдём ускорение",
    "exampleSteps": [
      "Равнодействующая: F = 20 − 5 = 15 Н",
      "a = F / m = 15 / 5",
      "Ответ: 3 м/с² по направлению тяги"
    ]
  },
  {
    "id": "energy",
    "subject": "physics",
    "grade": 9,
    "title": "Кинетическая энергия",
    "intro": "Движущееся тело может совершить работу. Его кинетическая энергия растёт пропорционально массе и квадрату скорости",
    "formula": "E_k=\\frac{mv^2}{2}",
    "units": "E: Дж; m: кг; v: м/с",
    "note": "При удвоении скорости энергия увеличивается в четыре раза. Энергия: скалярная величина; направление скорости в формулу не входит",
    "question": "Мяч массой 2 кг движется со скоростью 3 м/с. Найди энергию в джоулях",
    "answer": 9,
    "hint": "Сначала возведи скорость в квадрат",
    "steps": [
      "E = mv² / 2",
      "E = 2 · 3² / 2",
      "Ответ: 9 Дж"
    ],
    "example": "Тело массой 4 кг движется со скоростью 5 м/с. Какова энергия?",
    "exampleSteps": [
      "Квадрат скорости: 5² = 25",
      "E = 4 · 25 / 2",
      "Ответ: 50 Дж"
    ]
  },
  {
    "id": "gas",
    "subject": "physics",
    "grade": 10,
    "title": "Идеальный газ",
    "intro": "Модель идеального газа связывает давление, объём, количество вещества и абсолютную температуру",
    "formula": "pV=\\nu RT",
    "units": "p: Па; V: м³; ν: моль; T: К",
    "note": "R ≈ 8,31 Дж/(моль·К). Температуру переводим в кельвины: T = t°C + 273,15. Модель лучше описывает разреженные газы вдали от конденсации",
    "question": "Газ при постоянных объёме и количестве вещества нагрели с 300 К до 600 К. Начальное давление 100 кПа. Найди конечное давление в кПа",
    "answer": 200,
    "hint": "При постоянном объёме p / T постоянно",
    "steps": [
      "p₂ / p₁ = T₂ / T₁",
      "p₂ = 100 · 600 / 300",
      "Ответ: 200 кПа"
    ],
    "example": "Газ при постоянном объёме охлаждают с 400 К до 200 К. Было 80 кПа",
    "exampleSteps": [
      "p₂ = p₁ · T₂ / T₁",
      "p₂ = 80 · 200 / 400",
      "Ответ: 40 кПа"
    ]
  },
  {
    "id": "fractions",
    "subject": "math",
    "grade": 7,
    "title": "Дроби и пропорции",
    "intro": "Дробь обозначает часть целого или результат деления. Чтобы складывать дроби, нужно привести их к общему знаменателю",
    "formula": "\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}",
    "units": "b ≠ 0; d ≠ 0",
    "note": "При умножении перемножают числители и знаменатели. Деление на ненулевую дробь заменяют умножением на обратную",
    "question": "Вычисли 1/4 + 1/2. Введи дробь или десятичное число",
    "answer": 0.75,
    "hint": "Замени 1/2 на 2/4",
    "steps": [
      "Общий знаменатель: 4",
      "1/4 + 2/4 = 3/4",
      "Ответ: 0,75"
    ],
    "example": "Сложим 2/3 и 1/6",
    "exampleSteps": [
      "Общий знаменатель: 6",
      "2/3 = 4/6",
      "4/6 + 1/6 = 5/6"
    ]
  },
  {
    "id": "linear",
    "subject": "math",
    "grade": 7,
    "title": "Линейные уравнения",
    "intro": "Уравнение: равенство с неизвестным. Чтобы сохранить равенство, выполняй одно и то же действие с обеими частями",
    "formula": "ax+b=0\\quad\\Rightarrow\\quad x=-\\frac{b}{a}",
    "units": "a ≠ 0",
    "note": "Если a = 0, нужно рассмотреть b отдельно: при b = 0 подходит любое x, иначе решений нет",
    "question": "Реши уравнение 3x + 6 = 21",
    "answer": 5,
    "hint": "Сначала вычти 6 из обеих частей",
    "steps": [
      "3x = 21 − 6 = 15",
      "x = 15 / 3",
      "Ответ: x = 5"
    ],
    "example": "Решим 4x − 8 = 12",
    "exampleSteps": [
      "Прибавляем 8: 4x = 20",
      "Делим обе части на 4",
      "x = 5. Проверка: 4 · 5 − 8 = 12"
    ]
  },
  {
    "id": "pythagoras",
    "subject": "math",
    "grade": 8,
    "title": "Теорема Пифагора",
    "intro": "В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов. Гипотенуза лежит напротив прямого угла",
    "formula": "c^2=a^2+b^2",
    "units": "a, b: катеты; c: гипотенуза",
    "note": "Все длины должны быть в одинаковых единицах. Для непрямоугольного треугольника эта формула не подходит",
    "question": "Катеты прямоугольного треугольника равны 6 и 8 см. Найди гипотенузу в см",
    "answer": 10,
    "hint": "Сложи 6² и 8², затем извлеки квадратный корень",
    "steps": [
      "c² = 36 + 64 = 100",
      "c = √100",
      "Ответ: 10 см"
    ],
    "example": "Катеты равны 5 и 12 см. Найдём гипотенузу",
    "exampleSteps": [
      "c² = 5² + 12²",
      "c² = 25 + 144 = 169",
      "c = 13 см"
    ]
  },
  {
    "id": "quadratic",
    "subject": "math",
    "grade": 8,
    "title": "Квадратные уравнения",
    "intro": "Квадратное уравнение содержит x². Дискриминант показывает число действительных корней: два при D > 0, один при D = 0, ни одного при D < 0",
    "formula": "D=b^2-4ac,\\qquad x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}",
    "units": "ax² + bx + c = 0; a ≠ 0",
    "note": "Формула действительных корней применяется при D ≥ 0. Не забывай знак минус перед b",
    "question": "Найди больший корень уравнения x² − 5x + 6 = 0",
    "answer": 3,
    "hint": "D = 25 − 24 = 1",
    "steps": [
      "a = 1, b = −5, c = 6. D = 1",
      "x₁ = (5 + 1)/2 = 3; x₂ = (5 − 1)/2 = 2",
      "Больший корень: 3"
    ],
    "example": "Решим x² − 4x + 3 = 0",
    "exampleSteps": [
      "D = (−4)² − 4 · 1 · 3 = 4",
      "x = (4 ± 2)/2",
      "Корни: 3 и 1"
    ]
  },
  {
    "id": "trig",
    "subject": "math",
    "grade": 9,
    "title": "Синус и косинус",
    "intro": "В прямоугольном треугольнике синус острого угла: отношение противолежащего катета к гипотенузе, косинус: прилежащего",
    "formula": "\\sin^2\\alpha+\\cos^2\\alpha=1",
    "units": "Для любого угла α",
    "note": "Значения sin и cos лежат от −1 до 1. Для острых углов оба положительны. Не путай градусы и радианы",
    "question": "Противолежащий катет равен 3, гипотенуза: 5. Найди синус угла",
    "answer": 0.6,
    "hint": "Раздели противолежащий катет на гипотенузу",
    "steps": [
      "sin α = 3/5",
      "3/5 = 0,6",
      "Ответ: 0,6"
    ],
    "example": "В прямоугольном треугольнике прилежащий катет 8, гипотенуза 10. Найдём cos α",
    "exampleSteps": [
      "cos α = прилежащий катет / гипотенуза",
      "cos α = 8/10",
      "Ответ: 0,8"
    ]
  },
  {
    "id": "derivative",
    "subject": "math",
    "grade": 10,
    "title": "Производная",
    "intro": "Производная показывает мгновенную скорость изменения функции. Геометрически это угловой коэффициент касательной к графику",
    "formula": "(x^n)prime=nx^{n-1}",
    "units": "Для целого положительного n; x ∈ ℝ",
    "note": "Производная константы равна нулю. В физике производная координаты по времени: скорость, а производная скорости: ускорение",
    "question": "f(x) = x³. Найди f′(2)",
    "answer": 12,
    "hint": "Сначала найди производную, потом подставь x = 2",
    "steps": [
      "f′(x) = 3x²",
      "f′(2) = 3 · 2²",
      "Ответ: 12"
    ],
    "example": "Найдём производную f(x) = 2x² + 3x − 7 в точке x = 1",
    "exampleSteps": [
      "f′(x) = 4x + 3",
      "f′(1) = 4 · 1 + 3",
      "Ответ: 7"
    ]
  }
];

````

## README.md

````markdown
# pm

Бесплатный сайт изучения физики и математики. Чистые HTML, CSS и JavaScript без сборки.

## Файлы

- index.html — оболочка и навигация
- css/style.css — монохромный дизайн, адаптивность, печать
- js/content.js — 12 тем, задач и примеров
- js/app.js — страницы, фильтры, XP, проверка ответов, мини-лаборатория
- vendor/fluid.js — монохромная адаптация PavelDoGreat/WebGL-Fluid-Simulation
- vendor/FLUID-LICENSE — лицензия оригинала

## Запуск

Откройте index.html или выполните `python -m http.server 8080` в папке проекта. Сборка не нужна. Для шрифтов, KaTeX и GSAP требуется интернет.

## Прогресс

25 XP за каждую уникальную решённую задачу. Новый уровень каждые 100 XP. Прогресс сохраняется в localStorage данного браузера. Ответы проверяются численно; поддерживаются запятая, точка и дроби. Это вводный набор тем, не полная школьная программа.

## Печать

В разделе «Формулы» выберите фильтры и нажмите «Печать / PDF», затем «Сохранить как PDF» в диалоге браузера.

## Доступность

При prefers-reduced-motion и на экранах до 900 px WebGL не запускается. Остаются статичные мазки. Если WebGL недоступен, используется тот же фон.

## Авторы компонентов

WebGL Fluid Simulation: Pavel Dobryakov, MIT, https://github.com/PavelDoGreat/WebGL-Fluid-Simulation. Реклама, аналитика, внешние переходы и GUI оригинальной демонстрации удалены. Цвета сведены к серому; вывод инвертирован для чёрной туши на бумаге.

KaTeX 0.16.11; GSAP / ScrollTrigger 3.12.5; Google Fonts: IBM Plex Sans (основной текст и интерфейс), IBM Plex Serif (заголовки), IBM Plex Mono (формулы и код). Marck Script удалён полностью.

## Бумажный фон

Процедурный SVG встроен в CSS: feTurbulence создаёт складки, feDiffuseLighting освещает рельеф. Непрозрачность 0,24, нейтральный фон #fafafa. Текст находится над текстурой на полупрозрачных подложках с blur. На мобильных фон не фиксирован. При печати текстура, чернила и декоративные мазки отключаются.

SOURCE.md содержит снимок исходного кода первой версии. Актуальные файлы — index.html, css/style.css и js/*.js.

````

## Проверки

- Структура CSS и XML встроенного SVG проверены
- Marck Script полностью исключён
- Расчётный контраст текста #111 и #555 на подложке поверх чёрного фона: 13,77:1 и 5,44:1
- Синтаксис JavaScript проверен
- Название интерфейса заменено на pm; удалены конечные точки и длинные тире из отображаемого текста
- Визуальная проверка в браузере не выполнена: браузеру недоступен локальный сервер
- Для браузерного просмотра: ширины 390/900/1440 px, наведение кнопок, reduced-motion, печать справочника без текстур
