
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as z}from"./index.2ac40c50.js";import{ao as O,r as H,T,o as b,j as w,af as U,U as Z,V as G,a4 as J,X as K,l as Q,B as tt,A as f,z as et}from"./vendor.6c58eadc.js";import{_ as L}from"./index.0947c737.js";import{_ as ot}from"./index.f02e00aa.js";function V(t,o,l,e){return parseFloat((o-e*o/t+l).toFixed(2))}function lt(t){[...t.querySelectorAll("*")].forEach(o=>t.removeChild(o))}function at(t){return t.value}function x(t,o){const l=document.createElementNS("http://www.w3.org/2000/svg",t);for(let e in o)l.setAttribute(e,o[e]);return l}function E(t,o,l){if(lt(t),o.length<=1)return;l=l||{},typeof o[0]=="number"&&(o=o.map(s=>({value:s})));const e=l.onmousemove,a=l.onmouseout,d="interactive"in l?l.interactive:!!e,r=l.spotRadius||2,n=r*2,C=l.cursorWidth||2,g=parseFloat(t.attributes["stroke-width"].value),W=l.fetch||at,_=o.map(s=>W(s)),B=parseFloat(t.attributes.width.value)-n*2,y=parseFloat(t.attributes.height.value),j=y-g*2-n,D=Math.max(..._),u=-1e3,F=_.length-1,I=B/F,h=[],X=V(D,j,g+r,_[0]);let $=`M${n} ${X}`;_.forEach((s,p)=>{const i=p*I+n,c=V(D,j,g+r,s);h.push(Object.assign({},o[p],{index:p,x:i,y:c})),$+=` L ${i} ${c}`});const M=x("path",{class:"sparkline--line",d:$,fill:"none"});let P=`${$} V ${y} L ${n} ${y} Z`;const R=x("path",{class:"sparkline--fill",d:P,stroke:"none"});if(t.appendChild(R),t.appendChild(M),!d)return;const v=x("line",{class:"sparkline--cursor",x1:u,x2:u,y1:0,y2:y,"stroke-width":C}),k=x("circle",{class:"sparkline--spot",cx:u,cy:u,r});t.appendChild(v),t.appendChild(k);const A=x("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(A),A.addEventListener("mouseout",s=>{v.setAttribute("x1",u),v.setAttribute("x2",u),k.setAttribute("cx",u),a&&a(s)}),A.addEventListener("mousemove",s=>{const p=s.offsetX;let i=h.find(q=>q.x>=p);i||(i=h[F]);let c=h[h.indexOf(i)-1],m,N;c?(N=c.x+(i.x-c.x)/2,m=p>=N?i:c):m=i;const S=m.x,Y=m.y;k.setAttribute("cx",S),k.setAttribute("cy",Y),v.setAttribute("x1",S),v.setAttribute("x2",S),e&&e(s,m)})}const nt={class:"sparkline"},st=["width","height","stroke-width","stroke","fill"],rt={props:{value:{type:Array,require:!0},width:{type:Number,default:100},height:{type:Number,default:30},strokeWidth:{type:Number,default:3},strokeColor:{type:String,default:"#dc2b33"},fillColor:{type:String,default:"transparent"},cursorColor:{type:String,default:"#dc2b33"},spotColor:{type:String,default:"#dc2b33"},tooltip:{type:Boolean,default:!1}},setup(t){const o=t;O(a=>({acce1960:t.cursorColor,"30f3c5e4":t.spotColor}));const{proxy:l}=tt(),e=H({show:!1,content:"",top:0,left:0});return T(()=>{E(l.$refs.sparkline,o.value,o.tooltip&&{onmousemove:(a,d)=>{e.value.show=!0,e.value.content=d.tooltip,e.value.top=a.offsetY,e.value.left=a.offsetX+20},onmouseout:()=>{e.value.show=!1}})}),(a,d)=>(b(),w("div",nt,[(b(),w("svg",{ref:(r,n)=>{n.sparkline=r,U(E)&&(E.value=r)},width:t.width,height:t.height,"stroke-width":t.strokeWidth,stroke:t.strokeColor,fill:t.fillColor},null,8,st)),t.tooltip?Z((b(),w("span",{key:0,class:"tooltip",style:J([`left: ${e.value.left}px`,`top: ${e.value.top}px`])},K(e.value.content),5)),[[G,e.value.show]]):Q("v-if",!0)]))}};var it=L(rt,[["__scopeId","data-v-52b2dc50"]]);const ut={data(){return{value1:[1,5,2,4,8,3,7],value2:[{tooltip:"\u503C\uFF1A1",value:1},{tooltip:"\u503C\uFF1A3",value:3},{tooltip:"\u503C\uFF1A5",value:5},{tooltip:"\u503C\uFF1A8",value:8},{tooltip:"\u503C\uFF1A4",value:4},{tooltip:"\u503C\uFF1A6",value:6},{tooltip:"\u503C\uFF1A9",value:9}]}}};function ct(t,o,l,e,a,d){const r=ot,n=it,C=z;return b(),w("div",null,[f(r,{title:"\u8FF7\u4F60\u56FE",content:"Sparkline"}),f(C,null,{default:et(()=>[f(n,{value:a.value1},null,8,["value"]),f(n,{value:a.value1,"stroke-color":"#409eff","fill-color":"#b3d8ff"},null,8,["value"]),f(n,{value:a.value2,tooltip:""},null,8,["value"]),f(n,{value:a.value2,tooltip:"","stroke-color":"#409eff","fill-color":"#b3d8ff","cursor-color":"#e6a23c","spot-color":"#909399"},null,8,["value"])]),_:1})])}var vt=L(ut,[["render",ct]]);export{vt as default};
