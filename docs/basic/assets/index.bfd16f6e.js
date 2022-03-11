
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.d3415f46.js";import{_ as e}from"./index.3f117bcd.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{a as r,r as s,o as a,b as o,e as d,D as n,f as l,n as c,u as p,C as u}from"./vendor.2ae12b47.js";import{_ as h}from"./index.dc0a326f.js";const g={class:"image-slot"};var m=i({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,u=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),h=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const m=e,f=s("el-image");return a(),o(f,{src:t.src,fit:"cover",style:c(`width:${p(u)};height:${p(h)};`),"preview-src-list":[t.src]},{error:d((()=>[n("div",g,[l(m,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-318badd8"]]);var f=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,s,o,c){const p=h,g=m,f=t;return a(),u("div",null,[l(p,{title:"图片预览",content:"ImagePreview"}),l(f,null,{default:d((()=>[n("div",null,[l(g,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),l(f,{title:"图片加载失败时"},{default:d((()=>[n("div",null,[l(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-3599e071"]]);export{f as default};
