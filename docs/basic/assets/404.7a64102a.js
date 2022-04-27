
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{c as t,e,b as s,f as a,p as o,j as n,m as r,s as i,t as c}from"./index.2721a539.js";import{E as d}from"./el-button.702f0937.js";import{_ as l}from"./index.4b9f4b82.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.438da6eb.js";import"./index.f8027735.js";const m={beforeRouteLeave(t,e,s){clearInterval(this.inter),s()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},p=t=>(o("data-v-2a06c1e4"),t=t(),n(),t),f={class:"notfound"},h={class:"content"},v=p((()=>s("h1",null,"404",-1))),j=p((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var b=u(m,[["render",function(o,n,u,m,p,b){const x=l,_=d;return r(),t("div",f,[e(x,{name:"404",class:"icon"}),s("div",h,[v,j,e(_,{type:"primary",onClick:b.goBack},{default:a((()=>[i(c(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-2a06c1e4"]]);export{b as default};
