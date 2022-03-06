
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as n}from"./index.fef54795.js";import{_ as e}from"./index.b11652ae.js";import{j as s}from"./index.8d8a4cfe.js";import{k as t,A as o,x as a,z as i,o as u,l as r,Y as l,u as d,$ as m}from"./vendor.b0dde714.js";const c=m("1"),f=m("1"),b={setup(m){const b=s();function p(){b.setNumber(b.number+1)}function j(){b.setNumber(b.number-1)}return(s,m)=>{const x=e,_=i("el-button"),k=n;return u(),t("div",null,[o(x,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),o(k,null,{default:a((()=>[r("div",null,"当前 badge 值："+l(d(b).number),1),o(_,{icon:"el-icon-plus",onClick:p},{default:a((()=>[c])),_:1}),o(_,{icon:"el-icon-minus",onClick:j},{default:a((()=>[f])),_:1})])),_:1})])}}};export{b as default};
