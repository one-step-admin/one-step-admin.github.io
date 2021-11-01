
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{P as p,U as c,r as m,o as s,q as r,x as o,J as t,A as l,y as i,V as g,R as b,S as _,c as f}from"./vendor.1e66543d.js";import v from"./index.c928b5b0.js";import S from"./index.c01fabe7.js";import{_ as $}from"./plugin-vue_export-helper.5a098b48.js";import"./logo.96f1da49.js";import"./index.3ac8c786.js";const h=p({name:"SubSidebar"});function C(y){const a=c(0);function d(e){a.value=e.target.scrollTop}return(e,k)=>{const u=m("el-menu");return["side","head","single"].includes(e.$store.state.settings.menuMode)?(s(),r("div",{key:0,class:t(["sub-sidebar-container",{"is-collapse":e.$store.state.settings.sidebarCollapse}]),onScroll:d},[o(v,{"show-logo":e.$store.state.settings.menuMode==="single",class:t({"sidebar-logo":!0,"sidebar-logo-bg":e.$store.state.settings.menuMode==="single",shadow:a.value})},null,8,["show-logo","class"]),l(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u65E0\u4E3B\u5BFC\u822A\uFF09\u6216\u4FA7\u8FB9\u680F\u7CBE\u7B80\u6A21\u5F0F "),o(u,{"unique-opened":e.$store.state.settings.sidebarUniqueOpened,collapse:e.$store.state.settings.sidebarCollapse,"collapse-transition":!1,class:t({"is-collapse-without-logo":e.$store.state.settings.menuMode!=="single"&&e.$store.state.settings.sidebarCollapse})},{default:i(()=>[o(g,{name:"sub-sidebar"},{default:i(()=>[(s(!0),r(b,null,_(e.$store.getters["menu/sidebarMenus"],n=>(s(),f(S,{key:JSON.stringify(n),item:n},null,8,["item"]))),128))]),_:1})]),_:1},8,["unique-opened","collapse","class"])],34)):l("v-if",!0)}}const j=Object.assign(h,{setup:C});var T=$(j,[["__scopeId","data-v-6d77620b"]]);export{T as default};
