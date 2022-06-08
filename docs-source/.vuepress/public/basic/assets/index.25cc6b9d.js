
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as t}from"./index.9a39b5db.js";import{D as e,b as i,i as r,h as s,e as a,g as o,H as d,f as p,E as n,c}from"./index.eaca9d64.js";import{E as l}from"./el-image.c34a297a.js";/* empty css                */import{_ as m}from"./index.8eb858d1.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as h}from"./index.34688040.js";import"./typescript2.50fc0493.js";import"./index2.a801f47d.js";import"./arrow-left.14a2580d.js";import"./arrow-right.7abf62bd.js";import"./debounce.ac625793.js";import"./index2.8e851031.js";import"./scroll2.f3eaa5fd.js";const u={class:"image-slot"};var g=f({name:"index",props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const c=t,f=e((()=>"string"==typeof c.width?c.width:`${c.width}px`)),h=e((()=>"string"==typeof c.height?c.height:`${c.height}px`));return(e,c)=>{const g=m,w=n,j=l;return i(),r(j,{src:t.src,fit:"cover",style:d(`width:${p(f)};height:${p(h)};`),"preview-src-list":[t.src]},{error:s((()=>[a("div",u,[o(w,null,{default:s((()=>[o(g,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-6c6c1c56"]]);var w=f({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,r,d,p,n,l){const m=h,f=g,u=t;return i(),c("div",null,[o(m,{title:"图片预览",content:"ImagePreview"}),o(u,null,{default:s((()=>[a("div",null,[o(f,{src:"https://one-step-admin.netlify.app/logo.png",width:200})])])),_:1}),o(u,{title:"图片加载失败时"},{default:s((()=>[a("div",null,[o(f,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-60812763"]]);export{w as default};
