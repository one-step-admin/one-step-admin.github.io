
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as s}from"./index.d92f6c0c.js";import{_ as d}from"./index.fad2a8e3.js";import{_ as n}from"./index.b7e9e381.js";import{_ as u}from"./index.c2d6d7be.js";import{r as m,S as c,z as p,ap as f,T as g,o as v,k as b,A as _,x as h,C as y,s as k,t as x,u as C,af as z,m as V,ae as w,l as $,$ as P,j,Z as M,p as L,q as S}from"./vendor.b0dde714.js";import{u as U}from"./usePagination.8a5b9704.js";import{_ as O}from"./index.091d1180.js";var R=O({props:{id:{type:[Number,String],default:""}},setup(e,{expose:a}){const l=e,{proxy:t}=y(),o=m({loading:!1,form:{id:l.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return c((()=>{""!=o.value.form.id&&(o.value.loading=!0,t.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:o.value.form.id}}).then((e=>{o.value.loading=!1,o.value.form.title=e.data.title})))})),a({submit(e){""==o.value.form.id?t.$refs.form.validate((a=>{a&&t.$api.post("pages_example/form_mode/create",o.value.form,{baseURL:"/mock/"}).then((()=>{t.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):t.$refs.form.validate((a=>{a&&t.$api.post("pages_example/form_mode/edit",o.value.form,{baseURL:"/mock/"}).then((()=>{t.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=p("el-input"),t=p("el-form-item"),r=p("el-form"),i=f("loading");return g((v(),b("div",null,[_(r,{ref:"form",model:o.value.form,rules:o.value.rules,"label-width":"120px","label-suffix":"："},{default:h((()=>[_(t,{label:"标题",prop:"title"},{default:h((()=>[_(l,{modelValue:o.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[i,o.value.loading]])}}},[["__scopeId","data-v-765814a8"]]);const D=P("取 消"),I=P("确 定"),A={class:"buttons"},q=P("取 消"),E=P("确 定"),K={props:(N=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))r.call(a,l)&&i(e,l,a[l]);return e})({},R.props),B={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},a(N,l(B))),emits:["update:modelValue","success"],setup(e,{emit:a}){const l=e,{proxy:t}=y();let o=k({get:function(){return l.modelValue},set:function(e){a("update:modelValue",e)}});const r=k((()=>""==l.id?"新增":"编辑"));function i(){t.$refs.form.submit((()=>{a("success"),s()}))}function s(){o.value=!1}return(e,a)=>{const t=p("el-button"),d=p("el-dialog"),n=p("el-drawer");return v(),b("div",null,["dialog"===l.mode?(v(),x(d,{key:0,modelValue:C(o),"onUpdate:modelValue":a[0]||(a[0]=e=>z(o)?o.value=e:o=e),title:C(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:h((()=>[_(t,{size:"large",onClick:s},{default:h((()=>[D])),_:1}),_(t,{type:"primary",size:"large",onClick:i},{default:h((()=>[I])),_:1})])),default:h((()=>[_(R,w({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===l.mode?(v(),x(n,{key:1,modelValue:C(o),"onUpdate:modelValue":a[1]||(a[1]=e=>z(o)?o.value=e:o=e),title:C(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:h((()=>[_(R,w({ref:"form"},e.$props,{class:"form-container"}),null,16),$("div",A,[_(t,{size:"large",onClick:s},{default:h((()=>[q])),_:1}),_(t,{type:"primary",size:"large",onClick:i},{default:h((()=>[E])),_:1})])])),_:1},8,["modelValue","title"])):V("v-if",!0)])}}};var N,B,F=O(K,[["__scopeId","data-v-b1713620"]]);const T=(e=>(L("data-v-2b40e3c3"),e=e(),S(),e))((()=>$("p",null,"标准模块的优势之一就是，可根据表单内容量与关联性，快速切换表单展示模式，默认提供了以下两种常见模式",-1))),Z=P("对话框"),G=P("抽屉"),H=P("新增"),J=P("筛 选"),Q=P("单个批量操作按钮"),W=P("批量操作按钮组1"),X=P("批量操作按钮组2"),Y=P("编辑"),ee=P("删除"),ae=j({name:"PagesExampleFormModeList"});var le=O(Object.assign(ae,{setup(e){const{pagination:a,getParams:l,onSizeChange:t,onCurrentChange:o,onSortChange:r}=U(),{proxy:i}=y(),k=m({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function z(){k.value.loading=!0;let e=l();k.value.search.title&&(e.title=k.value.search.title),i.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:e}).then((e=>{k.value.loading=!1,k.value.dataList=e.data.list,a.value.total=e.data.total}))}function w(e){t(e).then((()=>z()))}function $(e){o(e).then((()=>z()))}function P(e,a){r(e,a).then((()=>z()))}function j(){k.value.formModeProps.id="",k.value.formModeProps.visible=!0}return c((()=>{z()})),(e,l)=>{const t=p("el-radio-button"),o=p("el-radio-group"),r=u,m=p("el-button"),c=p("el-input"),y=p("el-form-item"),L=p("el-col"),S=p("el-row"),U=p("el-form"),O=n,R=p("el-button-group"),D=d,I=p("el-table-column"),A=p("el-table"),q=p("el-pagination"),E=s,K=f("loading");return v(),b("div",null,[_(r,{title:"表单展示模式"},{content:h((()=>[T,_(o,{modelValue:k.value.formMode,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value.formMode=e),size:"default"},{default:h((()=>[_(t,{label:"dialog"},{default:h((()=>[Z])),_:1}),_(t,{label:"drawer"},{default:h((()=>[G])),_:1})])),_:1},8,["modelValue"])])),_:1}),_(E,null,{default:h((()=>[_(m,{type:"primary",size:"large",icon:"el-icon-plus",onClick:j},{default:h((()=>[H])),_:1}),_(O,null,{default:h((()=>[_(U,{model:k.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:h((()=>[_(S,null,{default:h((()=>[_(L,{span:12},{default:h((()=>[_(y,{label:"标题"},{default:h((()=>[_(c,{modelValue:k.value.search.title,"onUpdate:modelValue":l[1]||(l[1]=e=>k.value.search.title=e),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:M(z,["enter"]),onClear:z},null,8,["modelValue","onKeydown"])])),_:1})])),_:1})])),_:1}),_(y,null,{default:h((()=>[_(m,{type:"primary",icon:"el-icon-search",onClick:z},{default:h((()=>[J])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),k.value.batch.enable?(v(),x(D,{key:0,data:k.value.dataList,"selection-data":k.value.batch.selectionDataList,onCheckAll:l[2]||(l[2]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[3]||(l[3]=a=>e.$refs.table.clearSelection())},{default:h((()=>[_(m,{size:"default"},{default:h((()=>[Q])),_:1}),_(R,null,{default:h((()=>[_(m,{size:"default"},{default:h((()=>[W])),_:1}),_(m,{size:"default"},{default:h((()=>[X])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):V("v-if",!0),g((v(),x(A,{ref:"table",class:"list-table",data:k.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:P,onSelectionChange:l[4]||(l[4]=e=>k.value.batch.selectionDataList=e)},{default:h((()=>[k.value.batch.enable?(v(),x(I,{key:0,type:"selection",align:"center",fixed:""})):V("v-if",!0),_(I,{prop:"title",label:"标题"}),_(I,{label:"操作",width:"250",align:"center",fixed:"right"},{default:h((e=>[_(m,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,k.value.formModeProps.id=l.id,void(k.value.formModeProps.visible=!0);var l}},{default:h((()=>[Y])),_:2},1032,["onClick"]),_(m,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void i.$confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{i.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{z(),i.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:h((()=>[ee])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[K,k.value.loading]]),_(q,{"current-page":C(a).page,total:C(a).total,"page-size":C(a).size,"page-sizes":C(a).sizes,layout:C(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:w,onCurrentChange:$},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(k.value.formMode)?(v(),x(F,{key:0,id:k.value.formModeProps.id,modelValue:k.value.formModeProps.visible,"onUpdate:modelValue":l[5]||(l[5]=e=>k.value.formModeProps.visible=e),mode:k.value.formMode,onSuccess:z},null,8,["id","modelValue","mode"])):V("v-if",!0)])}}}),[["__scopeId","data-v-2b40e3c3"]]);export{le as default};
