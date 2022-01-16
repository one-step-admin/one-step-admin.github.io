
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as s}from"./index.37ff5045.js";import{_ as p}from"./index.7c24e998.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{C as m,f as e,e as r,r as i,o as _,D as c}from"./vendor.216b2a72.js";const f={data(){return{value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""}}},v=c("div",null,"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1);function V(g,l,x,w,t,D){const d=p,a=i("el-date-picker"),n=s;return _(),m("div",null,[e(d),e(n,{title:"\u65E5\u671F\u548C\u65F6\u95F4\u70B9",class:"demo"},{default:r(()=>[e(a,{modelValue:t.value1,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value1=o),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(n,{title:"\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4",class:"demo"},{default:r(()=>[e(a,{modelValue:t.value2,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value2=o),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),e(n,{title:"\u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B",class:"demo"},{default:r(()=>[v,e(a,{modelValue:t.value3,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value3=o),type:"datetimerange",align:"right","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])]),_:1})])}var C=u(f,[["render",V]]);export{C as default};
