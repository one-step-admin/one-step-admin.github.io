
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;import{O as l,af as o,d as c,V as d,n as f,c as p,i as u,w as b,ab as y,f as m,E as k,j as v,$ as O,H as g,a0 as j,ad as h}from"./index.0a5e3bc2.js";const w=l({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:o,default:""}}),E={click:e=>e instanceof MouseEvent},P=["href"],$=c((S=((e,a)=>{for(var s in a||(a={}))n.call(a,s)&&i(e,s,a[s]);if(t)for(var s of t(a))r.call(a,s)&&i(e,s,a[s]);return e})({},{name:"ElLink"}),a(S,s({props:w,emits:E,setup(e,{emit:a}){const s=e,t=d("link");function n(e){s.disabled||a("click",e)}return(e,a)=>(f(),p("a",{class:O([m(t).b(),m(t).m(e.type),m(t).is("disabled",e.disabled),m(t).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:n},[e.icon?(f(),u(m(k),{key:0},{default:b((()=>[(f(),u(y(e.icon)))])),_:1})):v("v-if",!0),e.$slots.default?(f(),p("span",{key:1,class:O(m(t).e("inner"))},[g(e.$slots,"default")],2)):v("v-if",!0),e.$slots.icon?g(e.$slots,"icon",{key:2}):v("v-if",!0)],10,P))}}))));var S;const _=h(j($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{_ as E};
