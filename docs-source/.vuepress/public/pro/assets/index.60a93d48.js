
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.e4264495.js";import{u as a,C as t,c as o,g as r,w as s,o as n,i as l,ba as i,y as d}from"./index.b046d3e8.js";/* empty css                       *//* empty css                        */import{_ as m}from"./index.f15ab100.js";import{E as u,a as p}from"./index.613dd961.js";/* empty css                */import"./index.2b0c4341.js";import"./event.e7ca8317.js";import"./index.16ef6f7e.js";import"./error.76088f19.js";const f=d("开启"),c=d("关闭"),b={setup(d){const b=a(),j=t({get:function(){return b.app.enableWatermark},set:function(e){b.$patch((a=>{a.app.enableWatermark=e}))}});return(a,t)=>{const d=m,b=u,x=p,_=e;return n(),o("div",null,[r(d,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),r(_,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:s((()=>[r(x,{modelValue:l(j),"onUpdate:modelValue":t[0]||(t[0]=e=>i(j)?j.value=e:null)},{default:s((()=>[r(b,{label:!0},{default:s((()=>[f])),_:1}),r(b,{label:!1},{default:s((()=>[c])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};export{b as default};
