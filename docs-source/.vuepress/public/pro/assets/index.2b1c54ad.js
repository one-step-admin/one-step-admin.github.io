
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.9dc02013.js";import{r as o,w as a,z as t,o as s,k as l,a3 as n,A as r,x as i,$ as c,Y as u,m as d}from"./vendor.6ae38f98.js";const f={class:"search-container"},m={key:0,class:"more"};var v=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:v}){const p=e,_=o(!p.unfold);function g(){_.value=!_.value,v("toggle",_.value)}return a((()=>p.unfold),(()=>g()),{immediate:!0}),(o,a)=>{const v=t("el-button");return s(),l("div",f,[n(o.$slots,"default",{},void 0,!0),e.showMore?(s(),l("div",m,[r(v,{type:"text",size:"small",icon:_.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:g},{default:i((()=>[c(u(_.value?"收起":"展开"),1)])),_:1},8,["icon"])])):d("v-if",!0)])}}},[["__scopeId","data-v-fbe6e7f8"]]);export{v as _};
