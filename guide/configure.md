# 配置

## 环境配置

默认提供三套环境配置，分别为：

### 开发环境 `.env.development`

```
# 页面标题
VITE_APP_TITLE = One-step-admin
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否开启代理
VITE_OPEN_PROXY = false
```

### 测试环境 `.env.test`

```
NODE_ENV = production

# 页面标题
VITE_APP_TITLE = One-step-admin
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时启用 Mock
VITE_BUILD_MOCK = false
# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
```

### 生产环境 `.env.production`

```
NODE_ENV = production

# 页面标题
VITE_APP_TITLE = One-step-admin
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时启用 Mock
VITE_BUILD_MOCK = true
# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = false
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
```

其中 `VITE_APP_TITLE` `VITE_APP_API_BASEURL` `VITE_APP_DEBUG_TOOL` 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

## 应用配置（框架配置）

开发者请在 `/src/settings.ts` 文件中设置自定义配置，而 `/src/settings.default.ts` 为框架的默认配置，请勿在该文件内修改。

```ts
// 这是基础版演示源码里的自定义配置示例
const globalSettings: Settings.all = {
  app: {
    enablePermission: true,
    enableAppSetting: true,
  },
  menu: {
    enableSubMenuCollapseButton: true,
    enableHotkeys: true,
  },
  toolbar: {
    enableFullscreen: true,
    enableColorScheme: true,
  },
}
```

关于配置的类型定义，可以在 `/src/globals.d.ts` 文件中查阅。