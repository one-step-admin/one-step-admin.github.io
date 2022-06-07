
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as a,c as t,b as e,e as s,w as n,p as o,k as i,n as r,y as d,t as c}from"./index.0a5e3bc2.js";import{E as l}from"./el-button.2fada245.js";import{_ as u}from"./index.5fef9d7d.js";import"./index2.f37a6952.js";import"./index2.2a4e9295.js";import"./index2.fa2fe4ab.js";const f={beforeRouteLeave(a,t,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},m=a=>(o("data-v-29e517aa"),a=a(),i(),a),p={class:"notfound"},h={class:"content"},v=m((()=>s("h1",null,"404",-1))),j=m((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var k=a(f,[["render",function(a,o,i,f,m,k){const x=u,b=l;return r(),t("div",p,[e(x,{name:"404",class:"icon"}),s("div",h,[v,j,e(b,{type:"primary",onClick:k.goBack},{default:n((()=>[d(c(m.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-29e517aa"]]);export{k as default};
