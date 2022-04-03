
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as d}from"./index.8346cdbe.js";import{_ as s}from"./index.4601591e.js";import{_ as n}from"./index.0528e494.js";import{_ as u}from"./index.8b7064ca.js";import{_ as p,r as m,o as c,m as f,aa as g,f as v,n as b,c as _,b as h,w as y,A as k,B as w,h as x,g as C,V as z,i as $,U as V,e as j,y as P,d as L,q as M}from"./index.d26282ba.js";import{u as S}from"./usePagination.aa91806e.js";var U=p({props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(e,{expose:a}){const l=e,{proxy:t}=k(),o=m({loading:!1,form:{id:l.id,department_id:l.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return c((()=>{""!=o.value.form.id&&(o.value.loading=!0,t.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:o.value.form.id,department_id:o.value.form.department_id}}).then((e=>{o.value.loading=!1,o.value.form.title=e.data.title})))})),a({submit(e){""==o.value.form.id?t.$refs.form.validate((a=>{a&&t.$api.post("pages_example/job/create",o.value.form,{baseURL:"/mock/"}).then((()=>{t.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):t.$refs.form.validate((a=>{a&&t.$api.post("pages_example/job/edit",o.value.form,{baseURL:"/mock/"}).then((()=>{t.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=f("el-input"),t=f("el-form-item"),r=f("el-form"),i=g("loading");return v((b(),_("div",null,[h(r,{ref:"form",model:o.value.form,rules:o.value.rules,"label-width":"120px","label-suffix":"："},{default:y((()=>[h(t,{label:"职位",prop:"title"},{default:y((()=>[h(l,{modelValue:o.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[i,o.value.loading]])}}},[["__scopeId","data-v-25293d11"]]);const O=P("取 消"),D=P("确 定"),I={class:"buttons"},R=P("取 消"),E=P("确 定"),A={props:(N=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))r.call(a,l)&&i(e,l,a[l]);return e})({},U.props),q={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},a(N,l(q))),emits:["update:modelValue","success"],setup(e,{emit:a}){const l=e,{proxy:t}=k();let o=w({get:function(){return l.modelValue},set:function(e){a("update:modelValue",e)}});const r=w((()=>""==l.id?"新增职位":"编辑职位"));function i(){t.$refs.form.submit((()=>{a("success"),d()}))}function d(){o.value=!1}return(e,a)=>{const t=f("el-button"),s=f("el-dialog"),n=f("el-drawer");return b(),_("div",null,["dialog"===l.mode?(b(),x(s,{key:0,modelValue:C(o),"onUpdate:modelValue":a[0]||(a[0]=e=>z(o)?o.value=e:o=e),title:C(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:y((()=>[h(t,{size:"large",onClick:d},{default:y((()=>[O])),_:1}),h(t,{type:"primary",size:"large",onClick:i},{default:y((()=>[D])),_:1})])),default:y((()=>[h(U,V({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===l.mode?(b(),x(n,{key:1,modelValue:C(o),"onUpdate:modelValue":a[1]||(a[1]=e=>z(o)?o.value=e:o=e),title:C(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:y((()=>[h(U,V({ref:"form"},e.$props,{class:"form-container"}),null,16),j("div",I,[h(t,{size:"large",onClick:d},{default:y((()=>[R])),_:1}),h(t,{type:"primary",size:"large",onClick:i},{default:y((()=>[E])),_:1})])])),_:1},8,["modelValue","title"])):$("v-if",!0)])}}};var N,q,B=p(A,[["__scopeId","data-v-1d9d9474"]]);const G=P("返回"),J=P("新增职位"),K=P("筛 选"),F=P("单个批量操作按钮"),H=P("批量操作按钮组1"),Q=P("批量操作按钮组2"),T=P("编辑"),W=P("删除"),X=L({name:"PagesExampleDepartmentJobList"});var Y=p(Object.assign(X,{props:{params:{type:Object}},setup(e){const a=e,{pagination:l,getParams:t,onSizeChange:o,onCurrentChange:r,onSortChange:i}=S(),{proxy:p}=k(),w=m({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[],department:""});function z(){w.value.loading=!0;let e=t();e.department_id=a.params.department_id,w.value.search.title&&(e.title=w.value.search.title),p.$api.get("pages_example/job/list",{baseURL:"/mock/",params:e}).then((e=>{w.value.loading=!1,w.value.dataList=e.data.list,l.value.total=e.data.total}))}function V(e){o(e).then((()=>z()))}function j(e){r(e).then((()=>z()))}function P(e,a){i(e,a).then((()=>z()))}function L(){w.value.formModeProps.id="",w.value.formModeProps.visible=!0}return c((()=>{p.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:a.params.department_id}}).then((e=>{w.value.department=e.data.title})),z()})),(e,t)=>{const o=f("el-button"),r=u,i=f("el-input"),m=f("el-form-item"),c=f("el-col"),k=f("el-row"),S=f("el-form"),U=n,O=f("el-button-group"),D=s,I=f("el-table-column"),R=f("el-table"),E=f("el-pagination"),A=d,N=g("loading");return b(),_("div",null,[h(r,{title:`「${w.value.department}」职位管理`,content:"页面数据为 Mock 示例数据，非真实数据。"},{default:y((()=>[h(o,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:t[0]||(t[0]=a=>{e.$window.add("PagesExampleGeneralDepartment"),e.$window.remove("PagesExampleGeneralDepartmentJob")})},{default:y((()=>[G])),_:1})])),_:1},8,["title"]),h(A,null,{default:y((()=>[h(o,{type:"primary",size:"large",icon:"el-icon-plus",onClick:L},{default:y((()=>[J])),_:1}),h(U,null,{default:y((()=>[h(S,{model:w.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:y((()=>[h(k,null,{default:y((()=>[h(c,{span:12},{default:y((()=>[h(m,{label:"职位"},{default:y((()=>[h(i,{modelValue:w.value.search.title,"onUpdate:modelValue":t[1]||(t[1]=e=>w.value.search.title=e),placeholder:"请输入职位名称，支持模糊查询",clearable:"",onKeydown:M(z,["enter"]),onClear:z},null,8,["modelValue","onKeydown"])])),_:1})])),_:1})])),_:1}),h(m,null,{default:y((()=>[h(o,{type:"primary",icon:"el-icon-search",onClick:z},{default:y((()=>[K])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),w.value.batch.enable?(b(),x(D,{key:0,data:w.value.dataList,"selection-data":w.value.batch.selectionDataList,onCheckAll:t[2]||(t[2]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:t[3]||(t[3]=a=>e.$refs.table.clearSelection())},{default:y((()=>[h(o,{size:"default"},{default:y((()=>[F])),_:1}),h(O,null,{default:y((()=>[h(o,{size:"default"},{default:y((()=>[H])),_:1}),h(o,{size:"default"},{default:y((()=>[Q])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):$("v-if",!0),v((b(),x(R,{ref:"table",class:"list-table",data:w.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:P,onSelectionChange:t[4]||(t[4]=e=>w.value.batch.selectionDataList=e)},{default:y((()=>[w.value.batch.enable?(b(),x(I,{key:0,type:"selection",width:"40"})):$("v-if",!0),h(I,{prop:"title",label:"职位"}),h(I,{label:"操作",width:"250",align:"center"},{default:y((e=>[h(o,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,w.value.formModeProps.id=l.id,void(w.value.formModeProps.visible=!0);var l}},{default:y((()=>[T])),_:2},1032,["onClick"]),h(o,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void p.$confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{p.$api.post("pages_example/job/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{z(),p.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:y((()=>[W])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[N,w.value.loading]]),h(E,{"current-page":C(l).page,total:C(l).total,"page-size":C(l).size,"page-sizes":C(l).sizes,layout:C(l).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:V,onCurrentChange:j},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(w.value.formMode)?(b(),x(B,{key:0,id:w.value.formModeProps.id,modelValue:w.value.formModeProps.visible,"onUpdate:modelValue":t[5]||(t[5]=e=>w.value.formModeProps.visible=e),"department-id":a.params.department_id,mode:w.value.formMode,onSuccess:z},null,8,["id","modelValue","department-id","mode"])):$("v-if",!0)])}}}),[["__scopeId","data-v-73458219"]]);export{Y as default};