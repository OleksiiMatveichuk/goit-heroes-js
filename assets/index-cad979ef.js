import{a as s,l as g}from"./index-7924ca72.js";function h(){const e=document.body,t=p();e.insertAdjacentHTML("beforebegin",t),document.querySelector(".bacground-modal").addEventListener("click",f),console.log(t)}function p(){return`
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
    
    `}function f(e){console.log("e.target ",e.target.classList.value),e.target.classList.value==="bacground-modal"&&document.querySelector(".bacground-modal").remove()}const d=[],u=document.querySelector(".random-list"),y=document.querySelector(".allCharactersBtn");y.addEventListener("click",h);const v=document.querySelector(".random-img");u.addEventListener("click",b);async function w(e){const t=await s.getAllCharacters(e);return d.push(t.results),t}function L({resourceURI:e}){v.src=`${e}`}function b(e){if(e.target.tagName!=="UL"){let t=document.querySelectorAll("li");const a=e.target.closest("li").id,n=d.find(o=>o[0].id===Number(a));L(n[0]),t.forEach(o=>{let c=document.querySelector(".random-item.active");o.querySelector("p"),c&&c.classList.remove("active"),e.target.closest("li").classList.add("active")})}}function S(e){return`
    <li class='random-item' id=${e[0].id}>
  
       <h3 class='random-value-name hero-name'>${e[0].name}</h3>
       <p class='random-value-text'>${e[0].description}</p>
    </li>
    `}function q(e){return e.map(t=>S(t.results)).join("")}async function k(){const e=[];for(let t=0;t<5;t+=1)new Promise(a=>{const n=w({limit:1,offset:Math.round(Math.random()*1561)});e.push(n)});Promise.all(e).then(t=>{M(t)}).catch(t=>console.log("ERR",t))}function M(e){const t=q(e);u.innerHTML=t}k();const E=e=>`<li class="gallery-item" [data-id = ${e.id}]>
   <a class="gallery-link" href="#">
      <img class="gallery-image" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.description}" />
      <p class="hero-name">${e.name}</p>
   </a>
</li>`,C=e=>e.map(E).join(""),r=document.querySelector(".header-input");console.log("Run header.js");r.addEventListener("click",()=>{r.select()});r.addEventListener("input",g($,500));async function $(){const e=this.value.trim();if(e.length<2){this.setAttribute("list","");return}const a=(await s.getAllCharacters({nameStartsWith:e})).results,n=document.createElement("datalist");n.id="search-results",a.forEach(c=>{const i=document.createElement("option");i.value=c.name,n.appendChild(i)});const o=document.querySelector("#search-results");o?o.replaceWith(n):this.after(n),this.setAttribute("list","search-results")}const A=document.querySelector(".container");let I=window.getComputedStyle(A).width,l=null;switch(I){case"375px":l=5;break;case"100%":l=5;break;case"1440px":l=16;break;default:l=8;break}window.addEventListener("load",async()=>{if(window.location.pathname.includes("page-2.html")){const e=localStorage.getItem("searchValue");if(e){const a=document.querySelector(".header-input");a.value=e}const t=document.querySelector(".gallery");t.innerHTML="",t.innerHTML=await m(e||"")}});const H=document.querySelector("#search-form");H.addEventListener("submit",async e=>{e.preventDefault();let t=r.value.trim();const a="./page-2.html";if(window.location.href===window.location.origin+"/"||window.location.pathname.includes("index.html"))localStorage.setItem("searchValue",t),window.location.href=a;else if(window.location.pathname.includes("page-2.html")){t=r.value;const n=document.querySelector(".gallery");n.innerHTML="",console.log("input",t),n.innerHTML=await m(t),localStorage.removeItem("searchValue")}});async function m(e){try{console.log("itemsOnPage=",l);const t=await s.getAllCharacters({nameStartsWith:e,limit:l}),a=t.results;if(console.log(t),console.log(a),a.length===0){console.log("NOT FOUND!!!!");return}return C(a)}catch(t){console.log(t)}}
