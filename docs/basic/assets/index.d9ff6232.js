
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as e,m as a,c as t,t as s,i as l,W as i,e as o,f as r,X as n,a6 as p,E as c}from"./index.2721a539.js";/* empty css                */import{_ as d}from"./index.4b9f4b82.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const f={key:0,class:"title-container"};var v=u({props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(u){const v=e(u.collaspe);function m(){v.value=!1}return(e,g)=>{const h=d,_=c;return a(),t("div",{class:n({"page-main":!0,"is-collaspe":v.value}),style:p({height:v.value?u.height:""})},[u.title?(a(),t("div",f,s(u.title),1)):l("v-if",!0),i(e.$slots,"default",{},void 0,!0),v.value?(a(),t("div",{key:1,class:"collaspe",title:"展开",onClick:m},[o(_,null,{default:r((()=>[o(h,{name:"ep:arrow-down"})])),_:1})])):l("v-if",!0)],6)}}},[["__scopeId","data-v-56bbfa12"]]);export{v as _};
