
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as c}from"./index.0c7c3053.js";import{_ as m}from"./index.56ea387f.js";import{_ as f}from"./index.e7d2f5e5.js";import{k as x,A as e,x as o,z as a,o as V,$ as d}from"./vendor.ac88770c.js";const k={data(){return{input:"",input2:""}},methods:{copy(){this.$clipboard(this.input),this.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${this.input}`)},open(p){window.open(p,"top")}}},v=d("vue3-clipboard \u5B98\u7F51"),b=d("\u590D\u5236");function g(p,t,h,C,n,l){const s=a("el-button"),r=m,u=a("el-input"),_=c;return V(),x("div",null,[e(r,{title:"\u526A\u8D34\u677F"},{default:o(()=>[e(s,{icon:"el-icon-link",onClick:t[0]||(t[0]=i=>l.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:o(()=>[v]),_:1})]),_:1}),e(_,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:o(()=>[e(u,{modelValue:n.input,"onUpdate:modelValue":t[1]||(t[1]=i=>n.input=i)},{append:o(()=>[e(s,{onClick:l.copy},{default:o(()=>[b]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),e(_,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:o(()=>[e(u,{modelValue:n.input2,"onUpdate:modelValue":t[2]||(t[2]=i=>n.input2=i)},null,8,["modelValue"])]),_:1})])}var B=f(k,[["render",g]]);export{B as default};
