/* Аккаунт и синхронизация прогресса с сервером */
'use strict';
window.PMAccount=(()=>{
  let state=null,loading=true,failure='',saving=false;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const storageKey=()=>state?.user?'pm-solved:'+state.user.id:'tush-solved';
  function update(data){
    state=data;failure='';
    window.PMLearning?.setSolved(data.completions.map(r=>r.lesson_id));
    try{localStorage.setItem(storageKey(),JSON.stringify(data.completions.map(r=>r.lesson_id)))}catch{}
    redraw();
  }
  function redraw(){
    if(location.hash==='#profile')window.PMLearning?.refresh();
  }
  async function api(path,method='GET',body){
    const response=await fetch(path,{method,credentials:'same-origin',headers:body?{'Content-Type':'application/json'}:undefined,body:body?JSON.stringify(body):undefined,cache:'no-store'});
    const data=await response.json();
    if(!response.ok){const error=new Error(data.error||'Сервер недоступен');error.status=response.status;throw error}
    return data;
  }
  async function load(){
    loading=true;failure='';redraw();
    try{const data=await api('/api/account');loading=false;update(data)}
    catch(error){loading=false;state=null;failure=error.status===401?'':error.message;redraw()}
  }
  function render(){
    const intro='<div class="wrap account-page"><div class="page-head"><div class="eyebrow">ЛИЧНЫЙ КАБИНЕТ</div><h1>Твой путь к пониманию</h1><p>Твои темы, решённые задачи и маленькие открытия</p></div>';
    if(loading)return intro+'<p role="status">Загружаем твой прогресс…</p></div>';
    if(failure&&!state)return intro+'<div class="card"><h3>Не удалось загрузить кабинет</h3><p role="status">'+esc(failure)+'</p><button class="btn small" data-account-retry>Попробовать снова</button></div></div>';
    if(!state)return intro+`<section class="card account-login"><span class="eyebrow">ПРОДОЛЖАЙ С ЛЮБОГО УСТРОЙСТВА</span><h2>Знания остаются с тобой</h2><p>Войди через ChatGPT, чтобы сохранять решённые задачи и XP в своём аккаунте</p><a class="btn primary" href="/signin-with-chatgpt?return_to=%2F%23profile" target="_top">Войти через ChatGPT ↗</a><p class="muted account-note">Тема оформления остаётся настройкой этого браузера</p></section></div>`;
    const {user,xp,level,completions}=state;
    const done=new Set(completions.map(r=>r.lesson_id));
    const next=100-xp%100;
    const guest=(()=>{try{return JSON.parse(localStorage.getItem('tush-solved')||'[]').filter(id=>COURSE.some(t=>t.id===id)&&!done.has(id))}catch{return []}})();
    return intro+`<div class="account-grid"><section class="card"><div class="account-avatar" aria-hidden="true">${esc(user.name.charAt(0).toUpperCase())}</div><h2 class="account-name">${esc(user.name)}</h2><p class="muted account-email">${esc(user.email)}</p><p class="account-status" role="status">${esc(failure||'Прогресс сохранён в аккаунте')}</p><form id="profile-form"><label for="profile-name">Как к тебе обращаться</label><input id="profile-name" name="name" value="${esc(user.name)}" maxlength="40" required autocomplete="nickname"><button class="btn small" ${saving?'disabled':''}>${saving?'Сохраняем…':'Сохранить имя'}</button></form><a class="account-signout" href="/signout-with-chatgpt?return_to=%2F" target="_top">Выйти из аккаунта ↗</a></section><section class="card"><div class="eyebrow">ТВОЙ ПРОГРЕСС</div><div class="account-stats"><div><strong>${level}</strong><span>Уровень</span></div><div><strong>${xp}</strong><span>Опыт XP</span></div><div><strong>${done.size}/${COURSE.length}</strong><span>Задач решено</span></div></div><p class="muted">До следующего уровня ${next} XP</p><div class="xp-bar" role="progressbar" aria-label="Прогресс уровня" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${xp%100}"><span style="width:${xp%100}%"></span></div><div class="account-directions">${['physics','math'].map(subject=>{const list=COURSE.filter(t=>t.subject===subject),count=list.filter(t=>done.has(t.id)).length;return `<div><span>${subject==='physics'?'Физика':'Математика'}</span><span>${count} / ${list.length}</span><div class="xp-bar"><span style="width:${count/list.length*100}%"></span></div></div>`}).join('')}</div><a class="btn primary" href="#tasks">Продолжить обучение ↗</a>${guest.length?`<p class="muted account-note">На этом устройстве есть ${guest.length} решённых задач из прежнего режима без аккаунта, их можно заново подтвердить в разделе «Задачи»</p>`:''}</section></div><section class="account-history"><div class="section-head"><h2>Уже получилось</h2><p>${done.size?'Каждый решённый пример оставляет след':'Твоя первая решённая задача появится здесь'}</p></div><div class="grid">${completions.map(r=>{const lesson=COURSE.find(t=>t.id===r.lesson_id);return lesson?`<article class="card"><div class="eyebrow">${lesson.subject==='physics'?'ФИЗИКА':'МАТЕМАТИКА'} · ${lesson.grade} КЛАСС</div><h3>${esc(lesson.title)}</h3><p class="muted">+25 XP · ${esc(new Date(r.completed_at).toLocaleDateString('ru-RU'))}</p><a href="#theory/${lesson.subject}" class="btn small">Повторить тему ↗</a></article>`:''}).join('')}</div></section></div>`;
  }
  document.addEventListener('DOMContentLoaded',()=>{
    load();
    document.addEventListener('click',event=>{if(event.target.closest('[data-account-retry]'))load()});
    document.addEventListener('submit',async event=>{
      const form=event.target;
      if(form.id==='profile-form'){
        event.preventDefault();if(saving)return;saving=true;
        const name=new FormData(form).get('name');redraw();
        try{update(await api('/api/profile','PATCH',{name}))}catch(error){failure=error.message}finally{saving=false;redraw()}
      }
      if(form.dataset.task&&state?.user){
        const answer=new FormData(form).get('answer'),lessonId=form.dataset.task;
        if(!window.PMLearning?.isCorrect(lessonId,answer))return;
        try{const data=await api('/api/solve','POST',{lessonId,answer});update(data)}
        catch(error){failure='Решение осталось на этом устройстве, повтори отправку для сохранения в аккаунте';const feedback=form.querySelector('.feedback');if(feedback)feedback.textContent=failure;}
      }
    });
  },{once:true});
  return {render,storageKey};
})();
