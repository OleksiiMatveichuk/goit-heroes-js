import{a as V}from"./header-08b97c14.js";function ri(s,a){for(var c=0;c<a.length;c++){const h=a[c];if(typeof h!="string"&&!Array.isArray(h)){for(const l in h)if(l!=="default"&&!(l in s)){const d=Object.getOwnPropertyDescriptor(h,l);d&&Object.defineProperty(s,l,d.get?d:{enumerable:!0,get:()=>h[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}async function si(s){document.body.style.overflow="hidden",console.log(s);const a=37421,c=await V.getComicById({comicId:a});console.log("API :>> ",c);const h=await V.getCharactersByComicsId({comicId:a}),l=await ai(h),d=await V.getCreatorsByComicsId({comicId:a});console.log("arrCreators :>> ",d);const p=await oi(d,c),S=await ni(c,l,p);document.body.insertAdjacentHTML("afterbegin",S);const y=document.querySelector(".bacground-mod-two"),U=document.querySelector(".mod-two-buttom");y.addEventListener("click",ve),U.addEventListener("click",ve)}async function ni(s,a,c){return`
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
        <ul class="mod-two-gallery-creators">
        ${c}
        </ul>
        <h2 class="mod-two-charaters-header">Characters</h2>
        <ul class="mod-two-charaters-gallery">
        ${a}
        </ul>
      </div>
    </div>
    </div>
    `}function ve(s){if(console.log(s.target),s.target.classList.value==="bacground-mod-two"||s.target.classList.value==="mod-two-buttom"||s.target.tagName==="svg"){const a=document.querySelector(".bacground-mod-two");document.body.style.overflow="",a==null||a.remove()}}async function ai(s){return s.length?await(await s.map(c=>`<li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="${c.thumbnail.path}.${c.thumbnail.extension}"
              alt=""
            />
            <p>${c.name}</p>
          </li>`)).join(""):`<li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="./images/remove_img/malenkoe.png"
              alt=""
            />
            <p>Hero 1</p>
          </li>
          <li class="modal-two-characters">
            <img
              class="mod-two-charaters-img"
              src="./images/remove_img/malenkoe.png"
              alt=""
            />
            <p>Hero 2</p>
          </li>`}async function oi(s,a){return s.length?await(await s.map((h,l)=>`<li class="mod-two-creator">
            <img class="mod-two-img-creator" src="${h.thumbnail.path}.${h.thumbnail.extension}" alt="" />
            <div>
              <h3 class="mod-two-creator-job-title">${a[0].creators.items[l].role}</h3>
              <p>${h.fullName}</p>
            </div>
          </li>`)).join(""):`<li class="mod-two-creator">
            <img class="mod-two-img-creator" src="./images/remove_img/malenkoe.png" alt="" />
            <div>
              <h3 class="mod-two-creator-job-title">Writer</h3>
              <p>Creator name</p>
            </div>
          </li>`}async function ci(s){const a=document.body;document.body.style.overflow="hidden",console.log(s);const{id:c,name:h,description:l,modified:d}=s,p=await ui(c),S=await fi(p),w=await Promise.all(S).then(it=>di(it)),y=pi(s);a.insertAdjacentHTML("afterbegin",y);const U=vi(h,l,d);document.querySelector(".black-widow").insertAdjacentHTML("afterbegin",U),document.querySelector(".bacground-modal").addEventListener("click",Rt),document.querySelector(".close-modal-btn").addEventListener("click",Rt),document.querySelector(".black-widow-list").insertAdjacentHTML("afterbegin",w),document.querySelector(".modal-window").addEventListener("click",li)}function li(s){s.target.classList.value==="img-list-item-card"&&(s.target.tagName==="use"&&Rt(),si(Number(s.target.closest("li").dataset.id)))}async function ui(s){return await V.getCharactersById({characterId:s})}function hi(s){let a=new Date(s),c=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),h=new Intl.DateTimeFormat("en",{month:"short"}).format(a),l=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);return`${h} ${l}, ${c}`}function di(s){return s.map(c=>{var w;const{id:h,thumbnail:l,title:d,creators:p}=c,S=(w=p.items[0])!=null&&w.name?p.items[0].name:"Wiktor Djoba";return`
   <li class="black-widow-list-item" data-id=${h}>
   <a href="#" class="black-widow-handle">
      <div class="black-widow-card">
        <img  width ='263'height= '263'
          class="img-list-item-card"
          src="${l.path}.${l.extension}"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">${d}</h4>
          <p class="black-widow-card-description">${S}</p>
        </div>
      </div></a>
    </li>
  `}).join("")}async function mi(s){var a=s.resourceURI.split("/");const c=Number(a[a.length-1]);return(await V.getComicById({comicId:c}))[0]}async function fi(s){const{items:a}=s[0].comics;return a.filter((l,d)=>{if(d<3)return l}).map(async l=>await mi(l))}function vi(s,a,c){const h=hi(c);return`
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">${s}</h4>
    <p class="black-widow-info-data">${h}</p>
  </div>
   <p class="black-widow-content">
   ${a}
  </p>
  `}function pi(s){return`
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
    
    `}function Rt(s){if(s.target.classList.value==="bacground-modal"||s.target.classList.value==="close-modal-btn"){const a=document.querySelector(".bacground-modal");document.body.style.overflow="",Yt(0),a==null||a.remove()}}const Et=[],ge=document.querySelector(".random-list"),qt=document.querySelector(".random-img");ge.addEventListener("click",Ti);const Tt=document.querySelector(".random-bacground");qt.style.visible=!1;qt.addEventListener("click",()=>{ci(Te.data),Ht()});let tt=null,yt=null;const Te={};function Ht(){clearInterval(tt),tt=null}async function gi(s){const a=await V.getAllCharacters(s);return Et.push(a.results),a}function Ft(s){ye(s),qt.src=`${s.thumbnail.path}.${s.thumbnail.extension}`,Tt.style.backgroundImage=`url(${s.thumbnail.path}.${s.thumbnail.extension})`,Tt.style.backgroundSize="cover",Tt.style.backgroundPosition="center",Tt.style.backgroundRepeat="no-repeat"}function Ti(s){if(s.target.tagName!=="UL"&&s.target.tagName!=="DIV"){tt&&(Ht(),yt||(yt=setTimeout(()=>{Yt(0),clearTimeout(yt),yt=null},3500)));let a=document.querySelectorAll(".random-item");const c=s.target.closest("li").id,h=Et.find(l=>l[0].id===Number(c));Ft(h[0]),a.forEach(l=>{let d=document.querySelector(".random-item.active");const p=l.querySelector(".random-value-text.active");d&&(d.classList.remove("active"),p==null||p.classList.remove("active"));let S=document.querySelector(".random-value-text.active");S&&(S.classList.remove("active"),S.style.color=""),s.target.closest("li").classList.add("active");const y=document.querySelector(".random-item.active").querySelector(".random-value-text");y.style.color="rgb(52, 56, 127)",y.classList.add("active")})}}function yi(s){var p;let a=document.querySelectorAll(".random-item"),c=document.querySelector(".random-item.active");c&&c.classList.remove("active");let h=document.querySelector(".random-value-text.active");h&&(h.classList.remove("active"),h.style.color=""),(p=a[s])==null||p.classList.add("active"),Ei(Number(a[s].dataset.id));const d=document.querySelector(".random-item.active").querySelector(".random-value-text");d.style.color="rgb(52, 56, 127)",d.classList.add("active")}function Ei(s){const a=Et.filter(c=>c[0].id===s);Ft(a[0][0])}function Yt(s){let a=s;tt>2&&Ht(),tt=setInterval(()=>{yi(a),a+=1,a===5&&(a=0)},3500)}function ye(s){Te.data={...s}}function wi(s){return`
    <li class='random-item' id=${s[0].id} data-id=${s[0].id} >

       <h3 class='random-value-name hero-name' data-name>${s[0].name}</h3>
       <p class='random-value-text' data-description>${s[0].description}</p>
    </li>
    `}function Ii(s){return s.map(a=>wi(a.results)).join("")}function _i(){const s=[];for(let a=0;a<5;a+=1)new Promise(c=>{const h=gi({limit:1,offset:Math.round(Math.random()*1561)});s.push(h)});Promise.all(s).then(a=>{Ci(a)}).catch(a=>console.log("ERR",a))}function Ci(s){ye(s[0].results[0]);const a=Ii(s);ge.innerHTML=a,Ft(Et[0][0]),Yt(0)}_i();var wt={exports:{}};(function(s){(function(a,c,h,l){var d=["","webkit","Moz","MS","ms","o"],p=c.createElement("div"),S="function",w=Math.round,y=Math.abs,U=Date.now;function et(t,e,i){return setTimeout(_t(t,i),e)}function q(t,e,i){return Array.isArray(t)?(N(t,i[e],i),!0):!1}function N(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==l)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function It(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var n=new Error("get-stack-trace"),o=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",u=a.console&&(a.console.warn||a.console.log);return u&&u.call(a.console,r,o),t.apply(this,arguments)}}var A;typeof Object.assign!="function"?A=function(e){if(e===l||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(n!==l&&n!==null)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o])}return i}:A=Object.assign;var it=It(function(e,i,r){for(var n=Object.keys(i),o=0;o<n.length;)(!r||r&&e[n[o]]===l)&&(e[n[o]]=i[n[o]]),o++;return e},"extend","Use `assign`."),Wt=It(function(e,i){return it(e,i,!0)},"merge","Use `assign`.");function I(t,e,i){var r=e.prototype,n;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&A(n,i)}function _t(t,e){return function(){return t.apply(e,arguments)}}function Ct(t,e){return typeof t==S?t.apply(e&&e[0]||l,e):t}function Vt(t,e){return t===l?e:t}function rt(t,e,i){N(nt(e),function(r){t.addEventListener(r,i,!1)})}function st(t,e,i){N(nt(e),function(r){t.removeEventListener(r,i,!1)})}function jt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function H(t,e){return t.indexOf(e)>-1}function nt(t){return t.trim().split(/\s+/g)}function $(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function at(t){return Array.prototype.slice.call(t,0)}function zt(t,e,i){for(var r=[],n=[],o=0;o<t.length;){var u=e?t[o][e]:t[o];$(n,u)<0&&r.push(t[o]),n[o]=u,o++}return i&&(e?r=r.sort(function(v,T){return v[e]>T[e]}):r=r.sort()),r}function ot(t,e){for(var i,r,n=e[0].toUpperCase()+e.slice(1),o=0;o<d.length;){if(i=d[o],r=i?i+n:e,r in t)return r;o++}return l}var Ie=1;function _e(){return Ie++}function Gt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var Ce=/mobile|tablet|ip(ad|hone|od)|android/i,Bt="ontouchstart"in a,be=ot(a,"PointerEvent")!==l,Se=Bt&&Ce.test(navigator.userAgent),j="touch",Ae="pen",bt="mouse",Pe="kinect",Ne=25,g=1,F=2,m=4,E=8,ct=1,z=2,G=4,B=8,Z=16,O=z|G,Y=B|Z,Zt=O|Y,Jt=["x","y"],lt=["clientX","clientY"];function C(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){Ct(t.options.enable,[t])&&i.handler(r)},this.init()}C.prototype={handler:function(){},init:function(){this.evEl&&rt(this.element,this.evEl,this.domHandler),this.evTarget&&rt(this.target,this.evTarget,this.domHandler),this.evWin&&rt(Gt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&st(this.element,this.evEl,this.domHandler),this.evTarget&&st(this.target,this.evTarget,this.domHandler),this.evWin&&st(Gt(this.element),this.evWin,this.domHandler)}};function Oe(t){var e,i=t.options.inputClass;return i?e=i:be?e=At:Se?e=dt:Bt?e=Pt:e=ht,new e(t,Le)}function Le(t,e,i){var r=i.pointers.length,n=i.changedPointers.length,o=e&g&&r-n===0,u=e&(m|E)&&r-n===0;i.isFirst=!!o,i.isFinal=!!u,o&&(t.session={}),i.eventType=e,Me(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Me(t,e){var i=t.session,r=e.pointers,n=r.length;i.firstInput||(i.firstInput=Qt(e)),n>1&&!i.firstMultiple?i.firstMultiple=Qt(e):n===1&&(i.firstMultiple=!1);var o=i.firstInput,u=i.firstMultiple,f=u?u.center:o.center,v=e.center=Kt(r);e.timeStamp=U(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=St(f,v),e.distance=ut(f,v),De(i,e),e.offsetDirection=ee(e.deltaX,e.deltaY);var T=te(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=T.x,e.overallVelocityY=T.y,e.overallVelocity=y(T.x)>y(T.y)?T.x:T.y,e.scale=u?Re(u.pointers,r):1,e.rotation=u?xe(u.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,ke(i,e);var M=t.element;jt(e.srcEvent.target,M)&&(M=e.srcEvent.target),e.target=M}function De(t,e){var i=e.center,r=t.offsetDelta||{},n=t.prevDelta||{},o=t.prevInput||{};(e.eventType===g||o.eventType===m)&&(n=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-r.x),e.deltaY=n.y+(i.y-r.y)}function ke(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,n,o,u,f;if(e.eventType!=E&&(r>Ne||i.velocity===l)){var v=e.deltaX-i.deltaX,T=e.deltaY-i.deltaY,M=te(r,v,T);o=M.x,u=M.y,n=y(M.x)>y(M.y)?M.x:M.y,f=ee(v,T),t.lastInterval=e}else n=i.velocity,o=i.velocityX,u=i.velocityY,f=i.direction;e.velocity=n,e.velocityX=o,e.velocityY=u,e.direction=f}function Qt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:w(t.pointers[i].clientX),clientY:w(t.pointers[i].clientY)},i++;return{timeStamp:U(),pointers:e,center:Kt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Kt(t){var e=t.length;if(e===1)return{x:w(t[0].clientX),y:w(t[0].clientY)};for(var i=0,r=0,n=0;n<e;)i+=t[n].clientX,r+=t[n].clientY,n++;return{x:w(i/e),y:w(r/e)}}function te(t,e,i){return{x:e/t||0,y:i/t||0}}function ee(t,e){return t===e?ct:y(t)>=y(e)?t<0?z:G:e<0?B:Z}function ut(t,e,i){i||(i=Jt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(r*r+n*n)}function St(t,e,i){i||(i=Jt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.atan2(n,r)*180/Math.PI}function xe(t,e){return St(e[1],e[0],lt)+St(t[1],t[0],lt)}function Re(t,e){return ut(e[0],e[1],lt)/ut(t[0],t[1],lt)}var Ue={mousedown:g,mousemove:F,mouseup:m},qe="mousedown",He="mousemove mouseup";function ht(){this.evEl=qe,this.evWin=He,this.pressed=!1,C.apply(this,arguments)}I(ht,C,{handler:function(e){var i=Ue[e.type];i&g&&e.button===0&&(this.pressed=!0),i&F&&e.which!==1&&(i=m),this.pressed&&(i&m&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:bt,srcEvent:e}))}});var Fe={pointerdown:g,pointermove:F,pointerup:m,pointercancel:E,pointerout:E},Ye={2:j,3:Ae,4:bt,5:Pe},ie="pointerdown",re="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(ie="MSPointerDown",re="MSPointerMove MSPointerUp MSPointerCancel");function At(){this.evEl=ie,this.evWin=re,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}I(At,C,{handler:function(e){var i=this.store,r=!1,n=e.type.toLowerCase().replace("ms",""),o=Fe[n],u=Ye[e.pointerType]||e.pointerType,f=u==j,v=$(i,e.pointerId,"pointerId");o&g&&(e.button===0||f)?v<0&&(i.push(e),v=i.length-1):o&(m|E)&&(r=!0),!(v<0)&&(i[v]=e,this.callback(this.manager,o,{pointers:i,changedPointers:[e],pointerType:u,srcEvent:e}),r&&i.splice(v,1))}});var Xe={touchstart:g,touchmove:F,touchend:m,touchcancel:E},$e="touchstart",We="touchstart touchmove touchend touchcancel";function se(){this.evTarget=$e,this.evWin=We,this.started=!1,C.apply(this,arguments)}I(se,C,{handler:function(e){var i=Xe[e.type];if(i===g&&(this.started=!0),!!this.started){var r=Ve.call(this,e,i);i&(m|E)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:j,srcEvent:e})}}});function Ve(t,e){var i=at(t.touches),r=at(t.changedTouches);return e&(m|E)&&(i=zt(i.concat(r),"identifier",!0)),[i,r]}var je={touchstart:g,touchmove:F,touchend:m,touchcancel:E},ze="touchstart touchmove touchend touchcancel";function dt(){this.evTarget=ze,this.targetIds={},C.apply(this,arguments)}I(dt,C,{handler:function(e){var i=je[e.type],r=Ge.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:j,srcEvent:e})}});function Ge(t,e){var i=at(t.touches),r=this.targetIds;if(e&(g|F)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var n,o,u=at(t.changedTouches),f=[],v=this.target;if(o=i.filter(function(T){return jt(T.target,v)}),e===g)for(n=0;n<o.length;)r[o[n].identifier]=!0,n++;for(n=0;n<u.length;)r[u[n].identifier]&&f.push(u[n]),e&(m|E)&&delete r[u[n].identifier],n++;if(f.length)return[zt(o.concat(f),"identifier",!0),f]}var Be=2500,ne=25;function Pt(){C.apply(this,arguments);var t=_t(this.handler,this);this.touch=new dt(this.manager,t),this.mouse=new ht(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}I(Pt,C,{handler:function(e,i,r){var n=r.pointerType==j,o=r.pointerType==bt;if(!(o&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(n)Ze.call(this,i,r);else if(o&&Je.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Ze(t,e){t&g?(this.primaryTouch=e.changedPointers[0].identifier,ae.call(this,e)):t&(m|E)&&ae.call(this,e)}function ae(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,n=function(){var o=r.indexOf(i);o>-1&&r.splice(o,1)};setTimeout(n,Be)}}function Je(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],o=Math.abs(e-n.x),u=Math.abs(i-n.y);if(o<=ne&&u<=ne)return!0}return!1}var oe=ot(p.style,"touchAction"),ce=oe!==l,le="compute",ue="auto",Nt="manipulation",X="none",J="pan-x",Q="pan-y",mt=Ke();function Ot(t,e){this.manager=t,this.set(e)}Ot.prototype={set:function(t){t==le&&(t=this.compute()),ce&&this.manager.element.style&&mt[t]&&(this.manager.element.style[oe]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return N(this.manager.recognizers,function(e){Ct(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Qe(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,n=H(r,X)&&!mt[X],o=H(r,Q)&&!mt[Q],u=H(r,J)&&!mt[J];if(n){var f=t.pointers.length===1,v=t.distance<2,T=t.deltaTime<250;if(f&&v&&T)return}if(!(u&&o)&&(n||o&&i&O||u&&i&Y))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Qe(t){if(H(t,X))return X;var e=H(t,J),i=H(t,Q);return e&&i?X:e||i?e?J:Q:H(t,Nt)?Nt:ue}function Ke(){if(!ce)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?a.CSS.supports("touch-action",i):!0}),t}var ft=1,b=2,W=4,R=8,D=R,K=16,L=32;function k(t){this.options=A({},this.defaults,t||{}),this.id=_e(),this.manager=null,this.options.enable=Vt(this.options.enable,!0),this.state=ft,this.simultaneous={},this.requireFail=[]}k.prototype={defaults:{},set:function(t){return A(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(q(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=vt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return q(t,"dropRecognizeWith",this)?this:(t=vt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(q(t,"requireFailure",this))return this;var e=this.requireFail;return t=vt(t,this),$(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(q(t,"dropRequireFailure",this))return this;t=vt(t,this);var e=$(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(n){e.manager.emit(n,t)}i<R&&r(e.options.event+he(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=R&&r(e.options.event+he(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=L},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(L|ft)))return!1;t++}return!0},recognize:function(t){var e=A({},t);if(!Ct(this.options.enable,[this,e])){this.reset(),this.state=L;return}this.state&(D|K|L)&&(this.state=ft),this.state=this.process(e),this.state&(b|W|R|K)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function he(t){return t&K?"cancel":t&R?"end":t&W?"move":t&b?"start":""}function de(t){return t==Z?"down":t==B?"up":t==z?"left":t==G?"right":""}function vt(t,e){var i=e.manager;return i?i.get(t):t}function P(){k.apply(this,arguments)}I(P,k,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(b|W),n=this.attrTest(t);return r&&(i&E||!n)?e|K:r||n?i&m?e|R:e&b?e|W:b:L}});function pt(){P.apply(this,arguments),this.pX=null,this.pY=null}I(pt,P,{defaults:{event:"pan",threshold:10,pointers:1,direction:Zt},getTouchAction:function(){var t=this.options.direction,e=[];return t&O&&e.push(Q),t&Y&&e.push(J),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,n=t.direction,o=t.deltaX,u=t.deltaY;return n&e.direction||(e.direction&O?(n=o===0?ct:o<0?z:G,i=o!=this.pX,r=Math.abs(t.deltaX)):(n=u===0?ct:u<0?B:Z,i=u!=this.pY,r=Math.abs(t.deltaY))),t.direction=n,i&&r>e.threshold&&n&e.direction},attrTest:function(t){return P.prototype.attrTest.call(this,t)&&(this.state&b||!(this.state&b)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=de(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Lt(){P.apply(this,arguments)}I(Lt,P,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[X]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&b)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Mt(){k.apply(this,arguments),this._timer=null,this._input=null}I(Mt,k,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ue]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(m|E)&&!n)this.reset();else if(t.eventType&g)this.reset(),this._timer=et(function(){this.state=D,this.tryEmit()},e.time,this);else if(t.eventType&m)return D;return L},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===D&&(t&&t.eventType&m?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=U(),this.manager.emit(this.options.event,this._input)))}});function Dt(){P.apply(this,arguments)}I(Dt,P,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[X]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&b)}});function kt(){P.apply(this,arguments)}I(kt,P,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:O|Y,pointers:1},getTouchAction:function(){return pt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(O|Y)?i=t.overallVelocity:e&O?i=t.overallVelocityX:e&Y&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&y(i)>this.options.velocity&&t.eventType&m},emit:function(t){var e=de(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function gt(){k.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}I(gt,k,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Nt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&g&&this.count===0)return this.failTimeout();if(r&&n&&i){if(t.eventType!=m)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,u=!this.pCenter||ut(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!u||!o?this.count=1:this.count+=1,this._input=t;var f=this.count%e.taps;if(f===0)return this.hasRequireFailures()?(this._timer=et(function(){this.state=D,this.tryEmit()},e.interval,this),b):D}return L},failTimeout:function(){return this._timer=et(function(){this.state=L},this.options.interval,this),L},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==D&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function x(t,e){return e=e||{},e.recognizers=Vt(e.recognizers,x.defaults.preset),new xt(t,e)}x.VERSION="2.0.7",x.defaults={domEvents:!1,touchAction:le,enable:!0,inputTarget:null,inputClass:null,preset:[[Dt,{enable:!1}],[Lt,{enable:!1},["rotate"]],[kt,{direction:O}],[pt,{direction:O},["swipe"]],[gt],[gt,{event:"doubletap",taps:2},["tap"]],[Mt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ti=1,me=2;function xt(t,e){this.options=A({},x.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Oe(this),this.touchAction=new Ot(this,this.options.touchAction),fe(this,!0),N(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}xt.prototype={set:function(t){return A(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?me:ti},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&D)&&(n=e.curRecognizer=null);for(var o=0;o<r.length;)i=r[o],e.stopped!==me&&(!n||i==n||i.canRecognizeWith(n))?i.recognize(t):i.reset(),!n&&i.state&(b|W|R)&&(n=e.curRecognizer=i),o++}},get:function(t){if(t instanceof k)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(q(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(q(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=$(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==l&&e!==l){var i=this.handlers;return N(nt(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==l){var i=this.handlers;return N(nt(t),function(r){e?i[r]&&i[r].splice($(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&ei(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&fe(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function fe(t,e){var i=t.element;if(i.style){var r;N(t.options.cssProps,function(n,o){r=ot(i.style,o),e?(t.oldCssProps[r]=i.style[r],i.style[r]=n):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function ei(t,e){var i=c.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}A(x,{INPUT_START:g,INPUT_MOVE:F,INPUT_END:m,INPUT_CANCEL:E,STATE_POSSIBLE:ft,STATE_BEGAN:b,STATE_CHANGED:W,STATE_ENDED:R,STATE_RECOGNIZED:D,STATE_CANCELLED:K,STATE_FAILED:L,DIRECTION_NONE:ct,DIRECTION_LEFT:z,DIRECTION_RIGHT:G,DIRECTION_UP:B,DIRECTION_DOWN:Z,DIRECTION_HORIZONTAL:O,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Zt,Manager:xt,Input:C,TouchAction:Ot,TouchInput:dt,MouseInput:ht,PointerEventInput:At,TouchMouseInput:Pt,SingleTouchInput:se,Recognizer:k,AttrRecognizer:P,Tap:gt,Pan:pt,Swipe:kt,Pinch:Lt,Rotate:Dt,Press:Mt,on:rt,off:st,each:N,merge:Wt,extend:it,assign:A,inherit:I,bindFn:_t,prefixed:ot});var ii=typeof a<"u"?a:typeof self<"u"?self:{};ii.Hammer=x,typeof l=="function"&&l.amd?l(function(){return x}):s.exports?s.exports=x:a[h]=x})(window,document,"Hammer")})(wt);const bi=wt.exports,Si=ri({__proto__:null,default:bi},[wt.exports]),Ai=document.querySelectorAll(".hero-slide"),Pi=document.querySelectorAll(".hero-pagination-item"),Ni=document.querySelector(".hero-section"),Ee=Array.from(Ai),we=Array.from(Pi);let _=0;function Xt(s){Ee.forEach((a,c)=>{if(c===s){const h=a.dataset.mod;a.classList.remove("visually-hidden"),Ni.dataset.mod=h}else a.classList.add("visually-hidden")})}function $t(s){we.forEach((a,c)=>{c===s?a.classList.add("active"):a.classList.remove("active")})}function Oi(){Ut(),Xt(_),$t(_)}setInterval(Oi,5e3);we.forEach(s=>{s.addEventListener("click",()=>{_=+s.dataset.index,Xt(_),$t(_)})});Ee.forEach(s=>{const a=new Si(s);a.get("swipe").set({direction:wt.exports.DIRECTION_ALL}),a.on("swipeleft swiperight swipeup swipedown",c=>{const h=window.innerWidth;h>767&&h<1399?c.type==="swipeleft"?Ut():c.type==="swiperight"&&pe():c.type==="swipeup"?Ut():c.type==="swipedown"&&pe(),Xt(_),$t(_)})});function Ut(){_===2?_=0:_++}function pe(){_===0?_=2:_--}
