
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.e5c277f9.js";import{_ as t}from"./index.e3b25878.js";import{a as e}from"./index.9dc02013.js";import{k as n,A as s,x as a,z as i,o as r,$ as c,C as l}from"./vendor.6ae38f98.js";const d=c("Mock.js 官网"),m=c("测试：获取用户权限"),u={setup(c){const{proxy:u}=l(),f=e();function p(){f.getPermissions().then((o=>{u.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,c)=>{const l=i("el-button"),u=t,f=o;return r(),n("div",null,[s(u,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[s(l,{icon:"el-icon-link",onClick:c[0]||(c[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:a((()=>[d])),_:1})])),_:1}),s(f,null,{default:a((()=>[s(l,{onClick:p},{default:a((()=>[m])),_:1})])),_:1})])}}};export{u as default};
