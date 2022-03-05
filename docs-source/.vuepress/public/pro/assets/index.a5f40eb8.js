
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as n}from"./index.d92f6c0c.js";import{_ as e}from"./index.c2d6d7be.js";import{j as s}from"./index.091d1180.js";import{k as t,A as o,x as i,z as u,o as a,l as r,Y as l,u as d,$ as c}from"./vendor.b0dde714.js";const m=c("1"),f=c("1"),b={setup(c){const b=s();function p(){b.setNumber(b.number+1)}function j(){b.setNumber(b.number-1)}return(s,c)=>{const x=e,_=u("el-button"),k=n;return a(),t("div",null,[o(x,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),o(k,null,{default:i((()=>[r("div",null,"当前 badge 值："+l(d(b).number),1),o(_,{icon:"el-icon-plus",onClick:p},{default:i((()=>[m])),_:1}),o(_,{icon:"el-icon-minus",onClick:j},{default:i((()=>[f])),_:1})])),_:1})])}}};export{b as default};
