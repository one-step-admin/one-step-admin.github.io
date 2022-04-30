
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{I as n,M as l,d as c,J as d,C as p,o as u,c as b,a1 as v,i as f,H as y,k as m,ab as O,a2 as g,L as j}from"./index.b046d3e8.js";const P=n({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:l(String),default:"solid"}}),S=c((h=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(s)for(var r of s(t))a.call(t,r)&&i(e,r,t[r]);return e})({},{name:"ElDivider"}),t(h,r({props:P,setup(e){const t=e,r=d("divider"),s=p((()=>({"--el-border-style":t.borderStyle})));return(e,t)=>(u(),b("div",{class:v([f(r).b(),f(r).m(e.direction)]),style:O(f(s))},[e.$slots.default&&"vertical"!==e.direction?(u(),b("div",{key:0,class:v([f(r).e("text"),f(r).is(e.contentPosition)])},[y(e.$slots,"default")],2)):m("v-if",!0)],6))}}))));var h;const w=j(g(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]));export{w as E};
