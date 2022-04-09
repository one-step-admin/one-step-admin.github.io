
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.3cef4ded.js";import{_ as o}from"./index.f2802abe.js";import{a as t,c as n,e as s,f as a,m as i,n as r,x as c,z as l}from"./index.6885a104.js";import"./plugin-vue_export-helper.21dcd24c.js";const d=c("Mock.js 官网"),p=c("测试：获取用户权限"),u={setup(c){const{proxy:u}=l(),m=t();function f(){m.getPermissions().then((e=>{u.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:e.map((e=>`<p>${e}</p>`)).join("")})}))}return(t,c)=>{const l=i("el-button"),u=o,m=e;return r(),n("div",null,[s(u,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[s(l,{icon:"el-icon-link",onClick:c[0]||(c[0]=e=>{return o="http://mockjs.com/",void window.open(o,"top");var o})},{default:a((()=>[d])),_:1})])),_:1}),s(m,null,{default:a((()=>[s(l,{onClick:f},{default:a((()=>[p])),_:1})])),_:1})])}}};export{u as default};
