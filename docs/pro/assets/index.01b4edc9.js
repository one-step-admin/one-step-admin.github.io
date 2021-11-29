
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as p}from"./index.2ac40c50.js";import{_ as g}from"./index.586a56ec.js";import{_ as i}from"./index.0947c737.js";import{x as c,o as r,y as s,z as o,_ as x,X as l,k as m,l as h,a4 as y,j as v,A as e}from"./vendor.6c58eadc.js";import{_ as C}from"./index.f02e00aa.js";const S={class:"num"},b={class:"tip"},j={props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(t){return(u,d)=>{const n=g,a=c("el-card");return r(),s(a,{shadow:"hover",class:"mini-card",style:y({background:`linear-gradient(50deg, ${t.colorFrom}, ${t.colorTo})`})},{header:o(()=>[x(l(t.header),1)]),default:o(()=>[m("div",S,l(t.num),1),m("div",b,l(t.tip),1),t.icon?(r(),s(n,{key:0,name:t.icon,rotate:20},null,8,["name"])):h("v-if",!0)]),_:1},8,["style"])}}};var k=i(j,[["__scopeId","data-v-60b3af78"]]);const N={};function w(t,u){const d=C,n=k,a=c("el-col"),_=c("el-row"),f=p;return r(),v("div",null,[e(d,{title:"\u591A\u5F69\u6E10\u53D8\u5361\u7247",content:"ColorfulCard"}),e(f,null,{default:o(()=>[e(_,{gutter:20},{default:o(()=>[e(a,{md:12},{default:o(()=>[e(n,{header:"\u5F00\u53D1\u6587\u6863",num:123,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"index-document"})]),_:1}),e(a,{md:12},{default:o(()=>[e(n,{"color-from":"#fbaaa2","color-to":"#fc5286",header:"\u57FA\u7840\u7EC4\u4EF6",num:12323,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"index-component"})]),_:1})]),_:1}),e(_,{gutter:20,style:{"margin-top":"20px"}},{default:o(()=>[e(a,{md:12},{default:o(()=>[e(n,{"color-from":"#ff763b","color-to":"#ffc480",header:"\u6269\u5C55\u7EC4\u4EF6",num:123,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"index-component"})]),_:1}),e(a,{md:12},{default:o(()=>[e(n,{"color-from":"#6a8eff","color-to":"#0e4cfd",header:"\u4E1A\u52A1\u5E94\u7528\u9875\u9762",num:123,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"index-page"})]),_:1})]),_:1})]),_:1})])}var F=i(N,[["render",w]]);export{F as default};