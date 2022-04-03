
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,r as a,a5 as l,B as s,m as d,n as o,c as p,b as t,g as n,V as u}from"./index.d26282ba.js";var m=e({props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:m}){const r=e,i=a({options:l,props:{value:"code",label:"name"}}),c=s({get:()=>{const e=[];if(3===r.modelValue.length){const[a,s,d]=r.modelValue;l.map((l=>{l.name===a&&(e.push(l.code),l.children.map((a=>{a.name===s&&(e.push(a.code),a.children.map((a=>{a.name===d&&e.push(a.code)})))})))}))}return e},set:e=>{if(e){let[a,s,d]=e;l.map((e=>{e.code===a&&(a=e.name,e.children.map((e=>{e.code===s&&(s=e.name,e.children.map((e=>{e.code===d&&(d=e.name)})))})))})),m("update:modelValue",[a,s,d])}else m("update:modelValue",[])}});return(a,l)=>{const s=d("el-cascader");return o(),p("div",null,[t(s,{modelValue:n(c),"onUpdate:modelValue":l[0]||(l[0]=e=>u(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:e.size,disabled:e.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}},[["__scopeId","data-v-508f6864"]]);export{m as _};
