import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as l}from"./assets/vendor-77e16229.js";const e=document.querySelector("button[data-start]"),i=document.querySelector("#datetime-picker"),y=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),b=document.querySelector("span[data-minutes]"),D=document.querySelector("span[data-seconds]"),m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){m.defaultDate>=t[0]?(e.disabled=!0,l.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):(e.disabled=!1,l.success({title:"OK",message:'You can press "Start"!',position:"topRight"}))}};p("#datetime-picker",m);function g(t){const o=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:n,minutes:s,seconds:u}}const a=t=>t.toString().padStart(2,"0");e.addEventListener("click",q);function q(){e.disabled=!0,i.disabled=!0;const t=setInterval(()=>{const c=new Date,d=new Date(i.value)-c,{days:r,hours:o,minutes:n,seconds:s}=g(d);y.textContent=a(r),S.textContent=a(o),b.textContent=a(n),D.textContent=a(s),[r,o,n,s].every(f=>f===0)&&(clearInterval(t),i.disabled=!1,e.disabled=!1)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
