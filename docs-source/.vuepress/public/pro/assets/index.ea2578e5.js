
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.d92f6c0c.js";import{_ as t}from"./index.c2d6d7be.js";import{a as n}from"./index.091d1180.js";import{k as e,A as s,x as i,z as a,o as r,$ as d,C as c}from"./vendor.b0dde714.js";const l=d("Mock.js 官网"),m=d("测试：获取用户权限"),u={setup(d){const{proxy:u}=c(),p=n();function f(){p.getPermissions().then((o=>{u.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(n,d)=>{const c=a("el-button"),u=t,p=o;return r(),e("div",null,[s(u,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[s(c,{icon:"el-icon-link",onClick:d[0]||(d[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:i((()=>[l])),_:1})])),_:1}),s(p,null,{default:i((()=>[s(c,{onClick:f},{default:i((()=>[m])),_:1})])),_:1})])}}};export{u as default};
