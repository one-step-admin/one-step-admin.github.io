
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{au as t,by as s}from"./index.b046d3e8.js";const r=(t="")=>t.split(" ").filter((t=>!!t.trim())),e=(t,s)=>{if(!t||!s)return!1;if(s.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(s)},a=(t,s)=>{t&&s.trim()&&t.classList.add(...r(s))},i=(t,s)=>{t&&s.trim()&&t.classList.remove(...r(s))},n=(r,e)=>{var a;if(!t||!r||!e)return"";s(e);try{const t=r.style[e];if(t)return t;const s=null==(a=document.defaultView)?void 0:a.getComputedStyle(r,"");return s?s[e]:""}catch(i){return r.style[e]}};export{a,n as g,e as h,i as r};
