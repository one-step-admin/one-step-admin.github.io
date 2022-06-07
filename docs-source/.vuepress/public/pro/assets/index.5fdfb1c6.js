
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e,r as a,W as o,n as t,c as s,H as l,b as n,w as i,y as r,t as u,j as d,E as f}from"./index.0a5e3bc2.js";import{E as c}from"./el-button.2fada245.js";/* empty css                */import{_ as m}from"./index.5fef9d7d.js";const p={class:"search-container"},v={key:0,class:"more"};var _=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:_}){const b=e,j=a(!b.unfold);function y(){j.value=!j.value,_("toggle",j.value)}return o((()=>b.unfold),(()=>y()),{immediate:!0}),(a,o)=>{const _=m,b=f,g=c;return t(),s("div",p,[l(a.$slots,"default",{},void 0,!0),e.showMore?(t(),s("div",v,[n(g,{type:"text",size:"small",onClick:y},{icon:i((()=>[n(b,null,{default:i((()=>[n(_,{name:j.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:i((()=>[r(" "+u(j.value?"收起":"展开"),1)])),_:1})])):d("v-if",!0)])}}},[["__scopeId","data-v-4e3701e4"]]);export{_};
