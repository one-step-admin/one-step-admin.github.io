
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{c as t,e as a,b as e,f as s,p as o,j as n,m as r,s as i,t as c}from"./index.1b2a4798.js";import{E as d}from"./el-button.a29297df.js";import{_ as l}from"./index.373c9150.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.c8167427.js";import"./index.48ef7773.js";const m={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},p=t=>(o("data-v-29e517aa"),t=t(),n(),t),f={class:"notfound"},h={class:"content"},v=p((()=>e("h1",null,"404",-1))),j=p((()=>e("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var x=u(m,[["render",function(o,n,u,m,p,x){const _=l,k=d;return r(),t("div",f,[a(_,{name:"404",class:"icon"}),e("div",h,[v,j,a(k,{type:"primary",onClick:x.goBack},{default:s((()=>[i(c(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-29e517aa"]]);export{x as default};
