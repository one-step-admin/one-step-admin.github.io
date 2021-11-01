
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as M}from"./index.04a0ca23.js";import{_ as P}from"./index.55ffcc18.js";import{$ as R,u as I,Z as V,h as L,a2 as O,a8 as T,ad as U,r as p,o as _,G as v,H as l,l as i,K as g,i as A,j as a,k as W,S as D,R as k,O as E,L as G,M as H,m as K}from"./vendor.e2abc40b.js";import Z from"./index.01aa311e.js";import{_ as J}from"./plugin-vue_export-helper.5a098b48.js";import"./index.c0f98470.js";var x={exports:{}};/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/(function(c){(function(){var r=typeof window!="undefined"&&typeof window.document!="undefined"?window.document:{},h=c.exports,o=function(){for(var e,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,u=s.length,t={};n<u;n++)if(e=s[n],e&&e[1]in r){for(n=0;n<e.length;n++)t[s[0][n]]=e[n];return t}return!1}(),d={change:o.fullscreenchange,error:o.fullscreenerror},m={request:function(e,s){return new Promise(function(n,u){var t=function(){this.off("change",t),n()}.bind(this);this.on("change",t),e=e||r.documentElement;var f=e[o.requestFullscreen](s);f instanceof Promise&&f.then(t).catch(u)}.bind(this))},exit:function(){return new Promise(function(e,s){if(!this.isFullscreen){e();return}var n=function(){this.off("change",n),e()}.bind(this);this.on("change",n);var u=r[o.exitFullscreen]();u instanceof Promise&&u.then(n).catch(s)}.bind(this))},toggle:function(e,s){return this.isFullscreen?this.exit():this.request(e,s)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,s){var n=d[e];n&&r.addEventListener(n,s,!1)},off:function(e,s){var n=d[e];n&&r.removeEventListener(n,s,!1)},raw:o};if(!o){h?c.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(m,{isFullscreen:{get:function(){return Boolean(r[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return r[o.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(r[o.fullscreenEnabled])}}}),h?c.exports=m:window.screenfull=m})()})(x);var w=x.exports;const b=c=>(G("data-v-6786c5c0"),c=c(),H(),c),Q={class:"user"},X={class:"tools"},Y={key:0,class:"item"},ee=b(()=>l("i",{class:"ri-search-line"},null,-1)),ne=[ee],te={class:"item"},se=b(()=>l("i",{class:"ri-notification-3-line"},null,-1)),oe=b(()=>l("span",{class:"item"},[l("i",{class:"ri-translate"})],-1)),re={class:"user-wrapper"},le=b(()=>l("i",{class:"el-icon-user-solid"},null,-1)),ie=b(()=>l("i",{class:"el-icon-caret-bottom"},null,-1)),ae=R({name:"UserMenu"});function ce(c){const{proxy:r}=K(),h=I(),o=V(),d=L(()=>w.isEnabled),m=O(!1);T(()=>{d.value&&w.on("change",n)}),U(()=>{d.value&&w.off("change",n)});function e(){h.commit("settings/updateThemeSetting",{previewAllWindows:!0})}function s(){w.toggle()}function n(){m.value=w.isFullscreen}function u(t){switch(t){case"setting":r.$window.add({title:"\u4E2A\u4EBA\u8BBE\u7F6E",name:"PersonalSetting"});break;case"logout":h.dispatch("user/logout").then(()=>{o.push({name:"login"})});break}}return(t,f)=>{const S=P,$=p("el-badge"),y=p("el-popover"),j=M,N=p("el-avatar"),C=p("el-dropdown-item"),B=p("el-dropdown-menu"),q=p("el-dropdown");return _(),v("div",Q,[l("div",X,[t.$store.state.window.list.length>1?(_(),v("span",Y,[i(S,{name:"toolbar-preview-windows",onClick:e})])):g("v-if",!0),t.$store.state.settings.enableNavSearch?(_(),v("span",{key:1,class:"item",onClick:f[0]||(f[0]=F=>t.$eventBus.emit("global-search-toggle"))},ne)):g("v-if",!0),t.$store.state.settings.enableNotification?(_(),A(y,{key:2,trigger:"hover","show-after":200,placement:"bottom",width:350},{reference:a(()=>[l("span",te,[i($,{type:"primary",value:5},{default:a(()=>[se]),_:1})])]),default:a(()=>[i(Z,{ref:(F,z)=>{z.tabs=F}},null,512)]),_:1})):g("v-if",!0),i(j,null,{default:a(()=>[oe]),_:1}),W(d)&&t.$store.state.settings.enableFullscreen?(_(),v("span",{key:3,class:"item",onClick:s},[l("i",{class:D(m.value?"ri-fullscreen-exit-line":"ri-fullscreen-line")},null,2)])):g("v-if",!0),t.$store.state.settings.enableThemeSetting?(_(),v("span",{key:4,class:"item",onClick:f[1]||(f[1]=F=>t.$eventBus.emit("global-theme-toggle"))},[i(S,{name:"toolbar-theme"})])):g("v-if",!0)]),i(q,{class:"user-container",onCommand:u},{dropdown:a(()=>[i(B,{class:"user-dropdown"},{default:a(()=>[i(C,{command:"setting"},{default:a(()=>[k(E(t.$t("app.profile")),1)]),_:1}),i(C,{divided:"",command:"logout"},{default:a(()=>[k(E(t.$t("app.logout")),1)]),_:1})]),_:1})]),default:a(()=>[l("div",re,[i(N,{size:"medium"},{default:a(()=>[le]),_:1}),k(" "+E(t.$store.state.user.account)+" ",1),ie])]),_:1})])}}const ue=Object.assign(ae,{setup:ce});var ve=J(ue,[["__scopeId","data-v-6786c5c0"]]);export{ve as default};
