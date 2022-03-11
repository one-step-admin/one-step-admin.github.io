
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{A as a,r as t,o as l,C as s,M as o,H as i,a0 as n,f as r,e as c,T as p,n as u}from"./vendor.2ae12b47.js";const d={key:0,class:"title-container"};var v=e({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const v=a(e.collaspe);function f(){v.value=!1}return(a,g)=>{const h=t("el-icon-arrow-down"),y=t("el-icon");return l(),s("div",{class:p({"page-main":!0,"is-collaspe":v.value}),style:u({height:v.value?e.height:""})},[e.title?(l(),s("div",d,o(e.title),1)):i("v-if",!0),n(a.$slots,"default",{},void 0,!0),v.value?(l(),s("div",{key:1,class:"collaspe",title:"展开",onClick:f},[r(y,null,{default:c((()=>[r(h)])),_:1})])):i("v-if",!0)],6)}}},[["__scopeId","data-v-2f719979"]]);export{v as _};
