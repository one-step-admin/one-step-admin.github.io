
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.3082f817.js";import{_ as p}from"./index.5c755cb6.js";import{k as l,A as n,l as e,x as u,p as h,q as m,z as f,o as v,$ as x,Y as k}from"./vendor.18c32348.js";const g={beforeRouteLeave(t,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=t=>(h("data-v-31afb51c"),t=t(),m(),t),I={class:"notfound"},b={class:"content"},w=s(()=>e("h1",null,"404",-1)),B=s(()=>e("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(t,c,o,C,a,_){const r=d,i=f("el-button");return v(),l("div",I,[n(r,{name:"404"}),e("div",b,[w,B,n(i,{type:"primary",onClick:_.goBack},{default:u(()=>[x(k(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var N=p(g,[["render",y],["__scopeId","data-v-31afb51c"]]);export{N as default};
