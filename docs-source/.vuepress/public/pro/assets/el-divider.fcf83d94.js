
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{O as n,P as l,d as c,V as d,C as p,n as u,c as f,$ as v,f as b,H as y,j as m,aa as O,a0 as g,ad as j}from"./index.0a5e3bc2.js";const P=n({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:l(String),default:"solid"}}),S=c((h=((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&i(e,r,t[r]);return e})({},{name:"ElDivider"}),t(h,r({props:P,setup(e){const t=e,r=d("divider"),a=p((()=>r.cssVar({"border-style":t.borderStyle})));return(e,t)=>(u(),f("div",{class:v([b(r).b(),b(r).m(e.direction)]),style:O(b(a)),role:"separator"},[e.$slots.default&&"vertical"!==e.direction?(u(),f("div",{key:0,class:v([b(r).e("text"),b(r).is(e.contentPosition)])},[y(e.$slots,"default")],2)):m("v-if",!0)],6))}}))));var h;const w=j(g(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]));export{w as E};
