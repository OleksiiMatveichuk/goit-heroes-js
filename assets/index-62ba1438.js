import{a as r,l as y}from"./index-7924ca72.js";function k(){const e=document.body,t=L();e.insertAdjacentHTML("afterbegin",t),document.querySelector(".bacground-modal").addEventListener("click",h),document.querySelector(".close-modal-btn").addEventListener("click",h)}function L(){return`
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
          src="../images/remove_img/modal1-img.jpg"
          alt="amg"
          width="295"
        />

        <ul class="img-list">
          <li>
            <img
              class="img-list-item"
              src="../images/remove_img/modal1.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="../images/remove_img/modal2.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="../images/remove_img/modal3.jpg"
              alt="img"
              width="80"
            />
          </li>
        </ul>
      </div>

     <div class="black-widow">
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">Black Widow</h4>
    <p class="black-widow-info-data">July 9, 2021</p>
  </div>
  <p class="black-widow-content">
    A deadly assassin is closing in on Natasha Romanoff. Now Natasha must
    reunite with an unlikely group of spies from her past in order to survive
    and stop a lethal force from being unleashed on the world.
  </p>
  <h4 class="black-widow-list-text">List of comics</h4>

  <ul class="black-widow-list">
    <li class="black-widow-list-item">
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="../images/remove_img/card1.jpg"
          alt="img"
          width="263"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">Black Widow (2020)</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
    <li class="black-widow-list-item">
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="../images/remove_img/card2.jpg"
          alt="img"
          width="263"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">Black Widow (2020)</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
    <li class="black-widow-list-item">
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="../images/remove_img/card3.jpg"
          alt="img"
          width="263"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">Black Widow (2020)</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
  </ul>
</div> 

</div>
    </div>
  </section>
</div>
    
    `}function h(e){if(console.log("e.target ",e.target.classList.value),e.target.classList.value==="bacground-modal"||e.target.classList.value==="close-modal-btn"){const t=document.querySelector(".bacground-modal");t==null||t.remove()}}const n=[],v=document.querySelector(".random-list"),S=document.querySelector(".allCharactersBtn");S.addEventListener("click",m);const p=document.querySelector(".random-img"),q=document.querySelector(".form-random");q.addEventListener("click",E);v.addEventListener("click",M);p.addEventListener("click",()=>{k(),m()});let d,w=null;function m(){clearInterval(d)}function E(e){}async function I(e){const t=await r.getAllCharacters(e);return n.push(t.results),t}function u(e){p.src=`${e.thumbnail.path}.${e.thumbnail.extension}`}function M(e){if(d&&(m(),w||(w=setTimeout(()=>{f()},3500))),e.target.tagName!=="UL"){let t=document.querySelectorAll(".random-item");const a=e.target.closest("li").id,i=n.find(s=>s[0].id===Number(a));i[0],u(i[0]),t.forEach(s=>{let o=document.querySelector(".random-item.active");o&&o.classList.remove("active"),e.target.closest("li").classList.add("active")})}}function f(){let e=0;d=setInterval(()=>{x(e),e+=1,e===5&&(e=0)},3500)}function x(e){let t=document.querySelectorAll(".random-item"),a=document.querySelector(".random-item.active");a&&a.classList.remove("active"),t[e].classList.add("active"),u(n[e][0])}function $(e){return`
    <li class='random-item' id=${e[0].id} data-id=${e[0].id} >

       <h3 class='random-value-name hero-name' data-name>${e[0].name}</h3>
       <p class='random-value-text' data-description>${e[0].description}</p>
    </li>
    `}function j(e){return e.map(t=>$(t.results)).join("")}async function C(){const e=[];for(let t=0;t<5;t+=1)new Promise(a=>{const i=I({limit:1,offset:Math.round(Math.random()*1561)});e.push(i)});Promise.all(e).then(t=>{T(t)}).catch(t=>console.log("ERR",t))}function T(e){e[0].results[0];const t=j(e);v.innerHTML=t,u(n[0][0]),f()}C();const _=e=>`<li class="gallery-item" [data-id = ${e.id}]>
   <a class="gallery-link" href="#">
      <img class="gallery-image" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.description}" />
      <p class="hero-name">${e.name}</p>
   </a>
</li>`,A=e=>e.map(_).join(""),c=document.querySelector(".header-input");console.log("Run header.js");c.addEventListener("click",()=>{c.select()});c.addEventListener("input",y(N,500));async function N(){const e=this.value.trim();if(e.length<2){this.setAttribute("list","");return}const a=(await r.getAllCharacters({nameStartsWith:e})).results,i=document.createElement("datalist");i.id="search-results",a.forEach(o=>{const g=document.createElement("option");g.value=o.name,i.appendChild(g)});const s=document.querySelector("#search-results");s?s.replaceWith(i):this.after(i),this.setAttribute("list","search-results")}const W=document.querySelector(".container");let H=window.getComputedStyle(W).width,l=null;switch(H){case"375px":l=5;break;case"100%":l=5;break;case"1440px":l=16;break;default:l=8;break}window.addEventListener("load",async()=>{if(window.location.pathname.includes("page-2.html")){const e=localStorage.getItem("searchValue");if(e){const a=document.querySelector(".header-input");a.value=e}const t=document.querySelector(".gallery");t.innerHTML="",t.innerHTML=await b(e||"")}});const B=document.querySelector("#search-form");B.addEventListener("submit",async e=>{e.preventDefault();let t=c.value.trim();const a="./page-2.html";if(window.location.href===window.location.origin+"/"||window.location.pathname.includes("index.html"))localStorage.setItem("searchValue",t),window.location.href=a;else if(window.location.pathname.includes("page-2.html")){t=c.value;const i=document.querySelector(".gallery");i.innerHTML="",console.log("input",t),i.innerHTML=await b(t),localStorage.removeItem("searchValue")}});async function b(e){try{console.log("itemsOnPage=",l);const t=await r.getAllCharacters({nameStartsWith:e,limit:l}),a=t.results;if(console.log(t),console.log(a),a.length===0){console.log("NOT FOUND!!!!");return}return A(a)}catch(t){console.log(t)}}
