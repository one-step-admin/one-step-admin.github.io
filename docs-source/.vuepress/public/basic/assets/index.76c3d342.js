
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.64b0a20f.js";import{_ as e}from"./index.57156bb1.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{A as r,m as s,n as a,h as o,f as d,b as n,e as c,C as l,g as p,c as h}from"./index.8b6d4e84.js";import{_ as g}from"./index.246b70e5.js";const u={class:"image-slot"};var m=i({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,h=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),g=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const m=e,f=s("el-image");return a(),o(f,{src:t.src,fit:"cover",style:l(`width:${p(h)};height:${p(g)};`),"preview-src-list":[t.src]},{error:d((()=>[n("div",u,[c(m,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-6ac2dcda"]]);var f=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,s,o,l){const p=g,u=m,f=t;return a(),h("div",null,[c(p,{title:"图片预览",content:"ImagePreview"}),c(f,null,{default:d((()=>[n("div",null,[c(u,{src:`https://hooray.${l.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),c(f,{title:"图片加载失败时"},{default:d((()=>[n("div",null,[c(u,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-3599e071"]]);export{f as default};
