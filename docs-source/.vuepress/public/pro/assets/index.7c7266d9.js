
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{_ as e}from"./index.7ae327c0.js";import{_ as t,bZ as n,b_ as s,A as o,c as a,g as l,w as i,o as c,a as u,y as d}from"./index.89c4a536.js";import{E as r}from"./el-button.ee77ba8f.js";/* empty css                */import"./index.0dfe2aba.js";import"./index.a744c982.js";const f={methods:{debounce:n((function(){this.message()}),1e3),debounce2:n((function(){this.message()}),1e3,!1),throttle:s((function(){this.message()}),1e3),message(){o.success({message:"恭喜你，这是一条成功消息"})}}},m=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),b=d("连续点击我，只会执行最后一次点击事件，立即执行"),p=d("连续点击我，只会执行最后一次点击事件，延后执行"),_=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),h=d("连续点击我，每一秒只会执行一次点击事件");var g=t(f,[["render",function(t,n,s,o,d,f){const g=r,j=e;return c(),a("div",null,[l(j,{title:"防抖：debounce"},{default:i((()=>[m,u("p",null,[l(g,{onClick:f.debounce},{default:i((()=>[b])),_:1},8,["onClick"])]),u("p",null,[l(g,{onClick:f.debounce2},{default:i((()=>[p])),_:1},8,["onClick"])])])),_:1}),l(j,{title:"节流：throttle"},{default:i((()=>[_,u("p",null,[l(g,{onClick:f.throttle},{default:i((()=>[h])),_:1},8,["onClick"])])])),_:1})])}]]);export{g as default};
