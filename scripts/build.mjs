/* Dependency-free Worker build: embeds the existing HTML, CSS and JS */
import {readFileSync,writeFileSync,mkdirSync,readdirSync,rmSync,cpSync} from 'node:fs';
import {extname} from 'node:path';
import vm from 'node:vm';
const assets={};
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'};
function add(path){const type=types[extname(path)]||'text/plain';assets['/'+path]={body:readFileSync(path,'utf8'),type:type+'; charset=utf-8'}}
add('index.html');
for(const dir of ['css','js','assets','vendor'])for(const entry of readdirSync(dir,{withFileTypes:true}))if(entry.isFile())add(dir+'/'+entry.name);
const sandbox={window:{}};vm.runInNewContext(readFileSync('js/content.js','utf8'),sandbox);
const lessons=sandbox.window.COURSE.map(({id,answer})=>({id,answer}));
rmSync('dist',{recursive:true,force:true});mkdirSync('dist/server',{recursive:true});mkdirSync('dist/.openai',{recursive:true});
writeFileSync('dist/server/index.js','const ASSETS='+JSON.stringify(assets)+';\nconst LESSONS='+JSON.stringify(lessons)+';\n'+readFileSync('worker/index.js','utf8'));
writeFileSync('dist/.openai/hosting.json',readFileSync('.openai/hosting.json'));
console.log('Built Worker with '+Object.keys(assets).length+' assets');

// Vercel serves a separate, explicit public directory, never Worker source.
const accountOrigin='https://tush-physics-math-maxim.alivemoss12.chatgpt.site';
rmSync('public',{recursive:true,force:true});mkdirSync('public',{recursive:true});
for(const dir of ['css','js','assets','vendor'])cpSync(dir,'public/'+dir,{recursive:true});
const staticPage=readFileSync('index.html','utf8')
  .replace('<head>','<head>\n<script>window.PM_ACCOUNT_ORIGIN='+JSON.stringify(accountOrigin)+'</script>')
  .replace('class="account-link" href="#profile"','class="account-link" href="'+accountOrigin+'/#profile"');
writeFileSync('public/index.html',staticPage);
console.log('Built Vercel static output in public');
