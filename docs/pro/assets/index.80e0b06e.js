
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.9c1fa942.js";import{_ as t,A as i,E as o,c as a,e as n,w as s,n as p,y as l}from"./index.05e4ed9f.js";import{E as d}from"./el-input.93d8033e.js";import{_ as r}from"./index.abd93cee.js";import{E as u}from"./el-button.a01942a9.js";/* empty css                */import{_ as m}from"./index.dd2c42e8.js";import"./index.48c8fc0e.js";import"./typescript.14beffb5.js";import"./event.e7ca8317.js";import"./index.bebbe66d.js";import"./index.aa8c6f3e.js";import"./error.76088f19.js";import"./isNil.aac33454.js";const c={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),i.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},f=l(" vue3-clipboard 官网 "),j=l("复制");var b=t(c,[["render",function(t,i,l,c,b,_){const x=m,h=o,V=u,v=r,k=d,y=e;return p(),a("div",null,[n(v,{title:"剪贴板"},{default:s((()=>[n(V,{onClick:i[0]||(i[0]=e=>_.open("https://github.com/soerenmartius/vue3-clipboard"))},{icon:s((()=>[n(h,null,{default:s((()=>[n(x,{name:"ep:link"})])),_:1})])),default:s((()=>[f])),_:1})])),_:1}),n(y,{title:"输入内容，并点击复制按钮"},{default:s((()=>[n(k,{modelValue:b.input,"onUpdate:modelValue":i[1]||(i[1]=e=>b.input=e)},{append:s((()=>[n(V,{onClick:_.copy},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(y,{title:"复制成功后可在这粘贴测试"},{default:s((()=>[n(k,{modelValue:b.input2,"onUpdate:modelValue":i[2]||(i[2]=e=>b.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{b as default};
