
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{r as a,c as e,b as l,w as n,m as t,n as s,y as u}from"./index.d26282ba.js";const o=u("打开并传入一个值到新窗口"),d={setup(u){const d=a("123");return(a,u)=>{const m=t("el-input"),r=t("el-button");return s(),e("div",null,[l(m,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=a=>d.value=a)},null,8,["modelValue"]),l(r,{onClick:u[1]||(u[1]=e=>a.$window.add({title:"新窗口",name:"WindowExampleParams2",params:{val:d.value}}))},{default:n((()=>[o])),_:1})])}}};export{d as default};
