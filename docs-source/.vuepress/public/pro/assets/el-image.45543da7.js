
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,r=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&s(e,t,a[t]);if(n)for(var t of n(a))o.call(a,t)&&s(e,t,a[t]);return e},i=(e,n)=>a(e,t(n));import{O as c,au as u,d,an as v,o as f,c as p,a as m,I as w,M as g,by as h,J as b,aK as y,r as k,bz as x,C as z,ao as O,Z as C,z as I,f as _,j,g as B,w as L,a1 as T,i as A,x as E,k as M,E as S,bk as N,G as V,ai as R,F as Y,h as $,v as H,ab as P,H as D,ac as X,aM as F,a2 as Z,aw as W,aZ as G,L as J,Y as K,t as q,as as U,aJ as Q,X as ee,a_ as ae}from"./index.89c4a536.js";import{m as te}from"./typescript.f55dff19.js";import{u as ne}from"./index.a1ac867d.js";import{a as le}from"./arrow-left.6b9dcff5.js";import{a as oe}from"./arrow-right.1602ba15.js";import{d as se}from"./debounce.4df1b226.js";import{u as re}from"./index.8ab22528.js";import{u as ie}from"./index.4b6badd5.js";import{a as ce}from"./scroll.cf7b6596.js";function ue(e,a,t){var n=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return c(t)&&(n="leading"in t?!!t.leading:n,l="trailing"in t?!!t.trailing:l),se(e,a,{leading:n,maxWait:a,trailing:l})}const de=d({name:"FullScreen"}),ve={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},fe=[m("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1)];var pe=v(de,[["render",function(e,a,t,n,l,o){return f(),p("svg",ve,fe)}]]);const me=d({name:"RefreshLeft"}),we={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ge=[m("path",{fill:"currentColor",d:"M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"},null,-1)];var he=v(me,[["render",function(e,a,t,n,l,o){return f(),p("svg",we,ge)}]]);const be=d({name:"RefreshRight"}),ye={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ke=[m("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"},null,-1)];var xe=v(be,[["render",function(e,a,t,n,l,o){return f(),p("svg",ye,ke)}]]);const ze=d({name:"ScaleToOriginal"}),Oe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ce=[m("path",{fill:"currentColor",d:"M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"},null,-1)];var Ie=v(ze,[["render",function(e,a,t,n,l,o){return f(),p("svg",Oe,Ce)}]]);const _e=d({name:"ZoomIn"}),je={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Be=[m("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"},null,-1)];var Le=v(_e,[["render",function(e,a,t,n,l,o){return f(),p("svg",je,Be)}]]);const Te=d({name:"ZoomOut"}),Ae={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ee=[m("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"},null,-1)];var Me=v(Te,[["render",function(e,a,t,n,l,o){return f(),p("svg",Ae,Ee)}]]);const Se=w({urlList:{type:g(Array),default:()=>te([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),Ne=["src"];const Ve=J(Z(d(i(r({},{name:"ElImageViewer"}),{props:Se,emits:{close:()=>!0,switch:e=>"number"==typeof e},setup(e,{emit:a}){const t=e,n={CONTAIN:{name:"contain",icon:h(pe)},ORIGINAL:{name:"original",icon:h(Ie)}},l=u&&/firefox/i.test(window.navigator.userAgent)?"DOMMouseScroll":"mousewheel",{t:o}=ne(),s=b("image-viewer"),{nextZIndex:c}=y(),d=k(),v=k([]),w=x(),g=k(!0),Z=k(t.initialIndex),J=k(n.CONTAIN),K=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),q=z((()=>{const{urlList:e}=t;return e.length<=1})),U=z((()=>0===Z.value)),Q=z((()=>Z.value===t.urlList.length-1)),ee=z((()=>t.urlList[Z.value])),ae=z((()=>{const{scale:e,deg:a,offsetX:t,offsetY:l,enableTransition:o}=K.value;let s=t/e,r=l/e;switch(a%360){case 90:case-270:[s,r]=[r,-s];break;case 180:case-180:[s,r]=[-s,-r];break;case 270:case-90:[s,r]=[-r,s]}const i={transform:`scale(${e}) rotate(${a}deg) translate(${s}px, ${r}px)`,transition:o?"transform .3s":""};return J.value.name===n.CONTAIN.name&&(i.maxWidth=i.maxHeight="100%"),i})),te=z((()=>O(t.zIndex)?t.zIndex:c()));function se(){w.stop(),a("close")}function re(){g.value=!1}function ie(e){g.value=!1,e.target.alt=o("el.image.error")}function ce(e){if(g.value||0!==e.button||!d.value)return;K.value.enableTransition=!1;const{offsetX:a,offsetY:t}=K.value,n=e.pageX,l=e.pageY,o=ue((e=>{K.value=i(r({},K.value),{offsetX:a+e.pageX-n,offsetY:t+e.pageY-l})})),s=G(document,"mousemove",o);G(document,"mouseup",(()=>{s()})),e.preventDefault()}function de(){K.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ve(){if(g.value)return;const e=Object.keys(n),a=Object.values(n),t=J.value.name,l=(a.findIndex((e=>e.name===t))+1)%e.length;J.value=n[e[l]],de()}function fe(){if(U.value&&!t.infinite)return;const e=t.urlList.length;Z.value=(Z.value-1+e)%e}function me(){if(Q.value&&!t.infinite)return;const e=t.urlList.length;Z.value=(Z.value+1)%e}function we(e,a={}){if(g.value)return;const{zoomRate:t,rotateDeg:n,enableTransition:l}=r({zoomRate:1.4,rotateDeg:90,enableTransition:!0},a);switch(e){case"zoomOut":K.value.scale>.2&&(K.value.scale=Number.parseFloat((K.value.scale/t).toFixed(3)));break;case"zoomIn":K.value.scale<7&&(K.value.scale=Number.parseFloat((K.value.scale*t).toFixed(3)));break;case"clockwise":K.value.deg+=n;break;case"anticlockwise":K.value.deg-=n}K.value.enableTransition=l}return C(ee,(()=>{I((()=>{const e=v.value[0];(null==e?void 0:e.complete)||(g.value=!0)}))})),C(Z,(e=>{de(),a("switch",e)})),_((()=>{var e,a;!function(){const e=ue((e=>{switch(e.code){case W.esc:t.closeOnPressEscape&&se();break;case W.space:ve();break;case W.left:fe();break;case W.up:we("zoomIn");break;case W.right:me();break;case W.down:we("zoomOut")}})),a=ue((e=>{we((e.wheelDelta?e.wheelDelta:-e.detail)>0?"zoomIn":"zoomOut",{zoomRate:1.2,enableTransition:!1})}));w.run((()=>{G(document,"keydown",e),G(document,l,a)}))}(),null==(a=null==(e=d.value)?void 0:e.focus)||a.call(e)})),(e,a)=>(f(),j(F,{to:"body",disabled:!e.teleported},[B(X,{name:"viewer-fade",appear:""},{default:L((()=>[m("div",{ref_key:"wrapper",ref:d,tabindex:-1,class:T(A(s).e("wrapper")),style:P({zIndex:A(te)})},[m("div",{class:T(A(s).e("mask")),onClick:a[0]||(a[0]=E((a=>e.hideOnClickModal&&se()),["self"]))},null,2),M(" CLOSE "),m("span",{class:T([A(s).e("btn"),A(s).e("close")]),onClick:se},[B(A(S),null,{default:L((()=>[B(A(N))])),_:1})],2),M(" ARROW "),A(q)?M("v-if",!0):(f(),p(V,{key:0},[m("span",{class:T([A(s).e("btn"),A(s).e("prev"),A(s).is("disabled",!e.infinite&&A(U))]),onClick:fe},[B(A(S),null,{default:L((()=>[B(A(le))])),_:1})],2),m("span",{class:T([A(s).e("btn"),A(s).e("next"),A(s).is("disabled",!e.infinite&&A(Q))]),onClick:me},[B(A(S),null,{default:L((()=>[B(A(oe))])),_:1})],2)],64)),M(" ACTIONS "),m("div",{class:T([A(s).e("btn"),A(s).e("actions")])},[m("div",{class:T(A(s).e("actions__inner"))},[B(A(S),{onClick:a[1]||(a[1]=e=>we("zoomOut"))},{default:L((()=>[B(A(Me))])),_:1}),B(A(S),{onClick:a[2]||(a[2]=e=>we("zoomIn"))},{default:L((()=>[B(A(Le))])),_:1}),m("i",{class:T(A(s).e("actions__divider"))},null,2),B(A(S),{onClick:ve},{default:L((()=>[(f(),j(R(J.value.icon)))])),_:1}),m("i",{class:T(A(s).e("actions__divider"))},null,2),B(A(S),{onClick:a[3]||(a[3]=e=>we("anticlockwise"))},{default:L((()=>[B(A(he))])),_:1}),B(A(S),{onClick:a[4]||(a[4]=e=>we("clockwise"))},{default:L((()=>[B(A(xe))])),_:1})],2)],2),M(" CANVAS "),m("div",{class:T(A(s).e("canvas"))},[(f(!0),p(V,null,Y(e.urlList,((e,a)=>$((f(),p("img",{ref_for:!0,ref:e=>v.value[a]=e,key:e,src:e,style:P(A(ae)),class:T(A(s).e("img")),onLoad:re,onError:ie,onMousedown:ce},null,46,Ne)),[[H,a===Z.value]]))),128))],2),D(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),Re=w({appendToBody:{type:Boolean,default:void 0},hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},lazy:{type:Boolean,default:!1},scrollContainer:{type:g([String,Object])},previewSrcList:{type:g(Array),default:()=>te([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),Ye={error:e=>e instanceof Event,switch:e=>O(e),close:()=>!0},$e=["src"],He={key:0};const Pe=J(Z(d(i(r({},{name:"ElImage"}),{props:Re,emits:Ye,setup(e,{emit:a}){const t=e;let n="";re({scope:"el-image",from:"append-to-body",replacement:"preview-teleported",version:"2.2.0",ref:"https://element-plus.org/en-US/component/image.html#image-attributess"},z((()=>K(t.appendToBody))));const{t:l}=ne(),o=b("image"),s=ie(),r=k(!1),i=k(!0),c=k(0),d=k(0),v=k(!1),w=k(),g=k();let h,y;const x=z((()=>s.value.style)),O=z((()=>{const{fit:e}=t;return u&&e?{objectFit:e}:{}})),B=z((()=>{const{previewSrcList:e}=t;return Array.isArray(e)&&e.length>0})),E=z((()=>t.appendToBody||t.previewTeleported)),S=z((()=>{const{previewSrcList:e,initialIndex:a}=t;let n=a;return a>e.length-1&&(n=0),n})),N=()=>{if(!u)return;i.value=!0,r.value=!1;const e=new Image,n=t.src;e.addEventListener("load",(a=>{n===t.src&&function(e,a){c.value=a.width,d.value=a.height,i.value=!1,r.value=!1}(0,e)})),e.addEventListener("error",(e=>{var l;n===t.src&&(l=e,i.value=!1,r.value=!0,a("error",l))})),Object.entries(s.value).forEach((([a,t])=>{"onload"!==a.toLowerCase()&&e.setAttribute(a,t)})),e.src=n};function R(){((e,a)=>{if(!u||!e||!a)return!1;const t=e.getBoundingClientRect();let n;return n=a instanceof Element?a.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},t.top<n.bottom&&t.bottom>n.top&&t.right>n.left&&t.left<n.right})(w.value,g.value)&&(N(),H())}const Y=ae(R,200);async function $(){var e;if(!u)return;await I();const{scrollContainer:a}=t;Q(a)?g.value=a:ee(a)&&""!==a?g.value=null!=(e=document.querySelector(a))?e:void 0:w.value&&(g.value=ce(w.value)),g.value&&(h=G(g,"scroll",Y),setTimeout((()=>R()),100))}function H(){u&&g.value&&Y&&(h(),g.value=void 0)}function X(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function F(){B.value&&(y=G("wheel",X,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",v.value=!0)}function Z(){null==y||y(),document.body.style.overflow=n,v.value=!1,a("close")}function W(e){a("switch",e)}return C((()=>t.src),(()=>{t.lazy?(i.value=!0,r.value=!1,H(),$()):N()})),_((()=>{t.lazy?$():N()})),(e,a)=>(f(),p("div",{ref_key:"container",ref:w,class:T([A(o).b(),e.$attrs.class]),style:P(A(x))},[i.value?D(e.$slots,"placeholder",{key:0},(()=>[m("div",{class:T(A(o).e("placeholder"))},null,2)])):r.value?D(e.$slots,"error",{key:1},(()=>[m("div",{class:T(A(o).e("error"))},q(A(l)("el.image.error")),3)])):(f(),p("img",U({key:2},A(s),{src:e.src,style:A(O),class:[A(o).e("inner"),A(B)?A(o).e("preview"):""],onClick:F}),null,16,$e)),A(B)?(f(),p(V,{key:3},[v.value?(f(),j(A(Ve),{key:0,"z-index":e.zIndex,"initial-index":A(S),infinite:e.infinite,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:A(E),"close-on-press-escape":e.closeOnPressEscape,onClose:Z,onSwitch:W},{default:L((()=>[e.$slots.viewer?(f(),p("div",He,[D(e.$slots,"viewer")])):M("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):M("v-if",!0)],2112)):M("v-if",!0)],6))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]));export{Ve as E,Pe as a,ue as t,Le as z};
