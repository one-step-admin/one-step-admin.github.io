
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.9c1fa942.js";import{_ as o}from"./index.abd93cee.js";import{a as t,E as n,c as s,e as a,w as i,n as r,y as c}from"./index.05e4ed9f.js";import{E as m}from"./el-button.a01942a9.js";/* empty css                */import{_ as l}from"./index.dd2c42e8.js";import{E as d}from"./el-notification.2e22a46b.js";import"./index.48c8fc0e.js";import"./index.aa8c6f3e.js";const f=c(" Mock.js 官网 "),p=c("测试：获取用户权限"),u={setup(c){const u=t();function j(){u.getPermissions().then((e=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:e.map((e=>`<p>${e}</p>`)).join("")})}))}return(t,c)=>{const d=l,u=n,k=m,x=o,_=e;return r(),s("div",null,[a(x,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[a(k,{onClick:c[0]||(c[0]=e=>{return o="http://mockjs.com/",void window.open(o,"top");var o})},{icon:i((()=>[a(u,null,{default:i((()=>[a(d,{name:"ep:link"})])),_:1})])),default:i((()=>[f])),_:1})])),_:1}),a(_,null,{default:i((()=>[a(k,{onClick:j},{default:i((()=>[p])),_:1})])),_:1})])}}};export{u as default};
