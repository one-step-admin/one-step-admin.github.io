
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{r as a,c as e,g as t,w as o,o as s,y as r}from"./index.89c4a536.js";import{E as i}from"./el-button.ee77ba8f.js";import{E as l}from"./el-input.344ef3e5.js";import"./index.0dfe2aba.js";import"./index.a744c982.js";import"./typescript.f55dff19.js";import"./event.87cd92d6.js";import"./index.4b6badd5.js";import"./error.67356979.js";import"./isNil.aac33454.js";const d=r("打开并传入一个值到新窗口"),m={setup(r){const m=a("123");return(a,r)=>{const n=l,p=i;return s(),e("div",null,[t(n,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=a=>m.value=a)},null,8,["modelValue"]),t(p,{onClick:r[1]||(r[1]=e=>a.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:m.value}}))},{default:o((()=>[d])),_:1})])}}};export{m as default};
