
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{A as u,r as l,o,C as a,J as d,M as n,a0 as f,H as s,I as v,T as m,n as g}from"./vendor.b89370fb.js";const h={key:0,class:"title-container"},y={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function i(){t.value=!1}return(r,x)=>{const c=l("el-icon-arrow-down"),p=l("el-icon");return o(),a("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:g({height:t.value?e.height:""})},[e.title?(o(),a("div",h,d(e.title),1)):n("v-if",!0),f(r.$slots,"default",{},void 0,!0),t.value?(o(),a("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[s(p,null,{default:v(()=>[s(c)]),_:1})])):n("v-if",!0)],6)}}};var S=_(y,[["__scopeId","data-v-2f719979"]]);export{S as _};
