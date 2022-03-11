
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.d3415f46.js";import{_ as t}from"./index.dc0a326f.js";import{a as e}from"./index.ac897a4b.js";import{C as n,f as s,e as a,r as i,o as r,P as c,R as l}from"./vendor.2ae12b47.js";import"./plugin-vue_export-helper.21dcd24c.js";const d=c("Mock.js 官网"),p=c("测试：获取用户权限"),u={setup(c){const{proxy:u}=l(),m=e();function f(){m.getPermissions().then((o=>{u.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,c)=>{const l=i("el-button"),u=t,m=o;return r(),n("div",null,[s(u,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[s(l,{icon:"el-icon-link",onClick:c[0]||(c[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:a((()=>[d])),_:1})])),_:1}),s(m,null,{default:a((()=>[s(l,{onClick:f},{default:a((()=>[p])),_:1})])),_:1})])}}};export{u as default};
