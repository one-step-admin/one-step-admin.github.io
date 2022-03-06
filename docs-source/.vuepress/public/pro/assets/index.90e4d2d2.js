
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.fef54795.js";import{_ as a}from"./index.b11652ae.js";import{u as t}from"./index.8d8a4cfe.js";import{s as o,k as l,A as r,x as n,z as s,o as u,u as d,af as f,$ as i}from"./vendor.b0dde714.js";const m=i("开启"),p=i("关闭"),c={setup(i){const c=t(),b=o({get:function(){return c.app.enableWatermark},set:function(e){c.$patch((a=>{a.app.enableWatermark=e}))}});return(t,o)=>{const i=a,c=s("el-radio-button"),x=s("el-radio-group"),_=e;return u(),l("div",null,[r(i,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),r(_,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:n((()=>[r(x,{modelValue:d(b),"onUpdate:modelValue":o[0]||(o[0]=e=>f(b)?b.value=e:null)},{default:n((()=>[r(c,{label:!0},{default:n((()=>[m])),_:1}),r(c,{label:!1},{default:n((()=>[p])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};export{c as default};
