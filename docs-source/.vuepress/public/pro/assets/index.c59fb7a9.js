
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{o as s,I as t,J as c,Q as r,M as i,Z as d,O as l,P as _}from"./vendor.6b4522dc.js";const n=e=>(l("data-v-110b2f79"),e=e(),_(),e),u={class:"result"},p={key:0,class:"icon icon-success"},v=n(()=>c("i",{class:"el-icon-success"},null,-1)),h=[v],y={key:1,class:"icon icon-warning"},f=n(()=>c("i",{class:"el-icon-warning"},null,-1)),g=[f],m={key:2,class:"icon icon-error"},k=n(()=>c("i",{class:"el-icon-error"},null,-1)),S=[k],w={key:3,class:"desc"},x={key:4,class:"extra"},I={key:5,class:"actions"},b={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(o,$)=>(s(),t("div",u,[e.type==="success"?(s(),t("div",p,h)):e.type==="warning"?(s(),t("div",y,g)):(s(),t("div",m,S)),c("h1",null,r(e.title),1),e.desc?(s(),t("div",w,r(e.desc),1)):i("v-if",!0),o.$slots.extra?(s(),t("div",x,[d(o.$slots,"extra",{},void 0,!0)])):i("v-if",!0),o.$slots.default?(s(),t("div",I,[d(o.$slots,"default",{},void 0,!0)])):i("v-if",!0)]))}};var q=a(b,[["__scopeId","data-v-110b2f79"]]);export{q as _};
