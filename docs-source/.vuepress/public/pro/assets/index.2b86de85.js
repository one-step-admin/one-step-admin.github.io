
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{a as r}from"./index.688b493d.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";import{a4 as f,h as _,r as v,o as V,I as b,l as h,k as y,ae as x}from"./vendor.6b4522dc.js";const g={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:m}){const u=t,i=f({options:r,props:{value:"code",label:"name"}}),p=_({get:()=>{const e=[];if(u.modelValue.length===3){const[a,o,l]=u.modelValue;r.map(s=>{s.name===a&&(e.push(s.code),s.children.map(d=>{d.name===o&&(e.push(d.code),d.children.map(n=>{n.name===l&&e.push(n.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;r.map(s=>{s.code===a&&(a=s.name,s.children.map(d=>{d.code===o&&(o=d.name,d.children.map(n=>{n.code===l&&(l=n.name)}))}))}),m("update:modelValue",[a,o,l])}else m("update:modelValue",[])}});return(e,a)=>{const o=v("el-cascader");return V(),b("div",null,[h(o,{modelValue:y(p),"onUpdate:modelValue":a[0]||(a[0]=l=>x(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}};var j=c(g,[["__scopeId","data-v-508f6864"]]);export{j as _};
