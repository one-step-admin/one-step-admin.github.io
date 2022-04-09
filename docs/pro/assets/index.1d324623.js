
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as a}from"./index.84a18d1d.js";import{_ as e}from"./index.c51a8d86.js";import{u as t,B as l,c as n,b as o,w as r,m as s,n as u,g as d,V as i,y as m}from"./index.93ad63e3.js";const p=m("开启"),c=m("关闭"),f={setup(m){const f=t(),b=l({get:function(){return f.app.enableWatermark},set:function(a){f.$patch((e=>{e.app.enableWatermark=a}))}});return(t,l)=>{const m=e,f=s("el-radio-button"),_=s("el-radio-group"),x=a;return u(),n("div",null,[o(m,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),o(x,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:r((()=>[o(_,{modelValue:d(b),"onUpdate:modelValue":l[0]||(l[0]=a=>i(b)?b.value=a:null)},{default:r((()=>[o(f,{label:!0},{default:r((()=>[p])),_:1}),o(f,{label:!1},{default:r((()=>[c])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};export{f as default};
