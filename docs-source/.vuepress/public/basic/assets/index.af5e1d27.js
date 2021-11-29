
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{v as u,r as l,o as a,y as o,G as d,K as s,a0 as v,D as n,F as f,T as m,S as y}from"./vendor.b8cae0bd.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function c(){t.value=!1}return(i,C)=>{const r=l("el-icon-arrow-down"),p=l("el-icon");return a(),o("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(a(),o("div",g,d(e.title),1)):s("v-if",!0),v(i.$slots,"default",{},void 0,!0),t.value?(a(),o("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:c},[n(p,null,{default:f(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var w=_(h,[["__scopeId","data-v-74253eaf"]]);export{w as _};
