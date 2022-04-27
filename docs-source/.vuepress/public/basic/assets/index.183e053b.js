
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.d9ff6232.js";import{_ as t}from"./index.0582e115.js";import{a as e,E as s,c as n,e as i,f as a,m as r,s as m}from"./index.2721a539.js";import{E as l}from"./el-button.702f0937.js";/* empty css                */import{_ as f}from"./index.4b9f4b82.js";import{E as p}from"./el-notification.fcc81a84.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.438da6eb.js";import"./index.f8027735.js";const c=m(" Mock.js 官网 "),d=m("测试：获取用户权限"),u={setup(m){const u=e();function j(){u.getPermissions().then((o=>{p({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,m)=>{const p=f,u=s,x=l,_=t,k=o;return r(),n("div",null,[i(_,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[i(x,{onClick:m[0]||(m[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:a((()=>[i(u,null,{default:a((()=>[i(p,{name:"ep:link"})])),_:1})])),default:a((()=>[c])),_:1})])),_:1}),i(k,null,{default:a((()=>[i(x,{onClick:j},{default:a((()=>[d])),_:1})])),_:1})])}}};export{u as default};
