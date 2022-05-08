
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{r as a,c as e,e as s,f as t,m as o,s as r}from"./index.1b2a4798.js";import{E as i}from"./el-button.a29297df.js";import{E as l}from"./el-input.2b6dddff.js";import"./index.c8167427.js";import"./index.48ef7773.js";import"./typescript.b0ac2d0c.js";import"./event.75bf56a9.js";import"./index.ab0ffd8a.js";import"./error.b438369f.js";import"./isNil.aac33454.js";const d=r("打开并传入一个值到新窗口"),m={setup(r){const m=a("123");return(a,r)=>{const n=l,p=i;return o(),e("div",null,[s(n,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=a=>m.value=a)},null,8,["modelValue"]),s(p,{onClick:r[1]||(r[1]=e=>a.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:m.value}}))},{default:t((()=>[d])),_:1})])}}};export{m as default};
