
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{U as z,r as n,o as c,q as g,x as r,y as v,c as y,K as u,s,G as w,t as B,v as N,A as x,B as O,C as I,Z as M}from"./vendor.1e66543d.js";import{_ as U}from"./plugin-vue_export-helper.5a098b48.js";const p=e=>(O("data-v-78e843b5"),e=e(),I(),e),q={class:"upload-container"},A=p(()=>s("div",{class:"image-slot"},[s("i",{class:"el-icon-plus"})],-1)),D={key:1,class:"image"},E={class:"mask"},L={class:"actions"},R=["onClick"],G=p(()=>s("i",{class:"el-icon-zoom-in"},null,-1)),K=[G],P=["onClick"],T=p(()=>s("i",{class:"el-icon-delete"},null,-1)),Z=[T],F={key:0,class:"el-upload__tip"},H={style:{display:"inline-block"}},J={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:f}){const d=e,{proxy:m}=M(),t=z({imageViewerVisible:!1,progress:{preview:"",percent:0}});function _(){t.value.imageViewerVisible=!0}function b(){t.value.imageViewerVisible=!1}function $(){f("update:url","")}function k(i){const h=i.name.split("."),l=h[h.length-1],a=d.ext.indexOf(l)>=0,o=i.size/1024/1024<d.size;return a||m.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${d.ext.join(" / ")} \u683C\u5F0F\uFF01`),o||m.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${d.size}MB\uFF01`),a&&o&&(t.value.progress.preview=URL.createObjectURL(i)),a&&o}function C(i){t.value.progress.percent=~~i.percent}function S(i){t.value.progress.preview="",t.value.progress.percent=0,f("on-success",i)}return(i,h)=>{const l=n("el-image"),a=n("el-progress"),o=n("el-upload"),V=n("el-alert"),j=n("el-image-viewer");return c(),g("div",q,[r(o,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":k,"on-progress":C,"on-success":S,drag:""},{default:v(()=>[e.url===""?(c(),y(l,{key:0,src:e.url===""?e.placeholder:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},{error:v(()=>[A]),_:1},8,["src","style"])):(c(),g("div",D,[r(l,{src:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),s("div",E,[s("div",L,[s("span",{title:"\u9884\u89C8",onClick:w(_,["stop"])},K,8,R),s("span",{title:"\u79FB\u9664",onClick:w($,["stop"])},Z,8,P)])])])),B(s("div",{class:"progress",style:u(`width:${e.width}px;height:${e.height}px;`)},[r(l,{src:t.value.progress.preview,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(a,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:t.value.progress.percent},null,8,["width","percentage"])],4),[[N,e.url===""&&t.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),e.notip?x("v-if",!0):(c(),g("div",F,[s("div",H,[r(V,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u4E14\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),t.value.imageViewerVisible?(c(),y(j,{key:1,"url-list":[e.url],onClose:b},null,8,["url-list"])):x("v-if",!0)])}}};var X=U(J,[["__scopeId","data-v-78e843b5"]]);export{X as _};
