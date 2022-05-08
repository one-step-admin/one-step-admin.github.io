
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e,r as a,Z as o,o as s,c as t,H as l,g as n,w as r,h as u,v as i,y as c,t as d,k as f,E as m}from"./index.89c4a536.js";import{E as p}from"./el-button.ee77ba8f.js";/* empty css                */import{_ as v}from"./caret-bottom.f3dc6deb.js";import{_}from"./caret-top.18285b0c.js";const b={class:"search-container"},g={key:0,class:"more"};var j=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:j}){const y=e,h=a(!y.unfold);function k(){h.value=!h.value,j("toggle",h.value)}return o((()=>y.unfold),(()=>k()),{immediate:!0}),(a,o)=>{const j=_,y=v,w=m,x=p;return s(),t("div",b,[l(a.$slots,"default",{},void 0,!0),e.showMore?(s(),t("div",g,[n(x,{type:"text",size:"small",onClick:k},{icon:r((()=>[n(w,null,{default:r((()=>[u(n(j,null,null,512),[[i,h.value]]),u(n(y,null,null,512),[[i,!h.value]])])),_:1})])),default:r((()=>[c(" "+d(h.value?"收起":"展开"),1)])),_:1})])):f("v-if",!0)])}}},[["__scopeId","data-v-8e4ae446"]]);export{j as _};
