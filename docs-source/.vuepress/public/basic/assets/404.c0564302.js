
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.e63d746d.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{c as a,e as n,b as s,f as o,p as r,j as c,m as d,n as i,x as l,t as u}from"./index.f83bbb39.js";const f={beforeRouteLeave(t,e,a){clearInterval(this.inter),a()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},p=t=>(r("data-v-31afb51c"),t=t(),c(),t),h={class:"notfound"},m={class:"content"},v=p((()=>s("h1",null,"404",-1))),b=p((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var _=e(f,[["render",function(e,r,c,f,p,_){const k=t,x=d("el-button");return i(),a("div",h,[n(k,{name:"404"}),s("div",m,[v,b,n(x,{type:"primary",onClick:_.goBack},{default:o((()=>[l(u(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{_ as default};
