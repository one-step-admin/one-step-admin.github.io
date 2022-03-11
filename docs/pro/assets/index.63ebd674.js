
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e5c277f9.js";import{_ as a}from"./index.cd6702a6.js";import{_ as l}from"./index.9dc02013.js";import{k as t,A as d,x as o,z as u,o as r,l as n}from"./vendor.6ae38f98.js";const m={data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},s=n("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);var i=l(m,[["render",function(l,n,m,i,p,c){const f=a,v=u("el-date-picker"),V=e;return r(),t("div",null,[d(f),d(V,{title:"日期和时间点",class:"demo"},{default:o((()=>[d(v,{modelValue:p.value1,"onUpdate:modelValue":n[0]||(n[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),d(V,{title:"日期和时间范围",class:"demo"},{default:o((()=>[d(v,{modelValue:p.value2,"onUpdate:modelValue":n[1]||(n[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),d(V,{title:"默认的起始与结束时刻",class:"demo"},{default:o((()=>[s,d(v,{modelValue:p.value3,"onUpdate:modelValue":n[2]||(n[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{i as default};
