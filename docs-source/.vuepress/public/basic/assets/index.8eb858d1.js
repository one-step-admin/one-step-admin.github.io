
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{d as e,D as t,b as a,i as r,H as s,f as i,as as n,c as o,e as l}from"./index.eaca9d64.js";const d=["xlink:href"],p=e({name:"SvgIcon"}),u=Object.assign(p,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const p=e,u=t((()=>{let e=[];if(""!=p.flip)switch(p.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=p.rotate&&e.push(`rotate(${p.rotate}deg)`),`transform: ${e.join(" ")};`}));return(t,p)=>0===e.name.indexOf("ep:")?(a(),r(i(n),{key:0,icon:e.name,style:s(i(u))},null,8,["icon","style"])):(a(),o("svg",{key:1,style:s(i(u)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,d)],4))}});export{u as _};
