
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,i=(e,a)=>{for(var l in a||(a={}))n.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&o(e,l,a[l]);return e},d=(e,t)=>a(e,l(t));import{d as r,J as c,am as u,E as p,af as h,N as v,C as m,a2 as f,az as g,n as b,c as y,j as k,i as C,x,w,e as V,a1 as E,G as S,f as N,r as $,F as T,y as L,t as D,B as j,bI as P,a3 as _,aO as z,bt as I,aG as H,K as M,$ as B,Z as O,bA as A,o as F,z as q,au as K,ax as R,at as U,bq as Z,a4 as W,bh as G,g as J,q as X,bF as Q,ab as Y,v as ee,H as ae,_ as le,bL as te,h as ne,bb as se}from"./index.05e4ed9f.js";import{E as oe,i as ie}from"./el-input.93d8033e.js";import{g as de,E as re,b as ce}from"./el-popper.f565a276.js";/* empty css               */import{E as ue}from"./el-checkbox.b635827d.js";/* empty css                 *//* empty css                     */import{E as pe}from"./index.80697eb7.js";import{b as he}from"./index.575c0318.js";import{c as ve}from"./check.2f39b254.js";import{a as me}from"./arrow-right.566166be.js";import{u as fe}from"./index.5e52605c.js";import{l as ge}from"./isEqual.dd51095a.js";import{i as be,f as ye,g as ke}from"./aria.366529e4.js";import{U as Ce,C as xe}from"./event.e7ca8317.js";import{u as we,c as Ve}from"./arrays.cef899e4.js";import{s as Ee}from"./scroll.31e24ddc.js";import{b as Se}from"./_baseFlatten.ac610fbe.js";import{E as Ne,t as $e}from"./index.e690907a.js";import{C as Te}from"./index.3b5c7952.js";import{i as Le}from"./validator.ce3b7d6b.js";import{u as De}from"./deprecation.ea6afa68.js";import{f as je,a as Pe,u as _e}from"./index.48c8fc0e.js";import{d as ze}from"./error.76088f19.js";import{a as Ie,r as He}from"./resize-event.af3ea841.js";import{a as Me}from"./arrow-down.0a07a387.js";import{d as Be}from"./debounce.c94dc814.js";var Oe=r({name:"NodeContent",setup:()=>({ns:c("cascader-node")}),render(){const{ns:e}=this,{node:a,panel:l}=this.$parent,{data:t,label:n}=a,{renderLabelFn:s}=l;return u("span",{class:e.e("label")},s?s({node:a,data:t}):n)}});const Ae=Symbol(),Fe=r({name:"ElCascaderNode",components:{ElCheckbox:ue,ElRadio:he,NodeContent:Oe,ElIcon:p,Check:ve,Loading:h,ArrowRight:me},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:a}){const l=v(Ae),t=c("cascader-node"),n=m((()=>l.isHoverMenu)),s=m((()=>l.config.multiple)),o=m((()=>l.config.checkStrictly)),i=m((()=>{var e;return null==(e=l.checkedNodes[0])?void 0:e.uid})),d=m((()=>e.node.isDisabled)),r=m((()=>e.node.isLeaf)),u=m((()=>o.value&&!r.value||!d.value)),p=m((()=>f(l.expandingNode))),h=m((()=>o.value&&l.checkedNodes.some(f))),f=a=>{var l;const{level:t,uid:n}=e.node;return(null==(l=null==a?void 0:a.pathNodes[t-1])?void 0:l.uid)===n},g=()=>{p.value||l.expandNode(e.node)},b=a=>{const{node:t}=e;a!==t.checked&&l.handleCheckChange(t,a)},y=()=>{l.lazyLoad(e.node,(()=>{r.value||g()}))},k=()=>{const{node:a}=e;u.value&&!a.loading&&(a.loaded?g():y())},C=a=>{e.node.loaded?(b(a),!o.value&&g()):y()};return{panel:l,isHoverMenu:n,multiple:s,checkStrictly:o,checkedNodeId:i,isDisabled:d,isLeaf:r,expandable:u,inExpandingPath:p,inCheckedPath:h,ns:t,handleHoverExpand:e=>{n.value&&(k(),!r.value&&a("expand",e))},handleExpand:k,handleClick:()=>{n.value&&!r.value||(!r.value||d.value||o.value||s.value?k():C(!0))},handleCheck:C,handleSelectCheck:a=>{o.value?(b(a),e.node.loaded&&g()):C(a)}}}}),qe=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],Ke=N("span",null,null,-1);var Re=f(r({name:"ElCascaderMenu",components:{Loading:h,ElIcon:p,ElScrollbar:pe,ElCascaderNode:f(Fe,[["render",function(e,a,l,t,n,s){const o=g("el-checkbox"),i=g("el-radio"),d=g("check"),r=g("el-icon"),c=g("node-content"),u=g("loading"),p=g("arrow-right");return b(),y("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:E([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:a[2]||(a[2]=(...a)=>e.handleHoverExpand&&e.handleHoverExpand(...a)),onFocus:a[3]||(a[3]=(...a)=>e.handleHoverExpand&&e.handleHoverExpand(...a)),onClick:a[4]||(a[4]=(...a)=>e.handleClick&&e.handleClick(...a))},[k(" prefix "),e.multiple?(b(),C(o,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:a[0]||(a[0]=x((()=>{}),["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(b(),C(i,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:a[1]||(a[1]=x((()=>{}),["stop"]))},{default:w((()=>[k("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "),Ke])),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(b(),C(r,{key:2,class:E(e.ns.e("prefix"))},{default:w((()=>[V(d)])),_:1},8,["class"])):k("v-if",!0),k(" content "),V(c),k(" postfix "),e.isLeaf?k("v-if",!0):(b(),y(S,{key:3},[e.node.loading?(b(),C(r,{key:0,class:E([e.ns.is("loading"),e.ns.e("postfix")])},{default:w((()=>[V(u)])),_:1},8,["class"])):(b(),C(r,{key:1,class:E(["arrow-right",e.ns.e("postfix")])},{default:w((()=>[V(p)])),_:1},8,["class"]))],2112))],42,qe)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]])},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const a=j(),l=c("cascader-menu"),{t:t}=fe(),n=de();let s=null,o=null;const i=v(Ae),d=$(null),r=m((()=>!e.nodes.length)),u=m((()=>!i.initialLoaded)),p=m((()=>`cascader-menu-${n}-${e.index}`)),h=()=>{o&&(clearTimeout(o),o=null)},f=()=>{d.value&&(d.value.innerHTML="",h())};return{ns:l,panel:i,hoverZone:d,isEmpty:r,isLoading:u,menuId:p,t:t,handleExpand:e=>{s=e.target},handleMouseMove:e=>{if(i.isHoverMenu&&s&&d.value)if(s.contains(e.target)){h();const l=a.vnode.el,{left:t}=l.getBoundingClientRect(),{offsetWidth:n,offsetHeight:o}=l,i=e.clientX-t,r=s.offsetTop,c=r+s.offsetHeight;d.value.innerHTML=`\n          <path style="pointer-events: auto;" fill="transparent" d="M${i} ${r} L${n} 0 V${r} Z" />\n          <path style="pointer-events: auto;" fill="transparent" d="M${i} ${c} L${n} ${o} V${c} Z" />\n        `}else o||(o=window.setTimeout(f,i.config.hoverThreshold))},clearHoverZone:f}}}),[["render",function(e,a,l,t,n,s){const o=g("el-cascader-node"),i=g("loading"),d=g("el-icon"),r=g("el-scrollbar");return b(),C(r,{key:e.menuId,tag:"ul",role:"menu",class:E(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:w((()=>{var a;return[(b(!0),y(S,null,T(e.nodes,(a=>(b(),C(o,{key:a.uid,node:a,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"])))),128)),e.isLoading?(b(),y("div",{key:0,class:E(e.ns.e("empty-text"))},[V(d,{size:"14",class:E(e.ns.is("loading"))},{default:w((()=>[V(i)])),_:1},8,["class"]),L(" "+D(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(b(),y("div",{key:1,class:E(e.ns.e("empty-text"))},D(e.t("el.cascader.noData")),3)):(null==(a=e.panel)?void 0:a.isHoverMenu)?(b(),y("svg",{key:2,ref:"hoverZone",class:E(e.ns.e("hover-zone"))},null,2)):k("v-if",!0)]})),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]),Ue=(e=>(e.CLICK="click",e.HOVER="hover",e))(Ue||{});let Ze=0;class We{constructor(e,a,l,t=!1){this.data=e,this.config=a,this.parent=l,this.root=t,this.uid=Ze++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:n,label:s,children:o}=a,i=e[o],d=(e=>{const a=[e];let{parent:l}=e;for(;l;)a.unshift(l),l=l.parent;return a})(this);this.level=t?0:l?l.level+1:1,this.value=e[n],this.label=e[s],this.pathNodes=d,this.pathValues=d.map((e=>e.value)),this.pathLabels=d.map((e=>e.label)),this.childrenData=i,this.children=(i||[]).map((e=>new We(e,a,this))),this.loaded=!a.lazy||this.isLeaf||!P(i)}get isDisabled(){const{data:e,parent:a,config:l}=this,{disabled:t,checkStrictly:n}=l;return(_(t)?t(e,this):!!e[t])||!n&&(null==a?void 0:a.isDisabled)}get isLeaf(){const{data:e,config:a,childrenData:l,loaded:t}=this,{lazy:n,leaf:s}=a,o=_(s)?s(e,this):e[s];return z(o)?!(n&&!t)&&!(Array.isArray(l)&&l.length):!!o}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(e){const{childrenData:a,children:l}=this,t=new We(e,this.config,this);return Array.isArray(a)?a.push(e):this.childrenData=[e],l.push(t),t}calcText(e,a){const l=e?this.pathLabels.join(a):this.label;return this.text=l,l}broadcast(e,...a){const l=`onParent${I(e)}`;this.children.forEach((t=>{t&&(t.broadcast(e,...a),t[l]&&t[l](...a))}))}emit(e,...a){const{parent:l}=this,t=`onChild${I(e)}`;l&&(l[t]&&l[t](...a),l.emit(e,...a))}onParentCheck(e){this.isDisabled||this.setCheckState(e)}onChildCheck(){const{children:e}=this,a=e.filter((e=>!e.isDisabled)),l=!!a.length&&a.every((e=>e.checked));this.setCheckState(l)}setCheckState(e){const a=this.children.length,l=this.children.reduce(((e,a)=>e+(a.checked?1:a.indeterminate?.5:0)),0);this.checked=this.loaded&&this.children.every((e=>e.loaded&&e.checked))&&e,this.indeterminate=this.loaded&&l!==a&&l>0}doCheck(e){if(this.checked===e)return;const{checkStrictly:a,multiple:l}=this.config;a||!l?this.checked=e:(this.broadcast("check",e),this.setCheckState(e),this.emit("check"))}}const Ge=(e,a)=>e.reduce(((e,l)=>(l.isLeaf?e.push(l):(!a&&e.push(l),e=e.concat(Ge(l.children,a))),e)),[]);class Je{constructor(e,a){this.config=a;const l=(e||[]).map((e=>new We(e,this.config)));this.nodes=l,this.allNodes=Ge(l,!1),this.leafNodes=Ge(l,!0)}getNodes(){return this.nodes}getFlattedNodes(e){return e?this.leafNodes:this.allNodes}appendNode(e,a){const l=a?a.appendChild(e):new We(e,this.config);a||this.nodes.push(l),this.allNodes.push(l),l.isLeaf&&this.leafNodes.push(l)}appendNodes(e,a){e.forEach((e=>this.appendNode(e,a)))}getNodeByValue(e,a=!1){if(!e&&0!==e)return null;return this.getFlattedNodes(a).find((a=>ge(a.value,e)||ge(a.pathValues,e)))||null}getSameNode(e){if(!e)return null;return this.getFlattedNodes(!1).find((({value:a,level:l})=>ge(e.value,a)&&e.level===l))||null}}const Xe={modelValue:[Number,String,Array],options:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})}},Qe={expandTrigger:Ue.CLICK,multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:H,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},Ye=e=>{if(!e)return 0;const a=e.id.split("-");return Number(a[a.length-2])};var ea=f(r({name:"ElCascaderPanel",components:{ElCascaderMenu:Re},props:d(i({},Xe),{border:{type:Boolean,default:!0},renderLabel:Function}),emits:[Ce,xe,"close","expand-change"],setup(e,{emit:a,slots:l}){let t=!1;const n=c("cascader"),s=(e=>m((()=>i(i({},Qe),e.props))))(e);let o=null;const d=$(!0),r=$([]),u=$(null),p=$([]),h=$(null),v=$([]),f=m((()=>s.value.expandTrigger===Ue.HOVER)),g=m((()=>e.renderLabel||l.default)),b=(e,a)=>{const l=s.value;(e=e||new We({},l,void 0,!0)).loading=!0;l.lazyLoad(e,(l=>{const t=e,n=t.root?null:t;l&&(null==o||o.appendNodes(l,n)),t.loading=!1,t.loaded=!0,t.childrenData=t.childrenData||[],a&&a(l)}))},y=(e,l)=>{var t;const{level:n}=e,s=p.value.slice(0,n);let o;e.isLeaf?o=e.pathNodes[n-2]:(o=e,s.push(e.children)),(null==(t=h.value)?void 0:t.uid)!==(null==o?void 0:o.uid)&&(h.value=e,p.value=s,!l&&a("expand-change",(null==e?void 0:e.pathValues)||[]))},k=(e,l,n=!0)=>{const{checkStrictly:o,multiple:i}=s.value,d=v.value[0];t=!0,!i&&(null==d||d.doCheck(!1)),e.doCheck(l),V(),n&&!i&&!o&&a("close"),!n&&!i&&!o&&C(e)},C=e=>{e&&(e=e.parent,C(e),e&&y(e))},x=e=>null==o?void 0:o.getFlattedNodes(e),w=e=>{var a;return null==(a=x(e))?void 0:a.filter((e=>!1!==e.checked))},V=()=>{var e;const{checkStrictly:a,multiple:l}=s.value,t=((e,a)=>{const l=a.slice(0),t=l.map((e=>e.uid)),n=e.reduce(((e,a)=>{const n=t.indexOf(a.uid);return n>-1&&(e.push(a),l.splice(n,1),t.splice(n,1)),e}),[]);return n.push(...l),n})(v.value,w(!a)),n=t.map((e=>e.valueByOption));v.value=t,u.value=l?n:null!=(e=n[0])?e:null},E=(a=!1,l=!1)=>{const{modelValue:n}=e,{lazy:i,multiple:r,checkStrictly:c}=s.value,p=!c;var h;if(d.value&&!t&&(l||!ge(n,u.value)))if(i&&!a){const e=we(null!=(h=Ve(n))&&h.length?Se(h,1/0):[]).map((e=>null==o?void 0:o.getNodeByValue(e))).filter((e=>!!e&&!e.loaded&&!e.loading));e.length?e.forEach((e=>{b(e,(()=>E(!1,l)))})):E(!0,l)}else{const e=r?Ve(n):[n],a=we(e.map((e=>null==o?void 0:o.getNodeByValue(e,p))));S(a,!1),u.value=n}},S=(e,a=!0)=>{const{checkStrictly:l}=s.value,t=v.value,n=e.filter((e=>!!e&&(l||e.isLeaf))),i=null==o?void 0:o.getSameNode(h.value),d=a&&i||n[0];d?d.pathNodes.forEach((e=>y(e,!0))):h.value=null,t.forEach((e=>e.doCheck(!1))),n.forEach((e=>e.doCheck(!0))),v.value=n,q(N)},N=()=>{K&&r.value.forEach((e=>{const a=null==e?void 0:e.$el;if(a){const e=a.querySelector(`.${n.namespace.value}-scrollbar__wrap`),l=a.querySelector(`.${n.b("node")}.${n.is("active")}`)||a.querySelector(`.${n.b("node")}.in-active-path`);Ee(e,l)}}))};return M(Ae,B({config:s,expandingNode:h,checkedNodes:v,isHoverMenu:f,initialLoaded:d,renderLabelFn:g,lazyLoad:b,expandNode:y,handleCheckChange:k})),O([s,()=>e.options],(()=>{const{options:a}=e,l=s.value;t=!1,o=new Je(a,l),p.value=[o.getNodes()],l.lazy&&P(e.options)?(d.value=!1,b(void 0,(e=>{e&&(o=new Je(e,l),p.value=[o.getNodes()]),d.value=!0,E(!1,!0)}))):E(!1,!0)}),{deep:!0,immediate:!0}),O((()=>e.modelValue),(()=>{t=!1,E()})),O(u,(l=>{ge(l,e.modelValue)||(a(Ce,l),a(xe,l))})),A((()=>r.value=[])),F((()=>!P(e.modelValue)&&E())),{ns:n,menuList:r,menus:p,checkedNodes:v,handleKeyDown:e=>{const l=e.target,{code:t}=e;switch(t){case R.up:case R.down:{e.preventDefault();const a=t===R.up?-1:1;ye(ke(l,a,`.${n.b("node")}[tabindex="-1"]`));break}case R.left:{e.preventDefault();const a=r.value[Ye(l)-1],t=null==a?void 0:a.$el.querySelector(`.${n.b("node")}[aria-expanded="true"]`);ye(t);break}case R.right:{e.preventDefault();const a=r.value[Ye(l)+1],t=null==a?void 0:a.$el.querySelector(`.${n.b("node")}[tabindex="-1"]`);ye(t);break}case R.enter:(e=>{if(!e)return;const a=e.querySelector("input");a?a.click():be(e)&&e.click()})(l);break;case R.esc:case R.tab:a("close")}},handleCheckChange:k,getFlattedNodes:x,getCheckedNodes:w,clearCheckedNodes:()=>{v.value.forEach((e=>e.doCheck(!1))),V()},calculateCheckedValue:V,scrollToExpandingNode:N}}}),[["render",function(e,a,l,t,n,s){const o=g("el-cascader-menu");return b(),y("div",{class:E([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:a[0]||(a[0]=(...a)=>e.handleKeyDown&&e.handleKeyDown(...a))},[(b(!0),y(S,null,T(e.menus,((a,l)=>(b(),C(o,{key:l,ref_for:!0,ref:a=>e.menuList[l]=a,index:l,nodes:[...a]},null,8,["index","nodes"])))),128))],34)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);ea.install=e=>{e.component(ea.name,ea)};const aa={large:36,default:32,small:28},la={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:e})=>{const{modifiersData:a,placement:l}=e;["right","left","bottom","top"].includes(l)||(a.arrow.x=35)},requires:["arrow"]}]},ta=r({name:"ElCascader",components:{ElCascaderPanel:ea,ElInput:oe,ElTooltip:re,ElScrollbar:pe,ElTag:Ne,ElIcon:p,CircleClose:U,Check:ve,ArrowDown:Me},directives:{Clickoutside:Te},props:d(i({},Xe),{size:{type:String,validator:Le},placeholder:{type:String},disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:Function,default:(e,a)=>e.text.includes(a)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:Function,default:()=>!0},popperClass:{type:String,default:""},popperAppendToBody:{type:Boolean,default:void 0},teleported:ce.teleported,tagType:d(i({},$e.type),{default:"info"})}),emits:[Ce,xe,"focus","blur","visible-change","expand-change","remove-tag"],setup(e,{emit:a}){let l=0,t=0;const{compatTeleported:n}=De("ElCascader","popperAppendToBody"),s=c("cascader"),o=c("input"),{t:i}=fe(),d=v(je,{}),r=v(Pe,{}),u=$(null),p=$(null),h=$(null),f=$(null),g=$(null),b=$(!1),y=$(!1),k=$(!1),C=$(""),x=$(""),w=$([]),V=$([]),E=$([]),S=$(!1),N=m((()=>e.disabled||d.disabled)),T=m((()=>e.placeholder||i("el.cascader.placeholder"))),L=_e(),D=m((()=>["small"].includes(L.value)?"small":"default")),j=m((()=>!!e.props.multiple)),P=m((()=>!e.filterable||j.value)),_=m((()=>j.value?x.value:C.value)),z=m((()=>{var e;return(null==(e=f.value)?void 0:e.checkedNodes)||[]})),I=m((()=>!(!e.clearable||N.value||k.value||!y.value)&&!!z.value.length)),H=m((()=>{const{showAllLevels:a,separator:l}=e,t=z.value;return t.length?j.value?" ":t[0].calcText(a,l):""})),M=m({get:()=>e.modelValue,set(e){var l;a(Ce,e),a(xe,e),null==(l=r.validate)||l.call(r,"change").catch((e=>ze()))}}),B=m((()=>{var e,a;return null==(a=null==(e=u.value)?void 0:e.popperRef)?void 0:a.contentRef})),A=l=>{var t,n,s;if(!N.value&&(l=null!=l?l:!b.value)!==b.value){if(b.value=l,null==(n=null==(t=p.value)?void 0:t.input)||n.setAttribute("aria-expanded",`${l}`),l)U(),q(null==(s=f.value)?void 0:s.scrollToExpandingNode);else if(e.filterable){const{value:e}=H;C.value=e,x.value=e}a("visible-change",l)}},U=()=>{q((()=>{var e;null==(e=u.value)||e.updatePopper()}))},G=()=>{k.value=!1},J=a=>{const{showAllLevels:l,separator:t}=e;return{node:a,key:a.uid,text:a.calcText(l,t),hitState:!1,closable:!N.value&&!a.isDisabled,isCollapseTag:!1}},X=e=>{var l;const t=e.node;t.doCheck(!1),null==(l=f.value)||l.calculateCheckedValue(),a("remove-tag",t.valueByOption)},Q=()=>{var a,l;const{filterMethod:t,showAllLevels:n,separator:s}=e,o=null==(l=null==(a=f.value)?void 0:a.getFlattedNodes(!e.props.checkStrictly))?void 0:l.filter((e=>!e.isDisabled&&(e.calcText(n,s),t(e,_.value))));j.value&&(w.value.forEach((e=>{e.hitState=!1})),V.value.forEach((e=>{e.hitState=!1}))),k.value=!0,E.value=o,U()},Y=()=>{var e;let a;a=k.value&&g.value?g.value.$el.querySelector(`.${s.e("suggestion-item")}`):null==(e=f.value)?void 0:e.$el.querySelector(`.${s.b("node")}[tabindex="-1"]`),a&&(a.focus(),!k.value&&a.click())},ee=()=>{var e,a;const t=null==(e=p.value)?void 0:e.input,n=h.value,o=null==(a=g.value)?void 0:a.$el;if(K&&t){if(o){o.querySelector(`.${s.e("suggestion-list")}`).style.minWidth=`${t.offsetWidth}px`}if(n){const{offsetHeight:e}=n,a=w.value.length>0?`${Math.max(e+6,l)}px`:`${l}px`;t.style.height=a,U()}}},ae=Be((()=>{const{value:a}=_;if(!a)return;const l=e.beforeFilter(a);Z(l)?l.then(Q).catch((()=>{})):!1!==l?Q():G()}),e.debounce),le=(e,a)=>{!b.value&&A(!0),(null==a?void 0:a.isComposing)||(e?ae():G())};return O(k,U),O([z,N],(()=>{if(!j.value)return;const a=z.value,l=[],t=[];if(a.forEach((e=>t.push(J(e)))),V.value=t,a.length){const[t,...n]=a,s=n.length;l.push(J(t)),s&&(e.collapseTags?l.push({key:-1,text:`+ ${s}`,closable:!1,isCollapseTag:!0}):n.forEach((e=>l.push(J(e)))))}w.value=l})),O(w,(()=>{q((()=>ee()))})),O(H,(e=>C.value=e),{immediate:!0}),F((()=>{var e;const a=null==(e=p.value)?void 0:e.$el;l=(null==a?void 0:a.offsetHeight)||aa[L.value]||40,Ie(a,ee)})),W((()=>{var e;He(null==(e=p.value)?void 0:e.$el,ee)})),{popperOptions:la,tooltipRef:u,popperPaneRef:B,input:p,tagWrapper:h,panel:f,suggestionPanel:g,popperVisible:b,inputHover:y,inputPlaceholder:T,filtering:k,presentText:H,checkedValue:M,inputValue:C,searchInputValue:x,presentTags:w,allPresentTags:V,suggestions:E,isDisabled:N,isOnComposition:S,realSize:L,tagSize:D,multiple:j,readonly:P,clearBtnVisible:I,compatTeleported:n,nsCascader:s,nsInput:o,t:i,togglePopperVisible:A,hideSuggestionPanel:G,deleteTag:X,focusFirstNode:Y,getCheckedNodes:e=>{var a;return null==(a=f.value)?void 0:a.getCheckedNodes(e)},handleExpandChange:e=>{U(),a("expand-change",e)},handleKeyDown:e=>{if(!S.value)switch(e.code){case R.enter:A();break;case R.down:A(!0),q(Y),e.preventDefault();break;case R.esc:case R.tab:A(!1)}},handleComposition:e=>{var a;const l=null==(a=e.target)?void 0:a.value;if("compositionend"===e.type)S.value=!1,q((()=>le(l)));else{const e=l[l.length-1]||"";S.value=!ie(e)}},handleClear:()=>{var e;null==(e=f.value)||e.clearCheckedNodes(),A(!1)},handleSuggestionClick:e=>{var a,l;const{checked:t}=e;j.value?null==(a=f.value)||a.handleCheckChange(e,!t,!1):(!t&&(null==(l=f.value)||l.handleCheckChange(e,!0,!1)),A(!1))},handleSuggestionKeyDown:e=>{const a=e.target,{code:l}=e;switch(l){case R.up:case R.down:{const e=l===R.up?-1:1;ye(ke(a,e,`.${s.e("suggestion-item")}[tabindex="-1"]`));break}case R.enter:a.click();break;case R.esc:case R.tab:A(!1)}},handleDelete:()=>{const e=w.value,a=e[e.length-1];t=x.value?0:t+1,a&&t&&(a.hitState?X(a):a.hitState=!0)},handleInput:le}}}),na={key:0},sa={class:"el-cascader__collapse-tags"},oa=["placeholder"],ia=["onClick"];var da=f(ta,[["render",function(e,a,l,t,n,s){const o=g("circle-close"),i=g("el-icon"),d=g("arrow-down"),r=g("el-input"),c=g("el-tag"),u=g("el-tooltip"),p=g("el-cascader-panel"),h=g("check"),v=g("el-scrollbar"),m=G("clickoutside");return b(),C(u,{ref:"tooltipRef",visible:e.popperVisible,"onUpdate:visible":a[17]||(a[17]=a=>e.popperVisible=a),teleported:e.compatTeleported,"popper-class":[e.nsCascader.e("dropdown"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${e.nsCascader.namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:e.hideSuggestionPanel},{default:w((()=>[J((b(),y("div",{class:E([e.nsCascader.b(),e.nsCascader.m(e.realSize),e.nsCascader.is("disabled",e.isDisabled),e.$attrs.class]),style:Y(e.$attrs.style),onClick:a[11]||(a[11]=()=>e.togglePopperVisible(!e.readonly||void 0)),onKeydown:a[12]||(a[12]=(...a)=>e.handleKeyDown&&e.handleKeyDown(...a)),onMouseenter:a[13]||(a[13]=a=>e.inputHover=!0),onMouseleave:a[14]||(a[14]=a=>e.inputHover=!1)},[V(r,{ref:"input",modelValue:e.inputValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.inputValue=a),placeholder:e.inputPlaceholder,readonly:e.readonly,disabled:e.isDisabled,"validate-event":!1,size:e.realSize,class:E(e.nsCascader.is("focus",e.popperVisible)),onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onFocus:a[2]||(a[2]=a=>e.$emit("focus",a)),onBlur:a[3]||(a[3]=a=>e.$emit("blur",a)),onInput:e.handleInput},{suffix:w((()=>[e.clearBtnVisible?(b(),C(i,{key:"clear",class:E([e.nsInput.e("icon"),"icon-circle-close"]),onClick:x(e.handleClear,["stop"])},{default:w((()=>[V(o)])),_:1},8,["class","onClick"])):(b(),C(i,{key:"arrow-down",class:E([e.nsInput.e("icon"),"icon-arrow-down",e.nsCascader.is("reverse",e.popperVisible)]),onClick:a[0]||(a[0]=x((a=>e.togglePopperVisible()),["stop"]))},{default:w((()=>[V(d)])),_:1},8,["class"]))])),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","onCompositionstart","onCompositionupdate","onCompositionend","onInput"]),e.multiple?(b(),y("div",{key:0,ref:"tagWrapper",class:E(e.nsCascader.e("tags"))},[(b(!0),y(S,null,T(e.presentTags,(a=>(b(),C(c,{key:a.key,type:e.tagType,size:e.tagSize,hit:a.hitState,closable:a.closable,"disable-transitions":"",onClose:l=>e.deleteTag(a)},{default:w((()=>[!1===a.isCollapseTag?(b(),y("span",na,D(a.text),1)):(b(),C(u,{key:1,teleported:!1,disabled:e.popperVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:w((()=>[N("span",null,D(a.text),1)])),content:w((()=>[N("div",sa,[(b(!0),y(S,null,T(e.allPresentTags,((a,l)=>(b(),y("div",{key:l,class:"el-cascader__collapse-tag"},[(b(),C(c,{key:a.key,class:"in-tooltip",type:e.tagType,size:e.tagSize,hit:a.hitState,closable:a.closable,"disable-transitions":"",onClose:l=>e.deleteTag(a)},{default:w((()=>[N("span",null,D(a.text),1)])),_:2},1032,["type","size","hit","closable","onClose"]))])))),128))])])),_:2},1032,["disabled"]))])),_:2},1032,["type","size","hit","closable","onClose"])))),128)),e.filterable&&!e.isDisabled?J((b(),y("input",{key:0,"onUpdate:modelValue":a[4]||(a[4]=a=>e.searchInputValue=a),type:"text",class:E(e.nsCascader.e("search-input")),placeholder:e.presentText?"":e.inputPlaceholder,onInput:a[5]||(a[5]=a=>e.handleInput(e.searchInputValue,a)),onClick:a[6]||(a[6]=x((a=>e.togglePopperVisible(!0)),["stop"])),onKeydown:a[7]||(a[7]=X(((...a)=>e.handleDelete&&e.handleDelete(...a)),["delete"])),onCompositionstart:a[8]||(a[8]=(...a)=>e.handleComposition&&e.handleComposition(...a)),onCompositionupdate:a[9]||(a[9]=(...a)=>e.handleComposition&&e.handleComposition(...a)),onCompositionend:a[10]||(a[10]=(...a)=>e.handleComposition&&e.handleComposition(...a))},null,42,oa)),[[Q,e.searchInputValue]]):k("v-if",!0)],2)):k("v-if",!0)],38)),[[m,()=>e.togglePopperVisible(!1),e.popperPaneRef]])])),content:w((()=>[J(V(p,{ref:"panel",modelValue:e.checkedValue,"onUpdate:modelValue":a[15]||(a[15]=a=>e.checkedValue=a),options:e.options,props:e.props,border:!1,"render-label":e.$slots.default,onExpandChange:e.handleExpandChange,onClose:a[16]||(a[16]=a=>e.$nextTick((()=>e.togglePopperVisible(!1))))},null,8,["modelValue","options","props","render-label","onExpandChange"]),[[ee,!e.filtering]]),e.filterable?J((b(),C(v,{key:0,ref:"suggestionPanel",tag:"ul",class:E(e.nsCascader.e("suggestion-panel")),"view-class":e.nsCascader.e("suggestion-list"),onKeydown:e.handleSuggestionKeyDown},{default:w((()=>[e.suggestions.length?(b(!0),y(S,{key:0},T(e.suggestions,(a=>(b(),y("li",{key:a.uid,class:E([e.nsCascader.e("suggestion-item"),e.nsCascader.is("checked",a.checked)]),tabindex:-1,onClick:l=>e.handleSuggestionClick(a)},[N("span",null,D(a.text),1),a.checked?(b(),C(i,{key:0},{default:w((()=>[V(h)])),_:1})):k("v-if",!0)],10,ia)))),128)):ae(e.$slots,"empty",{key:1},(()=>[N("li",{class:E(e.nsCascader.e("empty-text"))},D(e.t("el.cascader.noMatch")),3)]))])),_:3},8,["class","view-class","onKeydown"])),[[ee,e.filtering]]):k("v-if",!0)])),_:3},8,["visible","teleported","popper-class","popper-options","transition","onHide"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader/src/index.vue"]]);da.install=e=>{e.component(da.name,da)};const ra=da;var ca=le({props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,t=$({options:te,props:{value:"code",label:"name"}}),n=m({get:()=>{const e=[];if(3===l.modelValue.length){const[a,t,n]=l.modelValue;te.map((l=>{l.name===a&&(e.push(l.code),l.children.map((a=>{a.name===t&&(e.push(a.code),a.children.map((a=>{a.name===n&&e.push(a.code)})))})))}))}return e},set:e=>{if(e){let[l,t,n]=e;te.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===t&&(t=e.name,e.children.map((e=>{e.code===n&&(n=e.name)})))})))})),a("update:modelValue",[l,t,n])}else a("update:modelValue",[])}});return(a,l)=>{const s=ra;return b(),y("div",null,[V(s,{modelValue:ne(n),"onUpdate:modelValue":l[0]||(l[0]=e=>se(n)?n.value=e:null),options:t.value.options,props:t.value.props,size:e.size,disabled:e.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}},[["__scopeId","data-v-508f6864"]]);export{ca as _};
