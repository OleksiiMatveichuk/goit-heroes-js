import{a as s,l as g}from"./index-7924ca72.js";function f(e){e.preventDefault();const t=document.body,a=p();t.insertAdjacentHTML("beforebegin",a),document.querySelector(".bacground-modal").addEventListener("click",y)}function p(){return`
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
    
    `}function y(e){console.log("e.target ",e.target.classList.value),e.target.classList.value==="bacground-modal"&&document.querySelector(".bacground-modal").remove()}const d=[],u=document.querySelector(".random-list"),v=document.querySelector(".random-img"),m=document.querySelector(".form-random");m.addEventListener("submit",f);m.addEventListener("click",w);u.addEventListener("click",S);function w(e){}async function L(e){const t=await s.getAllCharacters(e);return d.push(t.results),t}function b({resourceURI:e}){v.src=`${e}`}function S(e){if(e.target.tagName!=="UL"){let t=document.querySelectorAll("li");const a=e.target.closest("li").id,n=d.find(o=>o[0].id===Number(a));n[0],b(n[0]),t.forEach(o=>{let c=document.querySelector(".random-item.active");o.querySelector("p"),c&&c.classList.remove("active"),e.target.closest("li").classList.add("active")})}}function q(e){return`
    <li class='random-item' id=${e[0].id} data-id=${e[0].id} >
  
       <h3 class='random-value-name hero-name' data-name>${e[0].name}</h3>
       <p class='random-value-text' data-description>${e[0].description}</p>
    </li>
    `}function k(e){return e.map(t=>q(t.results)).join("")}async function M(){const e=[];for(let t=0;t<5;t+=1)new Promise(a=>{const n=L({limit:1,offset:Math.round(Math.random()*1561)});e.push(n)});Promise.all(e).then(t=>{E(t)}).catch(t=>console.log("ERR",t))}function E(e){e[0].results[0];const t=k(e);u.innerHTML=t}M();const $=e=>`<li class="gallery-item" [data-id = ${e.id}]>
   <a class="gallery-link" href="#">
      <img class="gallery-image" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.description}" />
      <p class="hero-name">${e.name}</p>
   </a>
</li>`,C=e=>e.map($).join(""),l=document.querySelector(".header-input");console.log("Run header.js");l.addEventListener("click",()=>{l.select()});l.addEventListener("input",g(A,500));async function A(){const e=this.value.trim();if(e.length<2){this.setAttribute("list","");return}const a=(await s.getAllCharacters({nameStartsWith:e})).results,n=document.createElement("datalist");n.id="search-results",a.forEach(c=>{const i=document.createElement("option");i.value=c.name,n.appendChild(i)});const o=document.querySelector("#search-results");o?o.replaceWith(n):this.after(n),this.setAttribute("list","search-results")}const I=document.querySelector(".container");let H=window.getComputedStyle(I).width,r=null;switch(H){case"375px":r=5;break;case"100%":r=5;break;case"1440px":r=16;break;default:r=8;break}window.addEventListener("load",async()=>{if(window.location.pathname.includes("page-2.html")){const e=localStorage.getItem("searchValue");if(e){const a=document.querySelector(".header-input");a.value=e}const t=document.querySelector(".gallery");t.innerHTML="",t.innerHTML=await h(e||"")}});const T=document.querySelector("#search-form");T.addEventListener("submit",async e=>{e.preventDefault();let t=l.value.trim();const a="./page-2.html";if(window.location.href===window.location.origin+"/"||window.location.pathname.includes("index.html"))localStorage.setItem("searchValue",t),window.location.href=a;else if(window.location.pathname.includes("page-2.html")){t=l.value;const n=document.querySelector(".gallery");n.innerHTML="",console.log("input",t),n.innerHTML=await h(t),localStorage.removeItem("searchValue")}});async function h(e){try{console.log("itemsOnPage=",r);const t=await s.getAllCharacters({nameStartsWith:e,limit:r}),a=t.results;if(console.log(t),console.log(a),a.length===0){console.log("NOT FOUND!!!!");return}return C(a)}catch(t){console.log(t)}}
