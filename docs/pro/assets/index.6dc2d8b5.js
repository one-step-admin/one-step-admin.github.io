
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.55ffcc18.js";import r from"./index.578b8808.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{$ as d,o,G as t,H as c,S as p,l as a,K as _}from"./vendor.e2abc40b.js";import"./index.04a0ca23.js";import"./index.c0f98470.js";import"./index.01aa311e.js";const m={class:"topbar-container","data-fixed-calc-width":""},u={class:"left-box"},f=d({name:"Topbar"});function b(g){return(e,s)=>{const n=i;return o(),t("div",m,[c("div",u,[["side","head","single"].includes(e.$store.state.settings.menuMode)&&e.$store.state.settings.enableSidebarCollapse?(o(),t("div",{key:0,class:p(["sidebar-collapse",{"is-collapse":e.$store.state.settings.sidebarCollapse}]),onClick:s[0]||(s[0]=x=>e.$store.commit("settings/toggleSidebarCollapse"))},[a(n,{name:"toolbar-collapse"})],2)):_("v-if",!0)]),a(r)])}}const v=Object.assign(f,{setup:b});var N=l(v,[["__scopeId","data-v-3aa84d55"]]);export{N as default};
