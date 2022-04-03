import{_ as r,r as o,o as l,c as i,b as s,w as t,a as e,F as _,e as c,d as a}from"./app.d68ddb8f.js";const u={},h=c('<h1 id="\u6784\u5EFA\u4E0E\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u4E0E\u9884\u89C8" aria-hidden="true">#</a> \u6784\u5EFA\u4E0E\u9884\u89C8</h1><h2 id="\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a> \u6784\u5EFA</h2><p>\u9879\u76EE\u5F00\u53D1\u5B8C\u6210\u4E4B\u540E\uFF0C\u53EF\u4EE5\u6267\u884C <code>pnpm build</code> \u547D\u4EE4\u8FDB\u884C\u6784\u5EFA\uFF0C\u6784\u5EFA\u6253\u5305\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 dist \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5C31\u662F\u6784\u5EFA\u6253\u5305\u597D\u7684\u6587\u4EF6\u3002</p><p>\u5982\u679C\u662F\u9700\u8981\u6784\u5EFA\u6D4B\u8BD5\u73AF\u5883\uFF0C\u5219\u6267\u884C <code>pnpm build:test</code> \u547D\u4EE4\uFF0C\u5BF9\u5E94\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 dist-test \u6587\u4EF6\u5939\u3002</p><h2 id="\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8" aria-hidden="true">#</a> \u9884\u89C8</h2><p>\u751F\u6210\u597D\u7684 dist \u6587\u4EF6\u5939\u4E00\u822C\u9700\u8981\u90E8\u7F72\u81F3\u670D\u52A1\u5668\u624D\u7B97\u90E8\u7F72\u53D1\u5E03\u6210\u529F\uFF0C\u4F46\u4E3A\u4E86\u4FDD\u8BC1\u6784\u5EFA\u51FA\u6765\u7684\u6587\u4EF6\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u5F00\u53D1\u8005\u901A\u5E38\u5E0C\u671B\u80FD\u5728\u672C\u5730\u5148\u9884\u89C8\u4E00\u4E0B\uFF0C\u53EF\u6267\u884C <code>pnpm serve</code> \u6216 <code>pnpm serve:test</code> \u547D\u4EE4\u9884\u89C8\u4E0D\u540C\u73AF\u5883\u6784\u5EFA\u51FA\u7684\u6587\u4EF6\u5939\u3002</p><h2 id="\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29" aria-hidden="true">#</a> \u538B\u7F29</h2><p>\u5728\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u91CC\u8BBE\u7F6E <code>VITE_BUILD_COMPRESS</code> \u5373\u53EF\u5728\u6784\u5EFA\u65F6\u751F\u6210 <code>.gz</code> \u6216 <code>.br</code> \u6587\u4EF6\u3002</p>',8),g=e("div",{class:"language-dot ext-dot"},[e("pre",{class:"language-dot"},[e("code",null,[e("span",{class:"token node"},"VITE_BUILD_COMPRESS"),a(),e("span",{class:"token operator"},"="),a(),e("span",{class:"token attr-value"},"gzip"),a(`
`)])])],-1),m=e("div",{class:"language-dot ext-dot"},[e("pre",{class:"language-dot"},[e("code",null,[e("span",{class:"token node"},"VITE_BUILD_COMPRESS"),a(),e("span",{class:"token operator"},"="),a(),e("span",{class:"token attr-value"},"brotli"),a(`
`)])])],-1),k=e("div",{class:"language-dot ext-dot"},[e("pre",{class:"language-dot"},[e("code",null,[e("span",{class:"token node"},"VITE_BUILD_COMPRESS"),a(),e("span",{class:"token operator"},"="),a(),e("span",{class:"token attr-value"},"gzip"),e("span",{class:"token punctuation"},","),e("span",{class:"token node"},"brotli"),a(`
`)])])],-1),v=c(`<p>brotli \u662F\u6BD4 gzip \u538B\u7F29\u7387\u66F4\u9AD8\u7684\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u4E0E gzip \u5171\u5B58\u4E0D\u4F1A\u51B2\u7A81\u3002</p><p>\u4E24\u8005\u5747\u9700\u8981 nginx \u5B89\u88C5\u6307\u5B9A\u6A21\u5757\u5E76\u5F00\u542F\u540E\u624D\u4F1A\u751F\u6548\u3002</p><h2 id="\u5176\u5B83\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u8BBE\u7F6E" aria-hidden="true">#</a> \u5176\u5B83\u8BBE\u7F6E</h2><p>\u5728\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u91CC\u9664\u4E86\u53EF\u4EE5\u8BBE\u7F6E\u538B\u7F29\u9009\u9879\uFF0C\u8FD8\u53EF\u8BBE\u7F6E\uFF1A</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># \u662F\u5426\u5728\u6253\u5305\u65F6\u751F\u6210 sourcemap</span>
<span class="token attr-name">VITE_BUILD_SOURCEMAP</span> <span class="token operator">=</span> <span class="token attr-value">true</span>
<span class="token comment"># \u662F\u5426\u5728\u6253\u5305\u65F6\u5220\u9664 console \u4EE3\u7801</span>
<span class="token attr-name">VITE_BUILD_DROP_CONSOLE</span> <span class="token operator">=</span> <span class="token attr-value">true</span>
</code></pre></div>`,5),x={id:"\u751F\u6210-pwa-\u5E94\u7528",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#\u751F\u6210-pwa-\u5E94\u7528","aria-hidden":"true"},"#",-1),f=a(" \u751F\u6210 PWA \u5E94\u7528 "),I=c(`<p>\u5728\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u91CC\u5F00\u542F PWA \u652F\u6301</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># \u662F\u5426\u5728\u6253\u5305\u65F6\u5019\u751F\u6210PWA</span>
<span class="token attr-name">VITE_BUILD_PWA</span> <span class="token operator">=</span> <span class="token attr-value">true</span>
</code></pre></div><p>\u5728 <code>/src/main.js</code> \u5F00\u542F pwa \u76F8\u5173\u6587\u4EF6\u7684\u5F15\u5165</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// PWA</span>
<span class="token keyword">import</span> <span class="token string">&#39;./pwa&#39;</span>
</code></pre></div><p>\u6700\u540E\u5728 <code>./vite/plugins/pwa.js</code> \u6587\u4EF6\u91CC\u4FEE\u6539 manifest \u4FE1\u606F\uFF0C\u5BF9\u5E94\u7684\u56FE\u7247\u76EE\u5F55\u4E3A <code>./public/pwa_icons/</code> \u3002</p>`,5);function E(B,C){const n=o("CodeGroupItem"),d=o("CodeGroup"),p=o("Badge");return l(),i(_,null,[h,s(d,null,{default:t(()=>[s(n,{title:"\u5F00\u542F gzip"},{default:t(()=>[g]),_:1}),s(n,{title:"\u5F00\u542F brotli"},{default:t(()=>[m]),_:1}),s(n,{title:"\u540C\u65F6\u5F00\u542F gzip \u548C brotli"},{default:t(()=>[k]),_:1})]),_:1}),v,e("h3",x,[b,f,s(p,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),I],64)}var S=r(u,[["render",E],["__file","build.html.vue"]]);export{S as default};
