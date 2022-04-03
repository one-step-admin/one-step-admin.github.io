
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,m as a,n as l,c as s,t as i,i as o,P as n,e as c,f as r,D as p,C as d}from"./index.8b6d4e84.js";const u={key:0,class:"title-container"};var v=e({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const v=t(e.collaspe);function f(){v.value=!1}return(t,g)=>{const h=a("el-icon-arrow-down"),m=a("el-icon");return l(),s("div",{class:p({"page-main":!0,"is-collaspe":v.value}),style:d({height:v.value?e.height:""})},[e.title?(l(),s("div",u,i(e.title),1)):o("v-if",!0),n(t.$slots,"default",{},void 0,!0),v.value?(l(),s("div",{key:1,class:"collaspe",title:"展开",onClick:f},[c(m,null,{default:r((()=>[c(h)])),_:1})])):o("v-if",!0)],6)}}},[["__scopeId","data-v-74253eaf"]]);export{v as _};
