
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.240cc2c8.js";import{_ as p}from"./index.e7d2f5e5.js";import{k as l,A as n,l as t,x as u,p as h,q as m,z as f,o as v,$ as x,Y as k}from"./vendor.ac88770c.js";const g={beforeRouteLeave(e,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(h("data-v-31afb51c"),e=e(),m(),e),I={class:"notfound"},w={class:"content"},B=s(()=>t("h1",null,"404",-1)),b=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(e,c,o,C,a,_){const r=d,i=f("el-button");return v(),l("div",I,[n(r,{name:"404"}),t("div",w,[B,b,n(i,{type:"primary",onClick:_.goBack},{default:u(()=>[x(k(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var N=p(g,[["render",y],["__scopeId","data-v-31afb51c"]]);export{N as default};
