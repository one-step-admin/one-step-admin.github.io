
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{c as d,r as m,o as n,a as l,I as f,S as p,n as o,b as s,C as i,T as _,D as h}from"./vendor.b89370fb.js";const v=["xlink:href"],y={props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,r=d(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,g)=>{const c=m("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),l(c,{key:0,class:"svg-icon",style:o(s(r))},{default:f(()=>[(n(),l(p(e.name)))]),_:1},8,["style"])):e.name.indexOf("ri-")===0?(n(),i("i",{key:1,class:_(["svg-icon",e.name]),style:o(s(r))},null,6)):(n(),i("svg",{key:2,class:"svg-icon",style:o(s(r)),"aria-hidden":"true"},[h("use",{"xlink:href":`#icon-${e.name}`},null,8,v)],4))}}};var b=u(y,[["__scopeId","data-v-bca93872"]]);export{b as _};