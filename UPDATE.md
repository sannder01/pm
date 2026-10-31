# Изменённые файлы

- index.html
- css/style.css
- README.md

# Полное содержимое

## index.html

````html
<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="Тушь — физика и математика через понятные объяснения, эксперименты и задачи. Бесплатно, на русском.">
<title>Тушь — понять, а не запомнить</title>
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
<header><a class="brand" href="#home" aria-label="Тушь — главная">тушь<span>●</span></a><nav aria-label="Разделы сайта"><a href="#theory">Теория</a><a href="#examples">Примеры</a><a href="#tasks">Задачи</a><a href="#formulas">Формулы</a><a href="#about">О проекте</a></nav><a class="progress-chip" href="#tasks"><span id="level">01</span> УРОВЕНЬ <span id="xp">0 XP</span></a></header>
<main id="main" tabindex="-1"></main>
<!-- Постоянные элементы интерфейса -->
<footer><a class="brand" href="#home">тушь<span>●</span></a><p>Физика. Математика. Любопытство.</p><span>БЕСПЛАТНО · БЕЗ РЕГИСТРАЦИИ</span></footer>
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

## README.md

````markdown
# Тушь

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

- Проверены структура CSS, XML встроенного SVG, отсутствие Marck Script.
- Контраст #111 и #555 на бумажной подложке даже поверх чёрного фона: 13,77:1 и 5,44:1. Это расчёт, не визуальная проверка.
- Проверен синтаксис существующего JavaScript.
- Браузерная проверка не выполнена: браузер не смог подключиться к локальному серверу.
- Для просмотра: проверить главную и карточки на 390/900/1440 px, наведение кнопок, reduced-motion и печать справочника без текстур.
