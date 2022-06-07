
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as a,C as e,n as t,c as l,b as s,w as n,f as d,an as c,t as o,j as i,H as r,y as u}from"./index.0a5e3bc2.js";import{a as h}from"./el-form.baa50cfd.js";import{E as b}from"./el-checkbox.b123cdbb.js";const f={class:"batch-action-bar"},m=u("当页全选"),p={key:0,class:"tips"};var g=a({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:u}){const g=a,v=e({get:function(){let a=!1;return 0!=g.data.length&&g.data.length==g.selectionData.length&&(a=!0),a},set:function(a){u(a?"check-all":"check-null")}}),D=e((()=>{let a=!1;return g.selectionData.length>0&&g.selectionData.length<g.data.length&&(a=!0),a}));return(e,u)=>{const g=b,k=h;return t(),l("div",f,[s(g,{modelValue:d(v),"onUpdate:modelValue":u[0]||(u[0]=a=>c(v)?v.value=a:null),indeterminate:d(D),disabled:!a.data.length},{default:n((()=>[m])),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(t(),l("div",p,"已选 "+o(a.selectionData.length)+" 项",1)):i("v-if",!0),s(k,{disabled:!a.selectionData.length},{default:n((()=>[r(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{g as _};
