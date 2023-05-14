import{a as l,l as u}from"./index-7924ca72.js";function m(){const e=document.body,t=g();e.insertAdjacentHTML("beforebegin",t),document.querySelector(".bacground-modal").addEventListener("click",h),console.log(t)}function g(){return`
    <div class='bacground-modal'> 
    <section class='modal-window'>
    
    <div class'container-modal'>
    <button class='close-modal-btn'>X</button>
    </div>
    <div class='img-info'>
    <img src='../images/remove_img/modal1-img.jpg' alt='amg' width='295'>
    
    </div>
    </section>
    </div>
    
    `}function h(e){console.log("e.target ",e.target.classList.value),e.target.classList.value==="bacground-modal"&&document.querySelector(".bacground-modal").remove()}const i=[],d=document.querySelector(".random-list"),f=document.querySelector(".allCharactersBtn");f.addEventListener("click",m);const p=document.querySelector(".random-img");d.addEventListener("click",L);async function v(e){const t=await l.getAllCharacters(e);return i.push(t.results),t}function y({resourceURI:e}){p.src=`${e}`}function L(e){if(e.target.tagName!=="UL"){let t=document.querySelectorAll("li");const n=e.target.closest("li").id,o=i.find(s=>s[0].id===Number(n));y(o[0]),t.forEach(s=>{let a=document.querySelector(".random-item.active");s.querySelector("p"),a&&a.classList.remove("active"),e.target.closest("li").classList.add("active")})}}function b(e){return`
    <li class='random-item' id=${e[0].id}>
       <h3 class='random-value-name hero-name'>${e[0].name}</h3>
       <p class='random-value-text'>${e[0].description}</p>
    </li>
    `}function q(e){return console.log("DATA",e),e.map(t=>b(t.results)).join("")}async function S(){const e=[];for(let t=0;t<5;t+=1)new Promise(n=>{const o=v({limit:1,offset:Math.round(Math.random()*1561)});console.log("result",o),e.push(o)});console.log("promiseArray",e),Promise.all(e).then(t=>{console.log("XXX",t),E(t)}).catch(t=>console.log("ERR",t))}function E(e){console.log("tyt");const t=q(e);console.log("markup",t),d.innerHTML=t}S();const c=document.querySelector(".header-input");console.log("Run header.js");c.addEventListener("click",()=>{c.select()});c.addEventListener("input",u(k,500));async function k(){const e=this.value.trim();if(e.length<2){this.setAttribute("list","");return}const n=(await l.getAllCharacters({nameStartsWith:e})).results,o=document.createElement("datalist");o.id="search-results",n.forEach(a=>{const r=document.createElement("option");r.value=a.name,o.appendChild(r)});const s=document.querySelector("#search-results");s?s.replaceWith(o):this.after(o),this.setAttribute("list","search-results")}const A=document.querySelector("#search-form");A.addEventListener("submit",e=>{e.preventDefault();const n=`../page-2.html?searchQuery=${c.value.trim()}`;window.location.href=n});
