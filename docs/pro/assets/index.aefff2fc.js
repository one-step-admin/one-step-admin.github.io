
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e4264495.js";import{_ as t,A as i,E as o,c as a,g as n,w as s,o as p,y as l}from"./index.b046d3e8.js";import{E as r}from"./el-input.33bb8256.js";import{_ as u}from"./index.f15ab100.js";import{E as d}from"./el-button.12f8eb95.js";/* empty css                */import{_ as m}from"./index.f1e68254.js";import"./index.2b0c4341.js";import"./typescript.14beffb5.js";import"./event.e7ca8317.js";import"./index.b8b1886a.js";import"./index.16ef6f7e.js";import"./error.76088f19.js";import"./isNil.aac33454.js";const f={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),i.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},c=l(" vue3-clipboard 官网 "),b=l("复制");var j=t(f,[["render",function(t,i,l,f,j,_){const x=m,h=o,V=d,v=u,k=r,y=e;return p(),a("div",null,[n(v,{title:"剪贴板"},{default:s((()=>[n(V,{onClick:i[0]||(i[0]=e=>_.open("https://github.com/soerenmartius/vue3-clipboard"))},{icon:s((()=>[n(h,null,{default:s((()=>[n(x,{name:"ep:link"})])),_:1})])),default:s((()=>[c])),_:1})])),_:1}),n(y,{title:"输入内容，并点击复制按钮"},{default:s((()=>[n(k,{modelValue:j.input,"onUpdate:modelValue":i[1]||(i[1]=e=>j.input=e)},{append:s((()=>[n(V,{onClick:_.copy},{default:s((()=>[b])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),n(y,{title:"复制成功后可在这粘贴测试"},{default:s((()=>[n(k,{modelValue:j.input2,"onUpdate:modelValue":i[2]||(i[2]=e=>j.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{j as default};
