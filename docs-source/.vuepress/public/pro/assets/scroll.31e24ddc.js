
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{g as e}from"./style.4190b2a5.js";import{au as t}from"./index.05e4ed9f.js";const o=(o,r)=>{if(!t)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(r)],s=e(o,n);return["scroll","auto","overlay"].some((e=>s.includes(e)))},r=(e,r)=>{if(!t)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(o(n,r))return n;n=n.parentNode}return n};let n;const s=()=>{var e;if(!t)return 0;if(void 0!==n)return n;const o=document.createElement("div");o.className="el-scrollbar__wrap",o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const r=o.offsetWidth;o.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",o.appendChild(s);const l=s.offsetWidth;return null==(e=o.parentNode)||e.removeChild(o),n=r-l,n};function l(e,o){if(!t)return;if(!o)return void(e.scrollTop=0);const r=[];let n=o.offsetParent;for(;null!==n&&e!==n&&e.contains(n);)r.push(n),n=n.offsetParent;const s=o.offsetTop+r.reduce(((e,t)=>e+t.offsetTop),0),l=s+o.offsetHeight,i=e.scrollTop,f=i+e.clientHeight;s<i?e.scrollTop=s:l>f&&(e.scrollTop=l-e.clientHeight)}export{r as a,s as g,l as s};
