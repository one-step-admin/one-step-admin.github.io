
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as s}from"./index.add06bb2.js";import{_ as p}from"./index.7e4c75a2.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{r as m,q as i,x as e,y as r,o as _,s as c}from"./vendor.1e66543d.js";const v={data(){return{value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""}}},f=c("div",null,"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1);function V(x,l,g,w,t,h){const d=p,a=m("el-date-picker"),n=s;return _(),i("div",null,[e(d),e(n,{title:"\u65E5\u671F\u548C\u65F6\u95F4\u70B9",class:"demo"},{default:r(()=>[e(a,{modelValue:t.value1,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value1=o),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(n,{title:"\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4",class:"demo"},{default:r(()=>[e(a,{modelValue:t.value2,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value2=o),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),e(n,{title:"\u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B",class:"demo"},{default:r(()=>[f,e(a,{modelValue:t.value3,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value3=o),type:"datetimerange",align:"right","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])]),_:1})])}var D=u(v,[["render",V]]);export{D as default};
