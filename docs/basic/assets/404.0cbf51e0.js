
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{c as t,e,b as s,f as a,p as o,j as n,m as r,s as c,t as i}from"./index.cc1bbbc5.js";import{E as d}from"./el-button.1491974b.js";import{_ as l}from"./index.236d052b.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.b70656fd.js";import"./index.b88bc1db.js";const m={beforeRouteLeave(t,e,s){clearInterval(this.inter),s()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},p=t=>(o("data-v-2a06c1e4"),t=t(),n(),t),b={class:"notfound"},f={class:"content"},h=p((()=>s("h1",null,"404",-1))),v=p((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var j=u(m,[["render",function(o,n,u,m,p,j){const x=l,_=d;return r(),t("div",b,[e(x,{name:"404",class:"icon"}),s("div",f,[h,v,e(_,{type:"primary",onClick:j.goBack},{default:a((()=>[c(i(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-2a06c1e4"]]);export{j as default};
