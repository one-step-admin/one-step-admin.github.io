
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{A as t,d as e,B as a,C as s,D as r,e as n,F as i}from"./index.1b2a4798.js";const u=Symbol("rowContextKey"),l=i(e({name:"ElRow",props:t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"],default:"top"}}),setup(t,{slots:e}){const i=a("row"),l=s((()=>t.gutter));r(u,{gutter:l});const g=s((()=>{const e={marginLeft:"",marginRight:""};return t.gutter&&(e.marginLeft=`-${t.gutter/2}px`,e.marginRight=e.marginLeft),e}));return()=>n(t.tag,{class:[i.b(),i.is(`justify-${t.justify}`,"start"!==t.justify),i.is(`align-${t.align}`,"top"!==t.align)],style:g.value},{default:()=>{var t;return[null==(t=e.default)?void 0:t.call(e)]}})}}));export{l as E,u as r};
