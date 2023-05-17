import{a as kt}from"./header-ec3abe08.js";function ii(s,a){for(var u=0;u<a.length;u++){const h=a[u];if(typeof h!="string"&&!Array.isArray(h)){for(const c in h)if(c!=="default"&&!(c in s)){const d=Object.getOwnPropertyDescriptor(h,c);d&&Object.defineProperty(s,c,d.get?d:{enumerable:!0,get:()=>h[c]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}async function ri(s){const a=document.body;document.body.style.overflow="hidden";const{id:u,name:h,description:c,modified:d}=s,P=await si(u),x=await ci(P),L=await Promise.all(x).then(et=>ai(et)),_=ui(s);a.insertAdjacentHTML("afterbegin",_);const W=li(h,c,d);document.querySelector(".black-widow").insertAdjacentHTML("afterbegin",W),document.querySelector(".bacground-modal").addEventListener("click",Ut),document.querySelector(".close-modal-btn").addEventListener("click",Ut),document.querySelector(".black-widow-list").insertAdjacentHTML("afterbegin",L),document.querySelector(".modal-window").addEventListener("click",ni)}function ni(s){console.log(s.target.tagName),s.target.classList.value==="img-list-item-card"&&s.target.tagName==="use"&&Ut()}async function si(s){return await kt.getCharactersById({characterId:s})}function ai(s){return s.map(u=>{const{id:h,thumbnail:c,title:d}=u;return`
   <li class="black-widow-list-item" data-id=${h}>
   <a href="#" class="black-widow-handle">
      <div class="black-widow-card">
        <img  width ='263'height= '263'
          class="img-list-item-card"
          src="${c.path}.${c.extension}"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">${d}</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div></a>
    </li>
  `}).join("")}async function oi(s){var a=s.resourceURI.split("/");const u=Number(a[a.length-1]);return(await kt.getComicById({comicId:u}))[0]}async function ci(s){const{items:a}=s[0].comics;return a.filter((c,d)=>{if(d<3)return c}).map(async c=>await oi(c))}function li(s,a,u){return`
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">${s}</h4>
    <p class="black-widow-info-data">${u}</p>
  </div>
   <p class="black-widow-content">
   ${a}
  </p>
  `}function ui(s){return`
   <div class="bacground-modal">
  <section class="modal-window">
    <div class="container-modal">
      <svg class="close-modal-btn" width="20" height="20">
        <use href="./images/symbol-defs.svg#icon-close"></use>
      </svg>
<div class="modal1-content">
      <div class="img-info">
        <img
          class="img-modal"
          src="${s.thumbnail.path}.${s.thumbnail.extension}"
          alt="amg"
          width="295"
           height= "387";
        />

        <ul class="img-list">
          <li>
            <img
              class="img-list-item"
              src="./images/remove_img/modal1.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="./images/remove_img/modal2.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="./images/remove_img/modal3.jpg"
              alt="img"
              width="80"
            />
          </li>
        </ul>
      </div>

     <div class="black-widow">


 
  <h4 class="black-widow-list-text">List of comics</h4>

  <ul class="black-widow-list">
   
   
  </ul>
</div> 

</div>
    </div>
  </section>
</div>
    
    `}function Ut(s){if(s.target.classList.value==="bacground-modal"||s.target.classList.value==="close-modal-btn"){const a=document.querySelector(".bacground-modal");document.body.style.overflow="",Ft(0),a==null||a.remove()}}const Et=[],pe=document.querySelector(".random-list"),qt=document.querySelector(".random-img");pe.addEventListener("click",fi);const Tt=document.querySelector(".random-bacground");qt.style.visible=!1;qt.addEventListener("click",()=>{ri(Te.data),Ht()});let K=null,gt=null;const Te={};function Ht(){clearInterval(K),K=null}async function hi(s){const a=await kt.getAllCharacters(s);return Et.push(a.results),a}function Yt(s){ge(s),qt.src=`${s.thumbnail.path}.${s.thumbnail.extension}`,Tt.style.backgroundImage=`url(${s.thumbnail.path}.${s.thumbnail.extension})`,Tt.style.backgroundSize="cover",Tt.style.backgroundPosition="center",Tt.style.backgroundRepeat="no-repeat"}function fi(s){if(s.target.tagName!=="UL"&&s.target.tagName!=="DIV"){K&&(Ht(),gt||(gt=setTimeout(()=>{Ft(0),clearTimeout(gt),gt=null},3500)));let a=document.querySelectorAll(".random-item");const u=s.target.closest("li").id,h=Et.find(c=>c[0].id===Number(u));Yt(h[0]),a.forEach(c=>{let d=document.querySelector(".random-item.active");const P=c.querySelector(".random-value-text.active");d&&(d.classList.remove("active"),P==null||P.classList.remove("active"));let x=document.querySelector(".random-value-text.active");x&&(x.classList.remove("active"),x.style.color=""),s.target.closest("li").classList.add("active");const _=document.querySelector(".random-item.active").querySelector(".random-value-text");_.style.color="rgb(52, 56, 127)",_.classList.add("active")})}}function di(s){var P;let a=document.querySelectorAll(".random-item"),u=document.querySelector(".random-item.active");u&&u.classList.remove("active");let h=document.querySelector(".random-value-text.active");h&&(h.classList.remove("active"),h.style.color=""),(P=a[s])==null||P.classList.add("active"),vi(Number(a[s].dataset.id));const d=document.querySelector(".random-item.active").querySelector(".random-value-text");d.style.color="rgb(52, 56, 127)",d.classList.add("active")}function vi(s){const a=Et.filter(u=>u[0].id===s);Yt(a[0][0])}function Ft(s){let a=s;K>2&&Ht(),K=setInterval(()=>{di(a),a+=1,a===5&&(a=0)},3500)}function ge(s){Te.data={...s}}function mi(s){return`
    <li class='random-item' id=${s[0].id} data-id=${s[0].id} >

       <h3 class='random-value-name hero-name' data-name>${s[0].name}</h3>
       <p class='random-value-text' data-description>${s[0].description}</p>
    </li>
    `}function pi(s){return s.map(a=>mi(a.results)).join("")}function Ti(){const s=[];for(let a=0;a<5;a+=1)new Promise(u=>{const h=hi({limit:1,offset:Math.round(Math.random()*1561)});s.push(h)});Promise.all(s).then(a=>{gi(a)}).catch(a=>console.log("ERR",a))}function gi(s){ge(s[0].results[0]);const a=pi(s);pe.innerHTML=a,Yt(Et[0][0]),Ft(0)}Ti();var yt={exports:{}};(function(s){(function(a,u,h,c){var d=["","webkit","Moz","MS","ms","o"],P=u.createElement("div"),x="function",L=Math.round,_=Math.abs,W=Date.now;function tt(t,e,i){return setTimeout(It(t,i),e)}function k(t,e,i){return Array.isArray(t)?(C(t,i[e],i),!0):!1}function C(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==c)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function _t(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var n=new Error("get-stack-trace"),o=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",l=a.console&&(a.console.warn||a.console.log);return l&&l.call(a.console,r,o),t.apply(this,arguments)}}var A;typeof Object.assign!="function"?A=function(e){if(e===c||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(n!==c&&n!==null)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o])}return i}:A=Object.assign;var et=_t(function(e,i,r){for(var n=Object.keys(i),o=0;o<n.length;)(!r||r&&e[n[o]]===c)&&(e[n[o]]=i[n[o]]),o++;return e},"extend","Use `assign`."),Wt=_t(function(e,i){return et(e,i,!0)},"merge","Use `assign`.");function E(t,e,i){var r=e.prototype,n;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&A(n,i)}function It(t,e){return function(){return t.apply(e,arguments)}}function St(t,e){return typeof t==x?t.apply(e&&e[0]||c,e):t}function zt(t,e){return t===c?e:t}function it(t,e,i){C(nt(e),function(r){t.addEventListener(r,i,!1)})}function rt(t,e,i){C(nt(e),function(r){t.removeEventListener(r,i,!1)})}function Gt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function q(t,e){return t.indexOf(e)>-1}function nt(t){return t.trim().split(/\s+/g)}function X(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function st(t){return Array.prototype.slice.call(t,0)}function jt(t,e,i){for(var r=[],n=[],o=0;o<t.length;){var l=e?t[o][e]:t[o];X(n,l)<0&&r.push(t[o]),n[o]=l,o++}return i&&(e?r=r.sort(function(m,T){return m[e]>T[e]}):r=r.sort()),r}function at(t,e){for(var i,r,n=e[0].toUpperCase()+e.slice(1),o=0;o<d.length;){if(i=d[o],r=i?i+n:e,r in t)return r;o++}return c}var _e=1;function Ie(){return _e++}function Bt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var Se=/mobile|tablet|ip(ad|hone|od)|android/i,Zt="ontouchstart"in a,Ae=at(a,"PointerEvent")!==c,Ne=Zt&&Se.test(navigator.userAgent),z="touch",Pe="pen",At="mouse",Ce="kinect",we=25,p=1,H=2,f=4,g=8,ot=1,G=2,j=4,B=8,Z=16,w=G|j,Y=B|Z,$t=w|Y,Jt=["x","y"],ct=["clientX","clientY"];function I(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){St(t.options.enable,[t])&&i.handler(r)},this.init()}I.prototype={handler:function(){},init:function(){this.evEl&&it(this.element,this.evEl,this.domHandler),this.evTarget&&it(this.target,this.evTarget,this.domHandler),this.evWin&&it(Bt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&rt(this.element,this.evEl,this.domHandler),this.evTarget&&rt(this.target,this.evTarget,this.domHandler),this.evWin&&rt(Bt(this.element),this.evWin,this.domHandler)}};function Oe(t){var e,i=t.options.inputClass;return i?e=i:Ae?e=Pt:Ne?e=ht:Zt?e=Ct:e=ut,new e(t,be)}function be(t,e,i){var r=i.pointers.length,n=i.changedPointers.length,o=e&p&&r-n===0,l=e&(f|g)&&r-n===0;i.isFirst=!!o,i.isFinal=!!l,o&&(t.session={}),i.eventType=e,Le(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Le(t,e){var i=t.session,r=e.pointers,n=r.length;i.firstInput||(i.firstInput=Qt(e)),n>1&&!i.firstMultiple?i.firstMultiple=Qt(e):n===1&&(i.firstMultiple=!1);var o=i.firstInput,l=i.firstMultiple,v=l?l.center:o.center,m=e.center=Kt(r);e.timeStamp=W(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=Nt(v,m),e.distance=lt(v,m),Me(i,e),e.offsetDirection=ee(e.deltaX,e.deltaY);var T=te(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=T.x,e.overallVelocityY=T.y,e.overallVelocity=_(T.x)>_(T.y)?T.x:T.y,e.scale=l?Ue(l.pointers,r):1,e.rotation=l?Re(l.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,De(i,e);var b=t.element;Gt(e.srcEvent.target,b)&&(b=e.srcEvent.target),e.target=b}function Me(t,e){var i=e.center,r=t.offsetDelta||{},n=t.prevDelta||{},o=t.prevInput||{};(e.eventType===p||o.eventType===f)&&(n=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-r.x),e.deltaY=n.y+(i.y-r.y)}function De(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,n,o,l,v;if(e.eventType!=g&&(r>we||i.velocity===c)){var m=e.deltaX-i.deltaX,T=e.deltaY-i.deltaY,b=te(r,m,T);o=b.x,l=b.y,n=_(b.x)>_(b.y)?b.x:b.y,v=ee(m,T),t.lastInterval=e}else n=i.velocity,o=i.velocityX,l=i.velocityY,v=i.direction;e.velocity=n,e.velocityX=o,e.velocityY=l,e.direction=v}function Qt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:L(t.pointers[i].clientX),clientY:L(t.pointers[i].clientY)},i++;return{timeStamp:W(),pointers:e,center:Kt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Kt(t){var e=t.length;if(e===1)return{x:L(t[0].clientX),y:L(t[0].clientY)};for(var i=0,r=0,n=0;n<e;)i+=t[n].clientX,r+=t[n].clientY,n++;return{x:L(i/e),y:L(r/e)}}function te(t,e,i){return{x:e/t||0,y:i/t||0}}function ee(t,e){return t===e?ot:_(t)>=_(e)?t<0?G:j:e<0?B:Z}function lt(t,e,i){i||(i=Jt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(r*r+n*n)}function Nt(t,e,i){i||(i=Jt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.atan2(n,r)*180/Math.PI}function Re(t,e){return Nt(e[1],e[0],ct)+Nt(t[1],t[0],ct)}function Ue(t,e){return lt(e[0],e[1],ct)/lt(t[0],t[1],ct)}var xe={mousedown:p,mousemove:H,mouseup:f},ke="mousedown",qe="mousemove mouseup";function ut(){this.evEl=ke,this.evWin=qe,this.pressed=!1,I.apply(this,arguments)}E(ut,I,{handler:function(e){var i=xe[e.type];i&p&&e.button===0&&(this.pressed=!0),i&H&&e.which!==1&&(i=f),this.pressed&&(i&f&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:At,srcEvent:e}))}});var He={pointerdown:p,pointermove:H,pointerup:f,pointercancel:g,pointerout:g},Ye={2:z,3:Pe,4:At,5:Ce},ie="pointerdown",re="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(ie="MSPointerDown",re="MSPointerMove MSPointerUp MSPointerCancel");function Pt(){this.evEl=ie,this.evWin=re,I.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}E(Pt,I,{handler:function(e){var i=this.store,r=!1,n=e.type.toLowerCase().replace("ms",""),o=He[n],l=Ye[e.pointerType]||e.pointerType,v=l==z,m=X(i,e.pointerId,"pointerId");o&p&&(e.button===0||v)?m<0&&(i.push(e),m=i.length-1):o&(f|g)&&(r=!0),!(m<0)&&(i[m]=e,this.callback(this.manager,o,{pointers:i,changedPointers:[e],pointerType:l,srcEvent:e}),r&&i.splice(m,1))}});var Fe={touchstart:p,touchmove:H,touchend:f,touchcancel:g},Xe="touchstart",Ve="touchstart touchmove touchend touchcancel";function ne(){this.evTarget=Xe,this.evWin=Ve,this.started=!1,I.apply(this,arguments)}E(ne,I,{handler:function(e){var i=Fe[e.type];if(i===p&&(this.started=!0),!!this.started){var r=We.call(this,e,i);i&(f|g)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:z,srcEvent:e})}}});function We(t,e){var i=st(t.touches),r=st(t.changedTouches);return e&(f|g)&&(i=jt(i.concat(r),"identifier",!0)),[i,r]}var ze={touchstart:p,touchmove:H,touchend:f,touchcancel:g},Ge="touchstart touchmove touchend touchcancel";function ht(){this.evTarget=Ge,this.targetIds={},I.apply(this,arguments)}E(ht,I,{handler:function(e){var i=ze[e.type],r=je.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:z,srcEvent:e})}});function je(t,e){var i=st(t.touches),r=this.targetIds;if(e&(p|H)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var n,o,l=st(t.changedTouches),v=[],m=this.target;if(o=i.filter(function(T){return Gt(T.target,m)}),e===p)for(n=0;n<o.length;)r[o[n].identifier]=!0,n++;for(n=0;n<l.length;)r[l[n].identifier]&&v.push(l[n]),e&(f|g)&&delete r[l[n].identifier],n++;if(v.length)return[jt(o.concat(v),"identifier",!0),v]}var Be=2500,se=25;function Ct(){I.apply(this,arguments);var t=It(this.handler,this);this.touch=new ht(this.manager,t),this.mouse=new ut(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}E(Ct,I,{handler:function(e,i,r){var n=r.pointerType==z,o=r.pointerType==At;if(!(o&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(n)Ze.call(this,i,r);else if(o&&$e.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Ze(t,e){t&p?(this.primaryTouch=e.changedPointers[0].identifier,ae.call(this,e)):t&(f|g)&&ae.call(this,e)}function ae(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,n=function(){var o=r.indexOf(i);o>-1&&r.splice(o,1)};setTimeout(n,Be)}}function $e(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],o=Math.abs(e-n.x),l=Math.abs(i-n.y);if(o<=se&&l<=se)return!0}return!1}var oe=at(P.style,"touchAction"),ce=oe!==c,le="compute",ue="auto",wt="manipulation",F="none",$="pan-x",J="pan-y",ft=Qe();function Ot(t,e){this.manager=t,this.set(e)}Ot.prototype={set:function(t){t==le&&(t=this.compute()),ce&&this.manager.element.style&&ft[t]&&(this.manager.element.style[oe]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return C(this.manager.recognizers,function(e){St(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Je(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,n=q(r,F)&&!ft[F],o=q(r,J)&&!ft[J],l=q(r,$)&&!ft[$];if(n){var v=t.pointers.length===1,m=t.distance<2,T=t.deltaTime<250;if(v&&m&&T)return}if(!(l&&o)&&(n||o&&i&w||l&&i&Y))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Je(t){if(q(t,F))return F;var e=q(t,$),i=q(t,J);return e&&i?F:e||i?e?$:J:q(t,wt)?wt:ue}function Qe(){if(!ce)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?a.CSS.supports("touch-action",i):!0}),t}var dt=1,S=2,V=4,U=8,M=U,Q=16,O=32;function D(t){this.options=A({},this.defaults,t||{}),this.id=Ie(),this.manager=null,this.options.enable=zt(this.options.enable,!0),this.state=dt,this.simultaneous={},this.requireFail=[]}D.prototype={defaults:{},set:function(t){return A(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(k(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=vt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return k(t,"dropRecognizeWith",this)?this:(t=vt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(k(t,"requireFailure",this))return this;var e=this.requireFail;return t=vt(t,this),X(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(k(t,"dropRequireFailure",this))return this;t=vt(t,this);var e=X(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(n){e.manager.emit(n,t)}i<U&&r(e.options.event+he(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=U&&r(e.options.event+he(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=O},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(O|dt)))return!1;t++}return!0},recognize:function(t){var e=A({},t);if(!St(this.options.enable,[this,e])){this.reset(),this.state=O;return}this.state&(M|Q|O)&&(this.state=dt),this.state=this.process(e),this.state&(S|V|U|Q)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function he(t){return t&Q?"cancel":t&U?"end":t&V?"move":t&S?"start":""}function fe(t){return t==Z?"down":t==B?"up":t==G?"left":t==j?"right":""}function vt(t,e){var i=e.manager;return i?i.get(t):t}function N(){D.apply(this,arguments)}E(N,D,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(S|V),n=this.attrTest(t);return r&&(i&g||!n)?e|Q:r||n?i&f?e|U:e&S?e|V:S:O}});function mt(){N.apply(this,arguments),this.pX=null,this.pY=null}E(mt,N,{defaults:{event:"pan",threshold:10,pointers:1,direction:$t},getTouchAction:function(){var t=this.options.direction,e=[];return t&w&&e.push(J),t&Y&&e.push($),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,n=t.direction,o=t.deltaX,l=t.deltaY;return n&e.direction||(e.direction&w?(n=o===0?ot:o<0?G:j,i=o!=this.pX,r=Math.abs(t.deltaX)):(n=l===0?ot:l<0?B:Z,i=l!=this.pY,r=Math.abs(t.deltaY))),t.direction=n,i&&r>e.threshold&&n&e.direction},attrTest:function(t){return N.prototype.attrTest.call(this,t)&&(this.state&S||!(this.state&S)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=fe(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function bt(){N.apply(this,arguments)}E(bt,N,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[F]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&S)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Lt(){D.apply(this,arguments),this._timer=null,this._input=null}E(Lt,D,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ue]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(f|g)&&!n)this.reset();else if(t.eventType&p)this.reset(),this._timer=tt(function(){this.state=M,this.tryEmit()},e.time,this);else if(t.eventType&f)return M;return O},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===M&&(t&&t.eventType&f?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=W(),this.manager.emit(this.options.event,this._input)))}});function Mt(){N.apply(this,arguments)}E(Mt,N,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[F]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&S)}});function Dt(){N.apply(this,arguments)}E(Dt,N,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:w|Y,pointers:1},getTouchAction:function(){return mt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(w|Y)?i=t.overallVelocity:e&w?i=t.overallVelocityX:e&Y&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&_(i)>this.options.velocity&&t.eventType&f},emit:function(t){var e=fe(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function pt(){D.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}E(pt,D,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[wt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&p&&this.count===0)return this.failTimeout();if(r&&n&&i){if(t.eventType!=f)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,l=!this.pCenter||lt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!l||!o?this.count=1:this.count+=1,this._input=t;var v=this.count%e.taps;if(v===0)return this.hasRequireFailures()?(this._timer=tt(function(){this.state=M,this.tryEmit()},e.interval,this),S):M}return O},failTimeout:function(){return this._timer=tt(function(){this.state=O},this.options.interval,this),O},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==M&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function R(t,e){return e=e||{},e.recognizers=zt(e.recognizers,R.defaults.preset),new Rt(t,e)}R.VERSION="2.0.7",R.defaults={domEvents:!1,touchAction:le,enable:!0,inputTarget:null,inputClass:null,preset:[[Mt,{enable:!1}],[bt,{enable:!1},["rotate"]],[Dt,{direction:w}],[mt,{direction:w},["swipe"]],[pt],[pt,{event:"doubletap",taps:2},["tap"]],[Lt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ke=1,de=2;function Rt(t,e){this.options=A({},R.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Oe(this),this.touchAction=new Ot(this,this.options.touchAction),ve(this,!0),C(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}Rt.prototype={set:function(t){return A(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?de:Ke},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&M)&&(n=e.curRecognizer=null);for(var o=0;o<r.length;)i=r[o],e.stopped!==de&&(!n||i==n||i.canRecognizeWith(n))?i.recognize(t):i.reset(),!n&&i.state&(S|V|U)&&(n=e.curRecognizer=i),o++}},get:function(t){if(t instanceof D)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(k(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(k(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=X(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==c&&e!==c){var i=this.handlers;return C(nt(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==c){var i=this.handlers;return C(nt(t),function(r){e?i[r]&&i[r].splice(X(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&ti(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&ve(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ve(t,e){var i=t.element;if(i.style){var r;C(t.options.cssProps,function(n,o){r=at(i.style,o),e?(t.oldCssProps[r]=i.style[r],i.style[r]=n):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function ti(t,e){var i=u.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}A(R,{INPUT_START:p,INPUT_MOVE:H,INPUT_END:f,INPUT_CANCEL:g,STATE_POSSIBLE:dt,STATE_BEGAN:S,STATE_CHANGED:V,STATE_ENDED:U,STATE_RECOGNIZED:M,STATE_CANCELLED:Q,STATE_FAILED:O,DIRECTION_NONE:ot,DIRECTION_LEFT:G,DIRECTION_RIGHT:j,DIRECTION_UP:B,DIRECTION_DOWN:Z,DIRECTION_HORIZONTAL:w,DIRECTION_VERTICAL:Y,DIRECTION_ALL:$t,Manager:Rt,Input:I,TouchAction:Ot,TouchInput:ht,MouseInput:ut,PointerEventInput:Pt,TouchMouseInput:Ct,SingleTouchInput:ne,Recognizer:D,AttrRecognizer:N,Tap:pt,Pan:mt,Swipe:Dt,Pinch:bt,Rotate:Mt,Press:Lt,on:it,off:rt,each:C,merge:Wt,extend:et,assign:A,inherit:E,bindFn:It,prefixed:at});var ei=typeof a<"u"?a:typeof self<"u"?self:{};ei.Hammer=R,typeof c=="function"&&c.amd?c(function(){return R}):s.exports?s.exports=R:a[h]=R})(window,document,"Hammer")})(yt);const Ei=yt.exports,yi=ii({__proto__:null,default:Ei},[yt.exports]),_i=document.querySelectorAll(".hero-slide"),Ii=document.querySelectorAll(".hero-pagination-item"),Si=document.querySelector(".hero-section"),Ee=Array.from(_i),ye=Array.from(Ii);let y=0;function Xt(s){Ee.forEach((a,u)=>{if(u===s){const h=a.dataset.mod;a.classList.remove("visually-hidden"),Si.dataset.mod=h}else a.classList.add("visually-hidden")})}function Vt(s){ye.forEach((a,u)=>{u===s?a.classList.add("active"):a.classList.remove("active")})}function Ai(){xt(),Xt(y),Vt(y)}setInterval(Ai,5e3);ye.forEach(s=>{s.addEventListener("click",()=>{y=+s.dataset.index,Xt(y),Vt(y)})});Ee.forEach(s=>{const a=new yi(s);a.get("swipe").set({direction:yt.exports.DIRECTION_ALL}),a.on("swipeleft swiperight swipeup swipedown",u=>{const h=window.innerWidth;h>767&&h<1399?u.type==="swipeleft"?xt():u.type==="swiperight"&&me():u.type==="swipeup"?xt():u.type==="swipedown"&&me(),Xt(y),Vt(y)})});function xt(){y===2?y=0:y++}function me(){y===0?y=2:y--}
