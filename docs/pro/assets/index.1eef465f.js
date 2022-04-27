
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,C as a,n as t,c as l,e as s,w as n,h as d,bb as o,t as c,j as i,H as r,y as u}from"./index.05e4ed9f.js";import{a as h}from"./el-form.48a75487.js";import{E as m}from"./el-checkbox.b635827d.js";const f={class:"batch-action-bar"},p=u("当页全选"),b={key:0,class:"tips"};var g=e({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:u}){const g=e,v=a({get:function(){let e=!1;return 0!=g.data.length&&g.data.length==g.selectionData.length&&(e=!0),e},set:function(e){u(e?"check-all":"check-null")}}),D=a((()=>{let e=!1;return g.selectionData.length>0&&g.selectionData.length<g.data.length&&(e=!0),e}));return(a,u)=>{const g=m,k=h;return t(),l("div",f,[s(g,{modelValue:d(v),"onUpdate:modelValue":u[0]||(u[0]=e=>o(v)?v.value=e:null),indeterminate:d(D),disabled:!e.data.length},{default:n((()=>[p])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(t(),l("div",b,"已选 "+c(e.selectionData.length)+" 项",1)):i("v-if",!0),s(k,{disabled:!e.selectionData.length},{default:n((()=>[r(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{g as _};
