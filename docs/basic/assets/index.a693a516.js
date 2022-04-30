
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.3db21fe3.js";import{_ as t}from"./index.7d2f4006.js";import{a as e,E as s,c as n,e as i,f as r,m as a,s as m}from"./index.cc1bbbc5.js";import{E as c}from"./el-button.1491974b.js";/* empty css                */import{_ as d}from"./index.236d052b.js";import{E as l}from"./el-notification.1685b286.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.b70656fd.js";import"./index.b88bc1db.js";const p=m(" Mock.js 官网 "),f=m("测试：获取用户权限"),u={setup(m){const u=e();function b(){u.getPermissions().then((o=>{l({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,m)=>{const l=d,u=s,j=c,x=t,_=o;return a(),n("div",null,[i(x,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:r((()=>[i(j,{onClick:m[0]||(m[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:r((()=>[i(u,null,{default:r((()=>[i(l,{name:"ep:link"})])),_:1})])),default:r((()=>[p])),_:1})])),_:1}),i(_,null,{default:r((()=>[i(j,{onClick:b},{default:r((()=>[f])),_:1})])),_:1})])}}};export{u as default};
