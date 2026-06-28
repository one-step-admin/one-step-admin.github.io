---
url: /guide/skills/oc-store-generator.md
---
# oc-store-generator

## 适用场景

* 多个页面需要共享数据、全局状态管理
* 数据需要持久化（刷新后还在）
* 登录状态 / 用户信息需要缓存
* 购物车、通知、权限等全局数据
* 需要在组件外部（如路由守卫）访问状态

## 使用方式

技能会先收集信息再生成代码，建议一次说清楚：

* 目标应用，例如 `example`
* Store 用途
* State 字段名、类型与初始值
* 是否需要持久化，以及哪些字段持久化
* 是否需要异步 action（调用 API）或 computed

示例：

```text
在 example 应用里生成一个购物车 store。
字段有 items、couponCode、checkedIds。
items 和 couponCode 需要持久化。
还需要拉取购物车的异步 action，以及选中数量的 computed。
```

## 结果

通常会新增：

* `apps/<app>/src/store/modules/<name>.ts`（业务 store，推荐）

某些场景下也可能新增到：

* `apps/<app>/src/store/modules/app/<name>.ts`（框架级 store）

文件中通常会包含：

* state
* computed
* action
* `persist: { pick: [...] }` 持久化配置

> 全部使用 Composition API 风格（`defineStore` + setup 函数），通过 `unplugin-auto-import` 自动导入，组件中无需手动 import。
