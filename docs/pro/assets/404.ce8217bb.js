
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as a,c as t,e,f as s,w as n,p as o,k as i,n as r,y as c,t as d}from"./index.05e4ed9f.js";import{E as l}from"./el-button.a01942a9.js";import{_ as u}from"./index.dd2c42e8.js";import"./index.48c8fc0e.js";import"./index.aa8c6f3e.js";const f={beforeRouteLeave(a,t,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},m=a=>(o("data-v-29e517aa"),a=a(),i(),a),p={class:"notfound"},h={class:"content"},v=m((()=>s("h1",null,"404",-1))),k=m((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var j=a(f,[["render",function(a,o,i,f,m,j){const w=u,x=l;return r(),t("div",p,[e(w,{name:"404",class:"icon"}),s("div",h,[v,k,e(x,{type:"primary",onClick:j.goBack},{default:n((()=>[c(d(m.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-29e517aa"]]);export{j as default};
