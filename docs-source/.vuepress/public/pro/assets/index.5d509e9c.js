
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.538e7de7.js";import{_ as t}from"./index.bc6ef411.js";import{_ as o,c as i,b as n,w as l,m as a,n as u,y as s}from"./index.25647206.js";const d={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},p=s("vue3-clipboard 官网"),c=s("复制");var m=o(d,[["render",function(o,s,d,m,r,f){const _=a("el-button"),b=t,h=a("el-input"),V=e;return u(),i("div",null,[n(b,{title:"剪贴板"},{default:l((()=>[n(_,{icon:"el-icon-link",onClick:s[0]||(s[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:l((()=>[p])),_:1})])),_:1}),n(V,{title:"输入内容，并点击复制按钮"},{default:l((()=>[n(h,{modelValue:r.input,"onUpdate:modelValue":s[1]||(s[1]=e=>r.input=e)},{append:l((()=>[n(_,{onClick:f.copy},{default:l((()=>[c])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(V,{title:"复制成功后可在这粘贴测试"},{default:l((()=>[n(h,{modelValue:r.input2,"onUpdate:modelValue":s[2]||(s[2]=e=>r.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{m as default};
