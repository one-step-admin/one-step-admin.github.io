
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.fadd46b6.js";import{_ as a}from"./index.091d1180.js";import{k as s,A as e,l as n,x as o,p as r,q as d,z as i,o as c,$ as l,Y as u}from"./vendor.b0dde714.js";const f={beforeRouteLeave(t,a,s){clearInterval(this.inter),s()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},v=t=>(r("data-v-31afb51c"),t=t(),d(),t),h={class:"notfound"},m={class:"content"},p=v((()=>n("h1",null,"404",-1))),b=v((()=>n("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var k=a(f,[["render",function(a,r,d,f,v,k){const _=t,w=i("el-button");return c(),s("div",h,[e(_,{name:"404"}),n("div",m,[p,b,e(w,{type:"primary",onClick:k.goBack},{default:o((()=>[l(u(v.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{k as default};
