
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,r as a,m as t,n as s,c as l,t as i,i as o,E as n,b as c,w as r,I as p,H as u}from"./index.25647206.js";const d={key:0,class:"title-container"};var v=e({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const v=a(e.collaspe);function f(){v.value=!1}return(a,g)=>{const h=t("el-icon-arrow-down"),y=t("el-icon");return s(),l("div",{class:p({"page-main":!0,"is-collaspe":v.value}),style:u({height:v.value?e.height:""})},[e.title?(s(),l("div",d,i(e.title),1)):o("v-if",!0),n(a.$slots,"default",{},void 0,!0),v.value?(s(),l("div",{key:1,class:"collaspe",title:"展开",onClick:f},[c(y,null,{default:r((()=>[c(h)])),_:1})])):o("v-if",!0)],6)}}},[["__scopeId","data-v-74253eaf"]]);export{v as _};
