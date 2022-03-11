
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,h as a}from"./index.9dc02013.js";import{r as l,s as o,z as s,o as d,k as p,A as t,u as n,af as u}from"./vendor.6ae38f98.js";var r=e({props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const m=e,i=l({options:a,props:{value:"code",label:"name"}}),c=o({get:()=>{const e=[];if(3===m.modelValue.length){const[l,o,s]=m.modelValue;a.map((a=>{a.name===l&&(e.push(a.code),a.children.map((a=>{a.name===o&&(e.push(a.code),a.children.map((a=>{a.name===s&&e.push(a.code)})))})))}))}return e},set:e=>{if(e){let[l,o,s]=e;a.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===o&&(o=e.name,e.children.map((e=>{e.code===s&&(s=e.name)})))})))})),r("update:modelValue",[l,o,s])}else r("update:modelValue",[])}});return(a,l)=>{const o=s("el-cascader");return d(),p("div",null,[t(o,{modelValue:n(c),"onUpdate:modelValue":l[0]||(l[0]=e=>u(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:e.size,disabled:e.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}},[["__scopeId","data-v-508f6864"]]);export{r as _};
