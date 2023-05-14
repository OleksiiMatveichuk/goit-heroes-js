import{a as i,l as u}from"./index-7924ca72.js";function m(){const t=document.body,e=h();t.insertAdjacentHTML("beforebegin",e),document.querySelector(".bacground-modal").addEventListener("click",g),console.log(e)}function h(){return`
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
    
    `}function g(t){console.log("e.target ",t.target.classList.value),t.target.classList.value==="bacground-modal"&&document.querySelector(".bacground-modal").remove()}const l=[],d=document.querySelector(".random-list"),f=document.querySelector(".allCharactersBtn");f.addEventListener("click",m);const v=document.querySelector(".random-img");d.addEventListener("click",L);async function p(t){const e=await i.getAllCharacters(t);return l.push(e.results),e}function y({resourceURI:t}){v.src=`${t}`}function L(t){if(t.target.tagName!=="UL"){let e=document.querySelectorAll("li");const o=t.target.closest("li").id,a=l.find(n=>n[0].id===Number(o));y(a[0]),e.forEach(n=>{let s=document.querySelector(".random-item.active");n.querySelector("p"),s&&s.classList.remove("active"),t.target.closest("li").classList.add("active")})}}function b(t){return`
    <li class='random-item' id=${t[0].id}>
  
       <h3 class='random-value-name hero-name'>${t[0].name}</h3>
       <p class='random-value-text'>${t[0].description}</p>
    </li>
    `}function q(t){return t.map(e=>b(e.results)).join("")}async function S(){const t=[];for(let e=0;e<5;e+=1)new Promise(o=>{const a=p({limit:1,offset:Math.round(Math.random()*1561)});t.push(a)});Promise.all(t).then(e=>{E(e)}).catch(e=>console.log("ERR",e))}function E(t){const e=q(t);d.innerHTML=e}S();const r=document.querySelector(".header-input");console.log("Run header.js");r.addEventListener("click",()=>{r.select()});r.addEventListener("input",u(M,500));async function M(){const t=this.value.trim();if(t.length<2){this.setAttribute("list","");return}const o=(await i.getAllCharacters({nameStartsWith:t})).results,a=document.createElement("datalist");a.id="search-results",o.forEach(s=>{const c=document.createElement("option");c.value=s.name,a.appendChild(c)});const n=document.querySelector("#search-results");n?n.replaceWith(a):this.after(a),this.setAttribute("list","search-results")}const k=document.querySelector("#search-form");k.addEventListener("submit",t=>{t.preventDefault();const o=`../page-2.html?searchQuery=${r.value.trim()}`;window.location.href=o});
