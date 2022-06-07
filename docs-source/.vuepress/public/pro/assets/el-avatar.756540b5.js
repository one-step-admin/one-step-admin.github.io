
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{O as o,Q as l,af as i,P as p,d as u,V as f,r as v,C as y,T as m,ak as b,a8 as d,W as g,n as O,c as S,aa as j,f as h,i as k,w,ab as E,E as P,H as z,$ as _,a0 as x,ad as V}from"./index.0a5e3bc2.js";const $=o({size:{type:[Number,String],values:l,default:"",validator:e=>"number"==typeof e},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:i},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:p(String),default:"cover"}}),q={error:e=>e instanceof Event},A=["src","alt","srcset"],B=u((C=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&c(e,r,a[r]);if(s)for(var r of s(a))n.call(a,r)&&c(e,r,a[r]);return e})({},{name:"ElAvatar"}),a(C,r({props:$,emits:q,setup(e,{emit:a}){const r=e,s=f("avatar"),t=v(!1),n=y((()=>{const{size:e,icon:a,shape:t}=r,n=[s.b()];return m(e)&&n.push(s.m(e)),a&&n.push(s.m("icon")),t&&n.push(s.m(t)),n})),c=y((()=>{const{size:e}=r;return b(e)?s.cssVarBlock({size:d(e)||""}):void 0})),o=y((()=>({objectFit:r.fit})));function l(e){t.value=!0,a("error",e)}return g((()=>r.src),(()=>t.value=!1)),(e,a)=>(O(),S("span",{class:_(h(n)),style:j(h(c))},[!e.src&&!e.srcSet||t.value?e.icon?(O(),k(h(P),{key:1},{default:w((()=>[(O(),k(E(e.icon)))])),_:1})):z(e.$slots,"default",{key:2}):(O(),S("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:j(h(o)),onError:l},null,44,A))],6))}}))));var C;const D=V(x(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{D as E};
