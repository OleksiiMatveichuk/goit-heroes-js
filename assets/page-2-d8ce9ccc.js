import{l as q,c as k,a as L,b as C,r as N}from"./header-fe94575d.js";async function P(t,a){let e=Math.ceil(a/t);document.createElement("div").classList.add("my-pagination");const s=await x(),m=await w(s.join(""));function c(r){return`<bitton class="pagination-number" page-index=${r} aria-label='Page ${r}'>${r}</bitton>`}async function x(r){let h=[];for(let g=1;g<=e;g++)h.push(c(g));return h}async function w(r){return`
        <nav class="pagination-container">
      <button class="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page">
       &lt;
      </button>
  
      <div id="pagination-numbers">

     ${r}

     </div>
  
     <button class="pagination-button" id="next-button" title="Next page" aria-label="Next page">
      &gt;
     </button>
   </nav>`}return m}const D=document.querySelector(".filter-form"),u=document.querySelector('[name="order"]'),d=document.querySelector(".listbox");let p=!1;const $=Array.from(u.children);$.forEach(t=>{const a=t.value,e=t.textContent;I(a,e)});u.addEventListener("click",t=>{p?b():(d.classList.remove("visually-hidden"),p=!0)});function I(t,a){const e=document.createElement("button");e.classList.add("listbox-item"),e.dataset.value=t,e.textContent=a,e.type="button",e.addEventListener("click",()=>{u.value=t,D.dispatchEvent(new Event("change")),b()}),d.append(e)}function b(){d.classList.add("visually-hidden"),p=!1}document.addEventListener("click",t=>{const a=t.target;!d.contains(a)&&!u.contains(a)&&b()});const T=document.querySelector(".filter-form");let A=document.querySelector('[name="comic"]'),l=document.querySelector('[name="name"]'),_=document.querySelector('[name="order"]'),E=document.querySelector('[name="date"]');const o=document.querySelector(".gallery");o.addEventListener("click",V);let f=null,y="";y+=`<option>All Years</option>
<option class="defolt-options">-----------</option>`;for(let t=1939;t<=2023;t++)y+=`<option>${t}</option>`;E.insertAdjacentHTML("beforeend",y);E.addEventListener("change",M);async function M(t){t.preventDefault,t.target.value==="All Years"?f=null:f=t.target.value}A.addEventListener("input",function(t){const a=t.target,e=a.value;/^\d*$/.test(e)||(a.value=e.replace(/\D/g,""))});l.addEventListener("input",function(t){const a=t.target,e=a.value;/^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/.test(e)||(a.value=e.replace(/[^a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,""))});const S=document.querySelector(".header-input");S.addEventListener("input",q(B,500));async function B(){const t=this.value.trim();if(t.length<2){this.setAttribute("list","");return}const e=(await L.getAllCharacters({nameStartsWith:t})).results,n=document.createElement("datalist");n.id="search-results",e.forEach(m=>{const c=document.createElement("option");c.value=m.name,n.appendChild(c)});const s=document.querySelector("#search-results");s?s.replaceWith(n):this.after(n),this.setAttribute("list","search-results")}const H=document.querySelector(".container");let v=window.getComputedStyle(H).width,i=null;parseInt(v,10)<375&&(v="100");switch(v){case"375px":i=4;break;case"100":i=4;break;case"1440px":i=16;break;default:i=8;break}o.setAttribute("data-limits",i);console.log("Run all_charaster");async function O(){try{const t=_.value.toLowerCase(),a=o.dataset.offset,e=await L.getAllCharacters({nameStartsWith:l.value,limit:i,offset:a,comics:A.value,orderBy:t,modifiedSince:"01/01/"+f});console.log("Data after request",e);const n=e.results;return o.setAttribute("data-total",e.total),o.setAttribute("data-offset",e.offset),n.length===0?(console.log("NOT FOUND!!!! script all_caharasters_filter"),C()):N(n)}catch(t){console.log(t)}}T.addEventListener("change",async t=>{t.preventDefault(),localStorage.setItem("searchValue",l.value),S.value=l.value,o.innerHTML="",o.innerHTML=await O(),await W(),document.getElementById("pagination-numbers").addEventListener("click",j)});function V(t){if(t.target.classList.value==="gallery-image"){const a=Number(t.target.closest("li").dataset.id);k(a,"")}}async function W(){const e=await P(6,78);console.log(e),o.insertAdjacentHTML("afterend",e)}function j(t){const a=t.target,e=Number(a.getAttribute("page-index"));document.querySelectorAll(".pagination-number").forEach(n=>{n.classList.remove("active"),Number(n.getAttribute("page-index"))==e&&n.classList.add("active")})}
