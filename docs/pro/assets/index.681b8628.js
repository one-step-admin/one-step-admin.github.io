
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.d92f6c0c.js";import{_ as a}from"./index.d3904f53.js";import{_ as r}from"./index.c2d6d7be.js";import{_ as l}from"./index.091d1180.js";import{k as o,A as d,x as t,z as m,o as u,$ as s}from"./vendor.b0dde714.js";const n={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},i=s("提交");var f=l(n,[["render",function(l,s,n,f,p,c){const _=r,F=a,x=e,b=m("el-form-item"),V=m("el-button"),j=m("el-form");return u(),o("div",null,[d(_,{title:"省市区联动",content:"CascaderArea"}),d(x,null,{default:t((()=>[d(F,{modelValue:p.area,"onUpdate:modelValue":s[0]||(s[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),d(x,{title:"表单验证"},{default:t((()=>[d(j,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:t((()=>[d(b,{label:"地区",prop:"area"},{default:t((()=>[d(F,{modelValue:p.ruleForm.area,"onUpdate:modelValue":s[1]||(s[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),d(b,null,{default:t((()=>[d(V,{type:"primary",onClick:c.submitForm},{default:t((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}],["__scopeId","data-v-53ddef65"]]);export{f as default};
