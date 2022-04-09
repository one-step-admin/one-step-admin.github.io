
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.84a18d1d.js";import{_ as t}from"./index.c51a8d86.js";import{_ as o,c as a,b as i,w as n,m as l,n as u,y as d}from"./index.93ad63e3.js";const s={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},p=d("vue3-clipboard 官网"),c=d("复制");var m=o(s,[["render",function(o,d,s,m,r,f){const _=l("el-button"),h=t,b=l("el-input"),V=e;return u(),a("div",null,[i(h,{title:"剪贴板"},{default:n((()=>[i(_,{icon:"el-icon-link",onClick:d[0]||(d[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:n((()=>[p])),_:1})])),_:1}),i(V,{title:"输入内容，并点击复制按钮"},{default:n((()=>[i(b,{modelValue:r.input,"onUpdate:modelValue":d[1]||(d[1]=e=>r.input=e)},{append:n((()=>[i(_,{onClick:f.copy},{default:n((()=>[c])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),i(V,{title:"复制成功后可在这粘贴测试"},{default:n((()=>[i(b,{modelValue:r.input2,"onUpdate:modelValue":d[2]||(d[2]=e=>r.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{m as default};
