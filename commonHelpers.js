/* empty css                      */import{f as h,i as f}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const i=document.querySelector("button[data-start]"),d=document.querySelector("#datetime-picker"),y=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),b=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]"),m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){m.defaultDate>=o[0]?(i.disabled=!0,f.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):(i.disabled=!1,f.success({title:"OK",message:'You can press "Start"!',class:"custom-iziToast",position:"topRight"}))}};h("#datetime-picker",m);function D(o){const t=Math.floor(o/864e5),r=Math.floor(o%864e5/36e5),a=Math.floor(o%864e5%36e5/6e4),l=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:r,minutes:a,seconds:l}}const c=o=>o.toString().padStart(2,"0");i.addEventListener("click",v);function v(){i.disabled=!0,d.disabled=!0;const o=setInterval(()=>{const n=new Date,s=new Date(d.value)-n,{days:e,hours:t,minutes:r,seconds:a}=D(s);y.textContent=c(e),g.textContent=c(t),b.textContent=c(r),S.textContent=c(a),[e,t,r,a].every(p=>p===0)&&(clearInterval(o),d.disabled=!1,i.disabled=!1)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
