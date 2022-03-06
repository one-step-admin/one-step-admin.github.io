
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.fef54795.js";import{_ as t}from"./index.b11652ae.js";import{_ as o}from"./index.8d8a4cfe.js";import{k as i,A as n,x as a,z as l,o as u,$ as d}from"./vendor.b0dde714.js";const s={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},p=d("vue3-clipboard 官网"),r=d("复制");var m=o(s,[["render",function(o,d,s,m,c,f){const _=l("el-button"),b=t,h=l("el-input"),V=e;return u(),i("div",null,[n(b,{title:"剪贴板"},{default:a((()=>[n(_,{icon:"el-icon-link",onClick:d[0]||(d[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:a((()=>[p])),_:1})])),_:1}),n(V,{title:"输入内容，并点击复制按钮"},{default:a((()=>[n(h,{modelValue:c.input,"onUpdate:modelValue":d[1]||(d[1]=e=>c.input=e)},{append:a((()=>[n(_,{onClick:f.copy},{default:a((()=>[r])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(V,{title:"复制成功后可在这粘贴测试"},{default:a((()=>[n(h,{modelValue:c.input2,"onUpdate:modelValue":d[2]||(d[2]=e=>c.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{m as default};
