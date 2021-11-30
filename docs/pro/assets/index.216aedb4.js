
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as v}from"./index.c3034165.js";import{x as o,o as s,j as t,A as n,z as l,k as p,X as r,l as a,a2 as d}from"./vendor.a8203abd.js";const y={class:"result"},m={key:0,class:"icon icon-success"},g={key:1,class:"icon icon-warning"},h={key:2,class:"icon icon-error"},k={key:3,class:"desc"},x={key:4,class:"extra"},w={key:5,class:"actions"},S={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(c,$)=>{const _=o("el-icon-success-filled"),i=o("el-icon"),u=o("el-icon-warning-filled"),f=o("el-icon-circle-close-filled");return s(),t("div",y,[e.type==="success"?(s(),t("div",m,[n(i,null,{default:l(()=>[n(_)]),_:1})])):e.type==="warning"?(s(),t("div",g,[n(i,null,{default:l(()=>[n(u)]),_:1})])):(s(),t("div",h,[n(i,null,{default:l(()=>[n(f)]),_:1})])),p("h1",null,r(e.title),1),e.desc?(s(),t("div",k,r(e.desc),1)):a("v-if",!0),c.$slots.extra?(s(),t("div",x,[d(c.$slots,"extra",{},void 0,!0)])):a("v-if",!0),c.$slots.default?(s(),t("div",w,[d(c.$slots,"default",{},void 0,!0)])):a("v-if",!0)])}}};var C=v(S,[["__scopeId","data-v-cef7b02c"]]);export{C as _};
