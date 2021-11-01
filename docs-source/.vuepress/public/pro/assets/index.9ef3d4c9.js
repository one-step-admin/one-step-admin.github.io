
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{h as s,r as c,o as d,I as r,l as i,j as u,k as _,ae as v,Q as b,M as k,Z as x,T as y}from"./vendor.6b4522dc.js";const D={class:"batch-action-bar"},V=y("\u5F53\u9875\u5168\u9009"),j={key:0,class:"tips"},A={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:n}){const t=a,l=s({get:function(){let e=!1;return t.data.length!=0&&t.data.length==t.selectionData.length&&(e=!0),e},set:function(e){n(e?"check-all":"check-null")}}),f=s(()=>{let e=!1;return t.selectionData.length>0&&t.selectionData.length<t.data.length&&(e=!0),e});return(e,o)=>{const h=c("el-checkbox"),m=c("el-form");return d(),r("div",D,[i(h,{modelValue:_(l),"onUpdate:modelValue":o[0]||(o[0]=p=>v(l)?l.value=p:null),indeterminate:_(f),disabled:!a.data.length},{default:u(()=>[V]),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(d(),r("div",j,"\u5DF2\u9009 "+b(a.selectionData.length)+" \u9879",1)):k("v-if",!0),i(m,{disabled:!a.selectionData.length},{default:u(()=>[x(e.$slots,"default",{},void 0,!0)]),_:3},8,["disabled"])])}}};var N=g(A,[["__scopeId","data-v-9d2c1ba8"]]);export{N as _};
