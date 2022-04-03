
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,B as a,m as t,n as s,h as r,w as n,G as i,H as o,g as l,c as d,I as c,e as u}from"./index.d26282ba.js";const p=["xlink:href"];var f=e({props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const f=e,h=a((()=>{let e=[];if(""!=f.flip)switch(f.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=f.rotate&&e.push(`rotate(${f.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,f)=>{const g=t("el-icon");return 0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ElIcon")?(s(),r(g,{key:0,class:"svg-icon",style:o(l(h))},{default:n((()=>[(s(),r(i(e.name)))])),_:1},8,["style"])):0===e.name.indexOf("ri-")?(s(),d("i",{key:1,class:c(["svg-icon",e.name]),style:o(l(h))},null,6)):(s(),d("svg",{key:2,class:"svg-icon",style:o(l(h)),"aria-hidden":"true"},[u("use",{"xlink:href":`#icon-${e.name}`},null,8,p)],4))}}},[["__scopeId","data-v-2fd86d27"]]);export{f as _};
