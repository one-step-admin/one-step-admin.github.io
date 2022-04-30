
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,C as a,o as t,c as l,g as s,w as n,i as d,ba as o,t as c,k as i,H as r,y as u}from"./index.b046d3e8.js";import{a as h}from"./el-form.16cffb05.js";import{E as f}from"./el-checkbox.004327db.js";const m={class:"batch-action-bar"},b=u("当页全选"),g={key:0,class:"tips"};var p=e({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:u}){const p=e,k=a({get:function(){let e=!1;return 0!=p.data.length&&p.data.length==p.selectionData.length&&(e=!0),e},set:function(e){u(e?"check-all":"check-null")}}),v=a((()=>{let e=!1;return p.selectionData.length>0&&p.selectionData.length<p.data.length&&(e=!0),e}));return(a,u)=>{const p=f,D=h;return t(),l("div",m,[s(p,{modelValue:d(k),"onUpdate:modelValue":u[0]||(u[0]=e=>o(k)?k.value=e:null),indeterminate:d(v),disabled:!e.data.length},{default:n((()=>[b])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(t(),l("div",g,"已选 "+c(e.selectionData.length)+" 项",1)):i("v-if",!0),s(D,{disabled:!e.selectionData.length},{default:n((()=>[r(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{p as _};
