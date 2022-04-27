
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.9c1fa942.js";import{_ as n,bW as t,bX as s,A as o,c as l,e as a,w as i,n as c,f as u,y as d}from"./index.05e4ed9f.js";import{E as f}from"./el-button.a01942a9.js";/* empty css                */import"./index.dd2c42e8.js";import"./index.48c8fc0e.js";import"./index.aa8c6f3e.js";const r={methods:{debounce:t((function(){this.message()}),1e3),debounce2:t((function(){this.message()}),1e3,!1),throttle:s((function(){this.message()}),1e3),message(){o.success({message:"恭喜你，这是一条成功消息"})}}},m=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),p=d("连续点击我，只会执行最后一次点击事件，立即执行"),b=d("连续点击我，只会执行最后一次点击事件，延后执行"),h=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),j=d("连续点击我，每一秒只会执行一次点击事件");var _=n(r,[["render",function(n,t,s,o,d,r){const _=f,k=e;return c(),l("div",null,[a(k,{title:"防抖：debounce"},{default:i((()=>[m,u("p",null,[a(_,{onClick:r.debounce},{default:i((()=>[p])),_:1},8,["onClick"])]),u("p",null,[a(_,{onClick:r.debounce2},{default:i((()=>[b])),_:1},8,["onClick"])])])),_:1}),a(k,{title:"节流：throttle"},{default:i((()=>[h,u("p",null,[a(_,{onClick:r.throttle},{default:i((()=>[j])),_:1},8,["onClick"])])])),_:1})])}]]);export{_ as default};
