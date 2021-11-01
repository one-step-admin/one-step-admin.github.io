
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as d}from"./index.7fb28950.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{r as l,I as u,l as n,J as t,j as h,O as m,P as v,o as f,T as b,Q as g}from"./vendor.6b4522dc.js";const x={beforeRouteLeave(e,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(m("data-v-31afb51c"),e=e(),v(),e),I={class:"notfound"},k={class:"content"},w=s(()=>t("h1",null,"404",-1)),B=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(e,a,o,j,c,r){const _=d,i=l("el-button");return f(),u("div",I,[n(_,{name:"404"}),t("div",k,[w,B,n(i,{type:"primary",onClick:r.goBack},{default:h(()=>[b(g(c.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(x,[["render",y],["__scopeId","data-v-31afb51c"]]);export{V as default};
