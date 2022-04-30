
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,r as a,Z as o,o as s,c as t,H as l,g as n,w as r,h as u,v as i,y as f,t as c,k as d,E as m}from"./index.b046d3e8.js";import{E as p}from"./el-button.12f8eb95.js";/* empty css                */import{_ as v}from"./caret-bottom.2299f793.js";import{_}from"./caret-top.574ecaea.js";const b={class:"search-container"},g={key:0,class:"more"};var j=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:j}){const y=e,h=a(!y.unfold);function k(){h.value=!h.value,j("toggle",h.value)}return o((()=>y.unfold),(()=>k()),{immediate:!0}),(a,o)=>{const j=_,y=v,w=m,x=p;return s(),t("div",b,[l(a.$slots,"default",{},void 0,!0),e.showMore?(s(),t("div",g,[n(x,{type:"text",size:"small",onClick:k},{icon:r((()=>[n(w,null,{default:r((()=>[u(n(j,null,null,512),[[i,h.value]]),u(n(y,null,null,512),[[i,!h.value]])])),_:1})])),default:r((()=>[f(" "+c(h.value?"收起":"展开"),1)])),_:1})])):d("v-if",!0)])}}},[["__scopeId","data-v-8e4ae446"]]);export{j as _};
