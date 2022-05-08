
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;import{_ as s,r as d,f as n,A as m,h as u,o as p,c as f,g as c,w as b,B as v,C as g,j,i as _,be as h,k as y,as as x,a as k,y as w,d as C,E as z,q as V,p as P,l as E}from"./index.89c4a536.js";import{v as M}from"./el-loading.a11d3df9.js";import{_ as L}from"./index.7ae327c0.js";import{E as $}from"./el-pagination.7d47f74a.js";import{E as S}from"./el-input.344ef3e5.js";/* empty css               */import"./el-select.97bb5b88.js";/* empty css                     */import"./el-popper.27b489eb.js";import{E as U,a as O}from"./el-table-column.dba5e459.js";import"./el-checkbox.bcb6e2a2.js";import"./el-tooltip.586473e3.js";import{_ as R}from"./index.51d2887e.js";/* empty css                        */import{_ as D}from"./index.0ddb3ade.js";import{E as I,a as q}from"./el-form.49f8d7cd.js";import{E as A}from"./el-row.589e4137.js";import{E as N}from"./el-col.1980009e.js";import"./el-form-item.e866842d.js";import{E as B,a as K}from"./el-button.ee77ba8f.js";/* empty css                */import{_ as F}from"./index.2a4f1e1c.js";import{_ as G}from"./index.60634e19.js";/* empty css                       *//* empty css                        */import{a as H,E as J}from"./el-drawer.9614a77b.js";import"./el-overlay.2ed94eee.js";import{u as Q}from"./usePagination.54650d51.js";import{E as T}from"./el-dialog.09c7a1f3.js";import{E as W,a as X}from"./index.d974899f.js";import"./arrow-left.6b9dcff5.js";import"./arrow-right.1602ba15.js";import"./typescript.f55dff19.js";import"./index.a1ac867d.js";import"./isEqual.f1aee1ae.js";import"./d-arrow-right.11ad9dde.js";import"./error.67356979.js";import"./index.0dfe2aba.js";import"./event.87cd92d6.js";import"./index.4b6badd5.js";import"./index.a744c982.js";import"./isNil.aac33454.js";import"./index.0ddec936.js";import"./index.b6762400.js";import"./resize-event.1ca4e7b2.js";import"./scroll.cf7b6596.js";import"./debounce.4df1b226.js";import"./index.74c86e0f.js";import"./validator.0261e922.js";import"./deprecation.3d238bdd.js";import"./index.8ab22528.js";import"./arrow-up.62d5044f.js";import"./event.e842ba5a.js";import"./arrow-down.b0d54151.js";import"./caret-bottom.f3dc6deb.js";import"./caret-top.18285b0c.js";import"./aria.fe92e444.js";var Y=s({props:{id:{type:[Number,String],default:""}},setup(e,{expose:a}){const l=e,{proxy:o}=v(),t=d({loading:!1,form:{id:l.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return n((()=>{""!=t.value.form.id&&(t.value.loading=!0,o.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:t.value.form.id}}).then((e=>{t.value.loading=!1,t.value.form.title=e.data.title})))})),a({submit(e){""==t.value.form.id?o.$refs.form.validate((a=>{a&&o.$api.post("pages_example/form_mode/create",t.value.form,{baseURL:"/mock/"}).then((()=>{m.success({message:"模拟新增成功",center:!0}),e&&e()}))})):o.$refs.form.validate((a=>{a&&o.$api.post("pages_example/form_mode/edit",t.value.form,{baseURL:"/mock/"}).then((()=>{m.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=S,o=I,r=q,i=M;return u((p(),f("div",null,[c(r,{ref:"form",model:t.value.form,rules:t.value.rules,"label-width":"120px","label-suffix":"："},{default:b((()=>[c(o,{label:"标题",prop:"title"},{default:b((()=>[c(l,{modelValue:t.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[i,t.value.loading]])}}},[["__scopeId","data-v-8067b90c"]]);const Z=w("取 消"),ee=w("确 定"),ae={class:"buttons"},le=w("取 消"),oe=w("确 定"),te={props:(re=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&i(e,l,a[l]);if(o)for(var l of o(a))r.call(a,l)&&i(e,l,a[l]);return e})({},Y.props),ie={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},a(re,l(ie))),emits:["update:modelValue","success"],setup(e,{emit:a}){const l=e,{proxy:o}=v();let t=g({get:function(){return l.modelValue},set:function(e){a("update:modelValue",e)}});const r=g((()=>""==l.id?"新增":"编辑"));function i(){o.$refs.form.submit((()=>{a("success"),s()}))}function s(){t.value=!1}return(e,a)=>{const o=B,d=T,n=H;return p(),f("div",null,["dialog"===l.mode?(p(),j(d,{key:0,modelValue:_(t),"onUpdate:modelValue":a[0]||(a[0]=e=>h(t)?t.value=e:t=e),title:_(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:b((()=>[c(o,{size:"large",onClick:s},{default:b((()=>[Z])),_:1}),c(o,{type:"primary",size:"large",onClick:i},{default:b((()=>[ee])),_:1})])),default:b((()=>[c(Y,x({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===l.mode?(p(),j(n,{key:1,modelValue:_(t),"onUpdate:modelValue":a[1]||(a[1]=e=>h(t)?t.value=e:t=e),title:_(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:b((()=>[c(Y,x({ref:"form"},e.$props,{class:"form-container"}),null,16),k("div",ae,[c(o,{size:"large",onClick:s},{default:b((()=>[le])),_:1}),c(o,{type:"primary",size:"large",onClick:i},{default:b((()=>[oe])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var re,ie,se=s(te,[["__scopeId","data-v-b1713620"]]);const de=(e=>(P("data-v-bf5b8da2"),e=e(),E(),e))((()=>k("p",null,"标准模块的优势之一就是，可根据表单内容量与关联性，快速切换表单展示模式，默认提供了以下两种常见模式",-1))),ne=w("对话框"),me=w("抽屉"),ue=w(" 新增 "),pe=w(" 筛选 "),fe=w("单个批量操作按钮"),ce=w("批量操作按钮组1"),be=w("批量操作按钮组2"),ve=w("编辑"),ge=w("删除"),je=C({name:"PagesExampleFormModeList"});var _e=s(Object.assign(je,{setup(e){const{pagination:a,getParams:l,onSizeChange:o,onCurrentChange:t,onSortChange:r}=Q(),{proxy:i}=v(),s=d({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function g(){s.value.loading=!0;let e=l();s.value.search.title&&(e.title=s.value.search.title),i.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:e}).then((e=>{s.value.loading=!1,s.value.dataList=e.data.list,a.value.total=e.data.total}))}function h(e){o(e).then((()=>g()))}function x(e){t(e).then((()=>g()))}function k(e,a){r(e,a).then((()=>g()))}function w(){s.value.formModeProps.id="",s.value.formModeProps.visible=!0}return n((()=>{g()})),(e,l)=>{const o=W,t=X,r=G,d=F,n=z,v=B,C=S,P=I,E=N,H=A,Q=q,T=D,Y=K,Z=R,ee=U,ae=O,le=$,oe=L,te=M;return p(),f("div",null,[c(r,{title:"表单展示模式"},{content:b((()=>[de,c(t,{modelValue:s.value.formMode,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value.formMode=e),size:"default"},{default:b((()=>[c(o,{label:"dialog"},{default:b((()=>[ne])),_:1}),c(o,{label:"drawer"},{default:b((()=>[me])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(oe,null,{default:b((()=>[c(v,{type:"primary",size:"large",onClick:w},{icon:b((()=>[c(n,null,{default:b((()=>[c(d,{name:"ep:plus"})])),_:1})])),default:b((()=>[ue])),_:1}),c(T,null,{default:b((()=>[c(Q,{model:s.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:b((()=>[c(H,null,{default:b((()=>[c(E,{span:12},{default:b((()=>[c(P,{label:"标题"},{default:b((()=>[c(C,{modelValue:s.value.search.title,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.search.title=e),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:V(g,["enter"]),onClear:g},null,8,["modelValue","onKeydown"])])),_:1})])),_:1})])),_:1}),c(P,null,{default:b((()=>[c(v,{type:"primary",onClick:g},{icon:b((()=>[c(n,null,{default:b((()=>[c(d,{name:"ep:search"})])),_:1})])),default:b((()=>[pe])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),s.value.batch.enable?(p(),j(Z,{key:0,data:s.value.dataList,"selection-data":s.value.batch.selectionDataList,onCheckAll:l[2]||(l[2]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[3]||(l[3]=a=>e.$refs.table.clearSelection())},{default:b((()=>[c(v,{size:"default"},{default:b((()=>[fe])),_:1}),c(Y,null,{default:b((()=>[c(v,{size:"default"},{default:b((()=>[ce])),_:1}),c(v,{size:"default"},{default:b((()=>[be])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):y("v-if",!0),u((p(),j(ae,{ref:"table",class:"list-table",data:s.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:k,onSelectionChange:l[4]||(l[4]=e=>s.value.batch.selectionDataList=e)},{default:b((()=>[s.value.batch.enable?(p(),j(ee,{key:0,type:"selection",align:"center",fixed:""})):y("v-if",!0),c(ee,{prop:"title",label:"标题"}),c(ee,{label:"操作",width:"250",align:"center",fixed:"right"},{default:b((e=>[c(v,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,s.value.formModeProps.id=l.id,void(s.value.formModeProps.visible=!0);var l}},{default:b((()=>[ve])),_:2},1032,["onClick"]),c(v,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void J.confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{i.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{g(),m.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:b((()=>[ge])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[te,s.value.loading]]),c(le,{"current-page":_(a).page,total:_(a).total,"page-size":_(a).size,"page-sizes":_(a).sizes,layout:_(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:h,onCurrentChange:x},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(s.value.formMode)?(p(),j(se,{key:0,id:s.value.formModeProps.id,modelValue:s.value.formModeProps.visible,"onUpdate:modelValue":l[5]||(l[5]=e=>s.value.formModeProps.visible=e),mode:s.value.formMode,onSuccess:g},null,8,["id","modelValue","mode"])):y("v-if",!0)])}}}),[["__scopeId","data-v-bf5b8da2"]]);export{_e as default};
