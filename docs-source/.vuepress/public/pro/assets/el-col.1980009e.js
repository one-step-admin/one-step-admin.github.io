
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{I as e,M as t,d as s,N as u,C as a,J as p,g as r,L as l}from"./index.89c4a536.js";import{m as f}from"./typescript.f55dff19.js";import{r as o}from"./el-row.589e4137.js";const b=l(s({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>f({})},sm:{type:t([Number,Object]),default:()=>f({})},md:{type:t([Number,Object]),default:()=>f({})},lg:{type:t([Number,Object]),default:()=>f({})},xl:{type:t([Number,Object]),default:()=>f({})}}),setup(e,{slots:t}){const{gutter:s}=u(o,{gutter:a((()=>0))}),l=p("col"),f=a((()=>s.value?{paddingLeft:s.value/2+"px",paddingRight:s.value/2+"px"}:{})),b=a((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const u=e[s];"number"==typeof u&&("span"===s?t.push(l.b(`${e[s]}`)):u>0&&t.push(l.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{if("number"==typeof e[s])t.push(l.b(`${s}-${e[s]}`));else if("object"==typeof e[s]){const u=e[s];Object.keys(u).forEach((e=>{t.push("span"!==e?l.b(`${s}-${e}-${u[e]}`):l.b(`${s}-${u[e]}`))}))}})),s.value&&t.push(l.is("guttered")),t}));return()=>r(e.tag,{class:[l.b(),b.value],style:f.value},t)}}));export{b as E};
