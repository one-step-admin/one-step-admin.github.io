
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as e,c as a,g as t,w as o,o as s,y as r}from"./index.b046d3e8.js";import{E as i}from"./el-button.12f8eb95.js";import{E as l}from"./el-input.33bb8256.js";import"./index.2b0c4341.js";import"./index.16ef6f7e.js";import"./typescript.14beffb5.js";import"./event.e7ca8317.js";import"./index.b8b1886a.js";import"./error.76088f19.js";import"./isNil.aac33454.js";const m=r("打开并传入一个值到新窗口"),n={setup(r){const n=e("123");return(e,r)=>{const p=l,d=i;return s(),a("div",null,[t(p,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e)},null,8,["modelValue"]),t(d,{onClick:r[1]||(r[1]=a=>e.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:n.value}}))},{default:o((()=>[m])),_:1})])}}};export{n as default};
