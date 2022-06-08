
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{r as a,b as e,c as s,g as t,h as o,s as r}from"./index.eaca9d64.js";import{E as i}from"./el-button.3a9a3385.js";import{E as l}from"./el-input.0d3e4369.js";import"./index2.fa9449b9.js";import"./index2.200c9b4b.js";import"./typescript2.50fc0493.js";import"./event2.aca9aa52.js";import"./index2.8e851031.js";import"./error2.8f448c70.js";import"./isNil.aac33454.js";const m=r("打开并传入一个值到新窗口"),n={name:"index",setup(r){const n=a("123");return(a,r)=>{const d=l,p=i;return e(),s("div",null,[t(d,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=a=>n.value=a)},null,8,["modelValue"]),t(p,{onClick:r[1]||(r[1]=e=>a.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:n.value}}))},{default:o((()=>[m])),_:1})])}}};export{n as default};
