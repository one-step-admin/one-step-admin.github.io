
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{A as e,G as t,d as s,H as a,C as u,B as p,e as r,F as l}from"./index.2721a539.js";import{m as f}from"./typescript.b0ac2d0c.js";import{r as b}from"./el-row.f59b4fa1.js";const o=l(s({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>f({})},sm:{type:t([Number,Object]),default:()=>f({})},md:{type:t([Number,Object]),default:()=>f({})},lg:{type:t([Number,Object]),default:()=>f({})},xl:{type:t([Number,Object]),default:()=>f({})}}),setup(e,{slots:t}){const{gutter:s}=a(b,{gutter:u((()=>0))}),l=p("col"),f=u((()=>s.value?{paddingLeft:s.value/2+"px",paddingRight:s.value/2+"px"}:{})),o=u((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const a=e[s];"number"==typeof a&&("span"===s?t.push(l.b(`${e[s]}`)):a>0&&t.push(l.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{if("number"==typeof e[s])t.push(l.b(`${s}-${e[s]}`));else if("object"==typeof e[s]){const a=e[s];Object.keys(a).forEach((e=>{t.push("span"!==e?l.b(`${s}-${e}-${a[e]}`):l.b(`${s}-${a[e]}`))}))}})),s.value&&t.push(l.is("guttered")),t}));return()=>r(e.tag,{class:[l.b(),o.value],style:f.value},t)}}));export{o as E};
