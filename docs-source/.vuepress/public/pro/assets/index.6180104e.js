
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,h as a}from"./index.8d8a4cfe.js";import{r as l,s as d,z as o,o as s,k as p,A as t,u as n,af as u}from"./vendor.b0dde714.js";var r=e({props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const m=e,i=l({options:a,props:{value:"code",label:"name"}}),c=d({get:()=>{const e=[];if(3===m.modelValue.length){const[l,d,o]=m.modelValue;a.map((a=>{a.name===l&&(e.push(a.code),a.children.map((a=>{a.name===d&&(e.push(a.code),a.children.map((a=>{a.name===o&&e.push(a.code)})))})))}))}return e},set:e=>{if(e){let[l,d,o]=e;a.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===d&&(d=e.name,e.children.map((e=>{e.code===o&&(o=e.name)})))})))})),r("update:modelValue",[l,d,o])}else r("update:modelValue",[])}});return(a,l)=>{const d=o("el-cascader");return s(),p("div",null,[t(d,{modelValue:n(c),"onUpdate:modelValue":l[0]||(l[0]=e=>u(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:e.size,disabled:e.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}},[["__scopeId","data-v-508f6864"]]);export{r as _};
