
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.8d8a4cfe.js";import{r as a,z as t,o as s,k as l,Y as o,m as i,a3 as n,A as r,x as c,a5 as d,B as p}from"./vendor.b0dde714.js";const u={key:0,class:"title-container"};var v=e({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const v=a(e.collaspe);function f(){v.value=!1}return(a,g)=>{const h=t("el-icon-arrow-down"),m=t("el-icon");return s(),l("div",{class:d({"page-main":!0,"is-collaspe":v.value}),style:p({height:v.value?e.height:""})},[e.title?(s(),l("div",u,o(e.title),1)):i("v-if",!0),n(a.$slots,"default",{},void 0,!0),v.value?(s(),l("div",{key:1,class:"collaspe",title:"展开",onClick:f},[r(m,null,{default:c((()=>[r(h)])),_:1})])):i("v-if",!0)],6)}}},[["__scopeId","data-v-74253eaf"]]);export{v as _};
