
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as p}from"./index.c3034165.js";import{r as u,x as l,o as a,j as o,X as d,l as s,a2 as f,A as n,z as v,a5 as m,a4 as y}from"./vendor.a8203abd.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function i(){t.value=!1}return(c,C)=>{const r=l("el-icon-arrow-down"),_=l("el-icon");return a(),o("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(a(),o("div",g,d(e.title),1)):s("v-if",!0),f(c.$slots,"default",{},void 0,!0),t.value?(a(),o("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[n(_,null,{default:v(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var S=p(h,[["__scopeId","data-v-74253eaf"]]);export{S as _};
