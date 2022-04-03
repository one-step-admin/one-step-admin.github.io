
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.64b0a20f.js";import{_ as t}from"./index.246b70e5.js";import{a as e,c as n,e as s,f as i,m as a,n as r,x as l,z as c}from"./index.8b6d4e84.js";import"./plugin-vue_export-helper.21dcd24c.js";const p=l("Mock.js 官网"),u=l("测试：获取用户权限"),d={setup(l){const{proxy:d}=c(),m=e();function f(){m.getPermissions().then((o=>{d.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,l)=>{const c=a("el-button"),d=t,m=o;return r(),n("div",null,[s(d,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[s(c,{icon:"el-icon-link",onClick:l[0]||(l[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:i((()=>[p])),_:1})])),_:1}),s(m,null,{default:i((()=>[s(c,{onClick:f},{default:i((()=>[u])),_:1})])),_:1})])}}};export{d as default};
