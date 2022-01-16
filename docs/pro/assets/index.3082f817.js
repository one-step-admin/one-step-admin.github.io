
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.5c755cb6.js";import{s as u,z as m,o as n,t as l,x as f,a4 as p,B as o,u as r,k as i,a5 as _,l as h}from"./vendor.18c32348.js";const y=["xlink:href"],v={props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,s=u(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,g)=>{const c=m("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),l(c,{key:0,class:"svg-icon",style:o(r(s))},{default:f(()=>[(n(),l(p(e.name)))]),_:1},8,["style"])):e.name.indexOf("ri-")===0?(n(),i("i",{key:1,class:_(["svg-icon",e.name]),style:o(r(s))},null,6)):(n(),i("svg",{key:2,class:"svg-icon",style:o(r(s)),"aria-hidden":"true"},[h("use",{"xlink:href":`#icon-${e.name}`},null,8,y)],4))}}};var b=d(v,[["__scopeId","data-v-2fd86d27"]]);export{b as _};
