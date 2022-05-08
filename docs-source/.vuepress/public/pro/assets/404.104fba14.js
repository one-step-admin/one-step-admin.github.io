
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as a,c as t,g as e,a as s,w as n,p as o,l as i,o as r,y as c,t as d}from"./index.89c4a536.js";import{E as l}from"./el-button.ee77ba8f.js";import{_ as u}from"./index.2a4f1e1c.js";import"./index.0dfe2aba.js";import"./index.a744c982.js";const m={beforeRouteLeave(a,t,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},f=a=>(o("data-v-29e517aa"),a=a(),i(),a),p={class:"notfound"},h={class:"content"},v=f((()=>s("h1",null,"404",-1))),j=f((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var k=a(m,[["render",function(a,o,i,m,f,k){const w=u,x=l;return r(),t("div",p,[e(w,{name:"404",class:"icon"}),s("div",h,[v,j,e(x,{type:"primary",onClick:k.goBack},{default:n((()=>[c(d(f.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-29e517aa"]]);export{k as default};
