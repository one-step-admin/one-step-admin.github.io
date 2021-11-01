
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as u}from"./index.3ac8c786.js";import{P as m,Q as p,o as e,c,y as v,q as t,s as r,x as i,A as n,R as _,S as h,J as f,L as g,D as k,T as y}from"./vendor.1e66543d.js";import j from"./index.c928b5b0.js";import x from"./index.14d702c3.js";import{_ as C}from"./plugin-vue_export-helper.5a098b48.js";import"./logo.96f1da49.js";const b={key:0},B={class:"header-container"},M={class:"main"},$={class:"nav"},w=["onClick"],L={key:1},N=m({name:"Header"});function V(D){const d=p("switchMenu");return(o,H)=>{const l=u;return e(),c(y,{name:"header"},{default:v(()=>[o.$store.state.settings.menuMode==="head"?(e(),t("header",b,[r("div",B,[r("div",M,[i(j),n(" \u9876\u90E8\u6A21\u5F0F "),r("div",$,[(e(!0),t(_,null,h(o.$store.getters["menu/menus"],(s,a)=>(e(),t(_,{key:a},[s.children&&s.children.length!==0?(e(),t("div",{key:0,class:f(["item",{active:a==o.$store.state.menu.headerActived}]),onClick:S=>g(d)(a)},[s.icon?(e(),c(l,{key:0,name:s.icon,class:"icon"},null,8,["name"])):n("v-if",!0),s.title?(e(),t("span",L,k(s.title),1)):n("v-if",!0)],10,w)):n("v-if",!0)],64))),128))])]),i(x)])])):n("v-if",!0)]),_:1})}}const A=Object.assign(N,{setup:V});var J=C(A,[["__scopeId","data-v-66866350"]]);export{J as default};
