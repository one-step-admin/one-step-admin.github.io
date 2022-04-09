
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,m as t,n as l,c as s,t as i,i as o,P as n,e as c,f as r,D as p,C as u}from"./index.6885a104.js";const d={key:0,class:"title-container"};var v=e({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const v=a(e.collaspe);function f(){v.value=!1}return(a,g)=>{const h=t("el-icon-arrow-down"),m=t("el-icon");return l(),s("div",{class:p({"page-main":!0,"is-collaspe":v.value}),style:u({height:v.value?e.height:""})},[e.title?(l(),s("div",d,i(e.title),1)):o("v-if",!0),n(a.$slots,"default",{},void 0,!0),v.value?(l(),s("div",{key:1,class:"collaspe",title:"展开",onClick:f},[c(m,null,{default:r((()=>[c(h)])),_:1})])):o("v-if",!0)],6)}}},[["__scopeId","data-v-74253eaf"]]);export{v as _};
