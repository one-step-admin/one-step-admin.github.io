
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as p}from"./index.5c755cb6.js";import{s as o,z as c,o as d,k as i,A as r,x as u,u as _,af as k,Y as v,m as b,a3 as x,$ as y}from"./vendor.18c32348.js";const D={class:"batch-action-bar"},V=y("\u5F53\u9875\u5168\u9009"),A={key:0,class:"tips"},C={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:l}){const t=a,n=o({get:function(){let e=!1;return t.data.length!=0&&t.data.length==t.selectionData.length&&(e=!0),e},set:function(e){l(e?"check-all":"check-null")}}),f=o(()=>{let e=!1;return t.selectionData.length>0&&t.selectionData.length<t.data.length&&(e=!0),e});return(e,s)=>{const m=c("el-checkbox"),h=c("el-form");return d(),i("div",D,[r(m,{modelValue:_(n),"onUpdate:modelValue":s[0]||(s[0]=g=>k(n)?n.value=g:null),indeterminate:_(f),disabled:!a.data.length},{default:u(()=>[V]),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(d(),i("div",A,"\u5DF2\u9009 "+v(a.selectionData.length)+" \u9879",1)):b("v-if",!0),r(h,{disabled:!a.selectionData.length},{default:u(()=>[x(e.$slots,"default",{},void 0,!0)]),_:3},8,["disabled"])])}}};var B=p(C,[["__scopeId","data-v-9d2c1ba8"]]);export{B as _};
