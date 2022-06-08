
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{b as t,c as a,g as e,e as s,h as o,p as n,k as r,s as i,t as c}from"./index.eaca9d64.js";import{E as d}from"./el-button.3a9a3385.js";import{_ as l}from"./index.8eb858d1.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import"./index2.fa9449b9.js";import"./index2.200c9b4b.js";const p={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},m=t=>(n("data-v-29e517aa"),t=t(),r(),t),h={class:"notfound"},v={class:"content"},f=m((()=>s("h1",null,"404",-1))),b=m((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var j=u(p,[["render",function(n,r,u,p,m,j){const k=l,x=d;return t(),a("div",h,[e(k,{name:"404",class:"icon"}),s("div",v,[f,b,e(x,{type:"primary",onClick:j.goBack},{default:o((()=>[i(c(m.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-29e517aa"]]);export{j as default};
