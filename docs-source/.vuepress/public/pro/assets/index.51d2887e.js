
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e,C as a,o as t,c as l,g as s,w as n,i as d,be as c,t as o,k as i,H as r,y as u}from"./index.89c4a536.js";import{a as h}from"./el-form.49f8d7cd.js";import{E as m}from"./el-checkbox.bcb6e2a2.js";const f={class:"batch-action-bar"},g=u("当页全选"),p={key:0,class:"tips"};var b=e({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:u}){const b=e,k=a({get:function(){let e=!1;return 0!=b.data.length&&b.data.length==b.selectionData.length&&(e=!0),e},set:function(e){u(e?"check-all":"check-null")}}),v=a((()=>{let e=!1;return b.selectionData.length>0&&b.selectionData.length<b.data.length&&(e=!0),e}));return(a,u)=>{const b=m,D=h;return t(),l("div",f,[s(b,{modelValue:d(k),"onUpdate:modelValue":u[0]||(u[0]=e=>c(k)?k.value=e:null),indeterminate:d(v),disabled:!e.data.length},{default:n((()=>[g])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(t(),l("div",p,"已选 "+o(e.selectionData.length)+" 项",1)):i("v-if",!0),s(D,{disabled:!e.selectionData.length},{default:n((()=>[r(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{b as _};
