import{_ as s,o as n,c as a,V as l}from"./chunks/framework.9d6c2075.js";const d=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure.md","filePath":"guide/configure.md"}'),p={name:"guide/configure.md"},e=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><p>默认提供三套环境配置，分别为：</p><h3 id="开发环境-env-development" tabindex="-1">开发环境 <code>.env.development</code> <a class="header-anchor" href="#开发环境-env-development" aria-label="Permalink to &quot;开发环境 \`.env.development\`&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 页面标题</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE = One-step-admin</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#A6ACCD;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否开启代理</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_OPEN_PROXY = false</span></span></code></pre></div><h3 id="测试环境-env-test" tabindex="-1">测试环境 <code>.env.test</code> <a class="header-anchor" href="#测试环境-env-test" aria-label="Permalink to &quot;测试环境 \`.env.test\`&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NODE_ENV = production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 页面标题</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE = One-step-admin</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#A6ACCD;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre></div><h3 id="生产环境-env-production" tabindex="-1">生产环境 <code>.env.production</code> <a class="header-anchor" href="#生产环境-env-production" aria-label="Permalink to &quot;生产环境 \`.env.production\`&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NODE_ENV = production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 页面标题</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE = One-step-admin</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#A6ACCD;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre></div><p>其中 <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。</p><p>开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p><h2 id="应用配置-框架配置" tabindex="-1">应用配置（框架配置） <a class="header-anchor" href="#应用配置-框架配置" aria-label="Permalink to &quot;应用配置（框架配置）&quot;">​</a></h2><p>开发者请在 <code>/src/settings.ts</code> 文件中设置自定义配置，而 <code>/src/settings.default.ts</code> 为框架的默认配置，请勿在该文件内修改。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 这是基础版演示源码里的自定义配置示例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enablePermission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableAppSetting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">menu</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableSubMenuCollapseButton</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableHotkeys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toolbar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableFullscreen</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableColorScheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>关于配置的类型定义，可以在 <code>/src/globals.d.ts</code> 文件中查阅。</p>`,15),o=[e];function c(t,r,A,C,i,D){return n(),a("div",null,o)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
