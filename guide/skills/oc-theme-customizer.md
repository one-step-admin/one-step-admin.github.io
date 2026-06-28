---
url: /guide/skills/oc-theme-customizer.md
---
# oc-theme-customizer

## 适用场景

* 需要一套新的品牌主题
* 需要新增或调整基础色
* 想做科技感、莫兰迪、北欧极简、赛博朋克、吉卜力等风格主题
* 想把设计稿、品牌色或 tweakcn 配色转换成框架主题
* 想让亮色和暗色模式使用不同的基础色或主题色

## 使用方式

直接说明以下信息即可：

* 想要的风格
* 品牌主色或参考色
* 是否需要调整基础色基调
* 是否需要在某个应用中启用
* 目标应用，例如 `example`

示例：

```text
帮我做一套新的框架主题。
风格偏科技感，品牌主色是 #2563EB。
基础色想要冷灰一点，暗色模式更沉稳。
请同时生成基础色和主题色，并在 example 应用中启用。
```

## 结果

通常会：

* 修改 `packages/themes/index.ts`
* 修改 `apps/<app>/src/settings.ts`，启用该主题

主题按 `packages/themes/index.ts` 当前的 3 层结构分别处理：

* `BASE_COLORS`：基础色（完整 shadcn token 集合）
* `THEMES`：主题色（通常只覆盖 `--primary` / `--secondary` 等）
* 必要时调整 `FRAMEWORK_COLORS`：框架区域（顶部、侧边栏、标签栏、主内容区）配色
* `theme.baseColorLight / baseColorDark`
* `theme.light / dark`

> 始终同时生成 light 和 dark 两套配置，色值使用 OKLCH（`L C H` 三个数值，不含 `oklch()` 包裹）。
