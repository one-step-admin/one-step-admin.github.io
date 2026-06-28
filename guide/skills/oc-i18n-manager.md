---
url: /guide/skills/oc-i18n-manager.md
---
# oc-i18n-manager

## 适用场景

* 给菜单配置、窗口标题、窗口内业务页面、框架组件文案添加或维护翻译
* 工具栏语言切换、新增语言包
* 检查缺失翻译
* 维护应用 `src/locales`、`src/menu`、api fake menu 数据、`defineWindow` 标题、`useI18n`、`i18n.global.t`、SFC 内联 `<i18n>` 块

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 要添加 / 维护哪些文案，或要做哪类操作（新增翻译、检查缺失、加语言、开语言切换器）

示例：

```text
在 example 应用里给「报表」菜单和窗口标题加上中英繁三语翻译，
并在报表页面内加上「导出」按钮的内联文案。
```

## 文案归属

技能会按使用范围决定文案位置：

* 菜单项、窗口标题、页面头部标题 → `locales/lang/menu/*.json`
* 某个窗口页面内部专用文案 → 该 `.vue` 的 `<i18n lang="yaml">`
* 多个业务页面共享文案 → 对应业务模块的全局 JSON
* 公共框架组件、工具栏、舞台、账号、登录等文案 → `packages/locales/lang/app/**/*.json`
* 单应用覆盖公共 `app.*` 文案 → `apps/<app>/src/locales/lang/app/**/*.json`

## 结果

根据需求通常会修改：

* `apps/<app>/src/locales/lang/menu/*.json`
* `packages/locales/lang/app/**/*.json`
* `apps/<app>/src/locales/lang/app/**/*.json`（仅单应用覆盖或补充）
* `apps/<app>/src/views/windows/**/*.vue`（`<i18n>` 块或 `defineWindow` 标题）
* `apps/<app>/src/menu/**/*.ts`
* 启用语言切换器时会修改 `apps/<app>/src/settings.ts`（遵循 `oc-framework-settings` 规则）

> 关键约束：修改全局 JSON 时所有语言文件必须同步，不要只更新 `zh-cn`；全局新增语言必须同步 `packages/locales/src/index.ts` 的 `defaultLocalesInfo`，单应用新增语言必须扩展应用侧 `localesInfo`。
