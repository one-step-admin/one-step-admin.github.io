
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,r as a,S as o,m as t,n as s,c as l,E as n,b as i,w as c,y as r,t as u,i as d}from"./index.93ad63e3.js";const v={class:"search-container"},f={key:0,class:"more"};var m=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:m}){const p=e,y=a(!p.unfold);function _(){y.value=!y.value,m("toggle",y.value)}return o((()=>p.unfold),(()=>_()),{immediate:!0}),(a,o)=>{const m=t("el-button");return s(),l("div",v,[n(a.$slots,"default",{},void 0,!0),e.showMore?(s(),l("div",f,[i(m,{type:"text",size:"small",icon:y.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:_},{default:c((()=>[r(u(y.value?"收起":"展开"),1)])),_:1},8,["icon"])])):d("v-if",!0)])}}},[["__scopeId","data-v-13d6ea9a"]]);export{m as _};
