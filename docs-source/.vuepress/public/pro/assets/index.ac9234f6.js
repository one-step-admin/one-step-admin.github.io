
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.538e7de7.js";import{_ as a}from"./index.61ad9faa.js";import{_ as r}from"./index.bc6ef411.js";import{_ as l,c as o,b as t,w as m,m as d,n as u,y as s}from"./index.25647206.js";const n={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},i=s("提交");var f=l(n,[["render",function(l,s,n,f,p,c){const _=r,F=a,b=e,x=d("el-form-item"),V=d("el-button"),y=d("el-form");return u(),o("div",null,[t(_,{title:"省市区联动",content:"CascaderArea"}),t(b,null,{default:m((()=>[t(F,{modelValue:p.area,"onUpdate:modelValue":s[0]||(s[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),t(b,{title:"表单验证"},{default:m((()=>[t(y,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:m((()=>[t(x,{label:"地区",prop:"area"},{default:m((()=>[t(F,{modelValue:p.ruleForm.area,"onUpdate:modelValue":s[1]||(s[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),t(x,null,{default:m((()=>[t(V,{type:"primary",onClick:c.submitForm},{default:m((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}],["__scopeId","data-v-53ddef65"]]);export{f as default};
