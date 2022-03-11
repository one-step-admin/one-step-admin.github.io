
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as n}from"./index.e5c277f9.js";import{_ as e}from"./index.e3b25878.js";import{j as s}from"./index.9dc02013.js";import{k as t,A as o,x as i,z as u,o as a,l as r,Y as l,u as c,$ as m}from"./vendor.6ae38f98.js";const d=m("1"),f=m("1"),b={setup(m){const b=s();function p(){b.setNumber(b.number+1)}function j(){b.setNumber(b.number-1)}return(s,m)=>{const x=e,_=u("el-button"),k=n;return a(),t("div",null,[o(x,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),o(k,null,{default:i((()=>[r("div",null,"当前 badge 值："+l(c(b).number),1),o(_,{icon:"el-icon-plus",onClick:p},{default:i((()=>[d])),_:1}),o(_,{icon:"el-icon-minus",onClick:j},{default:i((()=>[f])),_:1})])),_:1})])}}};export{b as default};
