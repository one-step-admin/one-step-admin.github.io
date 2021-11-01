
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as y}from"./index.3ac8c786.js";import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{P as b,r as m,o as t,q as c,c as n,y as a,A as d,s as r,D as u,R as h,S as k,Z as p}from"./vendor.1e66543d.js";const C={class:"sidebar-item"},S={class:"title"},j={class:"title"},O=b({name:"SidebarItem"});function B(e){const{proxy:_}=p();function f(i){/^(https?:|mailto:|tel:)/.test(i)?window.open(i):_.$window.add(i)}return(i,l)=>{const o=y,v=m("el-menu-item"),x=m("el-sub-menu");return t(),c("div",C,[e.item.children?(t(),n(x,{key:1,title:e.item.title,index:JSON.stringify(e.item)},{title:a(()=>[e.item.icon?(t(),n(o,{key:0,name:e.item.icon,class:"icon"},null,8,["name"])):d("v-if",!0),r("span",j,u(e.item.title),1)]),default:a(()=>[(t(!0),c(h,null,k(e.item.children,s=>(t(),n(w,{key:s.path,item:s},null,8,["item"]))),128))]),_:1},8,["title","index"])):(t(),n(v,{key:0,title:e.item.title,index:JSON.stringify(e.item),onClick:l[0]||(l[0]=s=>f(e.item.windowName))},{default:a(()=>[e.item.icon?(t(),n(o,{key:0,name:e.item.icon,class:"icon"},null,8,["name"])):d("v-if",!0),r("span",S,u(e.item.title),1)]),_:1},8,["title","index"]))])}}const I=Object.assign(O,{props:{item:{type:Object,required:!0}},setup:B});var w=g(I,[["__scopeId","data-v-76b620f9"]]);export{w as default};
