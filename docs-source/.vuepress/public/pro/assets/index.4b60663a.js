
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as s,m as e,n as i,c as l,b as c,w as a,e as t,t as n,i as r,E as d}from"./index.25647206.js";const o={class:"result"},u={key:0,class:"icon icon-success"},v={key:1,class:"icon icon-warning"},f={key:2,class:"icon icon-error"},p={key:3,class:"desc"},y={key:4,class:"extra"},g={key:5,class:"actions"};var _=s({props:{type:{type:String,validator:s=>["success","warning","error"].includes(s),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup:s=>(_,k)=>{const w=e("el-icon-success-filled"),x=e("el-icon"),$=e("el-icon-warning-filled"),m=e("el-icon-circle-close-filled");return i(),l("div",o,["success"===s.type?(i(),l("div",u,[c(x,null,{default:a((()=>[c(w)])),_:1})])):"warning"===s.type?(i(),l("div",v,[c(x,null,{default:a((()=>[c($)])),_:1})])):(i(),l("div",f,[c(x,null,{default:a((()=>[c(m)])),_:1})])),t("h1",null,n(s.title),1),s.desc?(i(),l("div",p,n(s.desc),1)):r("v-if",!0),_.$slots.extra?(i(),l("div",y,[d(_.$slots,"extra",{},void 0,!0)])):r("v-if",!0),_.$slots.default?(i(),l("div",g,[d(_.$slots,"default",{},void 0,!0)])):r("v-if",!0)])}},[["__scopeId","data-v-cef7b02c"]]);export{_};
