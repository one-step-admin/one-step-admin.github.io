
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.8346cdbe.js";import{_ as e}from"./index.8b7064ca.js";import{ae as a,c as n,b as s,w as o,m as i,n as l,e as u,t as d,g as c,y as r}from"./index.d26282ba.js";const f=r("切换"),x=r("清空"),m={setup(r){const m=a();function b(){m.setText("热门"==m.text?"促销":"热门")}function p(){m.setText()}return(a,r)=>{const _=e,j=i("el-button"),g=t;return l(),n("div",null,[s(_,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),s(g,null,{default:o((()=>[u("div",null,"当前 badge 值：'"+d(c(m).text)+"'",1),s(j,{onClick:b},{default:o((()=>[f])),_:1}),s(j,{onClick:p},{default:o((()=>[x])),_:1})])),_:1})])}}};export{m as default};
