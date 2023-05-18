import{c as ei,a as ii,e as ri}from"./header-cd330797.js";const mt=[],Ut=document.querySelector(".random-list"),wt=document.querySelector(".random-img");Ut.addEventListener("click",si);const dt=document.querySelector(".random-bacground");wt.style.visible=!1;wt.addEventListener("click",()=>{ei(Rt.data.id,Rt.data.name)});let K=null,pt=null;const Rt={};function ve(){clearInterval(K),K=null}async function ni(o){try{console.log("random data");const a=await ii.getAllCharacters(o);return a||(console.log("bad data"),Ut.innerHTML=ri("Too Many Requests...")),mt.push(a.results),a}catch(a){console.log("random list",a)}}function xt(o){pe(o),wt.src=`${o.thumbnail.path}.${o.thumbnail.extension}`,dt.style.backgroundImage=`url(${o.thumbnail.path}.${o.thumbnail.extension})`,dt.style.backgroundSize="cover",dt.style.backgroundPosition="center",dt.style.backgroundRepeat="no-repeat"}function si(o){if(o.target.tagName!=="UL"&&o.target.tagName!=="DIV"){K&&(ve(),pt||(pt=setTimeout(()=>{de(0),clearTimeout(pt),pt=null},3500)));let a=document.querySelectorAll(".random-item");const u=o.target.closest("li").id,d=mt.find(l=>l[0].id===Number(u));xt(d[0]),a.forEach(l=>{let R=document.querySelector(".random-item.active");const b=l.querySelector(".random-value-text.active");R&&(R.classList.remove("active"),b==null||b.classList.remove("active"));let V=document.querySelector(".random-value-text.active");V&&(V.classList.remove("active"),V.style.color=""),o.target.closest("li").classList.add("active");const S=document.querySelector(".random-item.active").querySelector(".random-value-text");S.style.color="rgb(52, 56, 127)",S.classList.add("active")})}}function ai(o){var b;let a=document.querySelectorAll(".random-item"),u=document.querySelector(".random-item.active");u&&u.classList.remove("active");let d=document.querySelector(".random-value-text.active");d&&(d.classList.remove("active"),d.style.color=""),(b=a[o])==null||b.classList.add("active"),oi(Number(a[o].dataset.id));const R=document.querySelector(".random-item.active").querySelector(".random-value-text");R.style.color="rgb(52, 56, 127)",R.classList.add("active")}function oi(o){const a=mt.filter(u=>u[0].id===o);xt(a[0][0])}function de(o){let a=o;K>2&&ve(),K=setInterval(()=>{ai(a),a+=1,a===5&&(a=0)},3500)}function pe(o){Rt.data={...o}}function ci(o){return`
    <li class='random-item' id=${o[0].id} data-id=${o[0].id} >

       <h3 class='random-value-name hero-name' data-name>${o[0].name}</h3>
       <p class='random-value-text' data-description>${o[0].description}</p>
    </li>
    `}function li(o){return o.map(a=>ci(a.results)).join("")}function ui(){const o=[];for(let a=0;a<5;a+=1)new Promise(u=>{const d=ni({limit:1,offset:Math.round(Math.random()*1561)});o.push(d)});Promise.all(o).then(a=>{hi(a)}).catch(a=>console.log("ERR",a))}function hi(o){pe(o[0].results[0]);const a=li(o);Ut.innerHTML=a,xt(mt[0][0]),de(0)}ui();var me={exports:{}};(function(o){(function(a,u,d,l){var R=["","webkit","Moz","MS","ms","o"],b=u.createElement("div"),V="function",w=Math.round,S=Math.abs,Tt=Date.now;function gt(t,e,i){return setTimeout(Et(t,i),e)}function X(t,e,i){return Array.isArray(t)?(C(t,i[e],i),!0):!1}function C(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==l)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function Yt(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var n=new Error("get-stack-trace"),s=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",c=a.console&&(a.console.warn||a.console.log);return c&&c.call(a.console,r,s),t.apply(this,arguments)}}var P;typeof Object.assign!="function"?P=function(e){if(e===l||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(n!==l&&n!==null)for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s])}return i}:P=Object.assign;var Xt=Yt(function(e,i,r){for(var n=Object.keys(i),s=0;s<n.length;)(!r||r&&e[n[s]]===l)&&(e[n[s]]=i[n[s]]),s++;return e},"extend","Use `assign`."),Ee=Yt(function(e,i){return Xt(e,i,!0)},"merge","Use `assign`.");function g(t,e,i){var r=e.prototype,n;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&P(n,i)}function Et(t,e){return function(){return t.apply(e,arguments)}}function yt(t,e){return typeof t==V?t.apply(e&&e[0]||l,e):t}function kt(t,e){return t===l?e:t}function $(t,e,i){C(et(e),function(r){t.addEventListener(r,i,!1)})}function tt(t,e,i){C(et(e),function(r){t.removeEventListener(r,i,!1)})}function Ft(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function x(t,e){return t.indexOf(e)>-1}function et(t){return t.trim().split(/\s+/g)}function k(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function it(t){return Array.prototype.slice.call(t,0)}function Vt(t,e,i){for(var r=[],n=[],s=0;s<t.length;){var c=e?t[s][e]:t[s];k(n,c)<0&&r.push(t[s]),n[s]=c,s++}return i&&(e?r=r.sort(function(v,m){return v[e]>m[e]}):r=r.sort()),r}function rt(t,e){for(var i,r,n=e[0].toUpperCase()+e.slice(1),s=0;s<R.length;){if(i=R[s],r=i?i+n:e,r in t)return r;s++}return l}var ye=1;function Ie(){return ye++}function Wt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var _e=/mobile|tablet|ip(ad|hone|od)|android/i,Gt="ontouchstart"in a,Se=rt(a,"PointerEvent")!==l,Pe=Gt&&_e.test(navigator.userAgent),W="touch",Ae="pen",It="mouse",Ne="kinect",Oe=25,p=1,q=2,h=4,T=8,nt=1,G=2,z=4,Z=8,B=16,A=G|z,H=Z|B,zt=A|H,Zt=["x","y"],st=["clientX","clientY"];function y(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){yt(t.options.enable,[t])&&i.handler(r)},this.init()}y.prototype={handler:function(){},init:function(){this.evEl&&$(this.element,this.evEl,this.domHandler),this.evTarget&&$(this.target,this.evTarget,this.domHandler),this.evWin&&$(Wt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&tt(this.element,this.evEl,this.domHandler),this.evTarget&&tt(this.target,this.evTarget,this.domHandler),this.evWin&&tt(Wt(this.element),this.evWin,this.domHandler)}};function Ce(t){var e,i=t.options.inputClass;return i?e=i:Se?e=St:Pe?e=ct:Gt?e=Pt:e=ot,new e(t,Me)}function Me(t,e,i){var r=i.pointers.length,n=i.changedPointers.length,s=e&p&&r-n===0,c=e&(h|T)&&r-n===0;i.isFirst=!!s,i.isFinal=!!c,s&&(t.session={}),i.eventType=e,De(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function De(t,e){var i=t.session,r=e.pointers,n=r.length;i.firstInput||(i.firstInput=Bt(e)),n>1&&!i.firstMultiple?i.firstMultiple=Bt(e):n===1&&(i.firstMultiple=!1);var s=i.firstInput,c=i.firstMultiple,f=c?c.center:s.center,v=e.center=Jt(r);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=_t(f,v),e.distance=at(f,v),Le(i,e),e.offsetDirection=jt(e.deltaX,e.deltaY);var m=Qt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=m.x,e.overallVelocityY=m.y,e.overallVelocity=S(m.x)>S(m.y)?m.x:m.y,e.scale=c?Ue(c.pointers,r):1,e.rotation=c?be(c.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,Re(i,e);var O=t.element;Ft(e.srcEvent.target,O)&&(O=e.srcEvent.target),e.target=O}function Le(t,e){var i=e.center,r=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{};(e.eventType===p||s.eventType===h)&&(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-r.x),e.deltaY=n.y+(i.y-r.y)}function Re(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,n,s,c,f;if(e.eventType!=T&&(r>Oe||i.velocity===l)){var v=e.deltaX-i.deltaX,m=e.deltaY-i.deltaY,O=Qt(r,v,m);s=O.x,c=O.y,n=S(O.x)>S(O.y)?O.x:O.y,f=jt(v,m),t.lastInterval=e}else n=i.velocity,s=i.velocityX,c=i.velocityY,f=i.direction;e.velocity=n,e.velocityX=s,e.velocityY=c,e.direction=f}function Bt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:w(t.pointers[i].clientX),clientY:w(t.pointers[i].clientY)},i++;return{timeStamp:Tt(),pointers:e,center:Jt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Jt(t){var e=t.length;if(e===1)return{x:w(t[0].clientX),y:w(t[0].clientY)};for(var i=0,r=0,n=0;n<e;)i+=t[n].clientX,r+=t[n].clientY,n++;return{x:w(i/e),y:w(r/e)}}function Qt(t,e,i){return{x:e/t||0,y:i/t||0}}function jt(t,e){return t===e?nt:S(t)>=S(e)?t<0?G:z:e<0?Z:B}function at(t,e,i){i||(i=Zt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(r*r+n*n)}function _t(t,e,i){i||(i=Zt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.atan2(n,r)*180/Math.PI}function be(t,e){return _t(e[1],e[0],st)+_t(t[1],t[0],st)}function Ue(t,e){return at(e[0],e[1],st)/at(t[0],t[1],st)}var we={mousedown:p,mousemove:q,mouseup:h},xe="mousedown",qe="mousemove mouseup";function ot(){this.evEl=xe,this.evWin=qe,this.pressed=!1,y.apply(this,arguments)}g(ot,y,{handler:function(e){var i=we[e.type];i&p&&e.button===0&&(this.pressed=!0),i&q&&e.which!==1&&(i=h),this.pressed&&(i&h&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:It,srcEvent:e}))}});var He={pointerdown:p,pointermove:q,pointerup:h,pointercancel:T,pointerout:T},Ye={2:W,3:Ae,4:It,5:Ne},Kt="pointerdown",$t="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Kt="MSPointerDown",$t="MSPointerMove MSPointerUp MSPointerCancel");function St(){this.evEl=Kt,this.evWin=$t,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}g(St,y,{handler:function(e){var i=this.store,r=!1,n=e.type.toLowerCase().replace("ms",""),s=He[n],c=Ye[e.pointerType]||e.pointerType,f=c==W,v=k(i,e.pointerId,"pointerId");s&p&&(e.button===0||f)?v<0&&(i.push(e),v=i.length-1):s&(h|T)&&(r=!0),!(v<0)&&(i[v]=e,this.callback(this.manager,s,{pointers:i,changedPointers:[e],pointerType:c,srcEvent:e}),r&&i.splice(v,1))}});var Xe={touchstart:p,touchmove:q,touchend:h,touchcancel:T},ke="touchstart",Fe="touchstart touchmove touchend touchcancel";function te(){this.evTarget=ke,this.evWin=Fe,this.started=!1,y.apply(this,arguments)}g(te,y,{handler:function(e){var i=Xe[e.type];if(i===p&&(this.started=!0),!!this.started){var r=Ve.call(this,e,i);i&(h|T)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:W,srcEvent:e})}}});function Ve(t,e){var i=it(t.touches),r=it(t.changedTouches);return e&(h|T)&&(i=Vt(i.concat(r),"identifier",!0)),[i,r]}var We={touchstart:p,touchmove:q,touchend:h,touchcancel:T},Ge="touchstart touchmove touchend touchcancel";function ct(){this.evTarget=Ge,this.targetIds={},y.apply(this,arguments)}g(ct,y,{handler:function(e){var i=We[e.type],r=ze.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:W,srcEvent:e})}});function ze(t,e){var i=it(t.touches),r=this.targetIds;if(e&(p|q)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var n,s,c=it(t.changedTouches),f=[],v=this.target;if(s=i.filter(function(m){return Ft(m.target,v)}),e===p)for(n=0;n<s.length;)r[s[n].identifier]=!0,n++;for(n=0;n<c.length;)r[c[n].identifier]&&f.push(c[n]),e&(h|T)&&delete r[c[n].identifier],n++;if(f.length)return[Vt(s.concat(f),"identifier",!0),f]}var Ze=2500,ee=25;function Pt(){y.apply(this,arguments);var t=Et(this.handler,this);this.touch=new ct(this.manager,t),this.mouse=new ot(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}g(Pt,y,{handler:function(e,i,r){var n=r.pointerType==W,s=r.pointerType==It;if(!(s&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(n)Be.call(this,i,r);else if(s&&Je.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Be(t,e){t&p?(this.primaryTouch=e.changedPointers[0].identifier,ie.call(this,e)):t&(h|T)&&ie.call(this,e)}function ie(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,n=function(){var s=r.indexOf(i);s>-1&&r.splice(s,1)};setTimeout(n,Ze)}}function Je(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],s=Math.abs(e-n.x),c=Math.abs(i-n.y);if(s<=ee&&c<=ee)return!0}return!1}var re=rt(b.style,"touchAction"),ne=re!==l,se="compute",ae="auto",At="manipulation",Y="none",J="pan-x",Q="pan-y",lt=je();function Nt(t,e){this.manager=t,this.set(e)}Nt.prototype={set:function(t){t==se&&(t=this.compute()),ne&&this.manager.element.style&&lt[t]&&(this.manager.element.style[re]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return C(this.manager.recognizers,function(e){yt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Qe(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,n=x(r,Y)&&!lt[Y],s=x(r,Q)&&!lt[Q],c=x(r,J)&&!lt[J];if(n){var f=t.pointers.length===1,v=t.distance<2,m=t.deltaTime<250;if(f&&v&&m)return}if(!(c&&s)&&(n||s&&i&A||c&&i&H))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Qe(t){if(x(t,Y))return Y;var e=x(t,J),i=x(t,Q);return e&&i?Y:e||i?e?J:Q:x(t,At)?At:ae}function je(){if(!ne)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?a.CSS.supports("touch-action",i):!0}),t}var ut=1,I=2,F=4,U=8,M=U,j=16,N=32;function D(t){this.options=P({},this.defaults,t||{}),this.id=Ie(),this.manager=null,this.options.enable=kt(this.options.enable,!0),this.state=ut,this.simultaneous={},this.requireFail=[]}D.prototype={defaults:{},set:function(t){return P(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(X(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=ht(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return X(t,"dropRecognizeWith",this)?this:(t=ht(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(X(t,"requireFailure",this))return this;var e=this.requireFail;return t=ht(t,this),k(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(X(t,"dropRequireFailure",this))return this;t=ht(t,this);var e=k(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(n){e.manager.emit(n,t)}i<U&&r(e.options.event+oe(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=U&&r(e.options.event+oe(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=N},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(N|ut)))return!1;t++}return!0},recognize:function(t){var e=P({},t);if(!yt(this.options.enable,[this,e])){this.reset(),this.state=N;return}this.state&(M|j|N)&&(this.state=ut),this.state=this.process(e),this.state&(I|F|U|j)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function oe(t){return t&j?"cancel":t&U?"end":t&F?"move":t&I?"start":""}function ce(t){return t==B?"down":t==Z?"up":t==G?"left":t==z?"right":""}function ht(t,e){var i=e.manager;return i?i.get(t):t}function _(){D.apply(this,arguments)}g(_,D,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(I|F),n=this.attrTest(t);return r&&(i&T||!n)?e|j:r||n?i&h?e|U:e&I?e|F:I:N}});function ft(){_.apply(this,arguments),this.pX=null,this.pY=null}g(ft,_,{defaults:{event:"pan",threshold:10,pointers:1,direction:zt},getTouchAction:function(){var t=this.options.direction,e=[];return t&A&&e.push(Q),t&H&&e.push(J),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,n=t.direction,s=t.deltaX,c=t.deltaY;return n&e.direction||(e.direction&A?(n=s===0?nt:s<0?G:z,i=s!=this.pX,r=Math.abs(t.deltaX)):(n=c===0?nt:c<0?Z:B,i=c!=this.pY,r=Math.abs(t.deltaY))),t.direction=n,i&&r>e.threshold&&n&e.direction},attrTest:function(t){return _.prototype.attrTest.call(this,t)&&(this.state&I||!(this.state&I)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=ce(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Ot(){_.apply(this,arguments)}g(Ot,_,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Y]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&I)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Ct(){D.apply(this,arguments),this._timer=null,this._input=null}g(Ct,D,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ae]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(h|T)&&!n)this.reset();else if(t.eventType&p)this.reset(),this._timer=gt(function(){this.state=M,this.tryEmit()},e.time,this);else if(t.eventType&h)return M;return N},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===M&&(t&&t.eventType&h?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}});function Mt(){_.apply(this,arguments)}g(Mt,_,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Y]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&I)}});function Dt(){_.apply(this,arguments)}g(Dt,_,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:A|H,pointers:1},getTouchAction:function(){return ft.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(A|H)?i=t.overallVelocity:e&A?i=t.overallVelocityX:e&H&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&S(i)>this.options.velocity&&t.eventType&h},emit:function(t){var e=ce(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function vt(){D.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}g(vt,D,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[At]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&p&&this.count===0)return this.failTimeout();if(r&&n&&i){if(t.eventType!=h)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,c=!this.pCenter||at(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!c||!s?this.count=1:this.count+=1,this._input=t;var f=this.count%e.taps;if(f===0)return this.hasRequireFailures()?(this._timer=gt(function(){this.state=M,this.tryEmit()},e.interval,this),I):M}return N},failTimeout:function(){return this._timer=gt(function(){this.state=N},this.options.interval,this),N},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==M&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function L(t,e){return e=e||{},e.recognizers=kt(e.recognizers,L.defaults.preset),new Lt(t,e)}L.VERSION="2.0.7",L.defaults={domEvents:!1,touchAction:se,enable:!0,inputTarget:null,inputClass:null,preset:[[Mt,{enable:!1}],[Ot,{enable:!1},["rotate"]],[Dt,{direction:A}],[ft,{direction:A},["swipe"]],[vt],[vt,{event:"doubletap",taps:2},["tap"]],[Ct]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ke=1,le=2;function Lt(t,e){this.options=P({},L.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Ce(this),this.touchAction=new Nt(this,this.options.touchAction),ue(this,!0),C(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}Lt.prototype={set:function(t){return P(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?le:Ke},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&M)&&(n=e.curRecognizer=null);for(var s=0;s<r.length;)i=r[s],e.stopped!==le&&(!n||i==n||i.canRecognizeWith(n))?i.recognize(t):i.reset(),!n&&i.state&(I|F|U)&&(n=e.curRecognizer=i),s++}},get:function(t){if(t instanceof D)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(X(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(X(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=k(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==l&&e!==l){var i=this.handlers;return C(et(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==l){var i=this.handlers;return C(et(t),function(r){e?i[r]&&i[r].splice(k(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&$e(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&ue(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ue(t,e){var i=t.element;if(i.style){var r;C(t.options.cssProps,function(n,s){r=rt(i.style,s),e?(t.oldCssProps[r]=i.style[r],i.style[r]=n):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function $e(t,e){var i=u.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}P(L,{INPUT_START:p,INPUT_MOVE:q,INPUT_END:h,INPUT_CANCEL:T,STATE_POSSIBLE:ut,STATE_BEGAN:I,STATE_CHANGED:F,STATE_ENDED:U,STATE_RECOGNIZED:M,STATE_CANCELLED:j,STATE_FAILED:N,DIRECTION_NONE:nt,DIRECTION_LEFT:G,DIRECTION_RIGHT:z,DIRECTION_UP:Z,DIRECTION_DOWN:B,DIRECTION_HORIZONTAL:A,DIRECTION_VERTICAL:H,DIRECTION_ALL:zt,Manager:Lt,Input:y,TouchAction:Nt,TouchInput:ct,MouseInput:ot,PointerEventInput:St,TouchMouseInput:Pt,SingleTouchInput:te,Recognizer:D,AttrRecognizer:_,Tap:vt,Pan:ft,Swipe:Dt,Pinch:Ot,Rotate:Mt,Press:Ct,on:$,off:tt,each:C,merge:Ee,extend:Xt,assign:P,inherit:g,bindFn:Et,prefixed:rt});var ti=typeof a<"u"?a:typeof self<"u"?self:{};ti.Hammer=L,typeof l=="function"&&l.amd?l(function(){return L}):o.exports?o.exports=L:a[d]=L})(window,document,"Hammer")})(me);const he=me.exports,fi=document.querySelectorAll(".hero-slide"),vi=document.querySelectorAll(".hero-pagination-item"),di=document.querySelector(".hero-section"),pi=document.querySelectorAll(".image-card-link");pi.forEach(o=>{o.addEventListener("click",function(a){a.preventDefault();const d=o.closest(".hero-slide").getAttribute("data-mod"),l="./page-2.html";switch(d){case"blue":localStorage.setItem("searchValue","Black Panther"),window.location.href=l;break;case"green":localStorage.setItem("searchValue","Hulk"),window.location.href=l;break;case"bordo":localStorage.setItem("searchValue","Spider-Man"),window.location.href=l;break;default:itemsOnPage=8;break}})});const Te=Array.from(fi),ge=Array.from(vi);let E=0;function qt(o){Te.forEach((a,u)=>{if(u===o){const d=a.dataset.mod;a.classList.remove("visually-hidden"),di.dataset.mod=d}else a.classList.add("visually-hidden")})}function Ht(o){ge.forEach((a,u)=>{u===o?a.classList.add("active"):a.classList.remove("active")})}function mi(){bt(),qt(E),Ht(E)}ge.forEach(o=>{o.addEventListener("click",()=>{E=+o.dataset.index,qt(E),Ht(E)})});Te.forEach(o=>{const a=new he(o);a.get("swipe").set({direction:he.DIRECTION_ALL}),a.on("swipeleft swiperight swipeup swipedown",u=>{const d=window.innerWidth;d>767&&d<1399?u.type==="swipeleft"?bt():u.type==="swiperight"&&fe():u.type==="swipeup"?bt():u.type==="swipedown"&&fe(),qt(E),Ht(E)})});function bt(){E===2?E=0:E++}function fe(){E===0?E=2:E--}setInterval(mi,5e3);