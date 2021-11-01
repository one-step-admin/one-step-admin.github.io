
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as i,h as f,r as t,o as a,i as s,j as n,l as g,G as v,U as w,R as b,O as x,k,V as y,X as C,K as h,m as j}from"./vendor.e2abc40b.js";import{g as L}from"./index.c0f98470.js";import{_ as N}from"./plugin-vue_export-helper.5a098b48.js";const V={setup($){const{proxy:r}=j(),l=i(),d=f(()=>L());function _(e){r.$i18n.locale=e,l.commit("settings/setDefaultLang",e)}return(e,B)=>{const c=t("el-dropdown-item"),m=t("el-dropdown-menu"),u=t("el-dropdown");return e.$store.state.settings.enableI18n?(a(),s(u,{key:0,class:"language-container",size:"medium",onCommand:_},{dropdown:n(()=>[g(m,null,{default:n(()=>[(a(!0),v(y,null,w(k(d),(o,p)=>(a(),s(c,{key:p,disabled:e.$store.state.settings.defaultLang===o.name,command:o.name},{default:n(()=>[b(x(o.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:n(()=>[C(e.$slots,"default",{},void 0,!0)]),_:3})):h("v-if",!0)}}};var E=N(V,[["__scopeId","data-v-44df281a"]]);export{E as _};
