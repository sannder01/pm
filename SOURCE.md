# Структура файлов

```text
pm/
├── index.html
├── css/style.css
├── js/content.js
├── js/app.js
├── vendor/fluid.js
├── vendor/FLUID-LICENSE
└── README.md
```

# Полный код по файлам

## index.html

```html
<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="Тушь — физика и математика через понятные объяснения, эксперименты и задачи. Бесплатно, на русском.">
<title>Тушь — понять, а не запомнить</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Marck+Script&family=IBM+Plex+Mono:wght@400;500&display=swap">
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

```

## css/style.css

```css
/* Бумага, типографика и базовые элементы */
:root{--paper:#f6f6f3;--ink:#171717;--muted:#686868;--line:#d4d4d0;--mono:'IBM Plex Mono',monospace;--brush:'Marck Script',cursive}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,sans-serif;line-height:1.6}body:before{content:'';position:fixed;inset:0;pointer-events:none;z-index:20;opacity:.055;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Cpath fill='%23000' filter='url(%23n)' opacity='.5' d='M0 0h180v180H0z'/%3E%3C/svg%3E")}a{color:inherit;text-decoration:none}button,input,select{font:inherit}button,a,input,select{touch-action:manipulation}button{cursor:pointer}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:2px solid #171717;outline-offset:5px}header{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:22px 5%;border-bottom:1px solid var(--line);position:relative;z-index:5;background:var(--paper)}.brand{font-family:var(--brush);font-size:44px;line-height:1}.brand span{font-family:serif;font-size:16px;margin-left:6px}nav{display:flex;gap:28px;font-size:13px}nav a{padding:6px 0;border-bottom:1px solid transparent}nav a.active,nav a:hover{border-color:var(--ink)}.progress-chip{border:1px solid var(--line);padding:10px 14px;font:10px var(--mono);white-space:nowrap}.progress-chip #level{background:var(--ink);color:white;padding:5px;margin-right:5px}.progress-chip #xp{color:var(--muted);margin-left:15px}main{min-height:75vh}h1,h2,h3,p{margin-top:0}h1,h2{font-family:var(--brush);font-weight:400;line-height:1.05;letter-spacing:-2px}h1{font-size:clamp(62px,8vw,124px)}h2{font-size:clamp(42px,5vw,70px)}h3{font-size:23px;font-weight:500;line-height:1.3}.eyebrow,.mono{font-family:var(--mono)}.eyebrow{font-size:10px;letter-spacing:2px;text-transform:uppercase;display:flex;align-items:center;gap:12px;margin-bottom:28px}.eyebrow:before{content:'';width:23px;height:1px;background:currentColor}.muted{color:var(--muted)}.btn{border:1px solid var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:35px;padding:15px 25px;background:transparent;color:var(--ink);position:relative;isolation:isolate;overflow:hidden;font-size:13px;min-height:50px}.btn:before{content:'';position:absolute;width:200%;aspect-ratio:1;background:var(--ink);border-radius:44% 56% 61% 39%;left:var(--x,50%);top:var(--y,50%);transform:translate(-50%,-50%) scale(0);transition:transform .8s ease-out;z-index:-1}.btn:hover:before{transform:translate(-50%,-50%) scale(1)}.btn:hover{color:white}.btn.primary{background:var(--ink);color:white}.btn.primary:before{background:#444}.btn.small{min-height:40px;padding:9px 16px;gap:12px}.btn:disabled{opacity:.5;cursor:default}.wrap{max-width:1240px;margin:auto;padding:76px 5%}.section-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:35px}.section-head h2{margin-bottom:0}.section-head p{max-width:340px;font-size:14px;color:var(--muted)}
/* Главная: чернила и героический заголовок */
.hero{min-height:690px;position:relative;overflow:hidden;border-bottom:1px solid var(--line)}.hero canvas{position:absolute;inset:0;width:100%;height:100%;filter:invert(1) grayscale(1);mix-blend-mode:multiply;opacity:.65;pointer-events:none}.hero-inner{position:relative;z-index:2;max-width:1240px;margin:auto;padding:95px 5% 60px;pointer-events:none}.hero-inner a{pointer-events:auto}.hero h1{max-width:820px;margin-bottom:27px}.hero h1 em{font-style:normal;color:#777}.hero p{max-width:370px;font-size:15px;color:#565656;margin-bottom:28px}.hero .meta{display:flex;gap:25px;font:10px var(--mono);margin-top:55px;color:#686868}.ink-static{position:absolute;right:-8%;top:6%;width:60%;height:85%;opacity:.22;filter:blur(6px);transform:rotate(-28deg);background:radial-gradient(ellipse at 50% 47%,#171717 0%,#555 12%,#999 29%,transparent 58%),radial-gradient(ellipse at 65% 60%,#222,transparent 56%);border-radius:42% 58% 73% 27%}.hero-number{position:absolute;right:8%;bottom:45px;font:11px var(--mono);color:#777;writing-mode:vertical-rl}.ribbon{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid var(--line);padding:20px 5%;font:10px var(--mono);letter-spacing:1px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.card{border:1px solid var(--line);padding:32px;background:rgba(255,255,255,.25);position:relative}.subject{min-height:310px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;transition:border-color .8s ease-out}.subject:hover{border-color:#171717}.subject .symbol{font:italic 115px Georgia,serif;position:absolute;right:35px;top:20px;color:#b5b5b0;transform:rotate(-12deg)}.subject h3{font-family:var(--brush);font-size:49px;margin:45px 0 12px}.subject p{max-width:280px;font-size:14px;color:var(--muted)}.subject .card-bottom{display:flex;justify-content:space-between;font:11px var(--mono)}.dark{background:#1c1c1c;color:var(--paper)}.dark .symbol{color:#656565}.dark p{color:#aaa}.method{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;padding-top:35px}.method b{font:12px var(--mono);color:#777}.method h3{margin:15px 0 12px}.method p{font-size:14px;color:var(--muted)}.quote{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:65px 5%;text-align:center}.quote p{font:clamp(30px,4vw,50px) var(--brush);max-width:800px;margin:0 auto 14px}.quote span{font:10px var(--mono);letter-spacing:2px}
/* Учебные разделы */
.page-head{padding-bottom:35px;border-bottom:1px solid var(--line);margin-bottom:32px}.page-head h1{font-size:clamp(58px,7vw,92px);margin-bottom:20px}.page-head p{max-width:640px;color:var(--muted)}.filters{display:flex;gap:12px;flex-wrap:wrap;margin:25px 0}.filters select,.search{border:1px solid var(--line);padding:12px 15px;background:transparent;border-radius:0;max-width:100%}.lesson{margin-bottom:20px}.lesson .tag{font:10px var(--mono);color:var(--muted);margin-bottom:18px}.formula{font:18px var(--mono);padding:18px 10px;overflow-x:auto;background:#ededeb;margin:20px 0}.lesson ul{padding-left:20px;color:var(--muted)}details{border-top:1px solid var(--line);padding:16px 0}summary{cursor:pointer;font-size:14px}details p{padding:15px 0 0;margin:0;color:var(--muted)}input.answer{width:100%;background:transparent;border:0;border-bottom:1px solid var(--ink);padding:16px 0;margin:10px 0 20px;color:var(--ink);border-radius:0}.actions{display:flex;gap:10px;flex-wrap:wrap}.feedback{min-height:27px;font:12px var(--mono);margin:15px 0 0}.success{font-weight:bold}.task-done{position:absolute;top:24px;right:24px;font:10px var(--mono)}.formula-table{width:100%;border-collapse:collapse}.formula-table td,.formula-table th{text-align:left;padding:20px 14px;border-bottom:1px solid var(--line)}.formula-table th{font:10px var(--mono);color:var(--muted);text-transform:uppercase;letter-spacing:1px}.formula-table td{font-size:14px}.formula-table .math{font-size:18px}.lab{border:1px solid var(--line);padding:28px;margin:25px 0}.lab-controls{display:flex;gap:30px;flex-wrap:wrap}.lab label{font:12px var(--mono);flex:1;min-width:150px}.lab input{width:100%;accent-color:#222}.track{height:70px;margin:30px 0 12px;border-bottom:1px solid #999;position:relative;overflow:hidden}.cart{position:absolute;bottom:4px;width:40px;height:24px;background:#222;left:0}.cart:after{content:'●　●';position:absolute;bottom:-13px;color:#222}.lab-output{font:13px var(--mono)}.about-copy{max-width:730px}.about-copy p{font-size:17px;color:#555}.about-copy h2{margin-top:55px}.xp-bar{height:3px;background:#ddd;margin-top:20px}.xp-bar span{display:block;height:100%;background:#222}.empty{padding:40px;border:1px solid var(--line)}footer{padding:40px 5%;display:flex;align-items:center;justify-content:space-between;gap:25px;border-top:1px solid var(--line)}footer p{font-size:12px;margin:0;color:var(--muted)}footer>span{font:9px var(--mono);letter-spacing:1px}.toast{position:fixed;bottom:30px;left:50%;transform:translate(-50%,25px);background:#222;color:white;padding:15px 25px;z-index:50;font:12px var(--mono);opacity:0;transition:opacity .6s ease-out,transform .6s ease-out;pointer-events:none}.toast.visible{opacity:1;transform:translate(-50%,0)}#transition{position:fixed;inset:0;z-index:40;background:radial-gradient(ellipse at 30% 50%,#171717 30%,#444 60%,transparent 75%);pointer-events:none;transform:scale(0);opacity:0}
/* Адаптивная версия, доступность и печать */
@media(max-width:900px){header{flex-wrap:wrap;gap:16px}nav{order:3;width:100%;justify-content:space-between;gap:10px;overflow:auto}.hero{min-height:630px}.hero-inner{padding-top:70px}.grid{gap:15px}.card{padding:24px}.method{gap:20px}.hero .meta{flex-wrap:wrap}.section-head{align-items:start}.ribbon{font-size:8px}.ink-static{width:100%;right:-30%}.hero-number{display:none}}
@media(max-width:600px){h1{font-size:65px}.hero{min-height:620px}.hero-inner{padding:55px 6%}.hero h1{font-size:68px}.hero p{max-width:280px}.hero .meta{gap:15px;margin-top:35px}.wrap{padding:48px 6%}.grid,.method{grid-template-columns:1fr}.section-head{display:block}.section-head p{margin-top:22px}.ribbon span:last-child{display:none}.subject{min-height:280px}.formula-table td,.formula-table th{padding:12px 5px;font-size:11px}.formula-table .math{font-size:13px}footer{flex-wrap:wrap}.progress-chip{font-size:9px}.formula-table td:last-child{max-width:110px;overflow-wrap:anywhere}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.hero canvas{display:none}#transition{display:none}}
@media print{body{background:white;color:black}body:before,header,footer,.filters,.no-print,.toast,#transition{display:none!important}.wrap{padding:0;max-width:none}.page-head{margin-bottom:12px;padding-bottom:8px}.page-head h1{font-size:36px}.formula-table td,.formula-table th{padding:10px}.formula-table tr{break-inside:avoid}.reveal{opacity:1!important;transform:none!important;clip-path:none!important}@page{margin:15mm}}

```

## js/content.js

```javascript
/* Учебные материалы: темы, формулы, примеры и задачи. */
'use strict';
window.COURSE = [
{id:'speed',subject:'physics',grade:7,title:'Скорость и движение',intro:'Скорость показывает, какой путь тело проходит за единицу времени. При равномерном движении она не меняется.',formula:'v=\\frac{s}{t}',units:'v — м/с; s — м; t — с',note:'Чтобы перевести км/ч в м/с, раздели на 3,6. Путь — длина всей траектории, а перемещение соединяет начальную и конечную точки.',question:'Велосипедист проехал 600 м за 120 с. Какова его средняя скорость в м/с?',answer:5,hint:'Раздели весь путь на всё время.',steps:['Записываем данные: s = 600 м, t = 120 с.','Используем v = s / t.','Подставляем: 600 / 120 = 5 м/с.'],example:'Пешеход прошёл 900 м за 15 минут. Найдём его скорость.',exampleSteps:['Переводим время: 15 · 60 = 900 с.','Делим путь на время: v = 900 / 900.','Ответ: 1 м/с, или 3,6 км/ч.']},
{id:'density',subject:'physics',grade:7,title:'Масса и плотность',intro:'Одинаковые по размеру куски дерева и железа имеют разную массу. Плотность связывает массу материала с занимаемым объёмом.',formula:'\\rho=\\frac{m}{V}',units:'ρ — кг/м³; m — кг; V — м³',note:'Плотность зависит от вещества и условий. Важно привести массу и объём к согласованным единицам.',question:'Масса детали 540 г, её объём 200 см³. Найди плотность в г/см³.',answer:2.7,hint:'В этой задаче можно сразу делить граммы на кубические сантиметры.',steps:['ρ = m / V.','ρ = 540 / 200 = 2,7 г/см³.','В СИ это 2700 кг/м³.'],example:'Масса 2 м³ воды — 2000 кг. Найдём плотность.',exampleSteps:['ρ = m / V.','ρ = 2000 / 2 = 1000 кг/м³.','Каждый кубометр воды имеет массу около 1000 кг.']},
{id:'ohm',subject:'physics',grade:8,title:'Закон Ома',intro:'Напряжение создаёт ток в цепи. Сопротивление ограничивает его: при одном напряжении большее сопротивление означает меньший ток.',formula:'I=\\frac{U}{R}',units:'I — А; U — В; R — Ом',note:'Закон применяем к омическому участку цепи при неизменных физических условиях. Нельзя подключать амперметр напрямую к источнику.',question:'К резистору 6 Ом приложено напряжение 12 В. Найди ток в амперах.',answer:2,hint:'Используй I = U / R.',steps:['I = U / R.','I = 12 / 6.','Ответ: 2 А.'],example:'Какое напряжение нужно для тока 0,5 А через резистор 10 Ом?',exampleSteps:['Выражаем напряжение: U = I · R.','U = 0,5 · 10.','Ответ: 5 В.']},
{id:'newton',subject:'physics',grade:9,title:'Сила и ускорение',intro:'Равнодействующая всех сил меняет скорость тела. Чем больше сила, тем больше ускорение. Чем больше масса, тем труднее разогнать тело.',formula:'\\vec{F}_{\\text{рез}}=m\\vec{a}',units:'F — Н; m — кг; a — м/с²',note:'Закон работает в инерциальной системе отсчёта. Если силы уравновешены, тело покоится или движется равномерно и прямолинейно.',question:'На тело массой 4 кг действует равнодействующая 12 Н. Найди ускорение в м/с².',answer:3,hint:'Вырази a из F = ma.',steps:['a = F / m.','a = 12 / 4.','Ответ: 3 м/с².'],example:'Тележку массой 5 кг тянут с силой 20 Н. Трение равно 5 Н. Найдём ускорение.',exampleSteps:['Равнодействующая: F = 20 − 5 = 15 Н.','a = F / m = 15 / 5.','Ответ: 3 м/с² по направлению тяги.']},
{id:'energy',subject:'physics',grade:9,title:'Кинетическая энергия',intro:'Движущееся тело может совершить работу. Его кинетическая энергия растёт пропорционально массе и квадрату скорости.',formula:'E_k=\\frac{mv^2}{2}',units:'E — Дж; m — кг; v — м/с',note:'При удвоении скорости энергия увеличивается в четыре раза. Энергия — скалярная величина; направление скорости в формулу не входит.',question:'Мяч массой 2 кг движется со скоростью 3 м/с. Найди энергию в джоулях.',answer:9,hint:'Сначала возведи скорость в квадрат.',steps:['E = mv² / 2.','E = 2 · 3² / 2.','Ответ: 9 Дж.'],example:'Тело массой 4 кг движется со скоростью 5 м/с. Какова энергия?',exampleSteps:['Квадрат скорости: 5² = 25.','E = 4 · 25 / 2.','Ответ: 50 Дж.']},
{id:'gas',subject:'physics',grade:10,title:'Идеальный газ',intro:'Модель идеального газа связывает давление, объём, количество вещества и абсолютную температуру.',formula:'pV=\\nu RT',units:'p — Па; V — м³; ν — моль; T — К',note:'R ≈ 8,31 Дж/(моль·К). Температуру переводим в кельвины: T = t°C + 273,15. Модель лучше описывает разреженные газы вдали от конденсации.',question:'Газ при постоянных объёме и количестве вещества нагрели с 300 К до 600 К. Начальное давление 100 кПа. Найди конечное давление в кПа.',answer:200,hint:'При постоянном объёме p / T постоянно.',steps:['p₂ / p₁ = T₂ / T₁.','p₂ = 100 · 600 / 300.','Ответ: 200 кПа.'],example:'Газ при постоянном объёме охлаждают с 400 К до 200 К. Было 80 кПа.',exampleSteps:['p₂ = p₁ · T₂ / T₁.','p₂ = 80 · 200 / 400.','Ответ: 40 кПа.']},
{id:'fractions',subject:'math',grade:7,title:'Дроби и пропорции',intro:'Дробь обозначает часть целого или результат деления. Чтобы складывать дроби, нужно привести их к общему знаменателю.',formula:'\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}',units:'b ≠ 0; d ≠ 0',note:'При умножении перемножают числители и знаменатели. Деление на ненулевую дробь заменяют умножением на обратную.',question:'Вычисли 1/4 + 1/2. Введи дробь или десятичное число.',answer:.75,hint:'Замени 1/2 на 2/4.',steps:['Общий знаменатель — 4.','1/4 + 2/4 = 3/4.','Ответ: 0,75.'],example:'Сложим 2/3 и 1/6.',exampleSteps:['Общий знаменатель — 6.','2/3 = 4/6.','4/6 + 1/6 = 5/6.']},
{id:'linear',subject:'math',grade:7,title:'Линейные уравнения',intro:'Уравнение — равенство с неизвестным. Чтобы сохранить равенство, выполняй одно и то же действие с обеими частями.',formula:'ax+b=0\\quad\\Rightarrow\\quad x=-\\frac{b}{a}',units:'a ≠ 0',note:'Если a = 0, нужно рассмотреть b отдельно: при b = 0 подходит любое x, иначе решений нет.',question:'Реши уравнение 3x + 6 = 21.',answer:5,hint:'Сначала вычти 6 из обеих частей.',steps:['3x = 21 − 6 = 15.','x = 15 / 3.','Ответ: x = 5.'],example:'Решим 4x − 8 = 12.',exampleSteps:['Прибавляем 8: 4x = 20.','Делим обе части на 4.','x = 5. Проверка: 4 · 5 − 8 = 12.']},
{id:'pythagoras',subject:'math',grade:8,title:'Теорема Пифагора',intro:'В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов. Гипотенуза лежит напротив прямого угла.',formula:'c^2=a^2+b^2',units:'a, b — катеты; c — гипотенуза',note:'Все длины должны быть в одинаковых единицах. Для непрямоугольного треугольника эта формула не подходит.',question:'Катеты прямоугольного треугольника равны 6 и 8 см. Найди гипотенузу в см.',answer:10,hint:'Сложи 6² и 8², затем извлеки квадратный корень.',steps:['c² = 36 + 64 = 100.','c = √100.','Ответ: 10 см.'],example:'Катеты равны 5 и 12 см. Найдём гипотенузу.',exampleSteps:['c² = 5² + 12².','c² = 25 + 144 = 169.','c = 13 см.']},
{id:'quadratic',subject:'math',grade:8,title:'Квадратные уравнения',intro:'Квадратное уравнение содержит x². Дискриминант показывает число действительных корней: два при D > 0, один при D = 0, ни одного при D < 0.',formula:'D=b^2-4ac,\\qquad x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}',units:'ax² + bx + c = 0; a ≠ 0',note:'Формула действительных корней применяется при D ≥ 0. Не забывай знак минус перед b.',question:'Найди больший корень уравнения x² − 5x + 6 = 0.',answer:3,hint:'D = 25 − 24 = 1.',steps:['a = 1, b = −5, c = 6. D = 1.','x₁ = (5 + 1)/2 = 3; x₂ = (5 − 1)/2 = 2.','Больший корень: 3.'],example:'Решим x² − 4x + 3 = 0.',exampleSteps:['D = (−4)² − 4 · 1 · 3 = 4.','x = (4 ± 2)/2.','Корни: 3 и 1.']},
{id:'trig',subject:'math',grade:9,title:'Синус и косинус',intro:'В прямоугольном треугольнике синус острого угла — отношение противолежащего катета к гипотенузе, косинус — прилежащего.',formula:'\\sin^2\\alpha+\\cos^2\\alpha=1',units:'Для любого угла α',note:'Значения sin и cos лежат от −1 до 1. Для острых углов оба положительны. Не путай градусы и радианы.',question:'Противолежащий катет равен 3, гипотенуза — 5. Найди синус угла.',answer:.6,hint:'Раздели противолежащий катет на гипотенузу.',steps:['sin α = 3/5.','3/5 = 0,6.','Ответ: 0,6.'],example:'В прямоугольном треугольнике прилежащий катет 8, гипотенуза 10. Найдём cos α.',exampleSteps:['cos α = прилежащий катет / гипотенуза.','cos α = 8/10.','Ответ: 0,8.']},
{id:'derivative',subject:'math',grade:10,title:'Производная',intro:'Производная показывает мгновенную скорость изменения функции. Геометрически это угловой коэффициент касательной к графику.',formula:'(x^n)\prime=nx^{n-1}',units:'Для целого положительного n; x ∈ ℝ',note:'Производная константы равна нулю. В физике производная координаты по времени — скорость, а производная скорости — ускорение.',question:'f(x) = x³. Найди f′(2).',answer:12,hint:'Сначала найди производную, потом подставь x = 2.',steps:['f′(x) = 3x².','f′(2) = 3 · 2².','Ответ: 12.'],example:'Найдём производную f(x) = 2x² + 3x − 7 в точке x = 1.',exampleSteps:['f′(x) = 4x + 3.','f′(1) = 4 · 1 + 3.','Ответ: 7.']}
];

```

## js/app.js

```javascript
/* Навигация, прогресс и учебные взаимодействия. */
'use strict';
const main=document.querySelector('main'), reduce=matchMedia('(prefers-reduced-motion: reduce)');
let solved=new Set();try{const a=JSON.parse(localStorage.getItem('tush-solved')||'[]');if(Array.isArray(a))solved=new Set(a.filter(id=>COURSE.some(t=>t.id===id)))}catch{}
const subjects={physics:'Физика',math:'Математика'};
const math=f=>`<div class="formula math" data-tex="${f}">${f}</div>`;
const steps=a=>a.map((s,i)=>`<details><summary>Шаг ${i+1}</summary><p>${s}</p></details>`).join('');
const header=(n,title,desc)=>`<div class="page-head reveal"><div class="eyebrow">${n} / ТЕТРАДЬ ИССЛЕДОВАТЕЛЯ</div><h1>${title}</h1><p>${desc}</p></div>`;
function progress(){let xp=solved.size*25;document.querySelector('#xp').textContent=xp+' XP';document.querySelector('#level').textContent=String(1+Math.floor(xp/100)).padStart(2,'0')}
function home(){return `<section class="hero"><div class="ink-static"></div><canvas id="fluid" aria-hidden="true"></canvas><div class="hero-inner"><div class="eyebrow">ОНЛАЙН-ТЕТРАДЬ · ФИЗИКА И МАТЕМАТИКА</div><h1>Меньше зубрить.<br><em>Больше понимать.</em></h1><p>У сложных вещей есть простые объяснения. Исследуй законы мира, решай задачи и собирай знания — шаг за шагом.</p><a class="btn primary" href="#theory">Начать исследование <span>↗</span></a><div class="meta"><span>12 ТЕМ ДЛЯ ПЕРВОГО ШАГА</span><span>7–10 КЛАССЫ</span><span>В ТВОЁМ ТЕМПЕ</span></div></div><span class="hero-number">01 — ВСЁ НАЧИНАЕТСЯ С ВОПРОСА</span></section><div class="ribbon"><span>ЗНАНИЯ НЕ ТРЕБУЮТ ПОДПИСКИ</span><span>НИКАКИХ ОЦЕНОК. ТОЛЬКО ПРОГРЕСС.</span><span>ЛЮБОПЫТСТВО ПРИВЕТСТВУЕТСЯ ↗</span></div><section class="wrap"><div class="section-head reveal"><div><div class="eyebrow">01 / ВЫБЕРИ НАПРАВЛЕНИЕ</div><h2>Две науки.<br>Один мир.</h2></div><p>От движения мяча до движения мысли. Начни с того, что вызывает вопросы.</p></div><div class="grid"><a class="card subject reveal" href="#theory/physics"><span class="eyebrow">01 / ФИЗИКА</span><span class="symbol">F</span><div><h3>Как устроен мир</h3><p>Движение, силы, энергия и электричество. Проверь законы на практике.</p></div><div class="card-bottom"><span>6 ТЕМ · 6 ЗАДАЧ</span><span>Исследовать ↗</span></div></a><a class="card subject dark reveal" href="#theory/math"><span class="eyebrow">02 / МАТЕМАТИКА</span><span class="symbol">∑</span><div><h3>Язык закономерностей</h3><p>От дробей до производных. Находи связи и учись рассуждать.</p></div><div class="card-bottom"><span>6 ТЕМ · 6 ЗАДАЧ</span><span>Разобраться ↗</span></div></a></div></section><section class="quote reveal"><p>«Важнее не переставать задавать вопросы»</p><span>ПРИНЦИП НАШЕЙ ТЕТРАДИ</span></section><section class="wrap"><div class="eyebrow">02 / ТВОЙ МАРШРУТ</div><h2 class="reveal">Знание оставляет след.</h2><div class="method"><article class="reveal"><b>01 — РАЗБЕРИСЬ</b><h3>Одна идея за раз</h3><p>Короткая теория, смысл формул и примеры из жизни.</p></article><article class="reveal"><b>02 — ПОПРОБУЙ</b><h3>Ошибаться можно</h3><p>Решения по шагам и подсказки помогут найти свой путь.</p></article><article class="reveal"><b>03 — ПРОДВИГАЙСЯ</b><h3>Каждый шаг считается</h3><p>25 XP за задачу. Новый уровень каждые 100 XP. Прогресс сохраняется в этом браузере.</p></article></div></section>`}
function filters(subject=''){return `<div class="filters no-print"><select id="subject" aria-label="Предмет"><option value="">Все предметы</option value="physics" ${subject==='physics'?'selected':''}>Физика</option><option value="math" ${subject==='math'?'selected':''}>Математика</option></select><select id="grade" aria-label="Класс"><option value="">Все классы</option>${[7,8,9,10].map(g=>`<option value="${g}">${g} класс</option>`).join('')}</select><input class="search" id="search" aria-label="Поиск по темам" placeholder="Найти тему…" type="search"></div>`}
function catalog(page,subject){const info={theory:['01','Понять суть.','Короткие главы, в которых у каждой формулы есть смысл. Выбери предмет и класс.'],examples:['02','Разобрать по шагам.','Не торопись смотреть ответ. Попробуй предположить следующий шаг, затем раскрой его.'],tasks:['03','Твоя очередь.','Введи число без единиц измерения. Принимаются десятичные числа с точкой или запятой и дроби вроде 3/4. За первое решение — 25 XP.'],formulas:['04','Всё под рукой.','Справочник основных формул из наших уроков. Отфильтруй нужные темы и сохрани их через «Печать → Сохранить как PDF».']};return `<div class="wrap">${header(...info[page])}${page==='tasks'?`<p class="mono">РЕШЕНО ${solved.size} / ${COURSE.length} <span class="muted">· ${solved.size*25} XP</span></p><div class="xp-bar"><span style="width:${solved.size/COURSE.length*100}%"></span></div>`:''}${filters(subject)}${page==='formulas'?'<button class="btn small no-print" id="print">Печать / PDF ↗</button>':''}<div id="results"></div>${page==='theory'?lab():''}</div>`}
function lab(){return `<section class="lab reveal"><div class="eyebrow">МИНИ-ЛАБОРАТОРИЯ / ВТОРОЙ ЗАКОН НЬЮТОНА</div><h3>Сдвинь с места.</h3><p class="muted">Меняй силу и массу. Наблюдай движение из состояния покоя без трения в течение 3 секунд.</p><div class="lab-controls"><label>Сила: <output id="force-value">10</output> Н<input id="force" type="range" min="0" max="30" value="10"></label><label>Масса: <output id="mass-value">5</output> кг<input id="mass" type="range" min="1" max="15" value="5"></label></div><div class="track"><div class="cart" id="cart"></div></div><p class="lab-output" id="lab-output"></p><button class="btn small" id="run">Запустить опыт ↗</button><p class="muted">Масштаб: длина дорожки соответствует 150 м. При уменьшенной анимации показываем конечное положение.</p></section>`}
function renderResults(page){const sub=document.querySelector('#subject').value,grade=document.querySelector('#grade').value,q=document.querySelector('#search').value.toLowerCase().trim();const list=COURSE.filter(t=>(!sub||t.subject===sub)&&(!grade||t.grade===+grade)&&(!q||(t.title+' '+t.intro).toLowerCase().includes(q)));const results=document.querySelector('#results');if(!list.length){results.innerHTML='<p class="empty">Такой темы пока нет в этой тетради. Попробуй другой запрос или класс.</p>';return}if(page==='formulas'){results.innerHTML=`<table class="formula-table"><thead><tr><th>Тема</th><th>Формула</th><th>Обозначения / условия</th></tr></thead><tbody>${list.map(t=>`<tr><td>${t.title}<br><small>${subjects[t.subject]} · ${t.grade} класс</small></td><td><span class="math" data-tex="${t.formula}">${t.formula}</span></td><td>${t.units}</td></tr>`).join('')}</tbody></table>`}else results.innerHTML=`<div class="grid">${list.map(t=>`<article class="card lesson" id="${t.id}"><div class="tag">${subjects[t.subject].toUpperCase()} / ${t.grade} КЛАСС</div><h3>${t.title}</h3>${page==='theory'?`<p>${t.intro}</p>${math(t.formula)}<p class="mono muted" style="font-size:11px">${t.units}</p><p class="muted">${t.note}</p><a class="btn small" href="#tasks/${t.subject}">Закрепить ↗</a>`:page==='examples'?`<p>${t.example}</p>${steps(t.exampleSteps)}`:`${solved.has(t.id)?'<span class="task-done">✓ РЕШЕНО</span>':''}<p>${t.question}</p><form data-task="${t.id}"><label class="mono" style="font-size:11px" for="answer-${t.id}">ТВОЙ ОТВЕТ</label><input class="answer" id="answer-${t.id}" name="answer" autocomplete="off" placeholder="Введи число или дробь" required><button class="btn small primary" type="submit">Проверить ↗</button><p class="feedback" aria-live="polite"></p></form><details><summary>Нужна подсказка?</summary><p>${t.hint}</p></details><details><summary>Показать решение</summary><div>${t.steps.map(s=>`<p>${s}</p>`).join('')}</div></details>`}</article>`).join('')}</div>`;renderMath()}
function renderMath(){if(window.katex)document.querySelectorAll('[data-tex]').forEach(el=>katex.render(el.dataset.tex,el,{throwOnError:false,output:'html',strict:false}))}
function about(){return `<div class="wrap">${header('05','Место для любопытства.','Тушь — открытая учебная тетрадь по физике и математике. Без оплаты и регистрации.')}<div class="about-copy"><h2>Понять — значит связать.</h2><p>Формула становится полезной, когда ты понимаешь, что за ней стоит. Здесь можно читать объяснения, разбирать примеры по шагам и проверять себя без страха получить плохую оценку.</p><p>Первая тетрадь охватывает 12 вводных тем для 7–10 классов. Это отправная точка, а не полный школьный курс. Классы указаны ориентировочно: порядок тем в разных программах отличается.</p><h2>Твой прогресс — твой.</h2><p>Решённые задачи сохраняются только в браузере на этом устройстве. Для сохранения нужен доступ к локальному хранилищу. Если очистить данные сайта, прогресс исчезнет. За каждую уникальную задачу начисляется 25 XP.</p><h2>На связи.</h2><p>Автор: Maxim Samarin. Нашёл ошибку или придумал тему? Напиши в обсуждение задачи на GitHub.</p><a class="btn" href="https://github.com/sannder01/pm/issues" target="_blank" rel="noopener">Предложить улучшение ↗</a><p style="margin-top:30px;font-size:13px">Код проекта: <a href="https://github.com/sannder01/pm">github.com/sannder01/pm</a><br>Чернила: адаптация WebGL Fluid Simulation Павла Добрякова (MIT). Формулы: KaTeX. Анимация появления: GSAP ScrollTrigger.</p></div></div>`}
let routeTimer;function route(){const [raw,subject]=location.hash.slice(1).split('/'),page=['theory','examples','tasks','formulas','about'].includes(raw)?raw:'home';main.innerHTML=page==='home'?home():page==='about'?about():catalog(page,subject);document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+page));document.title=({home:'Понять, а не запомнить',theory:'Теория',examples:'Примеры',tasks:'Задачи',formulas:'Справочник формул',about:'О проекте'}[page])+' — Тушь';if(document.querySelector('#results')){renderResults(page);document.querySelectorAll('.filters select,.filters input').forEach(el=>el.addEventListener('input',()=>renderResults(page)))}document.querySelector('#print')?.addEventListener('click',()=>window.print());if(page==='theory')initLab();if(page==='home')initFluid();animate();window.scrollTo(0,0)}
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

```

## vendor/fluid.js

```javascript
/*
MIT License

Copyright (c) 2017 Pavel Dobryakov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';
window.startTushFluid = function () {
try {

// Simulation section

const canvas = document.querySelector('#fluid');
if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches || innerWidth <= 900) return;
window.stopTushFluid?.();
let stopped = false;
window.stopTushFluid = () => { stopped = true; }; 
resizeCanvas();

let config = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 512,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 1,
    VELOCITY_DISSIPATION: 0.2,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6000,
    SHADING: false,
    COLORFUL: false,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
    BLOOM: false,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: false,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1.0,
}

function pointerPrototype () {
    this.id = -1;
    this.texcoordX = 0;
    this.texcoordY = 0;
    this.prevTexcoordX = 0;
    this.prevTexcoordY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.down = false;
    this.moved = false;
    this.color = {r:0.15,g:0.15,b:0.15};
}

let pointers = [];
let splatStack = [];
pointers.push(new pointerPrototype());

const { gl, ext } = getWebGLContext(canvas);

if (isMobile()) {
    config.DYE_RESOLUTION = 512;
}
if (!ext.supportLinearFiltering) {
    config.DYE_RESOLUTION = 512;
    config.SHADING = false;
    config.BLOOM = false;
    config.SUNRAYS = false;
}



function getWebGLContext (canvas) {
    const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };

    let gl = canvas.getContext('webgl2', params);
    const isWebGL2 = !!gl;
    if (!isWebGL2)
        gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

    let halfFloat;
    let supportLinearFiltering;
    if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float');
        supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
    } else {
        halfFloat = gl.getExtension('OES_texture_half_float');
        supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
    let formatRGBA;
    let formatRG;
    let formatR;

    if (isWebGL2)
    {
        formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
    }
    else
    {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    }


    return {
        gl,
        ext: {
            formatRGBA,
            formatRG,
            formatR,
            halfFloatTexType,
            supportLinearFiltering
        }
    };
}

function getSupportedFormat (gl, internalFormat, format, type)
{
    if (!supportRenderTextureFormat(gl, internalFormat, format, type))
    {
        switch (internalFormat)
        {
            case gl.R16F:
                return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
            case gl.RG16F:
                return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
            default:
                return null;
        }
    }

    return {
        internalFormat,
        format
    }
}

function supportRenderTextureFormat (gl, internalFormat, format, type) {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    return status == gl.FRAMEBUFFER_COMPLETE;
}

function captureScreenshot () {
    let res = getResolution(config.CAPTURE_RESOLUTION);
    let target = createFBO(res.width, res.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, ext.halfFloatTexType, gl.NEAREST);
    render(target);

    let texture = framebufferToTexture(target);
    texture = normalizeTexture(texture, target.width, target.height);

    let captureCanvas = textureToCanvas(texture, target.width, target.height);
    let datauri = captureCanvas.toDataURL();
    downloadURI('fluid.png', datauri);
    URL.revokeObjectURL(datauri);
}

function framebufferToTexture (target) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
    let length = target.width * target.height * 4;
    let texture = new Float32Array(length);
    gl.readPixels(0, 0, target.width, target.height, gl.RGBA, gl.FLOAT, texture);
    return texture;
}

function normalizeTexture (texture, width, height) {
    let result = new Uint8Array(texture.length);
    let id = 0;
    for (let i = height - 1; i >= 0; i--) {
        for (let j = 0; j < width; j++) {
            let nid = i * width * 4 + j * 4;
            result[nid + 0] = clamp01(texture[id + 0]) * 255;
            result[nid + 1] = clamp01(texture[id + 1]) * 255;
            result[nid + 2] = clamp01(texture[id + 2]) * 255;
            result[nid + 3] = clamp01(texture[id + 3]) * 255;
            id += 4;
        }
    }
    return result;
}

function clamp01 (input) {
    return Math.min(Math.max(input, 0), 1);
}

function textureToCanvas (texture, width, height) {
    let captureCanvas = document.createElement('canvas');
    let ctx = captureCanvas.getContext('2d');
    captureCanvas.width = width;
    captureCanvas.height = height;

    let imageData = ctx.createImageData(width, height);
    imageData.data.set(texture);
    ctx.putImageData(imageData, 0, 0);

    return captureCanvas;
}

function downloadURI (filename, uri) {
    let link = document.createElement('a');
    link.download = filename;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

class Material {
    constructor (vertexShader, fragmentShaderSource) {
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
        this.programs = [];
        this.activeProgram = null;
        this.uniforms = [];
    }

    setKeywords (keywords) {
        let hash = 0;
        for (let i = 0; i < keywords.length; i++)
            hash += hashCode(keywords[i]);

        let program = this.programs[hash];
        if (program == null)
        {
            let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
            program = createProgram(this.vertexShader, fragmentShader);
            this.programs[hash] = program;
        }

        if (program == this.activeProgram) return;

        this.uniforms = getUniforms(program);
        this.activeProgram = program;
    }

    bind () {
        gl.useProgram(this.activeProgram);
    }
}

class Program {
    constructor (vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = createProgram(vertexShader, fragmentShader);
        this.uniforms = getUniforms(this.program);
    }

    bind () {
        gl.useProgram(this.program);
    }
}

function createProgram (vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        console.trace(gl.getProgramInfoLog(program));

    return program;
}

function getUniforms (program) {
    let uniforms = [];
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
        let uniformName = gl.getActiveUniform(program, i).name;
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
}

function compileShader (type, source, keywords) {
    source = addKeywords(source, keywords);

    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.trace(gl.getShaderInfoLog(shader));

    return shader;
};

function addKeywords (source, keywords) {
    if (keywords == null) return source;
    let keywordsString = '';
    keywords.forEach(keyword => {
        keywordsString += '#define ' + keyword + '\n';
    });
    return keywordsString + source;
}

const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`);

const blurVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`);

const blurShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`);

const copyShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`);

const clearShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`);

const colorShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`);

const checkerboardShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`);

const displayShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`;

const bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`);

const bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`);

const bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`);

const sunraysMaskShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`);

const sunraysShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`);

const splatShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`);

const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,
    ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']
);

const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`);

const curlShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`);

const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`);

const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`);

const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`);

const blit = (() => {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    return (target, clear = false) => {
        if (target == null)
        {
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        else
        {
            gl.viewport(0, 0, target.width, target.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        }
        if (clear)
        {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        // CHECK_FRAMEBUFFER_STATUS();
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }
})();

function CHECK_FRAMEBUFFER_STATUS () {
    let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status != gl.FRAMEBUFFER_COMPLETE)
        console.trace("Framebuffer error: " + status);
}

let dye;
let velocity;
let divergence;
let curl;
let pressure;
let bloom;
let bloomFramebuffers = [];
let sunrays;
let sunraysTemp;

let ditheringTexture = createTextureAsync('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=');

const blurProgram            = new Program(blurVertexShader, blurShader);
const copyProgram            = new Program(baseVertexShader, copyShader);
const clearProgram           = new Program(baseVertexShader, clearShader);
const colorProgram           = new Program(baseVertexShader, colorShader);
const checkerboardProgram    = new Program(baseVertexShader, checkerboardShader);
const bloomPrefilterProgram  = new Program(baseVertexShader, bloomPrefilterShader);
const bloomBlurProgram       = new Program(baseVertexShader, bloomBlurShader);
const bloomFinalProgram      = new Program(baseVertexShader, bloomFinalShader);
const sunraysMaskProgram     = new Program(baseVertexShader, sunraysMaskShader);
const sunraysProgram         = new Program(baseVertexShader, sunraysShader);
const splatProgram           = new Program(baseVertexShader, splatShader);
const advectionProgram       = new Program(baseVertexShader, advectionShader);
const divergenceProgram      = new Program(baseVertexShader, divergenceShader);
const curlProgram            = new Program(baseVertexShader, curlShader);
const vorticityProgram       = new Program(baseVertexShader, vorticityShader);
const pressureProgram        = new Program(baseVertexShader, pressureShader);
const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);

const displayMaterial = new Material(baseVertexShader, displayShaderSource);

function initFramebuffers () {
    let simRes = getResolution(config.SIM_RESOLUTION);
    let dyeRes = getResolution(config.DYE_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const rgba    = ext.formatRGBA;
    const rg      = ext.formatRG;
    const r       = ext.formatR;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    gl.disable(gl.BLEND);

    if (dye == null)
        dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    else
        dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

    if (velocity == null)
        velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
    else
        velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);

    divergence = createFBO      (simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    curl       = createFBO      (simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    pressure   = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);

    initBloomFramebuffers();
    initSunraysFramebuffers();
}

function initBloomFramebuffers () {
    let res = getResolution(config.BLOOM_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const rgba = ext.formatRGBA;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    bloom = createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);

    bloomFramebuffers.length = 0;
    for (let i = 0; i < config.BLOOM_ITERATIONS; i++)
    {
        let width = res.width >> (i + 1);
        let height = res.height >> (i + 1);

        if (width < 2 || height < 2) break;

        let fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
        bloomFramebuffers.push(fbo);
    }
}

function initSunraysFramebuffers () {
    let res = getResolution(config.SUNRAYS_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const r = ext.formatR;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    sunrays     = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
    sunraysTemp = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
}

function createFBO (w, h, internalFormat, format, type, param) {
    gl.activeTexture(gl.TEXTURE0);
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    let texelSizeX = 1.0 / w;
    let texelSizeY = 1.0 / h;

    return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX,
        texelSizeY,
        attach (id) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };
}

function createDoubleFBO (w, h, internalFormat, format, type, param) {
    let fbo1 = createFBO(w, h, internalFormat, format, type, param);
    let fbo2 = createFBO(w, h, internalFormat, format, type, param);

    return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        get read () {
            return fbo1;
        },
        set read (value) {
            fbo1 = value;
        },
        get write () {
            return fbo2;
        },
        set write (value) {
            fbo2 = value;
        },
        swap () {
            let temp = fbo1;
            fbo1 = fbo2;
            fbo2 = temp;
        }
    }
}

function resizeFBO (target, w, h, internalFormat, format, type, param) {
    let newFBO = createFBO(w, h, internalFormat, format, type, param);
    copyProgram.bind();
    gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
    blit(newFBO);
    return newFBO;
}

function resizeDoubleFBO (target, w, h, internalFormat, format, type, param) {
    if (target.width == w && target.height == h)
        return target;
    target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
    target.write = createFBO(w, h, internalFormat, format, type, param);
    target.width = w;
    target.height = h;
    target.texelSizeX = 1.0 / w;
    target.texelSizeY = 1.0 / h;
    return target;
}

function createTextureAsync (url) {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

    let obj = {
        texture,
        width: 1,
        height: 1,
        attach (id) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };

    let image = new Image();
    image.onload = () => {
        obj.width = image.width;
        obj.height = image.height;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    };
    image.src = url;

    return obj;
}

function updateKeywords () {
    let displayKeywords = [];
    if (config.SHADING) displayKeywords.push("SHADING");
    if (config.BLOOM) displayKeywords.push("BLOOM");
    if (config.SUNRAYS) displayKeywords.push("SUNRAYS");
    displayMaterial.setKeywords(displayKeywords);
}

updateKeywords();
initFramebuffers();
multipleSplats(parseInt(Math.random() * 20) + 5);

let lastUpdateTime = Date.now();
let colorUpdateTimer = 0.0;
update();

function update () {
    if (stopped || !canvas.isConnected || matchMedia("(prefers-reduced-motion: reduce)").matches || innerWidth <= 900) { gl.getExtension("WEBGL_lose_context")?.loseContext(); return; }
    const dt = calcDeltaTime();
    if (resizeCanvas())
        initFramebuffers();
    updateColors(dt);
    applyInputs();
    if (!config.PAUSED)
        step(dt);
    render(null);
    requestAnimationFrame(update);
}

function calcDeltaTime () {
    let now = Date.now();
    let dt = (now - lastUpdateTime) / 1000;
    dt = Math.min(dt, 0.016666);
    lastUpdateTime = now;
    return dt;
}

function resizeCanvas () {
    let width = scaleByPixelRatio(canvas.clientWidth);
    let height = scaleByPixelRatio(canvas.clientHeight);
    if (canvas.width != width || canvas.height != height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

function updateColors (dt) {
    if (!config.COLORFUL) return;

    colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
    if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach(p => {
            p.color = generateColor();
        });
    }
}

function applyInputs () {
    if (splatStack.length > 0)
        multipleSplats(splatStack.pop());

    pointers.forEach(p => {
        if (p.moved) {
            p.moved = false;
            splatPointer(p);
        }
    });
}

function step (dt) {
    gl.disable(gl.BLEND);

    curlProgram.bind();
    gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(curl);

    vorticityProgram.bind();
    gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
    gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
    gl.uniform1f(vorticityProgram.uniforms.dt, dt);
    blit(velocity.write);
    velocity.swap();

    divergenceProgram.bind();
    gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence);

    clearProgram.bind();
    gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
    blit(pressure.write);
    pressure.swap();

    pressureProgram.bind();
    gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
    for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
    }

    gradienSubtractProgram.bind();
    gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    advectionProgram.bind();
    gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    if (!ext.supportLinearFiltering)
        gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
    let velocityId = velocity.read.attach(0);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
    gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
    gl.uniform1f(advectionProgram.uniforms.dt, dt);
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
    blit(velocity.write);
    velocity.swap();

    if (!ext.supportLinearFiltering)
        gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
    blit(dye.write);
    dye.swap();
}

function render (target) {
    if (config.BLOOM)
        applyBloom(dye.read, bloom);
    if (config.SUNRAYS) {
        applySunrays(dye.read, dye.write, sunrays);
        blur(sunrays, sunraysTemp, 1);
    }

    if (target == null || !config.TRANSPARENT) {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    }
    else {
        gl.disable(gl.BLEND);
    }

    if (!config.TRANSPARENT)
        drawColor(target, normalizeColor(config.BACK_COLOR));
    if (target == null && config.TRANSPARENT)
        drawCheckerboard(target);
    drawDisplay(target);
}

function drawColor (target, color) {
    colorProgram.bind();
    gl.uniform4f(colorProgram.uniforms.color, color.r, color.g, color.b, 1);
    blit(target);
}

function drawCheckerboard (target) {
    checkerboardProgram.bind();
    gl.uniform1f(checkerboardProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    blit(target);
}

function drawDisplay (target) {
    let width = target == null ? gl.drawingBufferWidth : target.width;
    let height = target == null ? gl.drawingBufferHeight : target.height;

    displayMaterial.bind();
    if (config.SHADING)
        gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
    gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
    if (config.BLOOM) {
        gl.uniform1i(displayMaterial.uniforms.uBloom, bloom.attach(1));
        gl.uniform1i(displayMaterial.uniforms.uDithering, ditheringTexture.attach(2));
        let scale = getTextureScale(ditheringTexture, width, height);
        gl.uniform2f(displayMaterial.uniforms.ditherScale, scale.x, scale.y);
    }
    if (config.SUNRAYS)
        gl.uniform1i(displayMaterial.uniforms.uSunrays, sunrays.attach(3));
    blit(target);
}

function applyBloom (source, destination) {
    if (bloomFramebuffers.length < 2)
        return;

    let last = destination;

    gl.disable(gl.BLEND);
    bloomPrefilterProgram.bind();
    let knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;
    let curve0 = config.BLOOM_THRESHOLD - knee;
    let curve1 = knee * 2;
    let curve2 = 0.25 / knee;
    gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
    gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);
    gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
    blit(last);

    bloomBlurProgram.bind();
    for (let i = 0; i < bloomFramebuffers.length; i++) {
        let dest = bloomFramebuffers[i];
        gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
        blit(dest);
        last = dest;
    }

    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.BLEND);

    for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
        let baseTex = bloomFramebuffers[i];
        gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
        gl.viewport(0, 0, baseTex.width, baseTex.height);
        blit(baseTex);
        last = baseTex;
    }

    gl.disable(gl.BLEND);
    bloomFinalProgram.bind();
    gl.uniform2f(bloomFinalProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
    gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));
    gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
    blit(destination);
}

function applySunrays (source, mask, destination) {
    gl.disable(gl.BLEND);
    sunraysMaskProgram.bind();
    gl.uniform1i(sunraysMaskProgram.uniforms.uTexture, source.attach(0));
    blit(mask);

    sunraysProgram.bind();
    gl.uniform1f(sunraysProgram.uniforms.weight, config.SUNRAYS_WEIGHT);
    gl.uniform1i(sunraysProgram.uniforms.uTexture, mask.attach(0));
    blit(destination);
}

function blur (target, temp, iterations) {
    blurProgram.bind();
    for (let i = 0; i < iterations; i++) {
        gl.uniform2f(blurProgram.uniforms.texelSize, target.texelSizeX, 0.0);
        gl.uniform1i(blurProgram.uniforms.uTexture, target.attach(0));
        blit(temp);

        gl.uniform2f(blurProgram.uniforms.texelSize, 0.0, target.texelSizeY);
        gl.uniform1i(blurProgram.uniforms.uTexture, temp.attach(0));
        blit(target);
    }
}

function splatPointer (pointer) {
    let dx = pointer.deltaX * config.SPLAT_FORCE;
    let dy = pointer.deltaY * config.SPLAT_FORCE;
    splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
}

function multipleSplats (amount) {
    for (let i = 0; i < amount; i++) {
        const color = generateColor();
        color.r *= 10.0;
        color.g *= 10.0;
        color.b *= 10.0;
        const x = Math.random();
        const y = Math.random();
        const dx = 1000 * (Math.random() - 0.5);
        const dy = 1000 * (Math.random() - 0.5);
        splat(x, y, dx, dy, color);
    }
}

function splat (x, y, dx, dy, color) {
    splatProgram.bind();
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(splatProgram.uniforms.point, x, y);
    gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
    gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
    blit(velocity.write);
    velocity.swap();

    gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
    gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
    blit(dye.write);
    dye.swap();
}

function correctRadius (radius) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio > 1)
        radius *= aspectRatio;
    return radius;
}

canvas.parentElement.addEventListener('pointermove', e => {
    const rect = canvas.getBoundingClientRect();
    let pointer = pointers[0];
    let x = scaleByPixelRatio(e.clientX - rect.left);
    let y = scaleByPixelRatio(e.clientY - rect.top);
    if (!pointer.down) updatePointerDownData(pointer, -1, x, y);
    else updatePointerMoveData(pointer, x, y);
});

function updatePointerDownData (pointer, id, posX, posY) {
    pointer.id = id;
    pointer.down = true;
    pointer.moved = false;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1.0 - posY / canvas.height;
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.deltaX = 0;
    pointer.deltaY = 0;
    pointer.color = generateColor();
}

function updatePointerMoveData (pointer, posX, posY) {
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1.0 - posY / canvas.height;
    pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
    pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
    pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
}

function updatePointerUpData (pointer) {
    pointer.down = false;
}

function correctDeltaX (delta) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio < 1) delta *= aspectRatio;
    return delta;
}

function correctDeltaY (delta) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio > 1) delta /= aspectRatio;
    return delta;
}

function generateColor () { return {r:0.15,g:0.15,b:0.15}; }

function HSVtoRGB (h, s, v) {
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return {
        r,
        g,
        b
    };
}

function normalizeColor (input) {
    let output = {
        r: input.r / 255,
        g: input.g / 255,
        b: input.b / 255
    };
    return output;
}

function wrap (value, min, max) {
    let range = max - min;
    if (range == 0) return min;
    return (value - min) % range + min;
}

function getResolution (resolution) {
    let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
    if (aspectRatio < 1)
        aspectRatio = 1.0 / aspectRatio;

    let min = Math.round(resolution);
    let max = Math.round(resolution * aspectRatio);

    if (gl.drawingBufferWidth > gl.drawingBufferHeight)
        return { width: max, height: min };
    else
        return { width: min, height: max };
}

function getTextureScale (texture, width, height) {
    return {
        x: width / texture.width,
        y: height / texture.height
    };
}

function scaleByPixelRatio (input) {
    let pixelRatio = window.devicePixelRatio || 1;
    return Math.floor(input * pixelRatio);
}

function hashCode (s) {
    if (s.length == 0) return 0;
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
} catch (error) { console.info("Статичные чернила: WebGL недоступен."); }
};

```

## vendor/FLUID-LICENSE

```text
MIT License

Copyright (c) 2017 Pavel Dobryakov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

