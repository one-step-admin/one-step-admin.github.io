
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{r as e,c as a,b as t,w as s,n as o,y as r}from"./index.0a5e3bc2.js";import{E as i}from"./el-button.2fada245.js";import{E as l}from"./el-input.3dbe719d.js";import"./index2.f37a6952.js";import"./index2.2a4e9295.js";import"./index2.fa2fe4ab.js";import"./typescript2.7477ece2.js";import"./event2.27558ffe.js";import"./index2.0c75c32d.js";import"./error2.1d524120.js";import"./isNil.aac33454.js";const d=r("打开并传入一个值到新窗口"),m={setup(r){const m=e("123");return(e,r)=>{const n=l,p=i;return o(),a("div",null,[t(n,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=e=>m.value=e)},null,8,["modelValue"]),t(p,{onClick:r[1]||(r[1]=a=>e.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:m.value}}))},{default:s((()=>[d])),_:1})])}}};export{m as default};
