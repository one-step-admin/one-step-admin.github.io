
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as s}from"./index.091d1180.js";import{z as e,o as i,k as l,A as c,x as a,l as t,Y as d,m as r,a3 as n}from"./vendor.b0dde714.js";const o={class:"result"},u={key:0,class:"icon icon-success"},v={key:1,class:"icon icon-warning"},f={key:2,class:"icon icon-error"},p={key:3,class:"desc"},y={key:4,class:"extra"},g={key:5,class:"actions"};var k=s({props:{type:{type:String,validator:s=>["success","warning","error"].includes(s),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup:s=>(k,_)=>{const x=e("el-icon-success-filled"),m=e("el-icon"),w=e("el-icon-warning-filled"),$=e("el-icon-circle-close-filled");return i(),l("div",o,["success"===s.type?(i(),l("div",u,[c(m,null,{default:a((()=>[c(x)])),_:1})])):"warning"===s.type?(i(),l("div",v,[c(m,null,{default:a((()=>[c(w)])),_:1})])):(i(),l("div",f,[c(m,null,{default:a((()=>[c($)])),_:1})])),t("h1",null,d(s.title),1),s.desc?(i(),l("div",p,d(s.desc),1)):r("v-if",!0),k.$slots.extra?(i(),l("div",y,[n(k.$slots,"extra",{},void 0,!0)])):r("v-if",!0),k.$slots.default?(i(),l("div",g,[n(k.$slots,"default",{},void 0,!0)])):r("v-if",!0)])}},[["__scopeId","data-v-cef7b02c"]]);export{k as _};
