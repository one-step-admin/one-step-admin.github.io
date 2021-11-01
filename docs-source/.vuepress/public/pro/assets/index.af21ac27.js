
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{a2 as _,w as i,r as d,o as s,G as n,X as p,l as f,j as m,R as v,O as g,K as h}from"./vendor.e2abc40b.js";const x={class:"search-container"},b={key:0,class:"more"},y={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(o,{emit:l}){const t=o,e=_(!t.unfold);i(()=>t.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(r,w)=>{const c=d("el-button");return s(),n("div",x,[p(r.$slots,"default",{},void 0,!0),o.showMore?(s(),n("div",b,[f(c,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):h("v-if",!0)])}}};var C=u(y,[["__scopeId","data-v-fbe6e7f8"]]);export{C as _};
