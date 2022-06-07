
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.15becada.js";import{_ as o}from"./index.7bc6f31f.js";import{a as t,E as n,c as s,b as a,w as i,n as r,y as m}from"./index.0a5e3bc2.js";import{E as d}from"./el-button.2fada245.js";/* empty css                */import{_ as f}from"./index.5fef9d7d.js";import{E as l}from"./index2.8059569e.js";import"./index2.f37a6952.js";import"./index2.2a4e9295.js";import"./index2.fa2fe4ab.js";const c=m(" Mock.js 官网 "),p=m("测试：获取用户权限"),u={setup(m){const u=t();function j(){u.getPermissions().then((e=>{l({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:e.map((e=>`<p>${e}</p>`)).join("")})}))}return(t,m)=>{const l=f,u=n,x=d,b=o,k=e;return r(),s("div",null,[a(b,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[a(x,{onClick:m[0]||(m[0]=e=>{return o="http://mockjs.com/",void window.open(o,"top");var o})},{icon:i((()=>[a(u,null,{default:i((()=>[a(l,{name:"ep:link"})])),_:1})])),default:i((()=>[c])),_:1})])),_:1}),a(k,null,{default:i((()=>[a(x,{onClick:j},{default:i((()=>[p])),_:1})])),_:1})])}}};export{u as default};
