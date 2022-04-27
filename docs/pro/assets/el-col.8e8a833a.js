
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{I as e,M as t,d as s,N as u,C as a,J as p,e as r,L as l}from"./index.05e4ed9f.js";import{m as f}from"./typescript.14beffb5.js";import{r as b}from"./el-row.5e74fbc9.js";const o=l(s({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>f({})},sm:{type:t([Number,Object]),default:()=>f({})},md:{type:t([Number,Object]),default:()=>f({})},lg:{type:t([Number,Object]),default:()=>f({})},xl:{type:t([Number,Object]),default:()=>f({})}}),setup(e,{slots:t}){const{gutter:s}=u(b,{gutter:a((()=>0))}),l=p("col"),f=a((()=>s.value?{paddingLeft:s.value/2+"px",paddingRight:s.value/2+"px"}:{})),o=a((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const u=e[s];"number"==typeof u&&("span"===s?t.push(l.b(`${e[s]}`)):u>0&&t.push(l.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{if("number"==typeof e[s])t.push(l.b(`${s}-${e[s]}`));else if("object"==typeof e[s]){const u=e[s];Object.keys(u).forEach((e=>{t.push("span"!==e?l.b(`${s}-${e}-${u[e]}`):l.b(`${s}-${u[e]}`))}))}})),s.value&&t.push(l.is("guttered")),t}));return()=>r(e.tag,{class:[l.b(),o.value],style:f.value},t)}}));export{o as E};
