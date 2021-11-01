
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{o as s,G as t,H as c,O as r,K as i,X as a,L as l,M as _}from"./vendor.e2abc40b.js";const n=e=>(l("data-v-110b2f79"),e=e(),_(),e),u={class:"result"},p={key:0,class:"icon icon-success"},v=n(()=>c("i",{class:"el-icon-success"},null,-1)),h=[v],y={key:1,class:"icon icon-warning"},f=n(()=>c("i",{class:"el-icon-warning"},null,-1)),g=[f],m={key:2,class:"icon icon-error"},k=n(()=>c("i",{class:"el-icon-error"},null,-1)),S=[k],b={key:3,class:"desc"},w={key:4,class:"extra"},x={key:5,class:"actions"},I={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(o,$)=>(s(),t("div",u,[e.type==="success"?(s(),t("div",p,h)):e.type==="warning"?(s(),t("div",y,g)):(s(),t("div",m,S)),c("h1",null,r(e.title),1),e.desc?(s(),t("div",b,r(e.desc),1)):i("v-if",!0),o.$slots.extra?(s(),t("div",w,[a(o.$slots,"extra",{},void 0,!0)])):i("v-if",!0),o.$slots.default?(s(),t("div",x,[a(o.$slots,"default",{},void 0,!0)])):i("v-if",!0)]))}};var q=d(I,[["__scopeId","data-v-110b2f79"]]);export{q as _};
