/* Identity headers are supplied and verified by Sites dispatch */
const json = (body,status=200) => Response.json(body,{status,headers:{'cache-control':'no-store','x-content-type-options':'nosniff'}});
function identity(request) {
  const id=request.headers.get('oai-authenticated-user-id');
  const email=request.headers.get('oai-authenticated-user-email');
  if(!id||!email)return null;
  let name=null;
  if(request.headers.get('oai-authenticated-user-full-name-encoding')==='percent-encoded-utf-8') {
    try {name=decodeURIComponent(request.headers.get('oai-authenticated-user-full-name')||'')}catch{}
  }
  return {id,email,name};
}
function parseAnswer(value) {
  const s=String(value).trim().replace(',','.');
  if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return Number(s);
  const f=s.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*\/\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/);
  return f&&Number(f[2])!==0?Number(f[1])/Number(f[2]):NaN;
}
async function snapshot(db,user) {
  const profile=await db.prepare('SELECT display_name, created_at FROM profiles WHERE user_id = ?').bind(user.id).first();
  const rows=await db.prepare('SELECT lesson_id, completed_at FROM completions WHERE user_id = ? ORDER BY completed_at DESC').bind(user.id).all();
  const completions=rows.results.filter(r=>LESSONS.some(l=>l.id===r.lesson_id));
  const xp=completions.length*25;
  return {user:{id:user.id,email:user.email,name:profile?.display_name||user.name||'Исследователь'},completions,xp,level:1+Math.floor(xp/100)};
}
export default {
  async fetch(request,env) {
    const url=new URL(request.url);
    if(!url.pathname.startsWith('/api/')) {
      const asset=ASSETS[url.pathname==='/'?'/index.html':url.pathname];
      if(!asset)return new Response('Страница не найдена',{status:404});
      if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405});
      return new Response(request.method==='HEAD'?null:asset.body,{headers:{'content-type':asset.type,'cache-control':'no-cache','x-content-type-options':'nosniff'}});
    }
    const user=identity(request);
    if(!user)return json({error:'Войди в аккаунт, чтобы сохранить прогресс'},401);
    if(!env.DB)return json({error:'Хранилище аккаунта временно недоступно'},503);
    try {
      if(url.pathname==='/api/account'&&request.method==='GET')return json(await snapshot(env.DB,user));
      if(!['POST','PATCH'].includes(request.method))return json({error:'Метод не поддерживается'},405);
      if(request.headers.get('origin')!==url.origin)return json({error:'Запрос с другого сайта запрещён'},403);
      if(!request.headers.get('content-type')?.startsWith('application/json'))return json({error:'Ожидается JSON'},415);
      if(Number(request.headers.get('content-length'))>4096)return json({error:'Слишком большой запрос'},413);
      const raw=await request.text();
      if(raw.length>4096)return json({error:'Слишком большой запрос'},413);
      let body;try{body=JSON.parse(raw)}catch{return json({error:'Некорректный запрос'},400)}
      if(!body||typeof body!=='object'||Array.isArray(body))return json({error:'Некорректный запрос'},400);
      if(url.pathname==='/api/profile'&&request.method==='PATCH') {
        const name=typeof body.name==='string'?body.name.trim():'';
        if(!name||name.length>40||/[\u0000-\u001f\u007f]/.test(name))return json({error:'Имя должно содержать от 1 до 40 символов'},400);
        await env.DB.prepare('INSERT INTO profiles (user_id, display_name, created_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET display_name = excluded.display_name').bind(user.id,name,new Date().toISOString()).run();
        return json(await snapshot(env.DB,user));
      }
      if(url.pathname==='/api/solve'&&request.method==='POST') {
        const lesson=LESSONS.find(l=>l.id===body.lessonId),answer=parseAnswer(body.answer);
        if(!lesson)return json({error:'Задача не найдена'},404);
        if(!Number.isFinite(answer)||Math.abs(answer-lesson.answer)>1e-8*Math.max(1,Math.abs(lesson.answer)))return json({error:'Ответ пока не сходится'},422);
        await env.DB.prepare('INSERT OR IGNORE INTO completions (user_id, lesson_id, completed_at) VALUES (?, ?, ?)').bind(user.id,lesson.id,new Date().toISOString()).run();
        return json(await snapshot(env.DB,user));
      }
      return json({error:'Страница не найдена'},404);
    } catch(error) { console.error('Account API failure',error.message);return json({error:'Не удалось сохранить данные, попробуй ещё раз'},503); }
  }
};
