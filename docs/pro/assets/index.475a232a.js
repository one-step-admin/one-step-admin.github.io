
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,r as a,Z as o,n as t,c as s,H as l,e as n,w as r,y as i,t as u,j as d,E as c}from"./index.05e4ed9f.js";import{E as m}from"./el-button.a01942a9.js";/* empty css                */import{_ as f}from"./index.dd2c42e8.js";const p={class:"search-container"},v={key:0,class:"more"};var _=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:_}){const b=e,j=a(!b.unfold);function y(){j.value=!j.value,_("toggle",j.value)}return o((()=>b.unfold),(()=>y()),{immediate:!0}),(a,o)=>{const _=f,b=c,g=m;return t(),s("div",p,[l(a.$slots,"default",{},void 0,!0),e.showMore?(t(),s("div",v,[n(g,{type:"text",size:"small",onClick:y},{icon:r((()=>[n(b,null,{default:r((()=>[n(_,{name:j.value?"ep:caret-top":"ep:caret-bottom"},null,8,["name"])])),_:1})])),default:r((()=>[i(" "+u(j.value?"收起":"展开"),1)])),_:1})])):d("v-if",!0)])}}},[["__scopeId","data-v-48e6b661"]]);export{_};
