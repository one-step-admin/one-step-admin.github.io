
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as i}from"./index.e7ddb757.js";import{_ as p}from"./index.1c098545.js";import{x as l,j as u,A as n,k as t,z as f,p as h,m,o as v,$ as x,Y as k}from"./vendor.f0fdd3fc.js";const g={beforeRouteLeave(e,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(h("data-v-31afb51c"),e=e(),m(),e),I={class:"notfound"},b={class:"content"},w=s(()=>t("h1",null,"404",-1)),B=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(e,c,o,j,a,_){const r=i,d=l("el-button");return v(),u("div",I,[n(r,{name:"404"}),t("div",b,[w,B,n(d,{type:"primary",onClick:_.goBack},{default:f(()=>[x(k(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var N=p(g,[["render",y],["__scopeId","data-v-31afb51c"]]);export{N as default};
