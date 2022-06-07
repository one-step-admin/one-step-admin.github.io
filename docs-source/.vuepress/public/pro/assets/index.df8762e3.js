
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{d as e,_ as t,n as a,i,w as s,c as l,e as n,b as r,j as o,p,k as d,z as c,E as u,y as m,r as f,G as h,F as g,aa as y,g as x,h as v,$ as b}from"./index.0a5e3bc2.js";import{E as j,a as w,_}from"./index.a6363e6e.js";import{E as k}from"./el-alert.2d5c6d9e.js";/* empty css                */import{_ as $}from"./index.5fef9d7d.js";import{a as S,E as z}from"./el-image.84940866.js";import{_ as O}from"./index.15becada.js";import{_ as I}from"./index.7bc6f31f.js";import"./check.153eb97f.js";import"./error2.1d524120.js";import"./isNil.aac33454.js";import"./typescript2.7477ece2.js";import"./index2.6a73fda0.js";import"./index2.f37a6952.js";import"./arrow-left.1f454394.js";import"./arrow-right.aba418f8.js";import"./debounce.527fb442.js";import"./index2.0c75c32d.js";import"./scroll2.09311c78.js";const C={class:"slot"},U=(e=>(p("data-v-570e8a19"),e=e(),d(),e))((()=>n("div",{class:"el-upload__text"},[m("将文件拖到此处，或"),n("em",null,"点击上传")],-1))),V={key:0,class:"el-upload__tip"},E={style:{display:"inline-block"}},N=e({name:"FileUpload"});var B=t(Object.assign(N,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:t}){const p=e;function d(e){const t=e.name.split("."),a=t[t.length-1],i=p.ext.indexOf(a)>=0,s=e.size/1024/1024<p.size;return i||c.error(`上传文件只支持 ${p.ext.join(" / ")} 格式！`),s||c.error(`上传文件大小不能超过 ${p.size}MB！`),i&&s}function m(){c.warning("文件上传超过限制")}function f(e,a){t("on-success",e,a)}return(t,p)=>{const c=$,h=u,g=k,y=j;return a(),i(y,{action:e.action,data:e.data,name:e.name,"before-upload":d,"on-exceed":m,"on-success":f,"file-list":e.files,limit:e.max,drag:""},{tip:s((()=>[e.notip?o("v-if",!0):(a(),l("div",V,[n("div",E,[r(g,{title:`上传文件支持 ${e.ext.join(" / ")} 格式，单个文件大小不超过 ${e.size}MB，且文件数量不超过 ${e.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:s((()=>[n("div",C,[r(h,{class:"el-icon--upload"},{default:s((()=>[r(c,{name:"i-ep:upload-filled"})])),_:1}),U])])),_:1},8,["action","data","name","file-list","limit"])}}}),[["__scopeId","data-v-570e8a19"]]);const M={class:"upload-container"},A={class:"mask"},T={class:"actions"},F=["onClick"],K=["onClick"],q=["onClick"],L=["onClick"],R={key:0,class:"el-upload__tip"},G={style:{display:"inline-block"}},D=e({name:"ImagesUpload"});var H=t(Object.assign(D,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const p=e,d=f({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function m(){d.value.imageViewerVisible=!1}function _(e,a){let i=p.url;"left"==a&&0!=e&&(i[e]=i.splice(e-1,1,i[e])[0]),"right"==a&&e!=i.length-1&&(i[e]=i.splice(e+1,1,i[e])[0]),t("update:url",i)}function O(e){const t=e.name.split("."),a=t[t.length-1],i=p.ext.indexOf(a)>=0,s=e.size/1024/1024<p.size;return i||c.error(`上传图片只支持 ${p.ext.join(" / ")} 格式！`),s||c.error(`上传图片大小不能超过 ${p.size}MB！`),i&&s&&(d.value.progress.preview=URL.createObjectURL(e)),i&&s}function I(e){d.value.progress.percent=~~e.percent}function C(e){d.value.progress.preview="",d.value.progress.percent=0,t("on-success",e)}return(c,f)=>{const U=S,V=$,E=u,N=w,B=j,D=k,H=z;return a(),l("div",M,[(a(!0),l(h,null,g(e.url,((c,u)=>(a(),l("div",{key:u,class:"images"},[u<e.max?(a(),i(U,{key:0,src:c,style:y(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):o("v-if",!0),n("div",A,[n("div",T,[n("span",{title:"预览",onClick:e=>function(e){d.value.dialogImageIndex=e,d.value.imageViewerVisible=!0}(u)},[r(E,null,{default:s((()=>[r(V,{name:"i-ep:zoom-in"})])),_:1})],8,F),n("span",{title:"移除",onClick:e=>function(e){let a=p.url;a.splice(e,1),t("update:url",a)}(u)},[r(E,null,{default:s((()=>[r(V,{name:"i-ep:delete"})])),_:1})],8,K),x(n("span",{title:"左移",class:b({disabled:0==u}),onClick:e=>_(u,"left")},[r(E,null,{default:s((()=>[r(V,{name:"i-ep:back"})])),_:1})],10,q),[[v,e.url.length>1]]),x(n("span",{title:"右移",class:b({disabled:u==e.url.length-1}),onClick:e=>_(u,"right")},[r(E,null,{default:s((()=>[r(V,{name:"i-ep:right"})])),_:1})],10,L),[[v,e.url.length>1]])])])])))),128)),x(r(B,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":O,"on-progress":I,"on-success":C,drag:"",class:"images-upload"},{default:s((()=>[n("div",{class:"image-slot",style:y(`width:${e.width}px;height:${e.height}px;`)},[r(E,null,{default:s((()=>[r(V,{name:"i-ep:plus"})])),_:1})],4),x(n("div",{class:"progress",style:y(`width:${e.width}px;height:${e.height}px;`)},[r(U,{src:d.value.progress.preview,style:y(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(N,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:d.value.progress.percent},null,8,["width","percentage"])],4),[[v,d.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[v,e.url.length<e.max]]),e.notip?o("v-if",!0):(a(),l("div",R,[n("div",G,[r(D,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),d.value.imageViewerVisible?(a(),i(H,{key:1,"url-list":e.url,"initial-index":d.value.dialogImageIndex,onClose:m},null,8,["url-list","initial-index"])):o("v-if",!0)])}}}),[["__scopeId","data-v-1826551d"]]);var J=t({data:()=>({image:"",images:[],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:c.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):c.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(c.warning(e.error),this.files.pop())}))}}},[["render",function(e,t,i,n,o,p){const d=I,c=_,u=O,m=H,f=B;return a(),l("div",null,[r(d,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),r(u,{title:"单图上传"},{default:s((()=>[r(c,{url:o.image,"onUpdate:url":t[0]||(t[0]=e=>o.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),r(u,{title:"多图上传（默认最多3张）"},{default:s((()=>[r(m,{url:o.images,"onUpdate:url":t[1]||(t[1]=e=>o.images=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),r(u,{title:"文件上传（默认最多3个）"},{default:s((()=>[r(f,{files:o.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])}]]);export{J as default};
