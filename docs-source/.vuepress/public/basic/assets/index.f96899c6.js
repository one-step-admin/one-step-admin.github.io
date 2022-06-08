
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.9a39b5db.js";import{_ as o}from"./index.34688040.js";import{a as t,E as n,b as s,c as a,g as i,h as r,s as m}from"./index.eaca9d64.js";import{E as d}from"./el-button.3a9a3385.js";/* empty css                */import{_ as l}from"./index.8eb858d1.js";import{E as p}from"./index2.ae742f13.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index2.fa9449b9.js";import"./index2.200c9b4b.js";const c=m(" Mock.js 官网 "),u=m("测试：获取用户权限"),f={name:"index",setup(m){const f=t();function j(){f.getPermissions().then((e=>{p({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:e.map((e=>`<p>${e}</p>`)).join("")})}))}return(t,m)=>{const p=l,f=n,x=d,b=o,_=e;return s(),a("div",null,[i(b,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:r((()=>[i(x,{onClick:m[0]||(m[0]=e=>{return o="http://mockjs.com/",void window.open(o,"top");var o})},{icon:r((()=>[i(f,null,{default:r((()=>[i(p,{name:"ep:link"})])),_:1})])),default:r((()=>[c])),_:1})])),_:1}),i(_,null,{default:r((()=>[i(x,{onClick:j},{default:r((()=>[u])),_:1})])),_:1})])}}};export{f as default};
