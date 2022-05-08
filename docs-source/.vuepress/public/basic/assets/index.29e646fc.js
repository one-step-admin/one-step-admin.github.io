
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as t}from"./index.4d88f6c2.js";import{C as e,m as i,h as r,f as s,b as o,e as a,a6 as d,g as p,E as n,c}from"./index.1b2a4798.js";import{E as l}from"./el-image.041c4052.js";/* empty css                */import{_ as m}from"./index.373c9150.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as h}from"./index.3420411b.js";import"./typescript.b0ac2d0c.js";import"./index.da0372ec.js";import"./arrow-left.c51f0186.js";import"./arrow-right.c799cfc8.js";import"./debounce.00dabd51.js";import"./index.377d0192.js";import"./index.ab0ffd8a.js";const u={class:"image-slot"};var g=f({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const c=t,f=e((()=>"string"==typeof c.width?c.width:`${c.width}px`)),h=e((()=>"string"==typeof c.height?c.height:`${c.height}px`));return(e,c)=>{const g=m,w=n,j=l;return i(),r(j,{src:t.src,fit:"cover",style:d(`width:${p(f)};height:${p(h)};`),"preview-src-list":[t.src]},{error:s((()=>[o("div",u,[a(w,null,{default:s((()=>[a(g,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-17f7f46f"]]);var w=f({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,r,d,p,n,l){const m=h,f=g,u=t;return i(),c("div",null,[a(m,{title:"图片预览",content:"ImagePreview"}),a(u,null,{default:s((()=>[o("div",null,[a(f,{src:"https://one-step-admin.netlify.app/logo.png",width:200})])])),_:1}),a(u,{title:"图片加载失败时"},{default:s((()=>[o("div",null,[a(f,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-60812763"]]);export{w as default};
