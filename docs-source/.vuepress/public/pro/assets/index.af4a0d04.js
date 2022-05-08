
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as o}from"./index.7ae327c0.js";import{_ as e}from"./index.60634e19.js";import{b as t,E as n,c as s,g as a,w as i,o as r,y as c}from"./index.89c4a536.js";import{E as m}from"./el-button.ee77ba8f.js";/* empty css                */import{_ as l}from"./index.2a4f1e1c.js";import{E as d}from"./el-notification.d19c3127.js";import"./index.0dfe2aba.js";import"./index.a744c982.js";const f=c(" Mock.js 官网 "),p=c("测试：获取用户权限"),u={setup(c){const u=t();function j(){u.getPermissions().then((o=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(t,c)=>{const d=l,u=n,k=m,x=e,_=o;return r(),s("div",null,[a(x,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[a(k,{onClick:c[0]||(c[0]=o=>{return e="http://mockjs.com/",void window.open(e,"top");var e})},{icon:i((()=>[a(u,null,{default:i((()=>[a(d,{name:"ep:link"})])),_:1})])),default:i((()=>[f])),_:1})])),_:1}),a(_,null,{default:i((()=>[a(k,{onClick:j},{default:i((()=>[p])),_:1})])),_:1})])}}};export{u as default};
