
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as t}from"./index.7ae327c0.js";import{_ as e,C as i,o as r,j as s,w as a,a as o,g as d,ab as n,i as p,E as c,c as l}from"./index.89c4a536.js";import{a as m}from"./el-image.45543da7.js";/* empty css                */import{_ as f}from"./index.2a4f1e1c.js";import{_ as u}from"./index.60634e19.js";import"./typescript.f55dff19.js";import"./index.a1ac867d.js";import"./arrow-left.6b9dcff5.js";import"./arrow-right.1602ba15.js";import"./debounce.4df1b226.js";import"./index.8ab22528.js";import"./index.4b6badd5.js";import"./scroll.cf7b6596.js";const h={class:"image-slot"};var g=e({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,l=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),u=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const g=f,w=c,b=m;return r(),s(b,{src:t.src,fit:"cover",style:n(`width:${p(l)};height:${p(u)};`),"preview-src-list":[t.src]},{error:a((()=>[o("div",h,[d(w,null,{default:a((()=>[d(g,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-17f7f46f"]]);var w=e({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,s,n,p,c){const m=u,f=g,h=t;return r(),l("div",null,[d(m,{title:"图片预览",content:"ImagePreview"}),d(h,null,{default:a((()=>[o("div",null,[d(f,{src:"https://one-step-admin.netlify.app/logo.png",width:200},null,8,["src"])])])),_:1}),d(h,{title:"图片加载失败时"},{default:a((()=>[o("div",null,[d(f,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-ca8cb6c6"]]);export{w as default};
