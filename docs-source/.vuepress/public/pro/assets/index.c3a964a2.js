
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.8d8a4cfe.js";import{s as a,z as t,o as l,k as s,A as n,x as d,u as o,af as c,Y as i,m as r,a3 as u,$ as h}from"./vendor.b0dde714.js";const f={class:"batch-action-bar"},m=h("当页全选"),g={key:0,class:"tips"};var p=e({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:h}){const p=e,b=a({get:function(){let e=!1;return 0!=p.data.length&&p.data.length==p.selectionData.length&&(e=!0),e},set:function(e){h(e?"check-all":"check-null")}}),v=a((()=>{let e=!1;return p.selectionData.length>0&&p.selectionData.length<p.data.length&&(e=!0),e}));return(a,h)=>{const p=t("el-checkbox"),k=t("el-form");return l(),s("div",f,[n(p,{modelValue:o(b),"onUpdate:modelValue":h[0]||(h[0]=e=>c(b)?b.value=e:null),indeterminate:o(v),disabled:!e.data.length},{default:d((()=>[m])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(l(),s("div",g,"已选 "+i(e.selectionData.length)+" 项",1)):r("v-if",!0),n(k,{disabled:!e.selectionData.length},{default:d((()=>[u(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{p as _};
