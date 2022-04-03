
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.57156bb1.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{c as a,e as n,b as s,f as o,p as r,j as c,m as i,n as d,x as l,t as u}from"./index.8b6d4e84.js";const p={beforeRouteLeave(t,e,a){clearInterval(this.inter),a()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},f=t=>(r("data-v-31afb51c"),t=t(),c(),t),h={class:"notfound"},m={class:"content"},v=f((()=>s("h1",null,"404",-1))),b=f((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var _=e(p,[["render",function(e,r,c,p,f,_){const k=t,x=i("el-button");return d(),a("div",h,[n(k,{name:"404"}),s("div",m,[v,b,n(x,{type:"primary",onClick:_.goBack},{default:o((()=>[l(u(f.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{_ as default};
