/* Декоративная сцена pm: нативный WebGL, без React, Three.js и сборки */
'use strict';

window.PMScene = (() => {
  const vertex = `
    precision highp float;
    attribute vec3 aPosition;
    uniform float uTime;
    uniform float uAspect;
    uniform vec2 uPointer;
    uniform float uHover;
    uniform float uLayer;
    varying vec3 vPosition;
    varying vec3 vNormal;

    vec3 rotate(vec3 p) {
      float a = uTime * .065;
      return vec3(cos(a)*p.x + sin(a)*p.z, p.y, -sin(a)*p.x + cos(a)*p.z);
    }
    vec3 deform(vec3 n) {
      float t = uTime * .42;
      float wave = sin(n.x*3.7 + t) * sin(n.y*3.1 - t*.7) * .075;
      wave += sin(n.z*4.2 + n.x*2.0 - t*.85) * .045;
      vec3 direction = normalize(vec3(uPointer, .85));
      float attraction = exp(-dot(n-direction,n-direction)*4.8) * uHover * .2;
      return n * (1.04 + wave + attraction + uLayer*.002);
    }
    void main() {
      vec3 n = normalize(rotate(aPosition));
      vec3 tangent = normalize(cross(abs(n.y)>.98 ? vec3(1.,0.,0.) : vec3(0.,1.,0.),n));
      vec3 bitangent = normalize(cross(n,tangent));
      vec3 p = deform(n);
      vec3 pt = deform(normalize(n+tangent*.006));
      vec3 pb = deform(normalize(n+bitangent*.006));
      vNormal = normalize(cross(pt-p,pb-p));
      vPosition = p;
      gl_Position = vec4(p.x/(uAspect*1.7),p.y/1.7,-p.z*.22,1.);
    }
  `;
  const fragment = `
    precision mediump float;
    uniform float uWire;
    varying vec3 vPosition;
    varying vec3 vNormal;

    float studio(vec3 r) {
      float largeLight = exp(-pow((r.x + .34 + r.y*.32)*3.8,2.)) * smoothstep(-.65,.6,r.y);
      float strip = exp(-pow((r.x - .6 + r.y*.22)*16.,2.)) * .58;
      float bottom = exp(-pow((r.y + .63)*10.,2.)) * .4;
      return clamp(largeLight+strip+bottom,0.,1.);
    }
    void main() {
      vec3 n = normalize(vNormal);
      vec3 eye = normalize(vec3(0.,0.,4.5)-vPosition);
      if (uWire>.5) {
        gl_FragColor = vec4(vec3(.85),.055*max(n.z,0.));
        return;
      }
      float fresnel = pow(1.-max(dot(n,eye),0.),3.);
      float diffuse = max(dot(n,normalize(vec3(-.65,.8,1.6))),0.);
      vec3 reflected = reflect(-eye,n);
      vec3 refracted = refract(-eye,n,.74);
      float bands = pow(.5+.5*sin((refracted.x+refracted.y*.35)*25.),28.);
      float value = .025 + diffuse*.095 + studio(reflected)*.8;
      value += fresnel*.23 + bands*(1.-fresnel)*.035;
      gl_FragColor = vec4(vec3(clamp(value,0.,1.)),1.);
    }
  `;
  const pointVertex = `
    precision highp float;
    attribute vec3 aPosition;
    attribute float aSeed;
    uniform float uTime;
    uniform float uAspect;
    uniform float uRatio;
    uniform vec2 uPointer;
    uniform float uHover;
    varying float vAlpha;
    void main() {
      float a = uTime*.027;
      vec3 p = vec3(cos(a)*aPosition.x+sin(a)*aPosition.z,aPosition.y,-sin(a)*aPosition.x+cos(a)*aPosition.z);
      p.y += sin(uTime*.25+aSeed*18.)*.035;
      vec2 delta = p.xy-uPointer;
      float distanceToPointer = max(length(delta),.01);
      p.xy += delta/distanceToPointer * exp(-distanceToPointer*distanceToPointer*3.5) * uHover*.24;
      gl_Position = vec4(p.x/(uAspect*1.7),p.y/1.7,-p.z*.22,1.);
      gl_PointSize = uRatio*(1.+aSeed*1.2);
      vAlpha = .2 + aSeed*.26;
    }
  `;
  const pointFragment = `
    precision mediump float;
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord-vec2(.5));
      if (d>.5) discard;
      gl_FragColor = vec4(vec3(.2),vAlpha*(1.-smoothstep(.15,.5,d)));
    }
  `;

  /* Сетка сферы, её тонкий каркас и детерминированное облако частиц */
  function geometry() {
    const positions = [], triangles = [], lines = [];
    const latitudes = 64, longitudes = 96, stride = longitudes + 1;
    for (let y=0;y<=latitudes;y++) {
      const phi = y/latitudes*Math.PI;
      for (let x=0;x<=longitudes;x++) {
        const theta = x/longitudes*Math.PI*2;
        positions.push(Math.sin(phi)*Math.cos(theta),Math.cos(phi),Math.sin(phi)*Math.sin(theta));
        if (y<latitudes && x<longitudes) {
          const i = y*stride+x;
          triangles.push(i,i+1,i+stride,i+1,i+stride+1,i+stride);
          if (y%4===0) lines.push(i,i+1);
          if (x%4===0) lines.push(i,i+stride);
        }
      }
    }
    let seed = 17;
    const random = () => {
      seed = (seed*1664525+1013904223)>>>0;
      return seed/4294967296;
    };
    const particles = [], seeds = [];
    for (let i=0;i<1100;i++) {
      const theta = random()*Math.PI*2, height = random()*2-1;
      const radius = 1.25+random()*.6, ring = Math.sqrt(1-height*height);
      particles.push(Math.cos(theta)*ring*radius,height*radius,Math.sin(theta)*ring*radius);
      seeds.push(random());
    }
    return {
      positions:new Float32Array(positions), triangles:new Uint16Array(triangles),
      lines:new Uint16Array(lines), particles:new Float32Array(particles), seeds:new Float32Array(seeds)
    };
  }

  function createRenderer(canvas) {
    const gl = canvas.getContext('webgl',{
      alpha:true, antialias:true, depth:true, powerPreference:'low-power', premultipliedAlpha:false
    });
    if (!gl) {
      console.info('pm: WebGL недоступен, используется статичная форма');
      return null;
    }
    const resources = {programs:[],shaders:[],buffers:[]};
    function destroy() {
      resources.buffers.forEach(buffer=>gl.deleteBuffer(buffer));
      resources.programs.forEach(program=>gl.deleteProgram(program));
      resources.shaders.forEach(shader=>gl.deleteShader(shader));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    function program(vertexSource,fragmentSource) {
      function compile(type,source) {
        const shader = gl.createShader(type);
        resources.shaders.push(shader);
        gl.shaderSource(shader,source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error('Шейдер pm не скомпилирован');
        return shader;
      }
      const result = gl.createProgram();
      resources.programs.push(result);
      gl.attachShader(result,compile(gl.VERTEX_SHADER,vertexSource));
      gl.attachShader(result,compile(gl.FRAGMENT_SHADER,fragmentSource));
      gl.linkProgram(result);
      if (!gl.getProgramParameter(result,gl.LINK_STATUS)) throw new Error('Шейдеры pm не связаны');
      const uniforms = {};
      for (const name of ['uTime','uAspect','uPointer','uHover','uLayer','uWire','uRatio']) {
        uniforms[name] = gl.getUniformLocation(result,name);
      }
      return {program:result,uniforms,position:gl.getAttribLocation(result,'aPosition'),seed:gl.getAttribLocation(result,'aSeed')};
    }
    function buffer(data,target=gl.ARRAY_BUFFER) {
      const result = gl.createBuffer();
      resources.buffers.push(result);
      gl.bindBuffer(target,result);
      gl.bufferData(target,data,gl.STATIC_DRAW);
      return result;
    }
    try {
      const sphere = program(vertex,fragment), points = program(pointVertex,pointFragment), data = geometry();
      const positionBuffer = buffer(data.positions), particleBuffer = buffer(data.particles), seedBuffer = buffer(data.seeds);
      const triangleBuffer = buffer(data.triangles,gl.ELEMENT_ARRAY_BUFFER), lineBuffer = buffer(data.lines,gl.ELEMENT_ARRAY_BUFFER);
      let width = 1, height = 1, ratio = 1;
      function resize() {
        const rect = canvas.getBoundingClientRect();
        ratio = Math.min(devicePixelRatio||1,1.5);
        width = Math.max(1,Math.round(rect.width*ratio));
        height = Math.max(1,Math.round(rect.height*ratio));
        if (canvas.width!==width || canvas.height!==height) {
          canvas.width=width;
          canvas.height=height;
          gl.viewport(0,0,width,height);
        }
      }
      function use(info,time,pointer,hover) {
        gl.useProgram(info.program);
        gl.uniform1f(info.uniforms.uTime,time);
        gl.uniform1f(info.uniforms.uAspect,width/height);
        gl.uniform2f(info.uniforms.uPointer,pointer.x,pointer.y);
        gl.uniform1f(info.uniforms.uHover,hover);
      }
      function position(info,value) {
        gl.bindBuffer(gl.ARRAY_BUFFER,value);
        gl.enableVertexAttribArray(info.position);
        gl.vertexAttribPointer(info.position,3,gl.FLOAT,false,0,0);
      }
      return {
        resize,destroy,
        draw(time,pointer,hover) {
          if (gl.isContextLost()) return false;
          gl.clearColor(0,0,0,0);
          gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
          gl.enable(gl.DEPTH_TEST);
          gl.depthFunc(gl.LEQUAL);
          gl.depthMask(true);
          gl.disable(gl.BLEND);
          gl.enable(gl.CULL_FACE);
          use(sphere,time,pointer,hover);
          position(sphere,positionBuffer);
          gl.uniform1f(sphere.uniforms.uLayer,0);
          gl.uniform1f(sphere.uniforms.uWire,0);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,triangleBuffer);
          gl.drawElements(gl.TRIANGLES,data.triangles.length,gl.UNSIGNED_SHORT,0);

          gl.enable(gl.BLEND);
          gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
          gl.depthMask(false);
          gl.uniform1f(sphere.uniforms.uLayer,1);
          gl.uniform1f(sphere.uniforms.uWire,1);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,lineBuffer);
          gl.drawElements(gl.LINES,data.lines.length,gl.UNSIGNED_SHORT,0);

          use(points,time,pointer,hover);
          position(points,particleBuffer);
          gl.bindBuffer(gl.ARRAY_BUFFER,seedBuffer);
          gl.enableVertexAttribArray(points.seed);
          gl.vertexAttribPointer(points.seed,1,gl.FLOAT,false,0,0);
          gl.uniform1f(points.uniforms.uRatio,ratio);
          gl.disable(gl.CULL_FACE);
          gl.drawArrays(gl.POINTS,0,data.seeds.length);
          gl.disableVertexAttribArray(points.seed);
          gl.depthMask(true);
          return true;
        }
      };
    } catch (error) {
      destroy();
      console.info('pm: используется статичная форма',error.message);
      return null;
    }
  }

  /* Один владелец кадров и ресурсов на один открытый первый экран */
  function mount(hero,{startFluid=()=>{},stopFluid=()=>{}}={}) {
    const visual = hero.querySelector('.hero-visual');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const small = matchMedia('(max-width: 900px)');
    const print = matchMedia('print');
    const listeners = new AbortController();
    let canvas = visual.querySelector('#scene'), renderer = null;
    let frame = 0, last = 0, time = 0, running = false, destroyed = false, failed = false;
    let inView = true, over = false, hover = 0;
    const target = {x:0,y:0}, pointer = {x:0,y:0};

    function stop() {
      running=false;
      cancelAnimationFrame(frame);
      frame=0;
      last=0;
      stopFluid();
      visual.dataset.state='static';
    }
    function release() {
      if (!renderer) return;
      canvas.removeEventListener('webglcontextlost',contextLost);
      renderer.destroy();
      renderer=null;
      const next = canvas.cloneNode(false);
      canvas.replaceWith(next);
      canvas=next;
    }
    function contextLost(event) {
      event.preventDefault();
      failed=true;
      stop();
      release();
    }
    function tick(now) {
      if (!running || destroyed) return;
      frame=requestAnimationFrame(tick);
      if (last && now-last<1000/30) return;
      const dt=last?Math.min((now-last)/1000,.1):1/30;
      last=now;
      time+=dt;
      // Экспоненциальное сглаживание: около 0,8 с до целевой формы
      const ease=1-Math.exp(-dt*6);
      pointer.x+=(target.x-pointer.x)*ease;
      pointer.y+=(target.y-pointer.y)*ease;
      hover+=((over?1:0)-hover)*ease;
      if (!renderer.draw(time,pointer,hover)) {
        failed=true;
        stop();
        release();
        return;
      }
      visual.dataset.state='running';
    }
    function sync() {
      if (destroyed) return;
      const permitted=!motion.matches&&!small.matches&&!print.matches&&!failed;
      if (!permitted || !inView || document.hidden) {
        stop();
        if (!permitted) release();
        return;
      }
      if (!renderer) {
        renderer=createRenderer(canvas);
        if (!renderer) {
          failed=true;
          stop();
          return;
        }
        canvas.addEventListener('webglcontextlost',contextLost);
      }
      renderer.resize();
      if (running) return;
      running=true;
      startFluid();
      frame=requestAnimationFrame(tick);
    }
    visual.addEventListener('pointermove',event=>{
      if (event.pointerType==='touch') return;
      const rect=visual.getBoundingClientRect();
      target.x=((event.clientX-rect.left)/rect.width*2-1)*(rect.width/rect.height)*1.7;
      target.y=(1-(event.clientY-rect.top)/rect.height*2)*1.7;
      over=true;
    },{signal:listeners.signal,passive:true});
    visual.addEventListener('pointerleave',()=>{over=false;target.x=target.y=0},{signal:listeners.signal});
    document.addEventListener('visibilitychange',sync,{signal:listeners.signal});
    window.addEventListener('pagehide',stop,{signal:listeners.signal});
    window.addEventListener('pageshow',sync,{signal:listeners.signal});
    for (const media of [motion,small,print]) media.addEventListener('change',sync);
    const resize=new ResizeObserver(()=>{renderer?.resize();sync()});
    resize.observe(visual);
    const intersection=new IntersectionObserver(entries=>{
      inView=entries[0].isIntersecting;
      sync();
    },{threshold:0});
    intersection.observe(hero);
    sync();
    return {
      isRunning:()=>running,
      destroy() {
        if (destroyed) return;
        destroyed=true;
        stop();
        release();
        listeners.abort();
        resize.disconnect();
        intersection.disconnect();
        for (const media of [motion,small,print]) media.removeEventListener('change',sync);
      }
    };
  }
  return {mount};
})();
