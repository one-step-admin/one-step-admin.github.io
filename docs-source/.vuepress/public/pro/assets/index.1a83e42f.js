
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as a,k as e,A as l,x as o,z as t,o as n,$ as s}from"./vendor.b0dde714.js";const u=s("打开并传入一个值到新窗口"),d={setup(s){const d=a("123");return(a,s)=>{const r=t("el-input"),m=t("el-button");return n(),e("div",null,[l(r,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=a=>d.value=a)},null,8,["modelValue"]),l(m,{onClick:s[1]||(s[1]=e=>a.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:d.value}}))},{default:o((()=>[u])),_:1})])}}};export{d as default};
