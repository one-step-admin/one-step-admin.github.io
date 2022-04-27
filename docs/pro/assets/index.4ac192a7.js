
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{o as e,b as a}from"./event.bca3aed8.js";var t={beforeMount(t,o){let n,l=null;const r=()=>o.value&&o.value(),u=()=>{Date.now()-n<100&&r(),clearInterval(l),l=null};e(t,"mousedown",(e=>{0===e.button&&(n=Date.now(),a(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{t as R};
