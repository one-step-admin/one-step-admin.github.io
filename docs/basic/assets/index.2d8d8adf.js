
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.d9ff6232.js";import{C as e,m as i,h as r,f as s,b as o,e as a,a6 as d,g as n,E as p,c as l}from"./index.2721a539.js";import{E as c}from"./el-image-viewer.fd060058.js";/* empty css                */import{_ as m}from"./index.4b9f4b82.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as u}from"./index.0582e115.js";import"./typescript.b0ac2d0c.js";import"./index.af579ae3.js";import"./arrow-left.bff10f4e.js";import"./arrow-right.984df45c.js";import"./debounce.406839d6.js";import"./index.c0dbea8d.js";import"./index.95a1d188.js";import"./scroll.1d4205fa.js";const h={class:"image-slot"};var g=f({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const l=t,f=e((()=>"string"==typeof l.width?l.width:`${l.width}px`)),u=e((()=>"string"==typeof l.height?l.height:`${l.height}px`));return(e,l)=>{const g=m,w=p,j=c;return i(),r(j,{src:t.src,fit:"cover",style:d(`width:${n(f)};height:${n(u)};`),"preview-src-list":[t.src]},{error:s((()=>[o("div",h,[a(w,null,{default:s((()=>[a(g,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-1147f026"]]);var w=f({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,r,d,n,p,c){const m=u,f=g,h=t;return i(),l("div",null,[a(m,{title:"图片预览",content:"ImagePreview"}),a(h,null,{default:s((()=>[o("div",null,[a(f,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),a(h,{title:"图片加载失败时"},{default:s((()=>[o("div",null,[a(f,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-3599e071"]]);export{w as default};
