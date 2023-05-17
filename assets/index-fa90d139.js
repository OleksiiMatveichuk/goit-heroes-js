import{a as yt}from"./header-08b97c14.js";function ri(s,a){for(var l=0;l<a.length;l++){const h=a[l];if(typeof h!="string"&&!Array.isArray(h)){for(const c in h)if(c!=="default"&&!(c in s)){const d=Object.getOwnPropertyDescriptor(h,c);d&&Object.defineProperty(s,c,d.get?d:{enumerable:!0,get:()=>h[c]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}async function si(s){document.body.style.overflow="hidden",console.log(s);const a=37421,l=await yt.getComicById({comicId:a});console.log("API :>> ",l);const h=document.body,c=ni(l);h.insertAdjacentHTML("afterbegin",c);const d=document.querySelector(".bacground-mod-two"),p=document.querySelector(".mod-two-buttom");d.addEventListener("click",ve),p.addEventListener("click",ve)}function ni(s){return`
  <div class="bacground-mod-two">
    <div class="modal-two">
      <button class="mod-two-buttom" type="button" data-modal-close>
        <svg class='mod-two-swg-close' width="14" height="14">
          <use class="mod-two-close" href="./images/symbol-defs.svg#icon-close"></use>
        </svg>
      </button>
      <div class="mod-two-first-gallery">
        <img class="mod-two-first-img" src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}" alt="" />
        <ul class="mod-two-gallery">
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${s[0].images[1].path}.${s[0].images[1].extension}" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${s[0].images[2].path}.${s[0].images[2].extension}" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${s[0].images[3].path}.${s[0].images[3].extension}" alt="" />
          </li>
          <li class="mod-two-gallery-item">
            <img class="mod-two-gallery-img" src="${s[0].images[4].path}.${s[0].images[4].extension}" alt="" />
          </li>
        </ul>
      </div>
      <div class="modal-two-setion-two">
        <div class="mod-two-date-blok">
          <h2 class="mod-two-primary-header">${s[0].title}</h2>
          <div class="mod-two-date">
            <h3 class="mod-two-avtor">Chip Zdarsky</h3>

            <h3>December 07, 2022</h3>
          </div>
        </div>
        <p class="mod-two-text">${s[0].description}</p>
        <ul class="modal-two-info">
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Format</h3>
            <p>${s[0].format}</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Year released</h3>
            <p>${s[0].dates[0].date.slice(0,4)}</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Pages</h3>
            <p>${s[0].pageCount}</p>
          </li>
          <li class="mod-two-info-item">
            <h3 class="modal-two-info-header">Price</h3>
            <p>$ ${s[0].prices[0].price}</p>
          </li>
        </ul>
        <h2 class="mod-two-creator-header">Creator</h2>
        <div class="mod-two-creator">
          <img class="mod-two-img-creator" src="../images/remove_img/malenkoe.png" alt="" />
          <div>
            <h3 class="mod-two-creator-job-title">${s[0].creators.items[0].role}</h3>
            <p>${s[0].creators.items[0].name}</p>
          </div>
        </div>
        <h2 class="mod-two-charaters-header">Characters</h2>
        <ul class="mod-two-charaters-gallery">
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${s[0].characters.items[0].name}</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${s[0].characters.items[1].name}</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${s[0].characters.items[2].name}</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="../images/remove_img/malenkoe.png"
              alt=""
            />
            <p>${s[0].characters.items[3].name}</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
    `}function ve(s){if(console.log(s.target),s.target.classList.value==="bacground-mod-two"||s.target.classList.value==="mod-two-buttom"||s.target.tagName==="svg"){const a=document.querySelector(".bacground-mod-two");document.body.style.overflow="",a==null||a.remove()}}async function ai(s){const a=document.body;document.body.style.overflow="hidden",console.log(s);const{id:l,name:h,description:c,modified:d}=s,p=await ci(l),M=await di(p),_=await Promise.all(M).then(et=>ui(et)),I=fi(s);a.insertAdjacentHTML("afterbegin",I);const W=mi(h,c,d);document.querySelector(".black-widow").insertAdjacentHTML("afterbegin",W),document.querySelector(".bacground-modal").addEventListener("click",Rt),document.querySelector(".close-modal-btn").addEventListener("click",Rt),document.querySelector(".black-widow-list").insertAdjacentHTML("afterbegin",_),document.querySelector(".modal-window").addEventListener("click",oi)}function oi(s){s.target.classList.value==="img-list-item-card"&&(s.target.tagName==="use"&&Rt(),si(Number(s.target.closest("li").dataset.id)))}async function ci(s){return await yt.getCharactersById({characterId:s})}function li(s){let a=new Date(s),l=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),h=new Intl.DateTimeFormat("en",{month:"short"}).format(a),c=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return`${h} ${c}, ${l}`}function ui(s){return s.map(l=>{var _;const{id:h,thumbnail:c,title:d,creators:p}=l,M=(_=p.items[0])!=null&&_.name?p.items[0].name:"Wiktor Djoba";return`
   <li class="black-widow-list-item" data-id=${h}>
   <a href="#" class="black-widow-handle">
      <div class="black-widow-card">
        <img  width ='263'height= '263'
          class="img-list-item-card"
          src="${c.path}.${c.extension}"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">${d}</h4>
          <p class="black-widow-card-description">${M}</p>
        </div>
      </div></a>
    </li>
  `}).join("")}async function hi(s){var a=s.resourceURI.split("/");const l=Number(a[a.length-1]);return(await yt.getComicById({comicId:l}))[0]}async function di(s){const{items:a}=s[0].comics;return a.filter((c,d)=>{if(d<3)return c}).map(async c=>await hi(c))}function mi(s,a,l){const h=li(l);return`
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">${s}</h4>
    <p class="black-widow-info-data">${h}</p>
  </div>
   <p class="black-widow-content">
   ${a}
  </p>
  `}function fi(s){return`
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
    
    `}function Rt(s){if(s.target.classList.value==="bacground-modal"||s.target.classList.value==="close-modal-btn"){const a=document.querySelector(".bacground-modal");document.body.style.overflow="",Yt(0),a==null||a.remove()}}const Et=[],ge=document.querySelector(".random-list"),qt=document.querySelector(".random-img");ge.addEventListener("click",pi);const gt=document.querySelector(".random-bacground");qt.style.visible=!1;qt.addEventListener("click",()=>{ai(Te.data),Ht()});let K=null,Tt=null;const Te={};function Ht(){clearInterval(K),K=null}async function vi(s){const a=await yt.getAllCharacters(s);return Et.push(a.results),a}function Ft(s){ye(s),qt.src=`${s.thumbnail.path}.${s.thumbnail.extension}`,gt.style.backgroundImage=`url(${s.thumbnail.path}.${s.thumbnail.extension})`,gt.style.backgroundSize="cover",gt.style.backgroundPosition="center",gt.style.backgroundRepeat="no-repeat"}function pi(s){if(s.target.tagName!=="UL"&&s.target.tagName!=="DIV"){K&&(Ht(),Tt||(Tt=setTimeout(()=>{Yt(0),clearTimeout(Tt),Tt=null},3500)));let a=document.querySelectorAll(".random-item");const l=s.target.closest("li").id,h=Et.find(c=>c[0].id===Number(l));Ft(h[0]),a.forEach(c=>{let d=document.querySelector(".random-item.active");const p=c.querySelector(".random-value-text.active");d&&(d.classList.remove("active"),p==null||p.classList.remove("active"));let M=document.querySelector(".random-value-text.active");M&&(M.classList.remove("active"),M.style.color=""),s.target.closest("li").classList.add("active");const I=document.querySelector(".random-item.active").querySelector(".random-value-text");I.style.color="rgb(52, 56, 127)",I.classList.add("active")})}}function gi(s){var p;let a=document.querySelectorAll(".random-item"),l=document.querySelector(".random-item.active");l&&l.classList.remove("active");let h=document.querySelector(".random-value-text.active");h&&(h.classList.remove("active"),h.style.color=""),(p=a[s])==null||p.classList.add("active"),Ti(Number(a[s].dataset.id));const d=document.querySelector(".random-item.active").querySelector(".random-value-text");d.style.color="rgb(52, 56, 127)",d.classList.add("active")}function Ti(s){const a=Et.filter(l=>l[0].id===s);Ft(a[0][0])}function Yt(s){let a=s;K>2&&Ht(),K=setInterval(()=>{gi(a),a+=1,a===5&&(a=0)},3500)}function ye(s){Te.data={...s}}function yi(s){return`
    <li class='random-item' id=${s[0].id} data-id=${s[0].id} >

       <h3 class='random-value-name hero-name' data-name>${s[0].name}</h3>
       <p class='random-value-text' data-description>${s[0].description}</p>
    </li>
    `}function Ei(s){return s.map(a=>yi(a.results)).join("")}function wi(){const s=[];for(let a=0;a<5;a+=1)new Promise(l=>{const h=vi({limit:1,offset:Math.round(Math.random()*1561)});s.push(h)});Promise.all(s).then(a=>{_i(a)}).catch(a=>console.log("ERR",a))}function _i(s){ye(s[0].results[0]);const a=Ei(s);ge.innerHTML=a,Ft(Et[0][0]),Yt(0)}wi();var wt={exports:{}};(function(s){(function(a,l,h,c){var d=["","webkit","Moz","MS","ms","o"],p=l.createElement("div"),M="function",_=Math.round,I=Math.abs,W=Date.now;function tt(t,e,i){return setTimeout(It(t,i),e)}function U(t,e,i){return Array.isArray(t)?(N(t,i[e],i),!0):!1}function N(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==c)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function _t(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var n=new Error("get-stack-trace"),o=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",u=a.console&&(a.console.warn||a.console.log);return u&&u.call(a.console,r,o),t.apply(this,arguments)}}var P;typeof Object.assign!="function"?P=function(e){if(e===c||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(n!==c&&n!==null)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o])}return i}:P=Object.assign;var et=_t(function(e,i,r){for(var n=Object.keys(i),o=0;o<n.length;)(!r||r&&e[n[o]]===c)&&(e[n[o]]=i[n[o]]),o++;return e},"extend","Use `assign`."),Wt=_t(function(e,i){return et(e,i,!0)},"merge","Use `assign`.");function E(t,e,i){var r=e.prototype,n;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&P(n,i)}function It(t,e){return function(){return t.apply(e,arguments)}}function St(t,e){return typeof t==M?t.apply(e&&e[0]||c,e):t}function Vt(t,e){return t===c?e:t}function it(t,e,i){N(st(e),function(r){t.addEventListener(r,i,!1)})}function rt(t,e,i){N(st(e),function(r){t.removeEventListener(r,i,!1)})}function zt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function q(t,e){return t.indexOf(e)>-1}function st(t){return t.trim().split(/\s+/g)}function X(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function nt(t){return Array.prototype.slice.call(t,0)}function Gt(t,e,i){for(var r=[],n=[],o=0;o<t.length;){var u=e?t[o][e]:t[o];X(n,u)<0&&r.push(t[o]),n[o]=u,o++}return i&&(e?r=r.sort(function(v,T){return v[e]>T[e]}):r=r.sort()),r}function at(t,e){for(var i,r,n=e[0].toUpperCase()+e.slice(1),o=0;o<d.length;){if(i=d[o],r=i?i+n:e,r in t)return r;o++}return c}var _e=1;function Ie(){return _e++}function jt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var Se=/mobile|tablet|ip(ad|hone|od)|android/i,Bt="ontouchstart"in a,Ae=at(a,"PointerEvent")!==c,Pe=Bt&&Se.test(navigator.userAgent),V="touch",be="pen",At="mouse",Ne="kinect",Ce=25,g=1,H=2,m=4,y=8,ot=1,z=2,G=4,j=8,B=16,C=z|G,F=j|B,Zt=C|F,Jt=["x","y"],ct=["clientX","clientY"];function S(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){St(t.options.enable,[t])&&i.handler(r)},this.init()}S.prototype={handler:function(){},init:function(){this.evEl&&it(this.element,this.evEl,this.domHandler),this.evTarget&&it(this.target,this.evTarget,this.domHandler),this.evWin&&it(jt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&rt(this.element,this.evEl,this.domHandler),this.evTarget&&rt(this.target,this.evTarget,this.domHandler),this.evWin&&rt(jt(this.element),this.evWin,this.domHandler)}};function Oe(t){var e,i=t.options.inputClass;return i?e=i:Ae?e=bt:Pe?e=ht:Bt?e=Nt:e=ut,new e(t,Le)}function Le(t,e,i){var r=i.pointers.length,n=i.changedPointers.length,o=e&g&&r-n===0,u=e&(m|y)&&r-n===0;i.isFirst=!!o,i.isFinal=!!u,o&&(t.session={}),i.eventType=e,Me(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Me(t,e){var i=t.session,r=e.pointers,n=r.length;i.firstInput||(i.firstInput=Qt(e)),n>1&&!i.firstMultiple?i.firstMultiple=Qt(e):n===1&&(i.firstMultiple=!1);var o=i.firstInput,u=i.firstMultiple,f=u?u.center:o.center,v=e.center=Kt(r);e.timeStamp=W(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=Pt(f,v),e.distance=lt(f,v),De(i,e),e.offsetDirection=ee(e.deltaX,e.deltaY);var T=te(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=T.x,e.overallVelocityY=T.y,e.overallVelocity=I(T.x)>I(T.y)?T.x:T.y,e.scale=u?Re(u.pointers,r):1,e.rotation=u?xe(u.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,ke(i,e);var L=t.element;zt(e.srcEvent.target,L)&&(L=e.srcEvent.target),e.target=L}function De(t,e){var i=e.center,r=t.offsetDelta||{},n=t.prevDelta||{},o=t.prevInput||{};(e.eventType===g||o.eventType===m)&&(n=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-r.x),e.deltaY=n.y+(i.y-r.y)}function ke(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,n,o,u,f;if(e.eventType!=y&&(r>Ce||i.velocity===c)){var v=e.deltaX-i.deltaX,T=e.deltaY-i.deltaY,L=te(r,v,T);o=L.x,u=L.y,n=I(L.x)>I(L.y)?L.x:L.y,f=ee(v,T),t.lastInterval=e}else n=i.velocity,o=i.velocityX,u=i.velocityY,f=i.direction;e.velocity=n,e.velocityX=o,e.velocityY=u,e.direction=f}function Qt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:_(t.pointers[i].clientX),clientY:_(t.pointers[i].clientY)},i++;return{timeStamp:W(),pointers:e,center:Kt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Kt(t){var e=t.length;if(e===1)return{x:_(t[0].clientX),y:_(t[0].clientY)};for(var i=0,r=0,n=0;n<e;)i+=t[n].clientX,r+=t[n].clientY,n++;return{x:_(i/e),y:_(r/e)}}function te(t,e,i){return{x:e/t||0,y:i/t||0}}function ee(t,e){return t===e?ot:I(t)>=I(e)?t<0?z:G:e<0?j:B}function lt(t,e,i){i||(i=Jt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(r*r+n*n)}function Pt(t,e,i){i||(i=Jt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.atan2(n,r)*180/Math.PI}function xe(t,e){return Pt(e[1],e[0],ct)+Pt(t[1],t[0],ct)}function Re(t,e){return lt(e[0],e[1],ct)/lt(t[0],t[1],ct)}var Ue={mousedown:g,mousemove:H,mouseup:m},qe="mousedown",He="mousemove mouseup";function ut(){this.evEl=qe,this.evWin=He,this.pressed=!1,S.apply(this,arguments)}E(ut,S,{handler:function(e){var i=Ue[e.type];i&g&&e.button===0&&(this.pressed=!0),i&H&&e.which!==1&&(i=m),this.pressed&&(i&m&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:At,srcEvent:e}))}});var Fe={pointerdown:g,pointermove:H,pointerup:m,pointercancel:y,pointerout:y},Ye={2:V,3:be,4:At,5:Ne},ie="pointerdown",re="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(ie="MSPointerDown",re="MSPointerMove MSPointerUp MSPointerCancel");function bt(){this.evEl=ie,this.evWin=re,S.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}E(bt,S,{handler:function(e){var i=this.store,r=!1,n=e.type.toLowerCase().replace("ms",""),o=Fe[n],u=Ye[e.pointerType]||e.pointerType,f=u==V,v=X(i,e.pointerId,"pointerId");o&g&&(e.button===0||f)?v<0&&(i.push(e),v=i.length-1):o&(m|y)&&(r=!0),!(v<0)&&(i[v]=e,this.callback(this.manager,o,{pointers:i,changedPointers:[e],pointerType:u,srcEvent:e}),r&&i.splice(v,1))}});var Xe={touchstart:g,touchmove:H,touchend:m,touchcancel:y},$e="touchstart",We="touchstart touchmove touchend touchcancel";function se(){this.evTarget=$e,this.evWin=We,this.started=!1,S.apply(this,arguments)}E(se,S,{handler:function(e){var i=Xe[e.type];if(i===g&&(this.started=!0),!!this.started){var r=Ve.call(this,e,i);i&(m|y)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:V,srcEvent:e})}}});function Ve(t,e){var i=nt(t.touches),r=nt(t.changedTouches);return e&(m|y)&&(i=Gt(i.concat(r),"identifier",!0)),[i,r]}var ze={touchstart:g,touchmove:H,touchend:m,touchcancel:y},Ge="touchstart touchmove touchend touchcancel";function ht(){this.evTarget=Ge,this.targetIds={},S.apply(this,arguments)}E(ht,S,{handler:function(e){var i=ze[e.type],r=je.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:V,srcEvent:e})}});function je(t,e){var i=nt(t.touches),r=this.targetIds;if(e&(g|H)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var n,o,u=nt(t.changedTouches),f=[],v=this.target;if(o=i.filter(function(T){return zt(T.target,v)}),e===g)for(n=0;n<o.length;)r[o[n].identifier]=!0,n++;for(n=0;n<u.length;)r[u[n].identifier]&&f.push(u[n]),e&(m|y)&&delete r[u[n].identifier],n++;if(f.length)return[Gt(o.concat(f),"identifier",!0),f]}var Be=2500,ne=25;function Nt(){S.apply(this,arguments);var t=It(this.handler,this);this.touch=new ht(this.manager,t),this.mouse=new ut(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}E(Nt,S,{handler:function(e,i,r){var n=r.pointerType==V,o=r.pointerType==At;if(!(o&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(n)Ze.call(this,i,r);else if(o&&Je.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Ze(t,e){t&g?(this.primaryTouch=e.changedPointers[0].identifier,ae.call(this,e)):t&(m|y)&&ae.call(this,e)}function ae(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,n=function(){var o=r.indexOf(i);o>-1&&r.splice(o,1)};setTimeout(n,Be)}}function Je(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],o=Math.abs(e-n.x),u=Math.abs(i-n.y);if(o<=ne&&u<=ne)return!0}return!1}var oe=at(p.style,"touchAction"),ce=oe!==c,le="compute",ue="auto",Ct="manipulation",Y="none",Z="pan-x",J="pan-y",dt=Ke();function Ot(t,e){this.manager=t,this.set(e)}Ot.prototype={set:function(t){t==le&&(t=this.compute()),ce&&this.manager.element.style&&dt[t]&&(this.manager.element.style[oe]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return N(this.manager.recognizers,function(e){St(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Qe(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,n=q(r,Y)&&!dt[Y],o=q(r,J)&&!dt[J],u=q(r,Z)&&!dt[Z];if(n){var f=t.pointers.length===1,v=t.distance<2,T=t.deltaTime<250;if(f&&v&&T)return}if(!(u&&o)&&(n||o&&i&C||u&&i&F))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Qe(t){if(q(t,Y))return Y;var e=q(t,Z),i=q(t,J);return e&&i?Y:e||i?e?Z:J:q(t,Ct)?Ct:ue}function Ke(){if(!ce)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?a.CSS.supports("touch-action",i):!0}),t}var mt=1,A=2,$=4,R=8,D=R,Q=16,O=32;function k(t){this.options=P({},this.defaults,t||{}),this.id=Ie(),this.manager=null,this.options.enable=Vt(this.options.enable,!0),this.state=mt,this.simultaneous={},this.requireFail=[]}k.prototype={defaults:{},set:function(t){return P(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(U(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=ft(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return U(t,"dropRecognizeWith",this)?this:(t=ft(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(U(t,"requireFailure",this))return this;var e=this.requireFail;return t=ft(t,this),X(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(U(t,"dropRequireFailure",this))return this;t=ft(t,this);var e=X(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(n){e.manager.emit(n,t)}i<R&&r(e.options.event+he(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=R&&r(e.options.event+he(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=O},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(O|mt)))return!1;t++}return!0},recognize:function(t){var e=P({},t);if(!St(this.options.enable,[this,e])){this.reset(),this.state=O;return}this.state&(D|Q|O)&&(this.state=mt),this.state=this.process(e),this.state&(A|$|R|Q)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function he(t){return t&Q?"cancel":t&R?"end":t&$?"move":t&A?"start":""}function de(t){return t==B?"down":t==j?"up":t==z?"left":t==G?"right":""}function ft(t,e){var i=e.manager;return i?i.get(t):t}function b(){k.apply(this,arguments)}E(b,k,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(A|$),n=this.attrTest(t);return r&&(i&y||!n)?e|Q:r||n?i&m?e|R:e&A?e|$:A:O}});function vt(){b.apply(this,arguments),this.pX=null,this.pY=null}E(vt,b,{defaults:{event:"pan",threshold:10,pointers:1,direction:Zt},getTouchAction:function(){var t=this.options.direction,e=[];return t&C&&e.push(J),t&F&&e.push(Z),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,n=t.direction,o=t.deltaX,u=t.deltaY;return n&e.direction||(e.direction&C?(n=o===0?ot:o<0?z:G,i=o!=this.pX,r=Math.abs(t.deltaX)):(n=u===0?ot:u<0?j:B,i=u!=this.pY,r=Math.abs(t.deltaY))),t.direction=n,i&&r>e.threshold&&n&e.direction},attrTest:function(t){return b.prototype.attrTest.call(this,t)&&(this.state&A||!(this.state&A)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=de(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Lt(){b.apply(this,arguments)}E(Lt,b,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Y]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&A)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Mt(){k.apply(this,arguments),this._timer=null,this._input=null}E(Mt,k,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ue]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(m|y)&&!n)this.reset();else if(t.eventType&g)this.reset(),this._timer=tt(function(){this.state=D,this.tryEmit()},e.time,this);else if(t.eventType&m)return D;return O},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===D&&(t&&t.eventType&m?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=W(),this.manager.emit(this.options.event,this._input)))}});function Dt(){b.apply(this,arguments)}E(Dt,b,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Y]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&A)}});function kt(){b.apply(this,arguments)}E(kt,b,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:C|F,pointers:1},getTouchAction:function(){return vt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(C|F)?i=t.overallVelocity:e&C?i=t.overallVelocityX:e&F&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&I(i)>this.options.velocity&&t.eventType&m},emit:function(t){var e=de(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function pt(){k.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}E(pt,k,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ct]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&g&&this.count===0)return this.failTimeout();if(r&&n&&i){if(t.eventType!=m)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,u=!this.pCenter||lt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!u||!o?this.count=1:this.count+=1,this._input=t;var f=this.count%e.taps;if(f===0)return this.hasRequireFailures()?(this._timer=tt(function(){this.state=D,this.tryEmit()},e.interval,this),A):D}return O},failTimeout:function(){return this._timer=tt(function(){this.state=O},this.options.interval,this),O},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==D&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function x(t,e){return e=e||{},e.recognizers=Vt(e.recognizers,x.defaults.preset),new xt(t,e)}x.VERSION="2.0.7",x.defaults={domEvents:!1,touchAction:le,enable:!0,inputTarget:null,inputClass:null,preset:[[Dt,{enable:!1}],[Lt,{enable:!1},["rotate"]],[kt,{direction:C}],[vt,{direction:C},["swipe"]],[pt],[pt,{event:"doubletap",taps:2},["tap"]],[Mt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ti=1,me=2;function xt(t,e){this.options=P({},x.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Oe(this),this.touchAction=new Ot(this,this.options.touchAction),fe(this,!0),N(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}xt.prototype={set:function(t){return P(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?me:ti},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&D)&&(n=e.curRecognizer=null);for(var o=0;o<r.length;)i=r[o],e.stopped!==me&&(!n||i==n||i.canRecognizeWith(n))?i.recognize(t):i.reset(),!n&&i.state&(A|$|R)&&(n=e.curRecognizer=i),o++}},get:function(t){if(t instanceof k)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(U(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(U(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=X(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==c&&e!==c){var i=this.handlers;return N(st(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==c){var i=this.handlers;return N(st(t),function(r){e?i[r]&&i[r].splice(X(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&ei(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&fe(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function fe(t,e){var i=t.element;if(i.style){var r;N(t.options.cssProps,function(n,o){r=at(i.style,o),e?(t.oldCssProps[r]=i.style[r],i.style[r]=n):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function ei(t,e){var i=l.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}P(x,{INPUT_START:g,INPUT_MOVE:H,INPUT_END:m,INPUT_CANCEL:y,STATE_POSSIBLE:mt,STATE_BEGAN:A,STATE_CHANGED:$,STATE_ENDED:R,STATE_RECOGNIZED:D,STATE_CANCELLED:Q,STATE_FAILED:O,DIRECTION_NONE:ot,DIRECTION_LEFT:z,DIRECTION_RIGHT:G,DIRECTION_UP:j,DIRECTION_DOWN:B,DIRECTION_HORIZONTAL:C,DIRECTION_VERTICAL:F,DIRECTION_ALL:Zt,Manager:xt,Input:S,TouchAction:Ot,TouchInput:ht,MouseInput:ut,PointerEventInput:bt,TouchMouseInput:Nt,SingleTouchInput:se,Recognizer:k,AttrRecognizer:b,Tap:pt,Pan:vt,Swipe:kt,Pinch:Lt,Rotate:Dt,Press:Mt,on:it,off:rt,each:N,merge:Wt,extend:et,assign:P,inherit:E,bindFn:It,prefixed:at});var ii=typeof a<"u"?a:typeof self<"u"?self:{};ii.Hammer=x,typeof c=="function"&&c.amd?c(function(){return x}):s.exports?s.exports=x:a[h]=x})(window,document,"Hammer")})(wt);const Ii=wt.exports,Si=ri({__proto__:null,default:Ii},[wt.exports]),Ai=document.querySelectorAll(".hero-slide"),Pi=document.querySelectorAll(".hero-pagination-item"),bi=document.querySelector(".hero-section"),Ee=Array.from(Ai),we=Array.from(Pi);let w=0;function Xt(s){Ee.forEach((a,l)=>{if(l===s){const h=a.dataset.mod;a.classList.remove("visually-hidden"),bi.dataset.mod=h}else a.classList.add("visually-hidden")})}function $t(s){we.forEach((a,l)=>{l===s?a.classList.add("active"):a.classList.remove("active")})}function Ni(){Ut(),Xt(w),$t(w)}setInterval(Ni,5e3);we.forEach(s=>{s.addEventListener("click",()=>{w=+s.dataset.index,Xt(w),$t(w)})});Ee.forEach(s=>{const a=new Si(s);a.get("swipe").set({direction:wt.exports.DIRECTION_ALL}),a.on("swipeleft swiperight swipeup swipedown",l=>{const h=window.innerWidth;h>767&&h<1399?l.type==="swipeleft"?Ut():l.type==="swiperight"&&pe():l.type==="swipeup"?Ut():l.type==="swipedown"&&pe(),Xt(w),$t(w)})});function Ut(){w===2?w=0:w++}function pe(){w===0?w=2:w--}
