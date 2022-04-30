
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t,c as a,g as e,a as s,w as n,p as o,l as i,o as r,y as c,t as d}from"./index.b046d3e8.js";import{E as l}from"./el-button.12f8eb95.js";import{_ as u}from"./index.f1e68254.js";import"./index.2b0c4341.js";import"./index.16ef6f7e.js";const f={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},m=t=>(o("data-v-29e517aa"),t=t(),i(),t),p={class:"notfound"},h={class:"content"},v=m((()=>s("h1",null,"404",-1))),b=m((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var j=t(f,[["render",function(t,o,i,f,m,j){const k=u,w=l;return r(),a("div",p,[e(k,{name:"404",class:"icon"}),s("div",h,[v,b,e(w,{type:"primary",onClick:j.goBack},{default:n((()=>[c(d(m.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-29e517aa"]]);export{j as default};
