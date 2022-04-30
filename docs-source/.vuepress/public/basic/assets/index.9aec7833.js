
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as a,c as e,e as s,f as t,m as o,s as r}from"./index.cc1bbbc5.js";import{E as i}from"./el-button.1491974b.js";import{E as l}from"./el-input.aeca5281.js";import"./index.b70656fd.js";import"./index.b88bc1db.js";import"./typescript.b0ac2d0c.js";import"./event.75bf56a9.js";import"./index.5dd31558.js";import"./error.b438369f.js";import"./isNil.aac33454.js";const m=r("打开并传入一个值到新窗口"),d={setup(r){const d=a("123");return(a,r)=>{const n=l,p=i;return o(),e("div",null,[s(n,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=a=>d.value=a)},null,8,["modelValue"]),s(p,{onClick:r[1]||(r[1]=e=>a.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:d.value}}))},{default:t((()=>[m])),_:1})])}}};export{d as default};
