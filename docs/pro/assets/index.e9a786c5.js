
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{$ as p,a2 as m,r as c,o as s,G as r,l as t,S as o,K as i,j as l,a3 as g,V as b,U as f,i as _}from"./vendor.e2abc40b.js";import v from"./index.09c1e4b8.js";import S from"./index.1f009db1.js";import{_ as $}from"./plugin-vue_export-helper.5a098b48.js";import"./logo.96f1da49.js";import"./index.55ffcc18.js";const h=p({name:"SubSidebar"});function j(y){const a=m(0);function d(e){a.value=e.target.scrollTop}return(e,k)=>{const u=c("el-menu");return["side","head","single"].includes(e.$store.state.settings.menuMode)?(s(),r("div",{key:0,class:o(["sub-sidebar-container",{"is-collapse":e.$store.state.settings.sidebarCollapse}]),onScroll:d},[t(v,{"show-logo":e.$store.state.settings.menuMode==="single",class:o({"sidebar-logo":!0,"sidebar-logo-bg":e.$store.state.settings.menuMode==="single",shadow:a.value})},null,8,["show-logo","class"]),i(" \u4FA7\u8FB9\u680F\u6A21\u5F0F\uFF08\u65E0\u4E3B\u5BFC\u822A\uFF09\u6216\u4FA7\u8FB9\u680F\u7CBE\u7B80\u6A21\u5F0F "),t(u,{"unique-opened":e.$store.state.settings.sidebarUniqueOpened,collapse:e.$store.state.settings.sidebarCollapse,"collapse-transition":!1,class:o({"is-collapse-without-logo":e.$store.state.settings.menuMode!=="single"&&e.$store.state.settings.sidebarCollapse,"menu-radius":e.$store.state.settings.menuStyle==="radius"})},{default:l(()=>[t(g,{name:"sub-sidebar"},{default:l(()=>[(s(!0),r(b,null,f(e.$store.getters["menu/sidebarMenus"],n=>(s(),_(S,{key:JSON.stringify(n),item:n},null,8,["item"]))),128))]),_:1})]),_:1},8,["unique-opened","collapse","class"])],34)):i("v-if",!0)}}const C=Object.assign(h,{setup:j});var T=$(C,[["__scopeId","data-v-828a7006"]]);export{T as default};
