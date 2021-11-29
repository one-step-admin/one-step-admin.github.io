
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as i}from"./index.f1fee2de.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,y as u,D as n,A as t,F as h,L as f,M as m,o as v,N as g,G as x}from"./vendor.b8cae0bd.js";const b={beforeRouteLeave(e,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(f("data-v-31afb51c"),e=e(),m(),e),k={class:"notfound"},I={class:"content"},w=s(()=>t("h1",null,"404",-1)),y=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function B(e,c,o,C,a,r){const _=i,d=l("el-button");return v(),u("div",k,[n(_,{name:"404"}),t("div",I,[w,y,n(d,{type:"primary",onClick:r.goBack},{default:h(()=>[g(x(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(b,[["render",B],["__scopeId","data-v-31afb51c"]]);export{V as default};
