
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{d as e,C as t,m as a,h as r,a6 as s,g as n,ar as o,c as i,b as l}from"./index.1b2a4798.js";const p=["xlink:href"],u=e({name:"SvgIcon"}),d=Object.assign(u,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const u=e,d=t((()=>{let e=[];if(""!=u.flip)switch(u.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=u.rotate&&e.push(`rotate(${u.rotate}deg)`),`transform: ${e.join(" ")};`}));return(t,u)=>0===e.name.indexOf("ep:")?(a(),r(n(o),{key:0,icon:e.name,style:s(n(d))},null,8,["icon","style"])):(a(),i("svg",{key:1,style:s(n(d)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,p)],4))}});export{d as _};
