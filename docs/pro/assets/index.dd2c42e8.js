
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{d as e,C as t,n as a,i as r,ab as s,h as n,aw as i,c as o,f as l}from"./index.05e4ed9f.js";const u=["xlink:href"],d=e({name:"SvgIcon"}),c=Object.assign(d,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const d=e,c=t((()=>{let e=[];if(""!=d.flip)switch(d.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=d.rotate&&e.push(`rotate(${d.rotate}deg)`),`transform: ${e.join(" ")};`}));return(t,d)=>e.name.includes(":")?(a(),r(n(i),{key:0,icon:e.name,style:s(n(c))},null,8,["icon","style"])):(a(),o("svg",{key:1,style:s(n(c)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,u)],4))}});export{c as _};
