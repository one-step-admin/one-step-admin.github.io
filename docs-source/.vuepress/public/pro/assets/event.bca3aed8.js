
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
const e=(e,n,t,o=!1)=>{e&&n&&t&&(null==e||e.addEventListener(n,t,o))},n=(e,n,t,o=!1)=>{e&&n&&t&&(null==e||e.removeEventListener(n,t,o))},t=(t,o,s)=>{const l=function(...e){s&&s.apply(this,e),n(t,o,l)};e(t,o,l)},o=(e,n,{checkForDefaultPrevented:t=!0}={})=>o=>{const s=null==e?void 0:e(o);if(!1===t||!s)return null==n?void 0:n(o)},s=e=>n=>"mouse"===n.pointerType?e(n):void 0;export{n as a,t as b,o as c,e as o,s as w};
