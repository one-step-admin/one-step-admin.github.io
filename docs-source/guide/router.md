# 路由

由于框架采用了全新的交互方式，使得路由在本框架中并非核心功能。通过打开 `/src/router/index.js` 可以看到，框架一共定义了两个路由地址，一个是登录地址，另一个是登录成功后的地址。

## 免登录页面 <Badge type="tip" text="专业版" vertical="top" />

基于设置的路由规则，新增的任何路由，都必须登录后才能访问。如果希望增加免登录的页面，也就是脱离框架本身，相对独立的页面，你可以按照下面的方式处理。

首先在 `/src/router/index.js` 里 `routes` 配置免登录页面的路由，然后在 `noLoginWhitelist` 里增加一句路由完整地址。例如下面的例子，就增加了一个 `/no/login/example` 的免登录页面地址。

```js:no-line-numbers {4-11,17}
// 固定路由
const routes = [
	...,
    {
        path: '/no/login/example',
        name: 'noLoginExample',
        component: () => import('@/views/no-login-example.vue'),
        meta: {
            title: '免登录页面'
        }
    }
]

// 免登录白名单
const noLoginWhitelist = [
    ...,
	'/no/login/example'
]
```