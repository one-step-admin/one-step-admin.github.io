
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.ed5f6291.js";import{_ as a,c as e,b as n,e as s,w as o,p as r,j as c,m as i,n as d,y as l,t as u}from"./index.25647206.js";const f={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},h=t=>(r("data-v-31afb51c"),t=t(),c(),t),v={class:"notfound"},m={class:"content"},p=h((()=>s("h1",null,"404",-1))),b=h((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var k=a(f,[["render",function(a,r,c,f,h,k){const w=t,_=i("el-button");return d(),e("div",v,[n(w,{name:"404"}),s("div",m,[p,b,n(_,{type:"primary",onClick:k.goBack},{default:o((()=>[l(u(h.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{k as default};
