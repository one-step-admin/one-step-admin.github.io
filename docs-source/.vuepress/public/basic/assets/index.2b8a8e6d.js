
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{o as e,b as t}from"./event.561dcd8a.js";var a={beforeMount(a,o){let n,l=null;const r=()=>o.value&&o.value(),u=()=>{Date.now()-n<100&&r(),clearInterval(l),l=null};e(a,"mousedown",(e=>{0===e.button&&(n=Date.now(),t(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{a as R};
