
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.55ffcc18.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{r as l,G as u,l as n,H as t,j as h,L as f,M as m,o as v,R as b,O as g}from"./vendor.e2abc40b.js";const x={beforeRouteLeave(e,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(f("data-v-31afb51c"),e=e(),m(),e),k={class:"notfound"},I={class:"content"},w=s(()=>t("h1",null,"404",-1)),B=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(e,c,o,j,a,r){const _=d,i=l("el-button");return v(),u("div",k,[n(_,{name:"404"}),t("div",I,[w,B,n(i,{type:"primary",onClick:r.goBack},{default:h(()=>[b(g(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(x,[["render",y],["__scopeId","data-v-31afb51c"]]);export{V as default};
