
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{au as e,bs as t}from"./index.89c4a536.js";const o=(o,n)=>{if(!e)return!1;const r={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],s=t(o,r);return["scroll","auto","overlay"].some((e=>s.includes(e)))},n=(t,n)=>{if(!e)return;let r=t;for(;r;){if([window,document,document.documentElement].includes(r))return window;if(o(r,n))return r;r=r.parentNode}return r};let r;const s=()=>{var t;if(!e)return 0;if(void 0!==r)return r;const o=document.createElement("div");o.className="el-scrollbar__wrap",o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",o.appendChild(s);const l=s.offsetWidth;return null==(t=o.parentNode)||t.removeChild(o),r=n-l,r};function l(t,o){if(!e)return;if(!o)return void(t.scrollTop=0);const n=[];let r=o.offsetParent;for(;null!==r&&t!==r&&t.contains(r);)n.push(r),r=r.offsetParent;const s=o.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),l=s+o.offsetHeight,i=t.scrollTop,c=i+t.clientHeight;s<i?t.scrollTop=s:l>c&&(t.scrollTop=l-t.clientHeight)}export{n as a,s as g,l as s};
