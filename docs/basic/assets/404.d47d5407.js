
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.3d503e26.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{c as e,e as n,b as s,f as o,p as r,j as c,m as i,n as d,x as l,t as u}from"./index.6885a104.js";const p={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},f=t=>(r("data-v-31afb51c"),t=t(),c(),t),h={class:"notfound"},m={class:"content"},v=f((()=>s("h1",null,"404",-1))),_=f((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var b=a(p,[["render",function(a,r,c,p,f,b){const k=t,x=i("el-button");return d(),e("div",h,[n(k,{name:"404"}),s("div",m,[v,_,n(x,{type:"primary",onClick:b.goBack},{default:o((()=>[l(u(f.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{b as default};
