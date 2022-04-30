
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as o}from"./index.e4264495.js";import{_ as e}from"./index.f15ab100.js";import{b as t,E as n,c as s,g as i,w as a,o as r,y as m}from"./index.b046d3e8.js";import{E as l}from"./el-button.12f8eb95.js";/* empty css                */import{_ as f}from"./index.f1e68254.js";import{E as c}from"./el-notification.d74b8d5c.js";import"./index.2b0c4341.js";import"./index.16ef6f7e.js";const d=m(" Mock.js 官网 "),p=m("测试：获取用户权限"),u={setup(m){const u=t();function j(){u.getPermissions().then((o=>{c({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(t,m)=>{const c=f,u=n,b=l,k=e,x=o;return r(),s("div",null,[i(k,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[i(b,{onClick:m[0]||(m[0]=o=>{return e="http://mockjs.com/",void window.open(e,"top");var e})},{icon:a((()=>[i(u,null,{default:a((()=>[i(c,{name:"ep:link"})])),_:1})])),default:a((()=>[d])),_:1})])),_:1}),i(x,null,{default:a((()=>[i(b,{onClick:j},{default:a((()=>[p])),_:1})])),_:1})])}}};export{u as default};
