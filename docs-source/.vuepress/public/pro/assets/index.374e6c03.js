
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.fef54795.js";import{_ as e}from"./index.b11652ae.js";import{j as s}from"./index.8d8a4cfe.js";import{k as n,A as a,x as o,z as i,o as l,l as d,Y as r,u,$ as f}from"./vendor.b0dde714.js";const c=f("切换"),x=f("清空"),m={setup(f){const m=s();function p(){m.setText("热门"==m.text?"促销":"热门")}function j(){m.setText()}return(s,f)=>{const _=e,b=i("el-button"),k=t;return l(),n("div",null,[a(_,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),a(k,null,{default:o((()=>[d("div",null,"当前 badge 值：'"+r(u(m).text)+"'",1),a(b,{onClick:p},{default:o((()=>[c])),_:1}),a(b,{onClick:j},{default:o((()=>[x])),_:1})])),_:1})])}}};export{m as default};
