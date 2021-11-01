
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as z}from"./index.d603319d.js";import{_ as F}from"./index.b92ebba1.js";import{_ as B}from"./index.b5bfd3f7.js";import{_ as A}from"./index.a4d9ae54.js";import{_ as N}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,G as p,l as e,j as l,o as i,i as b,O as V,V as D,R as m}from"./vendor.e2abc40b.js";import"./index.c0f98470.js";const G={data(){return{form:{name:"",sex:1,birthday:"",idcard:"",area:[],address:"",familyMember:[{isEdit:!1,name:"\u5F20\u4E09",mobile:"13111111111",relationship:"\u7236\u4EB2"},{isEdit:!1,name:"\u674E\u56DB",mobile:"13122222222",relationship:"\u6BCD\u4EB2"}]}}},computed:{canAddFamilyMeber(){return this.form.familyMember.every(f=>!f.isEdit)}},methods:{addFamilyMember(){this.form.familyMember.push({isEdit:!0,name:"",mobile:"",relationship:""})},removeFamilyMember(f){this.form.familyMember.splice(f,1)}}},I=m("\u7537"),O=m("\u5973"),R={key:1},S={key:1},T={key:1},q=m("\u4FDD\u5B58"),H=m("\u7F16\u8F91"),J=m("\u5220\u9664"),K=m("\u65B0\u589E\u6210\u5458"),L=m("\u63D0\u4EA4");function P(f,n,Q,W,t,y){const x=A,r=a("el-input"),_=a("el-form-item"),s=a("el-col"),k=a("el-date-picker"),h=a("el-radio-button"),g=a("el-radio-group"),v=B,U=a("el-row"),w=F,c=a("el-table-column"),u=a("el-button"),E=a("el-popconfirm"),M=a("el-table"),C=a("el-form"),j=z;return i(),p("div",null,[e(j,null,{action:l(()=>[e(u,{type:"primary"},{default:l(()=>[L]),_:1})]),default:l(()=>[e(x,{title:"\u9AD8\u7EA7\u8868\u5355",content:"\u5F53\u4E00\u6B21\u6027\u63D0\u4EA4\u5927\u91CF\u6570\u636E\u65F6\uFF0C\u53EF\u4F7F\u7528\u9AD8\u7EA7\u8868\u5355\u3002"}),e(C,{"label-position":"top","label-width":"80px",size:"small"},{default:l(()=>[e(w,{title:"\u5458\u5DE5\u4FE1\u606F"},{default:l(()=>[e(U,{gutter:20},{default:l(()=>[e(s,{md:8},{default:l(()=>[e(_,{label:"\u59D3\u540D"},{default:l(()=>[e(r,{modelValue:t.form.name,"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.name=o),placeholder:"\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(_,{label:"\u751F\u65E5"},{default:l(()=>[e(k,{modelValue:t.form.birthday,"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.birthday=o),type:"date",placeholder:"\u8BF7\u9009\u62E9\u4F60\u7684\u51FA\u751F\u65E5\u671F"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(_,{label:"\u6027\u522B"},{default:l(()=>[e(g,{modelValue:t.form.sex,"onUpdate:modelValue":n[2]||(n[2]=o=>t.form.sex=o)},{default:l(()=>[e(h,{label:"1"},{default:l(()=>[I]),_:1}),e(h,{label:"0"},{default:l(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(_,{label:"\u8EAB\u4EFD\u8BC1\u53F7"},{default:l(()=>[e(r,{modelValue:t.form.idcard,"onUpdate:modelValue":n[3]||(n[3]=o=>t.form.idcard=o),placeholder:"\u8BF7\u8F93\u516518\u4F4D\u8EAB\u4EFD\u8BC1\u53F7"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(_,{label:"\u7C4D\u8D2F"},{default:l(()=>[e(v,{modelValue:t.form.area,"onUpdate:modelValue":n[4]||(n[4]=o=>t.form.area=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(_,{label:"\u5BB6\u5EAD\u4F4F\u5740"},{default:l(()=>[e(r,{modelValue:t.form.address,"onUpdate:modelValue":n[5]||(n[5]=o=>t.form.address=o),placeholder:"\u8BF7\u8F93\u5165\u5BB6\u5EAD\u4F4F\u5740"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{title:"\u5BB6\u5EAD\u6210\u5458"},{default:l(()=>[e(M,{data:t.form.familyMember,style:{width:"100%"}},{default:l(()=>[e(c,{label:"\u59D3\u540D"},{default:l(o=>[o.row.isEdit?(i(),b(r,{key:0,modelValue:o.row.name,"onUpdate:modelValue":d=>o.row.name=d,size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",R,V(o.row.name),1))]),_:1}),e(c,{label:"\u624B\u673A\u53F7"},{default:l(o=>[o.row.isEdit?(i(),b(r,{key:0,modelValue:o.row.mobile,"onUpdate:modelValue":d=>o.row.mobile=d,size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",S,V(o.row.mobile),1))]),_:1}),e(c,{label:"\u5173\u7CFB"},{default:l(o=>[o.row.isEdit?(i(),b(r,{key:0,modelValue:o.row.relationship,"onUpdate:modelValue":d=>o.row.relationship=d,size:"mini"},null,8,["modelValue","onUpdate:modelValue"])):(i(),p("span",T,V(o.row.relationship),1))]),_:1}),e(c,{label:"\u64CD\u4F5C",width:"200",align:"center"},{default:l(o=>[o.row.isEdit?(i(),b(u,{key:0,type:"primary",plain:"",size:"mini",onClick:d=>o.row.isEdit=!1},{default:l(()=>[q]),_:2},1032,["onClick"])):(i(),p(D,{key:1},[e(u,{type:"primary",plain:"",size:"mini",onClick:d=>o.row.isEdit=!0},{default:l(()=>[H]),_:2},1032,["onClick"]),e(E,{title:"\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",style:{"margin-left":"10px"},onConfirm:d=>y.removeFamilyMember(o.$index)},{reference:l(()=>[e(u,{type:"danger",plain:"",size:"mini"},{default:l(()=>[J]),_:1})]),_:2},1032,["onConfirm"])],64))]),_:1})]),_:1},8,["data"]),e(u,{disabled:!y.canAddFamilyMeber,icon:"el-icon-plus",size:"small",style:{"margin-top":"20px",width:"100%"},onClick:y.addFamilyMember},{default:l(()=>[K]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})])}var te=N(G,[["render",P],["__scopeId","data-v-643b506b"]]);export{te as default};