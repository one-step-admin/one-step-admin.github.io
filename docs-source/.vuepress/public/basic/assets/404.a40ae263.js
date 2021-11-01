
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as d}from"./index.3ac8c786.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{r as l,q as u,x as s,s as t,y as h,B as m,C as v,o as f,H as x,D as g}from"./vendor.1e66543d.js";const k={beforeRouteLeave(e,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},n=e=>(m("data-v-31afb51c"),e=e(),v(),e),B={class:"notfound"},I={class:"content"},b=n(()=>t("h1",null,"404",-1)),w=n(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(e,a,o,C,c,r){const _=d,i=l("el-button");return f(),u("div",B,[s(_,{name:"404"}),t("div",I,[b,w,s(i,{type:"primary",onClick:r.goBack},{default:h(()=>[x(g(c.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(k,[["render",y],["__scopeId","data-v-31afb51c"]]);export{V as default};
