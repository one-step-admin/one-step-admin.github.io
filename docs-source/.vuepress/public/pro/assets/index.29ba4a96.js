
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.7ae327c0.js";import{u as a,C as t,c as o,g as r,w as s,o as n,i as l,be as i,y as d}from"./index.89c4a536.js";/* empty css                       *//* empty css                        */import{_ as m}from"./index.60634e19.js";import{E as u,a as p}from"./index.d974899f.js";/* empty css                */import"./index.0dfe2aba.js";import"./event.87cd92d6.js";import"./index.a744c982.js";import"./error.67356979.js";const c=d("开启"),f=d("关闭"),b={setup(d){const b=a(),j=t({get:function(){return b.app.enableWatermark},set:function(e){b.$patch((a=>{a.app.enableWatermark=e}))}});return(a,t)=>{const d=m,b=u,x=p,_=e;return n(),o("div",null,[r(d,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),r(_,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:s((()=>[r(x,{modelValue:l(j),"onUpdate:modelValue":t[0]||(t[0]=e=>i(j)?j.value=e:null)},{default:s((()=>[r(b,{label:!0},{default:s((()=>[c])),_:1}),r(b,{label:!1},{default:s((()=>[f])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};export{b as default};
