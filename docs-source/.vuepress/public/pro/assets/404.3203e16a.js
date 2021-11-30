
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as i}from"./index.ab111d0f.js";import{_ as p}from"./index.c3034165.js";import{x as l,j as u,A as n,k as e,z as h,p as m,m as f,o as v,_ as x,X as k}from"./vendor.a8203abd.js";const b={beforeRouteLeave(t,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=t=>(m("data-v-31afb51c"),t=t(),f(),t),g={class:"notfound"},I={class:"content"},w=s(()=>e("h1",null,"404",-1)),B=s(()=>e("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(t,a,o,j,c,_){const r=i,d=l("el-button");return v(),u("div",g,[n(r,{name:"404"}),e("div",I,[w,B,n(d,{type:"primary",onClick:_.goBack},{default:h(()=>[x(k(c.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(b,[["render",y],["__scopeId","data-v-31afb51c"]]);export{V as default};
