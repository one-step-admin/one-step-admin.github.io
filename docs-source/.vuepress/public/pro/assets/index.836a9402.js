
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_}from"./index.9d0f40da.js";import{r as p,x as l,o as a,k as o,Y as u,m as s,a3 as f,A as n,z as m,a5 as v,B as y}from"./vendor.4acdc30d.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=p(e.collaspe);function i(){t.value=!1}return(c,k)=>{const r=l("el-icon-arrow-down"),d=l("el-icon");return a(),o("div",{class:v({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(a(),o("div",g,u(e.title),1)):s("v-if",!0),f(c.$slots,"default",{},void 0,!0),t.value?(a(),o("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[n(d,null,{default:m(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var S=_(h,[["__scopeId","data-v-74253eaf"]]);export{S as _};
