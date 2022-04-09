
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.84a18d1d.js";import{_ as t}from"./index.c51a8d86.js";import{a as n,c as e,b as s,w as a,m as i,n as r,y as c,A as l}from"./index.93ad63e3.js";const d=c("Mock.js 官网"),u=c("测试：获取用户权限"),m={setup(c){const{proxy:m}=l(),p=n();function f(){p.getPermissions().then((o=>{m.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(n,c)=>{const l=i("el-button"),m=t,p=o;return r(),e("div",null,[s(m,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[s(l,{icon:"el-icon-link",onClick:c[0]||(c[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:a((()=>[d])),_:1})])),_:1}),s(p,null,{default:a((()=>[s(l,{onClick:f},{default:a((()=>[u])),_:1})])),_:1})])}}};export{m as default};
