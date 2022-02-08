
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as i}from"./index.e7d2f5e5.js";import{r as _,w as d,z as u,o as s,k as n,a3 as f,A as p,x as m,$ as v,Y as g,m as x}from"./vendor.ac88770c.js";const h={class:"search-container"},y={key:0,class:"more"},k={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(o,{emit:l}){const t=o,e=_(!t.unfold);d(()=>t.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(c,w)=>{const r=u("el-button");return s(),n("div",h,[f(c.$slots,"default",{},void 0,!0),o.showMore?(s(),n("div",y,[p(r,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):x("v-if",!0)])}}};var C=i(k,[["__scopeId","data-v-fbe6e7f8"]]);export{C as _};
