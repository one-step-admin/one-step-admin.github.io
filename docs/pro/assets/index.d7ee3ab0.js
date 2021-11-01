
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as B}from"./index.d603319d.js";import{_ as N}from"./index.b92ebba1.js";import{_ as C}from"./index.a4d9ae54.js";import{_ as A}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,G as E,l as e,j as n,o as F,H as x,R as s}from"./vendor.e2abc40b.js";const G={data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}}},H=x("p",null,"FixedActionBar",-1),R=x("p",{style:{"margin-bottom":"0"}},"\u907F\u514D\u56E0\u9875\u9762\u8FC7\u957F\u5BFC\u81F4\u64CD\u4F5C\u6309\u94AE\u9700\u8981\u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8\u624D\u80FD\u64CD\u4F5C\uFF0C\u4F8B\u5982\u8868\u5355\u9875",-1),T=s("-"),q=s("-"),z=s("-"),D=s("\u7ACB\u5373\u521B\u5EFA"),I=s("\u53D6\u6D88");function J(K,o,L,M,l,O){const v=C,r=d("el-input"),m=d("el-form-item"),p=d("el-option"),_=d("el-select"),i=d("el-date-picker"),a=d("el-col"),V=d("el-time-picker"),b=d("el-switch"),u=d("el-checkbox"),y=d("el-checkbox-group"),f=d("el-radio"),g=d("el-radio-group"),c=d("el-form"),w=d("el-row"),k=N,U=d("el-button"),j=B;return F(),E("div",null,[e(j,null,{action:n(()=>[e(U,{type:"primary"},{default:n(()=>[D]),_:1}),e(U,null,{default:n(()=>[I]),_:1})]),default:n(()=>[e(v,{title:"\u56FA\u5B9A\u5E95\u90E8\u64CD\u4F5C\u680F",content:"\u907F\u514D\u56E0\u9875\u9762\u8FC7\u957F\u5BFC\u81F4\u64CD\u4F5C\u6309\u94AE\u9700\u8981\u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8\u624D\u80FD\u64CD\u4F5C\uFF0C\u4F8B\u5982\u8868\u5355\u9875"},{content:n(()=>[H,R]),_:1}),e(k,null,{default:n(()=>[e(w,null,{default:n(()=>[e(a,{md:24,lg:12},{default:n(()=>[e(c,{ref:"form",model:l.form,"label-width":"120px"},{default:n(()=>[e(m,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:n(()=>[e(r,{modelValue:l.form.name,"onUpdate:modelValue":o[0]||(o[0]=t=>l.form.name=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:n(()=>[e(_,{modelValue:l.form.region,"onUpdate:modelValue":o[1]||(o[1]=t=>l.form.region=t),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:n(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:n(()=>[e(a,{span:11},{default:n(()=>[e(i,{modelValue:l.form.date1,"onUpdate:modelValue":o[2]||(o[2]=t=>l.form.date1=t),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(a,{class:"line",span:2},{default:n(()=>[T]),_:1}),e(a,{span:11},{default:n(()=>[e(V,{modelValue:l.form.date2,"onUpdate:modelValue":o[3]||(o[3]=t=>l.form.date2=t),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{label:"\u5373\u65F6\u914D\u9001"},{default:n(()=>[e(b,{modelValue:l.form.delivery,"onUpdate:modelValue":o[4]||(o[4]=t=>l.form.delivery=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:n(()=>[e(y,{modelValue:l.form.type,"onUpdate:modelValue":o[5]||(o[5]=t=>l.form.type=t)},{default:n(()=>[e(u,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(u,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(u,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(u,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:n(()=>[e(g,{modelValue:l.form.resource,"onUpdate:modelValue":o[6]||(o[6]=t=>l.form.resource=t)},{default:n(()=>[e(f,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(f,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:n(()=>[e(r,{modelValue:l.form.desc,"onUpdate:modelValue":o[7]||(o[7]=t=>l.form.desc=t),type:"textarea"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:n(()=>[e(r,{modelValue:l.form.name,"onUpdate:modelValue":o[8]||(o[8]=t=>l.form.name=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:n(()=>[e(_,{modelValue:l.form.region,"onUpdate:modelValue":o[9]||(o[9]=t=>l.form.region=t),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:n(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:n(()=>[e(a,{span:11},{default:n(()=>[e(i,{modelValue:l.form.date1,"onUpdate:modelValue":o[10]||(o[10]=t=>l.form.date1=t),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(a,{class:"line",span:2},{default:n(()=>[q]),_:1}),e(a,{span:11},{default:n(()=>[e(V,{modelValue:l.form.date2,"onUpdate:modelValue":o[11]||(o[11]=t=>l.form.date2=t),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{label:"\u5373\u65F6\u914D\u9001"},{default:n(()=>[e(b,{modelValue:l.form.delivery,"onUpdate:modelValue":o[12]||(o[12]=t=>l.form.delivery=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:n(()=>[e(y,{modelValue:l.form.type,"onUpdate:modelValue":o[13]||(o[13]=t=>l.form.type=t)},{default:n(()=>[e(u,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(u,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(u,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(u,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:n(()=>[e(g,{modelValue:l.form.resource,"onUpdate:modelValue":o[14]||(o[14]=t=>l.form.resource=t)},{default:n(()=>[e(f,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(f,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:n(()=>[e(r,{modelValue:l.form.desc,"onUpdate:modelValue":o[15]||(o[15]=t=>l.form.desc=t),type:"textarea"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:n(()=>[e(r,{modelValue:l.form.name,"onUpdate:modelValue":o[16]||(o[16]=t=>l.form.name=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:n(()=>[e(_,{modelValue:l.form.region,"onUpdate:modelValue":o[17]||(o[17]=t=>l.form.region=t),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:n(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:n(()=>[e(a,{span:11},{default:n(()=>[e(i,{modelValue:l.form.date1,"onUpdate:modelValue":o[18]||(o[18]=t=>l.form.date1=t),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(a,{class:"line",span:2},{default:n(()=>[z]),_:1}),e(a,{span:11},{default:n(()=>[e(V,{modelValue:l.form.date2,"onUpdate:modelValue":o[19]||(o[19]=t=>l.form.date2=t),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{label:"\u5373\u65F6\u914D\u9001"},{default:n(()=>[e(b,{modelValue:l.form.delivery,"onUpdate:modelValue":o[20]||(o[20]=t=>l.form.delivery=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:n(()=>[e(y,{modelValue:l.form.type,"onUpdate:modelValue":o[21]||(o[21]=t=>l.form.type=t)},{default:n(()=>[e(u,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(u,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(u,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(u,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:n(()=>[e(g,{modelValue:l.form.resource,"onUpdate:modelValue":o[22]||(o[22]=t=>l.form.resource=t)},{default:n(()=>[e(f,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(f,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:n(()=>[e(r,{modelValue:l.form.desc,"onUpdate:modelValue":o[23]||(o[23]=t=>l.form.desc=t),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})]),_:1})])}var Y=A(G,[["render",J]]);export{Y as default};
