import{_ as t,c as n,j as i,a,G as l,a4 as p,B as r,o}from"./chunks/framework.DqIFRz44.js";const B=JSON.parse('{"title":"错误日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/error-log.md","filePath":"guide/error-log.md"}'),h={name:"guide/error-log.md"},d={id:"错误日志",tabindex:"-1"};function k(g,s,c,E,y,u){const e=r("Badge");return o(),n("div",null,[i("h1",d,[s[0]||(s[0]=a("错误日志 ")),l(e,{type:"pro",text:"专业版"}),s[1]||(s[1]=a()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#错误日志","aria-label":'Permalink to "错误日志 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[3]||(s[3]=p(`<p>首先需要在应用配置里开启错误日志。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableErrorLog: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后需要到 <code>/src/utils/error.log.ts</code> 文件里编写业务代码，框架为方便演示，将错误日志记录在 <code>sessionStorage</code> 里。</p><p>开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。</p><p>由于开启错误日志监控后，Vue 相关的错误都不会在控制台里显示，所以在开发环境下即使开启错误日志也不会被启用，如果需要在开发环境下测试，可在 <code>/src/util/error.log.ts</code> 里修改开启的条件判断。</p>`,5))])}const F=t(h,[["render",k]]);export{B as __pageData,F as default};