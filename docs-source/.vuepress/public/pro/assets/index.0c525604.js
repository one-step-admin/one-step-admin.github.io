
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a2 as z,r as n,o as c,G as p,l as r,j as v,i as w,T as u,H as s,Q as y,I as B,J as N,K as _,L as I,M as O,m as M}from"./vendor.e2abc40b.js";import{_ as L}from"./plugin-vue_export-helper.5a098b48.js";const g=e=>(I("data-v-4ca52d9f"),e=e(),O(),e),T={class:"upload-container"},U=g(()=>s("div",{class:"image-slot"},[s("i",{class:"el-icon-plus"})],-1)),E={key:1,class:"image"},R={class:"mask"},q={class:"actions"},A=["onClick"],D=g(()=>s("i",{class:"el-icon-zoom-in"},null,-1)),G=[D],H=["onClick"],J=g(()=>s("i",{class:"el-icon-delete"},null,-1)),K=[J],P={key:0,class:"el-upload__tip"},Q={style:{display:"inline-block"}},F={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:f}){const d=e,{proxy:m}=M(),t=z({imageViewerVisible:!1,progress:{preview:"",percent:0}});function x(){t.value.imageViewerVisible=!0}function b(){t.value.imageViewerVisible=!1}function $(){f("update:url","")}function k(i){const h=i.name.split("."),l=h[h.length-1],a=d.ext.indexOf(l)>=0,o=i.size/1024/1024<d.size;return a||m.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${d.ext.join(" / ")} \u683C\u5F0F\uFF01`),o||m.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${d.size}MB\uFF01`),a&&o&&(t.value.progress.preview=URL.createObjectURL(i)),a&&o}function S(i){t.value.progress.percent=~~i.percent,t.value.progress.percent==100&&setTimeout(()=>{t.value.progress.preview="",t.value.progress.percent=0},1e3)}function V(i){f("on-success",i)}return(i,h)=>{const l=n("el-image"),a=n("el-progress"),o=n("el-upload"),C=n("el-alert"),j=n("el-image-viewer");return c(),p("div",T,[r(o,{"show-file-list":!1,headers:e.headers,action:e.action,data:t.value,name:e.name,"before-upload":k,"on-progress":S,"on-success":V,drag:""},{default:v(()=>[e.url===""?(c(),w(l,{key:0,src:e.url===""?e.placeholder:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},{error:v(()=>[U]),_:1},8,["src","style"])):(c(),p("div",E,[r(l,{src:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),s("div",R,[s("div",q,[s("span",{title:"\u9884\u89C8",onClick:y(x,["stop"])},G,8,A),s("span",{title:"\u79FB\u9664",onClick:y($,["stop"])},K,8,H)])])])),B(s("div",{class:"progress",style:u(`width:${e.width}px;height:${e.height}px;`)},[r(l,{src:t.value.progress.preview,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(a,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:t.value.progress.percent},null,8,["width","percentage"])],4),[[N,t.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),e.notip?_("v-if",!0):(c(),p("div",P,[s("div",Q,[r(C,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u4E14\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),t.value.imageViewerVisible?(c(),w(j,{key:1,"url-list":[e.url],onClose:b},null,8,["url-list"])):_("v-if",!0)])}}};var Y=L(F,[["__scopeId","data-v-4ca52d9f"]]);export{Y as _};