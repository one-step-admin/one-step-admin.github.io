
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.15becada.js";import{_ as t,z as i,E as o,c as a,b as n,w as s,n as p,y as d}from"./index.0a5e3bc2.js";import{E as l}from"./el-input.3dbe719d.js";import{_ as r}from"./index.7bc6f31f.js";import{E as u}from"./el-button.2fada245.js";/* empty css                */import{_ as m}from"./index.5fef9d7d.js";import"./index2.f37a6952.js";import"./typescript2.7477ece2.js";import"./event2.27558ffe.js";import"./index2.0c75c32d.js";import"./index2.fa2fe4ab.js";import"./error2.1d524120.js";import"./isNil.aac33454.js";import"./index2.2a4e9295.js";const c={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),i.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},f=d(" vue3-clipboard 官网 "),j=d("复制");var b=t(c,[["render",function(t,i,d,c,b,_){const x=m,h=o,V=u,v=r,k=l,y=e;return p(),a("div",null,[n(v,{title:"剪贴板"},{default:s((()=>[n(V,{onClick:i[0]||(i[0]=e=>_.open("https://github.com/soerenmartius/vue3-clipboard"))},{icon:s((()=>[n(h,null,{default:s((()=>[n(x,{name:"ep:link"})])),_:1})])),default:s((()=>[f])),_:1})])),_:1}),n(y,{title:"输入内容，并点击复制按钮"},{default:s((()=>[n(k,{modelValue:b.input,"onUpdate:modelValue":i[1]||(i[1]=e=>b.input=e)},{append:s((()=>[n(V,{onClick:_.copy},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(y,{title:"复制成功后可在这粘贴测试"},{default:s((()=>[n(k,{modelValue:b.input2,"onUpdate:modelValue":i[2]||(i[2]=e=>b.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{b as default};
