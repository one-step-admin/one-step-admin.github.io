
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.8346cdbe.js";import{_ as l}from"./index.7597e0bd.js";import{_ as a,c as m,b as u,w as d,m as n,n as o}from"./index.d26282ba.js";var t=a({data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})},[["render",function(a,t,s,i,r,p){const V=l,c=n("el-input-number"),f=e;return o(),m("div",null,[u(V),u(f,{title:"基础用法",class:"demo"},{default:d((()=>[u(c,{modelValue:r.num,"onUpdate:modelValue":t[0]||(t[0]=e=>r.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),u(f,{title:"禁用状态",class:"demo"},{default:d((()=>[u(c,{modelValue:r.num2,"onUpdate:modelValue":t[1]||(t[1]=e=>r.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),u(f,{title:"步数",class:"demo"},{default:d((()=>[u(c,{modelValue:r.num3,"onUpdate:modelValue":t[2]||(t[2]=e=>r.num3=e),step:2},null,8,["modelValue"])])),_:1}),u(f,{title:"精度",class:"demo"},{default:d((()=>[u(c,{modelValue:r.num4,"onUpdate:modelValue":t[3]||(t[3]=e=>r.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),u(f,{title:"按钮位置",class:"demo"},{default:d((()=>[u(c,{modelValue:r.num5,"onUpdate:modelValue":t[4]||(t[4]=e=>r.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{t as default};