
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.0e432c25.js";import{_ as p}from"./index.aca20b2a.js";import{_ as i}from"./index.418d3b50.js";import{x as a,j as r,A as e,z as t,o as _}from"./vendor.5ed2e184.js";const V={data(){return{num:1,num2:1,num3:5,num4:1,num5:1}}};function f(x,n,c,b,l,j){const s=p,m=a("el-input-number"),u=d;return _(),r("div",null,[e(s),e(u,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:t(()=>[e(m,{modelValue:l.num,"onUpdate:modelValue":n[0]||(n[0]=o=>l.num=o),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),_:1}),e(u,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:t(()=>[e(m,{modelValue:l.num2,"onUpdate:modelValue":n[1]||(n[1]=o=>l.num2=o),disabled:!0},null,8,["modelValue"])]),_:1}),e(u,{title:"\u6B65\u6570",class:"demo"},{default:t(()=>[e(m,{modelValue:l.num3,"onUpdate:modelValue":n[2]||(n[2]=o=>l.num3=o),step:2},null,8,["modelValue"])]),_:1}),e(u,{title:"\u7CBE\u5EA6",class:"demo"},{default:t(()=>[e(m,{modelValue:l.num4,"onUpdate:modelValue":n[3]||(n[3]=o=>l.num4=o),precision:2,step:.1,max:10},null,8,["modelValue","step"])]),_:1}),e(u,{title:"\u6309\u94AE\u4F4D\u7F6E",class:"demo"},{default:t(()=>[e(m,{modelValue:l.num5,"onUpdate:modelValue":n[4]||(n[4]=o=>l.num5=o),"controls-position":"right",min:1,max:10},null,8,["modelValue"])]),_:1})])}var C=i(V,[["render",f]]);export{C as default};
