
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.7ae327c0.js";import{_ as t,A as i,E as o,c as a,g as n,w as s,o as p,y as l}from"./index.89c4a536.js";import{E as d}from"./el-input.344ef3e5.js";import{_ as r}from"./index.60634e19.js";import{E as u}from"./el-button.ee77ba8f.js";/* empty css                */import{_ as m}from"./index.2a4f1e1c.js";import"./index.0dfe2aba.js";import"./typescript.f55dff19.js";import"./event.87cd92d6.js";import"./index.4b6badd5.js";import"./index.a744c982.js";import"./error.67356979.js";import"./isNil.aac33454.js";const c={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),i.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},f=l(" vue3-clipboard 官网 "),j=l("复制");var b=t(c,[["render",function(t,i,l,c,b,_){const x=m,h=o,V=u,v=r,k=d,y=e;return p(),a("div",null,[n(v,{title:"剪贴板"},{default:s((()=>[n(V,{onClick:i[0]||(i[0]=e=>_.open("https://github.com/soerenmartius/vue3-clipboard"))},{icon:s((()=>[n(h,null,{default:s((()=>[n(x,{name:"ep:link"})])),_:1})])),default:s((()=>[f])),_:1})])),_:1}),n(y,{title:"输入内容，并点击复制按钮"},{default:s((()=>[n(k,{modelValue:b.input,"onUpdate:modelValue":i[1]||(i[1]=e=>b.input=e)},{append:s((()=>[n(V,{onClick:_.copy},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(y,{title:"复制成功后可在这粘贴测试"},{default:s((()=>[n(k,{modelValue:b.input2,"onUpdate:modelValue":i[2]||(i[2]=e=>b.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{b as default};
