
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{d as e,C as t,f as a,n as s,c as r,$ as n,aa as i,i as l,ax as o,e as u}from"./index.0a5e3bc2.js";const c=["xlink:href"],d=e({name:"SvgIcon"}),p=Object.assign(d,{props:{name:{type:String,required:!0},runtime:{type:Boolean,default:!1},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const d=e,p=t((()=>0===d.name.indexOf("i-")?d.runtime?"svg":"css":d.name.includes(":")?"svg":"custom")),f=t((()=>{if(0===d.name.indexOf("i-")){let e=d.name;return d.runtime&&(e=e.replace("i-","")),e}return d.name})),m=t((()=>{let e=[];if(""!=d.flip)switch(d.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=d.rotate&&e.push(`rotate(${d.rotate}deg)`),`transform: ${e.join(" ")};`}));return(e,t)=>"css"===a(p)?(s(),r("i",{key:0,class:n(a(f)),style:i(a(m))},null,6)):"svg"===a(p)?(s(),l(a(o),{key:1,icon:a(f),style:i(a(m))},null,8,["icon","style"])):(s(),r("svg",{key:2,style:i(a(m)),"aria-hidden":"true"},[u("use",{"xlink:href":`#icon-${a(f)}`},null,8,c)],4))}});export{p as _};
