
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as o}from"./index.4d88f6c2.js";import{_ as t}from"./index.3420411b.js";import{a as e,E as s,c as n,e as i,f as a,m as r,s as m}from"./index.1b2a4798.js";import{E as l}from"./el-button.a29297df.js";/* empty css                */import{_ as c}from"./index.373c9150.js";import{E as p}from"./el-notification.28e75b5b.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.c8167427.js";import"./index.48ef7773.js";const d=m(" Mock.js 官网 "),f=m("测试：获取用户权限"),u={setup(m){const u=e();function j(){u.getPermissions().then((o=>{p({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(e,m)=>{const p=c,u=s,x=l,_=t,k=o;return r(),n("div",null,[i(_,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[i(x,{onClick:m[0]||(m[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:a((()=>[i(u,null,{default:a((()=>[i(p,{name:"ep:link"})])),_:1})])),default:a((()=>[d])),_:1})])),_:1}),i(k,null,{default:a((()=>[i(x,{onClick:j},{default:a((()=>[f])),_:1})])),_:1})])}}};export{u as default};
