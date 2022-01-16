
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as B}from"./index.37ff5045.js";import{e as N,f as P,u as T,a as U}from"./index.c4b3dc7d.js";import{o as r,C as a,a0 as f,f as s,e,r as d,ab as x,u as b,D as l,M as E,F as v,P as o,R as F}from"./vendor.216b2a72.js";import"./plugin-vue_export-helper.21dcd24c.js";const I={props:{value:{type:Array,default:()=>[]}},setup(m){const t=m;function c(){return N(t.value)}return(n,g)=>(r(),a("div",null,[c()?f(n.$slots,"default",{key:0}):f(n.$slots,"no-auth",{key:1})]))}},M={props:{value:{type:[String,Array],default:""}},setup(m){const t=m;function c(){return P(t.value)}return(n,g)=>(r(),a("div",null,[c()?f(n.$slots,"default",{key:0}):f(n.$slots,"no-auth",{key:1})]))}},R={key:0},q={key:1},z=l("h3",null,"\u5207\u6362\u5E10\u53F7",-1),G=l("h3",null,"\u5E10\u53F7\u6743\u9650",-1),H=l("h3",null,"\u9274\u6743\u7EC4\u4EF6\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),J=o("\u4F60\u6709 permission.browse \u6743\u9650"),K=o("\u4F60\u6CA1\u6709 permission.browse \u6743\u9650"),L=o("\u4F60\u6709 permission.create \u6743\u9650"),O=o("\u4F60\u6CA1\u6709 permission.create \u6743\u9650"),Q=o("\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650"),W=o("\u4F60\u6CA1\u6709 permission.browse \u6216 permission.create \u6743\u9650"),X=o("\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650"),Y=o("\u4F60\u6CA1\u6709 permission.browse \u548C permission.create \u6743\u9650"),Z=l("h3",null,"\u9274\u6743\u6307\u4EE4\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),ee=o(" \u5982\u679C\u4F60\u6709 permission.browse \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),se=[ee],oe=o(" \u5982\u679C\u4F60\u6709 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),te=[oe],ne=o(" \u5982\u679C\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ie=[ne],re=o(" \u5982\u679C\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ae=[re],le=l("h3",null,"\u9274\u6743\u51FD\u6570\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),ue=o("\u6821\u9A8C permission.browse \u6743\u9650"),_e=o("\u6821\u9A8C permission.create \u6743\u9650"),ce=o("\u6821\u9A8C permission.browse \u6216 permission.create \u6743\u9650"),pe=o("\u6821\u9A8C permission.browse \u548C permission.create \u6743\u9650"),be={setup(m){const{proxy:t}=F(),c=T(),n=U();function g(_){t.$loading({lock:!0,text:"\u5E10\u53F7\u5207\u6362\u4E2D",background:"rgba(0, 0, 0, 0.7)"}),n.login({account:_,password:""}).then(()=>{setTimeout(()=>{location.reload()},1e3)})}function w(_){t.$auth(_)?t.$message.success("\u6821\u9A8C\u901A\u8FC7"):t.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")}function S(_){t.$authAll(_)?t.$message.success("\u6821\u9A8C\u901A\u8FC7"):t.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")}return(_,i)=>{const $=d("el-radio-button"),V=d("el-radio-group"),u=d("el-tag"),y=M,j=I,h=d("el-button"),C=d("el-button-group"),A=B,k=x("auth"),D=x("auth-all");return r(),a("div",null,[s(A,null,{default:e(()=>[b(c).app.enablePermission?(r(),a("div",q,[z,s(V,{modelValue:b(n).account,"onUpdate:modelValue":i[0]||(i[0]=p=>b(n).account=p),onChange:g},{default:e(()=>[s($,{label:"admin"}),s($,{label:"test"})]),_:1},8,["modelValue"]),G,l("div",null,E(b(n).permissions),1),H,l("div",null,[s(y,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[K]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[J]),_:1})]),_:1}),s(y,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[O]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[L]),_:1})]),_:1}),s(y,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[W]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[Q]),_:1})]),_:1},8,["value"]),s(j,{value:["permission.browse","permission.create"]},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[Y]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[X]),_:1})]),_:1},8,["value"])]),Z,l("div",null,[v((r(),a("div",null,se)),[[k,"permission.browse"]]),v((r(),a("div",null,te)),[[k,"permission.create"]]),v((r(),a("div",null,ie)),[[k,["permission.browse","permission.create"]]]),v((r(),a("div",null,ae)),[[D,["permission.browse","permission.create"]]])]),le,l("div",null,[s(C,{style:{display:"block","margin-bottom":"10px"}},{default:e(()=>[s(h,{onClick:i[1]||(i[1]=p=>w("permission.browse"))},{default:e(()=>[ue]),_:1}),s(h,{onClick:i[2]||(i[2]=p=>w("permission.create"))},{default:e(()=>[_e]),_:1})]),_:1}),s(C,null,{default:e(()=>[s(h,{onClick:i[3]||(i[3]=p=>w(["permission.browse","permission.create"]))},{default:e(()=>[ce]),_:1}),s(h,{onClick:i[4]||(i[4]=p=>S(["permission.browse","permission.create"]))},{default:e(()=>[pe]),_:1})]),_:1})])])):(r(),a("div",R,"\u8BF7\u5230 seeting.js \u91CC\u6253\u5F00\u6743\u9650\u529F\u80FD\uFF0C\u518D\u8FDB\u5165\u8BE5\u9875\u9762\u67E5\u770B\u6F14\u793A"))]),_:1})])}}};export{be as default};
