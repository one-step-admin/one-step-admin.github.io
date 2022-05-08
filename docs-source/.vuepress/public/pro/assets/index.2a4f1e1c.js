
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{d as e,C as t,o as a,j as r,ab as s,i as o,bj as i,c as n,a as l}from"./index.89c4a536.js";const u=["xlink:href"],c=e({name:"SvgIcon"}),d=Object.assign(c,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const c=e,d=t((()=>{let e=[];if(""!=c.flip)switch(c.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=c.rotate&&e.push(`rotate(${c.rotate}deg)`),`transform: ${e.join(" ")};`}));return(t,c)=>e.name.includes(":")?(a(),r(o(i),{key:0,icon:e.name,style:s(o(d))},null,8,["icon","style"])):(a(),n("svg",{key:1,style:s(o(d)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,u)],4))}});export{d as _};
