
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.9c1fa942.js";import{u as a,C as t,c as o,e as r,w as s,n,h as i,bb as l,y as d}from"./index.05e4ed9f.js";/* empty css                       *//* empty css                        */import{_ as m}from"./index.abd93cee.js";import{E as p,a as u}from"./index.575c0318.js";/* empty css                */import"./index.dd2c42e8.js";import"./index.48c8fc0e.js";import"./event.e7ca8317.js";import"./index.aa8c6f3e.js";import"./error.76088f19.js";const c=d("开启"),f=d("关闭"),b={setup(d){const b=a(),j=t({get:function(){return b.app.enableWatermark},set:function(e){b.$patch((a=>{a.app.enableWatermark=e}))}});return(a,t)=>{const d=m,b=p,x=u,_=e;return n(),o("div",null,[r(d,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),r(_,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:s((()=>[r(x,{modelValue:i(j),"onUpdate:modelValue":t[0]||(t[0]=e=>l(j)?j.value=e:null)},{default:s((()=>[r(b,{label:!0},{default:s((()=>[c])),_:1}),r(b,{label:!1},{default:s((()=>[f])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};export{b as default};
