---
url: /guide/skills/oc-slot-creator.md
---
# oc-slot-creator

## 适用场景

* 需要在应用布局、顶部区域、Logo 附近、菜单后、账号按钮前后、页面底部或悬浮位置插入自定义内容
* 修改应用 `src/slots`
* 创建 `LayoutTop`、`HeaderStart`、`HeaderAfterLogo`、`HeaderAfterMenu`、`HeaderBeforeAccount`、`HeaderEnd`、`LayoutBottom`、`FreePosition` 等插槽

## 当前支持的插槽

当前应用模板实际支持 8 个插槽位置：

| useSlots 名称 | 目录名 |
| --- | --- |
| `layout-top` | `LayoutTop` |
| `layout-bottom` | `LayoutBottom` |
| `header-start` | `HeaderStart` |
| `header-after-logo` | `HeaderAfterLogo` |
| `header-after-menu` | `HeaderAfterMenu` |
| `header-before-account` | `HeaderBeforeAccount` |
| `header-end` | `HeaderEnd` |
| `free-position` | `FreePosition` |

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 内容要放在哪个位置
* 插槽内容是什么

示例：

```text
在 example 应用里加一个顶部全局公告横幅。
另外在账号按钮前加一个通知图标按钮。
```

## 结果

通常会新增或修改：

* `apps/<app>/src/slots/{目录名}/index.vue`

约定：

* 框架通过 `apps/<app>/src/slots/index.ts` 自动发现插槽，无需注册或导入
* 目录名必须是 PascalCase，与 `pascalCase(useSlots 名称)` 完全一致
* 入口文件名必须是 `index.vue`，使用 `<script setup lang="ts">`
* 不会直接修改 `apps/<app>/src/layout/index.vue`，除非明确要求新增框架级插槽位置

> `FreePosition` 作为布局根节点的直接子组件渲染，没有外层容器，需要自己设置 `fixed` / `absolute` 定位和 `z-index`。
