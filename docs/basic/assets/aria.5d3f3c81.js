
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
const e=e=>Array.from(e.querySelectorAll('a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])')).filter((e=>t(e)&&(e=>"fixed"!==getComputedStyle(e).position&&null!==e.offsetParent)(e))),t=e=>{if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return!("hidden"===e.type||"file"===e.type);case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},n=function(e,t,...n){let r;r=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const i=document.createEvent(r);return i.initEvent(t,...n),e.dispatchEvent(i),e},r=e=>!e.getAttribute("aria-owns"),i=(e,t,n)=>{const{parentNode:r}=e;if(!r)return null;const i=r.querySelectorAll(n);return i[Array.prototype.indexOf.call(i,e)+t]||null},a=e=>{e&&(e.focus(),!r(e)&&e.click())};export{a as f,i as g,r as i,e as o,n as t};
