
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as a,r as e,m as t,n as s,c as l,t as i,i as o,E as n,b as c,w as r,I as d,H as p}from"./index.d26282ba.js";const u={key:0,class:"title-container"};var v=a({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(a){const v=e(a.collaspe);function f(){v.value=!1}return(e,g)=>{const h=t("el-icon-arrow-down"),y=t("el-icon");return s(),l("div",{class:d({"page-main":!0,"is-collaspe":v.value}),style:p({height:v.value?a.height:""})},[a.title?(s(),l("div",u,i(a.title),1)):o("v-if",!0),n(e.$slots,"default",{},void 0,!0),v.value?(s(),l("div",{key:1,class:"collaspe",title:"展开",onClick:f},[c(y,null,{default:r((()=>[c(h)])),_:1})])):o("v-if",!0)],6)}}},[["__scopeId","data-v-74253eaf"]]);export{v as _};
