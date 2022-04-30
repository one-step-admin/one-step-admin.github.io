
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{A as e,G as t,d as s,H as a,C as u,B as p,e as r,F as l}from"./index.cc1bbbc5.js";import{m as b}from"./typescript.b0ac2d0c.js";import{r as f}from"./el-row.f4ab295e.js";const o=l(s({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>b({})},sm:{type:t([Number,Object]),default:()=>b({})},md:{type:t([Number,Object]),default:()=>b({})},lg:{type:t([Number,Object]),default:()=>b({})},xl:{type:t([Number,Object]),default:()=>b({})}}),setup(e,{slots:t}){const{gutter:s}=a(f,{gutter:u((()=>0))}),l=p("col"),b=u((()=>s.value?{paddingLeft:s.value/2+"px",paddingRight:s.value/2+"px"}:{})),o=u((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const a=e[s];"number"==typeof a&&("span"===s?t.push(l.b(`${e[s]}`)):a>0&&t.push(l.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{if("number"==typeof e[s])t.push(l.b(`${s}-${e[s]}`));else if("object"==typeof e[s]){const a=e[s];Object.keys(a).forEach((e=>{t.push("span"!==e?l.b(`${s}-${e}-${a[e]}`):l.b(`${s}-${a[e]}`))}))}})),s.value&&t.push(l.is("guttered")),t}));return()=>r(e.tag,{class:[l.b(),o.value],style:b.value},t)}}));export{o as E};
