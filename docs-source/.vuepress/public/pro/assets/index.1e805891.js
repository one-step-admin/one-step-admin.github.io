
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e5c277f9.js";import{_ as a}from"./index.a1c46ef3.js";import{_ as r}from"./index.e3b25878.js";import{_ as l}from"./index.9dc02013.js";import{k as o,A as t,x as m,z as d,o as u,$ as s}from"./vendor.6ae38f98.js";const n={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},i=s("提交");var f=l(n,[["render",function(l,s,n,f,p,c){const _=r,F=a,x=e,V=d("el-form-item"),b=d("el-button"),j=d("el-form");return u(),o("div",null,[t(_,{title:"省市区联动",content:"CascaderArea"}),t(x,null,{default:m((()=>[t(F,{modelValue:p.area,"onUpdate:modelValue":s[0]||(s[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),t(x,{title:"表单验证"},{default:m((()=>[t(j,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:m((()=>[t(V,{label:"地区",prop:"area"},{default:m((()=>[t(F,{modelValue:p.ruleForm.area,"onUpdate:modelValue":s[1]||(s[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),t(V,null,{default:m((()=>[t(b,{type:"primary",onClick:c.submitForm},{default:m((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}],["__scopeId","data-v-53ddef65"]]);export{f as default};
