
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{o as e,av as t,a3 as n,ay as o,d as r,r as s,X as a,W as c,f as u,a0 as d,A as f,T as i,H as p}from"./index.0a5e3bc2.js";let l=[];const v=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},m=(e,t)=>{for(const n of e)if(!E(n,t))return n},E=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},y=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function h(e,t){const n=[...e],o=e.indexOf(t);return-1!==o&&n.splice(o,1),n}const T=(()=>{let e=[];return{push:t=>{const n=e[0];n&&t!==n&&n.pause(),e=h(e,t),e.unshift(t)},remove:t=>{var n,o;e=h(e,t),null==(o=null==(n=e[0])?void 0:n.resume)||o.call(n)}}})(),L={cancelable:!0,bubbles:!1},b=Symbol("elFocusTrap");var w=d(r({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:["focusAfterTrapped","focusAfterReleased","focusin","focusout","focusout-prevented","release-requested"],setup(r,{emit:d}){const p=s();let E,h;(r=>{const s=e=>{const t=e;t.key===o.esc&&l.forEach((e=>e(t)))};e((()=>{0===l.length&&document.addEventListener("keydown",s),t&&l.push(r)})),n((()=>{l=l.filter((e=>e!==r)),0===l.length&&t&&document.removeEventListener("keydown",s)}))})((e=>{r.trapped&&!w.paused&&d("release-requested",e)}));const w={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},g=e=>{if(!r.loop&&!r.trapped)return;if(w.paused)return;const{key:t,altKey:n,ctrlKey:s,metaKey:a,currentTarget:c,shiftKey:u}=e,{loop:f}=r,i=t===o.tab&&!n&&!s&&!a,p=document.activeElement;if(i&&p){const t=c,[n,o]=(e=>{const t=v(e);return[m(t,e),m(t.reverse(),e)]})(t);n&&o?u||p!==o?u&&[n,t].includes(p)&&(e.preventDefault(),f&&y(o,!0),d("focusout-prevented")):(e.preventDefault(),f&&y(n,!0),d("focusout-prevented")):p===t&&(e.preventDefault(),d("focusout-prevented"))}};a(b,{focusTrapRef:p,onKeydown:g}),c((()=>r.focusTrapEl),(e=>{e&&(p.value=e)}),{immediate:!0}),c([p],(([e],[t])=>{e&&(e.addEventListener("keydown",g),e.addEventListener("focusin",N),e.addEventListener("focusout",S)),t&&(t.removeEventListener("keydown",g),t.removeEventListener("focusin",N),t.removeEventListener("focusout",S))}));const F=e=>{d("focusAfterTrapped",e)},K=e=>d("focusAfterReleased",e),N=e=>{const t=u(p);if(!t)return;const n=e.target,o=n&&t.contains(n);o&&d("focusin",e),w.paused||r.trapped&&(o?h=n:y(h,!0))},S=e=>{const t=u(p);if(!w.paused&&t)if(r.trapped)t.contains(e.relatedTarget)||y(h,!0);else{const n=e.target;n&&t.contains(n)||d("focusout",e)}};async function k(){await f();const e=u(p);if(e){T.push(w);const t=document.activeElement;E=t;if(!e.contains(t)){const n=new Event("focus-trap.focus-after-trapped",L);e.addEventListener("focus-trap.focus-after-trapped",F),e.dispatchEvent(n),n.defaultPrevented||f((()=>{let n=r.focusStartEl;i(n)||(y(n),document.activeElement!==n&&(n="first")),"first"===n&&((e,t=!1)=>{const n=document.activeElement;for(const o of e)if(y(o,t),document.activeElement!==n)return})(v(e),!0),document.activeElement!==t&&"container"!==n||y(e)}))}}}function I(){const e=u(p);if(e){e.removeEventListener("focus-trap.focus-after-trapped",F);const t=new Event("focus-trap.focus-after-released",L);e.addEventListener("focus-trap.focus-after-released",K),e.dispatchEvent(t),t.defaultPrevented||y(null!=E?E:document.body,!0),e.removeEventListener("focus-trap.focus-after-released",F),T.remove(w)}}return e((()=>{r.trapped&&k(),c((()=>r.trapped),(e=>{e?k():I()}))})),n((()=>{r.trapped&&I()})),{onKeydown:g}}}),[["render",function(e,t,n,o,r,s){return p(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{w as E,b as F};