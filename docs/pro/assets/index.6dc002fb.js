
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as c,a as r}from"./index.418d3b50.js";import{r as f,t as _,x as V,o as v,j as b,A as y,u as h,af as x}from"./vendor.5ed2e184.js";const g={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:u}){const m=t,i=f({options:r,props:{value:"code",label:"name"}}),p=_({get:()=>{const e=[];if(m.modelValue.length===3){const[a,o,l]=m.modelValue;r.map(s=>{s.name===a&&(e.push(s.code),s.children.map(d=>{d.name===o&&(e.push(d.code),d.children.map(n=>{n.name===l&&e.push(n.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;r.map(s=>{s.code===a&&(a=s.name,s.children.map(d=>{d.code===o&&(o=d.name,d.children.map(n=>{n.code===l&&(l=n.name)}))}))}),u("update:modelValue",[a,o,l])}else u("update:modelValue",[])}});return(e,a)=>{const o=V("el-cascader");return v(),b("div",null,[y(o,{modelValue:h(p),"onUpdate:modelValue":a[0]||(a[0]=l=>x(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}};var N=c(g,[["__scopeId","data-v-508f6864"]]);export{N as _};