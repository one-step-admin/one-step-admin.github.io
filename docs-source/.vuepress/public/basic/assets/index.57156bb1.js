
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{A as a,m as t,n as s,h as r,f as n,B as o,C as i,g as l,c as d,D as c,b as p}from"./index.8b6d4e84.js";const u=["xlink:href"];var f=e({props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const f=e,h=a((()=>{let e=[];if(""!=f.flip)switch(f.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=f.rotate&&e.push(`rotate(${f.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,f)=>{const m=t("el-icon");return 0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ElIcon")?(s(),r(m,{key:0,class:"svg-icon",style:i(l(h))},{default:n((()=>[(s(),r(o(e.name)))])),_:1},8,["style"])):0===e.name.indexOf("ri-")?(s(),d("i",{key:1,class:c(["svg-icon",e.name]),style:i(l(h))},null,6)):(s(),d("svg",{key:2,class:"svg-icon",style:i(l(h)),"aria-hidden":"true"},[p("use",{"xlink:href":`#icon-${e.name}`},null,8,u)],4))}}},[["__scopeId","data-v-2fd86d27"]]);export{f as _};
