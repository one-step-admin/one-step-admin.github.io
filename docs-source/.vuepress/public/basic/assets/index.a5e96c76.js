
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as d}from"./index.3ac8c786.js";import{P as u,Q as m,o as s,c as i,y as p,q as t,x as v,A as n,s as r,R as c,S as f,J as g,L as h,D as b,T as k}from"./vendor.1e66543d.js";import j from"./index.c928b5b0.js";import{_ as y}from"./plugin-vue_export-helper.5a098b48.js";import"./logo.96f1da49.js";const C={key:0,class:"main-sidebar-container"},x={class:"nav"},M=["title","onClick"],w=u({name:"MainSidebar"});function B($){const l=m("switchMenu");return(a,L)=>{const _=d;return s(),i(k,{name:"main-sidebar"},{default:p(()=>[a.$store.state.settings.menuMode==="side"?(s(),t("div",C,[v(j,{"show-title":!1,class:"sidebar-logo"}),n(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u542B\u4E3B\u5BFC\u822A\uFF09 "),r("div",x,[(s(!0),t(c,null,f(a.$store.getters["menu/menus"],(e,o)=>(s(),t(c,null,[e.children&&e.children.length!==0?(s(),t("div",{key:o,class:g({item:!0,active:o===a.$store.state.menu.headerActived}),title:e.title,onClick:N=>h(l)(o)},[e.icon?(s(),i(_,{key:0,name:e.icon,class:"icon"},null,8,["name"])):n("v-if",!0),r("span",null,b(e.title),1)],10,M)):n("v-if",!0)],64))),256))])])):n("v-if",!0)]),_:1})}}const S=Object.assign(w,{setup:B});var z=y(S,[["__scopeId","data-v-817442a0"]]);export{z as default};
