
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as e,c as a,e as t,w as s,n as o,y as r}from"./index.05e4ed9f.js";import{E as i}from"./el-button.a01942a9.js";import{E as l}from"./el-input.93d8033e.js";import"./index.48c8fc0e.js";import"./index.aa8c6f3e.js";import"./typescript.14beffb5.js";import"./event.e7ca8317.js";import"./index.bebbe66d.js";import"./error.76088f19.js";import"./isNil.aac33454.js";const m=r("打开并传入一个值到新窗口"),n={setup(r){const n=e("123");return(e,r)=>{const d=l,p=i;return o(),a("div",null,[t(d,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e)},null,8,["modelValue"]),t(p,{onClick:r[1]||(r[1]=a=>e.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:n.value}}))},{default:s((()=>[m])),_:1})])}}};export{n as default};
