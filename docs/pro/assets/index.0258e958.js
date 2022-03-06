
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.fef54795.js";import{_ as t}from"./index.b11652ae.js";import{a as e}from"./index.8d8a4cfe.js";import{k as n,A as s,x as a,z as i,o as r,$ as l,C as c}from"./vendor.b0dde714.js";const d=l("Mock.js 官网"),f=l("测试：获取用户权限"),m={setup(l){const{proxy:m}=c(),u=e();function p(){u.getPermissions().then((o=>{m.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,l)=>{const c=i("el-button"),m=t,u=o;return r(),n("div",null,[s(m,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[s(c,{icon:"el-icon-link",onClick:l[0]||(l[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:a((()=>[d])),_:1})])),_:1}),s(u,null,{default:a((()=>[s(c,{onClick:p},{default:a((()=>[f])),_:1})])),_:1})])}}};export{m as default};
