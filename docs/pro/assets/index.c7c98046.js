
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var se=Object.defineProperty,ie=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var D=(n,a,s)=>a in n?se(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,I=(n,a)=>{for(var s in a||(a={}))de.call(a,s)&&D(n,s,a[s]);if(j)for(var s of j(a))ue.call(a,s)&&D(n,s,a[s]);return n},N=(n,a)=>ie(n,re(a));import{_ as _e}from"./index.ef5f4349.js";import{_ as ce}from"./index.1817a09b.js";import{_ as me}from"./index.4cc00e6c.js";import{_ as pe}from"./index.da599f69.js";import{r as R,S as B,z as i,ap as A,T as E,o as f,k as w,A as o,x as t,C as M,s as F,t as C,u as g,af as K,m as k,ae as q,l as T,$ as c,j as fe,Z as ge,p as ve,q as be}from"./vendor.18c32348.js";import{u as he}from"./usePagination.4143cb8b.js";import{_ as S}from"./index.5c755cb6.js";const ye={props:{id:{type:[Number,String],default:""}},setup(n,{expose:a}){const s=n,{proxy:p}=M(),l=R({loading:!1,form:{id:s.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}]}});B(()=>{l.value.form.id!=""&&x()});function x(){l.value.loading=!0,p.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:l.value.form.id}}).then(_=>{l.value.loading=!1,l.value.form.title=_.data.title})}return a({submit(_){l.value.form.id==""?p.$refs.form.validate(e=>{e&&p.$api.post("pages_example/form_mode/create",l.value.form,{baseURL:"/mock/"}).then(()=>{p.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),_&&_()})}):p.$refs.form.validate(e=>{e&&p.$api.post("pages_example/form_mode/edit",l.value.form,{baseURL:"/mock/"}).then(()=>{p.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),_&&_()})})}}),(_,e)=>{const d=i("el-input"),v=i("el-form-item"),b=i("el-form"),$=A("loading");return E((f(),w("div",null,[o(b,{ref:"form",model:l.value.form,rules:l.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:t(()=>[o(v,{label:"\u6807\u9898",prop:"title"},{default:t(()=>[o(d,{modelValue:l.value.form.title,"onUpdate:modelValue":e[0]||(e[0]=V=>l.value.form.title=V),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[$,l.value.loading]])}}};var L=S(ye,[["__scopeId","data-v-765814a8"]]);const xe=c("\u53D6 \u6D88"),Ce=c("\u786E \u5B9A"),$e={class:"buttons"},Ve=c("\u53D6 \u6D88"),ke=c("\u786E \u5B9A"),ze={props:N(I({},L.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:n=>["dialog","drawer"].includes(n)}}),emits:["update:modelValue","success"],setup(n,{emit:a}){const s=n,{proxy:p}=M();let l=F({get:function(){return s.modelValue},set:function(d){a("update:modelValue",d)}});const x=F(()=>s.id==""?"\u65B0\u589E":"\u7F16\u8F91");function _(){p.$refs.form.submit(()=>{a("success"),e()})}function e(){l.value=!1}return(d,v)=>{const b=i("el-button"),$=i("el-dialog"),V=i("el-drawer");return f(),w("div",null,[s.mode==="dialog"?(f(),C($,{key:0,modelValue:g(l),"onUpdate:modelValue":v[0]||(v[0]=h=>K(l)?l.value=h:l=h),title:g(x),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t(()=>[o(b,{size:"large",onClick:e},{default:t(()=>[xe]),_:1}),o(b,{type:"primary",size:"large",onClick:_},{default:t(()=>[Ce]),_:1})]),default:t(()=>[o(L,q({ref:"form"},d.$props),null,16)]),_:1},8,["modelValue","title"])):s.mode==="drawer"?(f(),C(V,{key:1,modelValue:g(l),"onUpdate:modelValue":v[1]||(v[1]=h=>K(l)?l.value=h:l=h),title:g(x),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:t(()=>[o(L,q({ref:"form"},d.$props,{class:"form-container"}),null,16),T("div",$e,[o(b,{size:"large",onClick:e},{default:t(()=>[Ve]),_:1}),o(b,{type:"primary",size:"large",onClick:_},{default:t(()=>[ke]),_:1})])]),_:1},8,["modelValue","title"])):k("v-if",!0)])}}};var we=S(ze,[["__scopeId","data-v-b1713620"]]);const Me=n=>(ve("data-v-af1842b6"),n=n(),be(),n),Se=Me(()=>T("p",null,"\u6807\u51C6\u6A21\u5757\u7684\u4F18\u52BF\u4E4B\u4E00\u5C31\u662F\uFF0C\u53EF\u6839\u636E\u8868\u5355\u5185\u5BB9\u91CF\u4E0E\u5173\u8054\u6027\uFF0C\u5FEB\u901F\u5207\u6362\u8868\u5355\u5C55\u793A\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E24\u79CD\u5E38\u89C1\u6A21\u5F0F",-1)),Le=c("\u5BF9\u8BDD\u6846"),Pe=c("\u62BD\u5C49"),Ue=c("\u65B0\u589E"),je=c("\u7B5B \u9009"),De=c("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),Ie=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),Ne=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),Re=c("\u7F16\u8F91"),Be=c("\u5220\u9664"),Ae=fe({name:"PagesExampleFormModeList"}),Ee=Object.assign(Ae,{setup(n){const{pagination:a,getParams:s,onSizeChange:p,onCurrentChange:l,onSortChange:x}=he(),{proxy:_}=M(),e=R({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});B(()=>{d()});function d(){e.value.loading=!0;let u=s();e.value.search.title&&(u.title=e.value.search.title),_.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:u}).then(r=>{e.value.loading=!1,e.value.dataList=r.data.list,a.value.total=r.data.total})}function v(u){p(u).then(()=>d())}function b(u){l(u).then(()=>d())}function $(u,r){x(u,r).then(()=>d())}function V(){e.value.formModeProps.id="",e.value.formModeProps.visible=!0}function h(u){e.value.formModeProps.id=u.id,e.value.formModeProps.visible=!0}function O(u){_.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${u.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{_.$api.post("pages_example/form_mode/delete",{id:u.id},{baseURL:"/mock/"}).then(()=>{d(),_.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}return(u,r)=>{const P=i("el-radio-button"),Z=i("el-radio-group"),G=pe,y=i("el-button"),H=i("el-input"),U=i("el-form-item"),J=i("el-col"),Q=i("el-row"),W=i("el-form"),X=me,Y=i("el-button-group"),ee=ce,z=i("el-table-column"),oe=i("el-table"),te=i("el-pagination"),le=_e,ae=A("loading");return f(),w("div",null,[o(G,{title:"\u8868\u5355\u5C55\u793A\u6A21\u5F0F"},{content:t(()=>[Se,o(Z,{modelValue:e.value.formMode,"onUpdate:modelValue":r[0]||(r[0]=m=>e.value.formMode=m),size:"default"},{default:t(()=>[o(P,{label:"dialog"},{default:t(()=>[Le]),_:1}),o(P,{label:"drawer"},{default:t(()=>[Pe]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(le,null,{default:t(()=>[o(y,{type:"primary",size:"large",icon:"el-icon-plus",onClick:V},{default:t(()=>[Ue]),_:1}),o(X,null,{default:t(()=>[o(W,{model:e.value.search,size:"default","label-width":"100px","label-suffix":"\uFF1A"},{default:t(()=>[o(Q,null,{default:t(()=>[o(J,{span:12},{default:t(()=>[o(U,{label:"\u6807\u9898"},{default:t(()=>[o(H,{modelValue:e.value.search.title,"onUpdate:modelValue":r[1]||(r[1]=m=>e.value.search.title=m),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:ge(d,["enter"]),onClear:d},null,8,["modelValue","onKeydown"])]),_:1})]),_:1})]),_:1}),o(U,null,{default:t(()=>[o(y,{type:"primary",icon:"el-icon-search",onClick:d},{default:t(()=>[je]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(f(),C(ee,{key:0,data:e.value.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:r[2]||(r[2]=m=>u.$refs.table.toggleAllSelection()),onCheckNull:r[3]||(r[3]=m=>u.$refs.table.clearSelection())},{default:t(()=>[o(y,{size:"default"},{default:t(()=>[De]),_:1}),o(Y,null,{default:t(()=>[o(y,{size:"default"},{default:t(()=>[Ie]),_:1}),o(y,{size:"default"},{default:t(()=>[Ne]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):k("v-if",!0),E((f(),C(oe,{ref:"table",class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:$,onSelectionChange:r[4]||(r[4]=m=>e.value.batch.selectionDataList=m)},{default:t(()=>[e.value.batch.enable?(f(),C(z,{key:0,type:"selection",align:"center",fixed:""})):k("v-if",!0),o(z,{prop:"title",label:"\u6807\u9898"}),o(z,{label:"\u64CD\u4F5C",width:"250",align:"center",fixed:"right"},{default:t(m=>[o(y,{type:"primary",size:"small",plain:"",onClick:ne=>h(m.row)},{default:t(()=>[Re]),_:2},1032,["onClick"]),o(y,{type:"danger",size:"small",plain:"",onClick:ne=>O(m.row)},{default:t(()=>[Be]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ae,e.value.loading]]),o(te,{"current-page":g(a).page,total:g(a).total,"page-size":g(a).size,"page-sizes":g(a).sizes,layout:g(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:v,onCurrentChange:b},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(f(),C(we,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":r[5]||(r[5]=m=>e.value.formModeProps.visible=m),mode:e.value.formMode,onSuccess:d},null,8,["id","modelValue","mode"])):k("v-if",!0)])}}});var Je=S(Ee,[["__scopeId","data-v-af1842b6"]]);export{Je as default};
