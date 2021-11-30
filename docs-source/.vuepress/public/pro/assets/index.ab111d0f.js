
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as u}from"./index.c3034165.js";import{t as d,x as m,o as n,y as i,z as f,a3 as p,a4 as s,u as r,j as l,a5 as y,k as _}from"./vendor.a8203abd.js";const h=["xlink:href"],v={props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,o=d(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,g)=>{const c=m("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),i(c,{key:0,class:"svg-icon",style:s(r(o))},{default:f(()=>[(n(),i(p(e.name)))]),_:1},8,["style"])):e.name.indexOf("ri-")===0?(n(),l("i",{key:1,class:y(["svg-icon",e.name]),style:s(r(o))},null,6)):(n(),l("svg",{key:2,class:"svg-icon",style:s(r(o)),"aria-hidden":"true"},[_("use",{"xlink:href":`#icon-${e.name}`},null,8,h)],4))}}};var b=u(v,[["__scopeId","data-v-bca93872"]]);export{b as _};
