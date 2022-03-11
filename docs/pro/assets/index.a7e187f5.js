
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e5c277f9.js";import{_ as t}from"./index.e3b25878.js";import{_ as o}from"./index.9dc02013.js";import{k as i,A as n,x as l,z as a,o as u,$ as s}from"./vendor.6ae38f98.js";const d={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},p=s("vue3-clipboard 官网"),r=s("复制");var c=o(d,[["render",function(o,s,d,c,m,f){const _=a("el-button"),h=t,b=a("el-input"),V=e;return u(),i("div",null,[n(h,{title:"剪贴板"},{default:l((()=>[n(_,{icon:"el-icon-link",onClick:s[0]||(s[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:l((()=>[p])),_:1})])),_:1}),n(V,{title:"输入内容，并点击复制按钮"},{default:l((()=>[n(b,{modelValue:m.input,"onUpdate:modelValue":s[1]||(s[1]=e=>m.input=e)},{append:l((()=>[n(_,{onClick:f.copy},{default:l((()=>[r])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(V,{title:"复制成功后可在这粘贴测试"},{default:l((()=>[n(b,{modelValue:m.input2,"onUpdate:modelValue":s[2]||(s[2]=e=>m.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{c as default};
