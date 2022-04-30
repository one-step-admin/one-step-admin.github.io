
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{d as e,C as t,m as a,h as r,a6 as s,g as n,ar as o,c as i,b as l}from"./index.cc1bbbc5.js";const c=["xlink:href"],p=e({name:"SvgIcon"}),u=Object.assign(p,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const p=e,u=t((()=>{let e=[];if(""!=p.flip)switch(p.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=p.rotate&&e.push(`rotate(${p.rotate}deg)`),`transform: ${e.join(" ")};`}));return(t,p)=>0===e.name.indexOf("ep:")?(a(),r(n(o),{key:0,icon:e.name,style:s(n(u))},null,8,["icon","style"])):(a(),i("svg",{key:1,style:s(n(u)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,c)],4))}});export{u as _};
