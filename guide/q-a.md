# 常见问题

## 安装依赖时有警告

<ZoomImg src="/qa1.png" />

这是一个可以无视的警告，因为依赖已经安装成功了。

如果对这个问题感兴趣，可以浏览下这个 [issue](https://github.com/pnpm/pnpm/issues/4183) ，里面有给出一个忽略警告的方案，就是在 `package.json` 中添加：

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "postcss",
        "rollup"
      ]
    }
  }
}
```

这样你下次再安装依赖的时候，就不会出现该警告了。

## 为什么本地开发环境首次载入很慢

主要是 Vite 的原因，具体可以阅读这篇文章了解《[为什么有人说 vite 快，有人却说 vite 慢？](https://juejin.cn/post/7129041114174062628)》。

## 替换真实的后端接口后，登录成功依旧在登录页

你需要对几处代码分别检查是否都有根据实际情况进行修改：

1. 在 `.env.development` 里修改真实接口请求地址
2. 因为真实接口返回的数据格式与框架演示提供的返回格式一定存在差异，所以需要在 `/src/api/index.ts` 里修改响应拦截器里的代码，按照实际情况进行调整。例如什么状态下是请求成功，什么状态下是请求异常，并进行错误提示。
3. 在 `/src/store/modules/user.ts` 里修改 `actions` 下的 `login` 函数，确保接口可以请求成功，并将返回的用户信息存储到 store 中进行全局管理。最后还需要修改 `getters` 下的 `isLogin` 函数，这部分需要根据实际存储的用户信息去判断是否登录。例如框架演示登录是会返回 token 和失效时间，则验证是否登录也是通过这两个信息进行逻辑校验。

## 使用 `<script setup>` 语法糖如何设置组件 name

`<script setup>` 可以和普通的 `<script>` 一起使用，所以可以这样：

```vue
<script>
export default {
  name: 'componentName',
}
</script>

<script setup>
...
</script>
```

另外框架引用了 [vite-plugin-vue-setup-extend](https://github.com/anncwb/vite-plugin-vue-setup-extend) 依赖，所以可以更方便的设置。

```vue
<script setup name="componentName">
...
</script>
```

## 项目 URL 里的 # 号能不能去掉

这是因为路由默认使用的是 Hash 模式，你可以在 `/src/router/index.ts` 修改为 HTML5 模式，但需要注意，开启 HTML5 模式，服务器也需要做相应的配置调整，详细可阅读《[Vue-router 不同的历史模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html)》。