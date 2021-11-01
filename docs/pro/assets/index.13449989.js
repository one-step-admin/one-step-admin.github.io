
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{u as i,h as g,r as t,o as a,i as s,j as n,l as f,I as v,X as w,T as b,Q as x,k,Y as y,Z as C,M as h,m as j}from"./vendor.6b4522dc.js";import{g as I}from"./index.688b493d.js";import{_ as L}from"./plugin-vue_export-helper.5a098b48.js";const N={setup($){const{proxy:r}=j(),d=i(),l=g(()=>I());function _(e){r.$i18n.locale=e,d.commit("settings/setDefaultLang",e)}return(e,B)=>{const c=t("el-dropdown-item"),m=t("el-dropdown-menu"),u=t("el-dropdown");return e.$store.state.settings.enableI18n?(a(),s(u,{key:0,class:"language-container",size:"medium",onCommand:_},{dropdown:n(()=>[f(m,null,{default:n(()=>[(a(!0),v(y,null,w(k(l),(o,p)=>(a(),s(c,{key:p,disabled:e.$store.state.settings.defaultLang===o.name,command:o.name},{default:n(()=>[b(x(o.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:n(()=>[C(e.$slots,"default",{},void 0,!0)]),_:3})):h("v-if",!0)}}};var E=L(N,[["__scopeId","data-v-44df281a"]]);export{E as _};
