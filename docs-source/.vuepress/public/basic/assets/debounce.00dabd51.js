
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/one-step-admin
 * Github https://github.com/hooray/one-step-admin
 */
    
import{bo as t,I as n,M as r}from"./index.1b2a4798.js";var i=/\s/;var e=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(e,""):t}var u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;function v(r){if("number"==typeof r)return r;if(t(r))return NaN;if(n(r)){var i="function"==typeof r.valueOf?r.valueOf():r;r=n(i)?i+"":i}if("string"!=typeof r)return 0===r?r:+r;r=o(r);var e=a.test(r);return e||f.test(r)?c(r.slice(2),e?2:8):u.test(r)?NaN:+r}var s=function(){return r.Date.now()},l=Math.max,d=Math.min;function m(t,r,i){var e,o,u,a,f,c,m=0,p=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(n){var r=e,i=o;return e=o=void 0,m=n,a=t.apply(i,r)}function y(t){return m=t,f=setTimeout(b,r),p?T(t):a}function g(t){var n=t-c;return void 0===c||n>=r||n<0||h&&t-m>=u}function b(){var t=s();if(g(t))return N(t);f=setTimeout(b,function(t){var n=r-(t-c);return h?d(n,u-(t-m)):n}(t))}function N(t){return f=void 0,x&&e?T(t):(e=o=void 0,a)}function w(){var t=s(),n=g(t);if(e=arguments,o=this,c=t,n){if(void 0===f)return y(c);if(h)return clearTimeout(f),f=setTimeout(b,r),T(c)}return void 0===f&&(f=setTimeout(b,r)),a}return r=v(r)||0,n(i)&&(p=!!i.leading,u=(h="maxWait"in i)?l(v(i.maxWait)||0,r):u,x="trailing"in i?!!i.trailing:x),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,e=c=o=f=void 0},w.flush=function(){return void 0===f?a:N(s())},w}export{m as d};