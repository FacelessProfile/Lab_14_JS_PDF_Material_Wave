(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=window.html2pdf;document.querySelector("#app").innerHTML=`
  <div id="resume" class="resume-container">
    <h1 class="editable" contenteditable="true">Your Name</h1>
    <h2 class="editable" contenteditable="true">Your Profficiency</h2>
    <p class="editable" contenteditable="true">Email: example@example.com</p>
    <p class="editable" contenteditable="true">Tel.:</p>
    <p class="editable" contenteditable="true">Skills:</p>
    <button id="downloadBtn">Скачать PDF</button>
  </div>
`;const a=document.getElementById("resume"),r=document.getElementById("downloadBtn");function d(o){const n=document.createElement("span");n.classList.add("ripple-effect");const i=r.getBoundingClientRect();n.style.left=`${o.clientX-i.left}px`,n.style.top=`${o.clientY-i.top}px`,r.appendChild(n),setTimeout(()=>n.remove(),600)}r.addEventListener("click",o=>{document.activeElement&&document.activeElement.blur(),d(o),r.style.display="none",setTimeout(()=>{c().set({margin:.5,filename:"resume.pdf",html2canvas:{scale:3},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}}).from(a).save().finally(()=>{r.style.display=""})},200)});
