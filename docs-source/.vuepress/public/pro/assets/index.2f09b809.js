
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as f}from"./index.55ffcc18.js";import{$ as h,a0 as g,r as y,o as e,i,j as u,G as n,H as c,l as d,K as a,S as l,V as r,U as m,k,O as j,a1 as $}from"./vendor.e2abc40b.js";import b from"./index.09c1e4b8.js";import w from"./index.578b8808.js";import C from"./index.1f009db1.js";import{_ as S}from"./plugin-vue_export-helper.5a098b48.js";import"./logo.96f1da49.js";import"./index.04a0ca23.js";import"./index.c0f98470.js";import"./index.01aa311e.js";const M={key:0},B={class:"header-container"},V={class:"main"},H=["onClick"],N={key:1},x=h({name:"Header"});function z(L){const _=g("switchMenu");return(s,O)=>{const p=f,v=y("el-menu");return e(),i($,{name:"header"},{default:u(()=>[["head","only-head"].includes(s.$store.state.settings.menuMode)?(e(),n("header",M,[c("div",B,[c("div",V,[d(b),a(" \u9876\u90E8\u6A21\u5F0F "),s.$store.state.settings.menuMode==="head"?(e(),n("div",{key:0,class:l(["nav",{"nav-radius":s.$store.state.settings.menuStyle==="radius","nav-arrow":s.$store.state.settings.menuStyle==="arrow"}])},[(e(!0),n(r,null,m(s.$store.getters["menu/menus"],(t,o)=>(e(),n(r,{key:o},[t.children&&t.children.length!==0?(e(),n("div",{key:0,class:l(["item",{active:o==s.$store.state.menu.headerActived}]),onClick:U=>k(_)(o)},[t.icon?(e(),i(p,{key:0,name:t.icon,class:"icon"},null,8,["name"])):a("v-if",!0),t.title?(e(),n("span",N,j(t.title),1)):a("v-if",!0)],10,H)):a("v-if",!0)],64))),128))],2)):s.$store.state.settings.menuMode==="only-head"?(e(),n(r,{key:1},[a(" \u9876\u90E8\u7CBE\u7B80\u6A21\u5F0F "),d(v,{mode:"horizontal",class:l(["el-menu-nav",{"el-menu-nav-radius":s.$store.state.settings.menuStyle==="radius","el-menu-nav-arrow":s.$store.state.settings.menuStyle==="arrow"}])},{default:u(()=>[(e(!0),n(r,null,m(s.$store.getters["menu/menus"],(t,o)=>(e(),i(C,{key:o,item:t},null,8,["item"]))),128))]),_:1},8,["class"])],2112)):a("v-if",!0)]),d(w)])])):a("v-if",!0)]),_:1})}}const I=Object.assign(x,{setup:z});var Q=S(I,[["__scopeId","data-v-5bfa56c4"]]);export{Q as default};