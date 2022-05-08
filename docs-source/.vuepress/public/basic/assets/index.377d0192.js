
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{ap as e,aG as t,T as o,g as n}from"./index.1b2a4798.js";const r=(o,n)=>{if(!e)return!1;const r={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],s=t(o,r);return["scroll","auto","overlay"].some((e=>s.includes(e)))},s=(t,o)=>{if(!e)return;let n=t;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(r(n,o))return n;n=n.parentNode}return n};let l;const i=()=>{var t;if(!e)return 0;if(void 0!==l)return l;const o=document.createElement("div");o.className="el-scrollbar__wrap",o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",o.appendChild(r);const s=r.offsetWidth;return null==(t=o.parentNode)||t.removeChild(o),l=n-s,l};function c(t,o){if(!e)return;if(!o)return void(t.scrollTop=0);const n=[];let r=o.offsetParent;for(;null!==r&&t!==r&&t.contains(r);)n.push(r),r=r.offsetParent;const s=o.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),l=s+o.offsetHeight,i=t.scrollTop,c=i+t.clientHeight;s<i?t.scrollTop=s:l>c&&(t.scrollTop=l-t.clientHeight)}const f=({from:e,replacement:t,scope:r,version:s,ref:l,type:i="API"},c)=>{o((()=>n(c)),(e=>{}),{immediate:!0})};export{s as a,i as g,c as s,f as u};
