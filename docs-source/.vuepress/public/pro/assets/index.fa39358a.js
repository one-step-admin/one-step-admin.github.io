
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as r}from"./index.2ac40c50.js";import{_ as i}from"./index.f02e00aa.js";import{_ as d}from"./index.0947c737.js";import{x as l,j as m,A as e,z as t,o as u,k as p,X as x,_ as a}from"./vendor.6c58eadc.js";const f={methods:{change(){this.$store.commit("menuBadge/setText",this.$store.state.menuBadge.text=="\u70ED\u95E8"?"\u4FC3\u9500":"\u70ED\u95E8")},clear(){this.$store.commit("menuBadge/setText")}}},g=a("\u5207\u6362"),h=a("\u6E05\u7A7A");function k(s,B,C,$,j,o){const c=i,n=l("el-button"),_=r;return u(),m("div",null,[e(c,{title:"\u6587\u5B57\u6807\u8BB0",content:"\u642D\u914D Vuex \u53EF\u5B9E\u73B0\u52A8\u6001\u8BBE\u7F6E\u3002\u8BF7\u63A7\u5236\u6587\u5B57\u5C55\u793A\u957F\u5EA6\uFF0C\u907F\u514D\u5BFC\u822A\u6807\u8BB0\u8986\u76D6\u5BFC\u822A\u6807\u9898"}),e(_,null,{default:t(()=>[p("div",null,"\u5F53\u524D badge \u503C\uFF1A'"+x(s.$store.state.menuBadge.text)+"'",1),e(n,{onClick:o.change},{default:t(()=>[g]),_:1},8,["onClick"]),e(n,{onClick:o.clear},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})])}var T=d(f,[["render",k]]);export{T as default};
