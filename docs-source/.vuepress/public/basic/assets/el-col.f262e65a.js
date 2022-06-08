
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{A as e,B as t,d as s,Z as a,D as u,C as p,g as r,I as l}from"./index.eaca9d64.js";import{m as f}from"./typescript2.50fc0493.js";import{r as o}from"./el-row.3a48db14.js";const b=l(s({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>f({})},sm:{type:t([Number,Object]),default:()=>f({})},md:{type:t([Number,Object]),default:()=>f({})},lg:{type:t([Number,Object]),default:()=>f({})},xl:{type:t([Number,Object]),default:()=>f({})}}),setup(e,{slots:t}){const{gutter:s}=a(o,{gutter:u((()=>0))}),l=p("col"),f=u((()=>s.value?{paddingLeft:s.value/2+"px",paddingRight:s.value/2+"px"}:{})),b=u((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const a=e[s];"number"==typeof a&&("span"===s?t.push(l.b(`${e[s]}`)):a>0&&t.push(l.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{if("number"==typeof e[s])t.push(l.b(`${s}-${e[s]}`));else if("object"==typeof e[s]){const a=e[s];Object.keys(a).forEach((e=>{t.push("span"!==e?l.b(`${s}-${e}-${a[e]}`):l.b(`${s}-${a[e]}`))}))}})),s.value&&t.push(l.is("guttered")),t}));return()=>r(e.tag,{class:[l.b(),b.value],style:f.value},t)}}));export{b as E};
