
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as t}from"./index.15becada.js";import{d as e,_ as i,C as r,n as s,i as a,w as o,e as d,b as n,aa as c,f as p,E as l,c as m}from"./index.0a5e3bc2.js";import{a as f}from"./el-image.84940866.js";/* empty css                */import{_ as u}from"./index.5fef9d7d.js";import{_ as h}from"./index.7bc6f31f.js";import"./typescript2.7477ece2.js";import"./index2.6a73fda0.js";import"./arrow-left.1f454394.js";import"./arrow-right.aba418f8.js";import"./debounce.527fb442.js";import"./index2.0c75c32d.js";import"./scroll2.09311c78.js";const g={class:"image-slot"},w=e({name:"ImagePreview"});var b=i(Object.assign(w,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,i=r((()=>"string"==typeof e.width?e.width:`${e.width}px`)),m=r((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,r)=>{const h=u,w=l,b=f;return s(),a(b,{src:t.src,fit:"cover",style:c(`width:${p(i)};height:${p(m)};`),"preview-src-list":[t.src]},{error:o((()=>[d("div",g,[n(w,null,{default:o((()=>[n(h,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-0e82748f"]]);var j=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,a,c,p){const l=h,f=b,u=t;return s(),m("div",null,[n(l,{title:"图片预览",content:"ImagePreview"}),n(u,null,{default:o((()=>[d("div",null,[n(f,{src:"https://one-step-admin.netlify.app/logo.png",width:200},null,8,["src"])])])),_:1}),n(u,{title:"图片加载失败时"},{default:o((()=>[d("div",null,[n(f,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-ca8cb6c6"]]);export{j as default};
