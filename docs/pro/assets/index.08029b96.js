
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.d92f6c0c.js";import{_ as t}from"./index.c2d6d7be.js";import{_ as o}from"./index.091d1180.js";import{k as i,A as n,x as l,z as a,o as d,$ as u}from"./vendor.b0dde714.js";const s={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},p=u("vue3-clipboard 官网"),r=u("复制");var c=o(s,[["render",function(o,u,s,c,m,f){const _=a("el-button"),b=t,h=a("el-input"),V=e;return d(),i("div",null,[n(b,{title:"剪贴板"},{default:l((()=>[n(_,{icon:"el-icon-link",onClick:u[0]||(u[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:l((()=>[p])),_:1})])),_:1}),n(V,{title:"输入内容，并点击复制按钮"},{default:l((()=>[n(h,{modelValue:m.input,"onUpdate:modelValue":u[1]||(u[1]=e=>m.input=e)},{append:l((()=>[n(_,{onClick:f.copy},{default:l((()=>[r])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(V,{title:"复制成功后可在这粘贴测试"},{default:l((()=>[n(h,{modelValue:m.input2,"onUpdate:modelValue":u[2]||(u[2]=e=>m.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{c as default};
