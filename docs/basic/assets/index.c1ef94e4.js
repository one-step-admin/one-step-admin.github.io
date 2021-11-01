
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as r}from"./index.3ac8c786.js";import i from"./index.685c7563.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{P as d,o,q as t,s as _,J as c,x as a,A as p}from"./vendor.1e66543d.js";const m={class:"topbar-container","data-fixed-calc-width":""},u={class:"left-box"},b=d({name:"Topbar"});function f(g){return(e,s)=>{const n=r;return o(),t("div",m,[_("div",u,[["side","head","single"].includes(e.$store.state.settings.menuMode)&&e.$store.state.settings.enableSidebarCollapse?(o(),t("div",{key:0,class:c(["sidebar-collapse",{"is-collapse":e.$store.state.settings.sidebarCollapse}]),onClick:s[0]||(s[0]=x=>e.$store.commit("settings/toggleSidebarCollapse"))},[a(n,{name:"toolbar-collapse"})],2)):p("v-if",!0)]),a(i)])}}const v=Object.assign(b,{setup:f});var k=l(v,[["__scopeId","data-v-67b383d3"]]);export{k as default};
