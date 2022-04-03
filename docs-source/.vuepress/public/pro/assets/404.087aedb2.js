
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.4f74a808.js";import{_ as a,c as n,b as s,e,w as o,p as r,j as c,m as i,n as d,y as l,t as u}from"./index.d26282ba.js";const f={beforeRouteLeave(t,a,n){clearInterval(this.inter),n()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},h=t=>(r("data-v-31afb51c"),t=t(),c(),t),v={class:"notfound"},m={class:"content"},p=h((()=>e("h1",null,"404",-1))),b=h((()=>e("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var k=a(f,[["render",function(a,r,c,f,h,k){const w=t,_=i("el-button");return d(),n("div",v,[s(w,{name:"404"}),e("div",m,[p,b,s(_,{type:"primary",onClick:k.goBack},{default:o((()=>[l(u(h.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{k as default};
