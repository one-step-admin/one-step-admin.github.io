---
url: /guide/skills/oc-framework-settings.md
---
# oc-framework-settings

## 适用场景

* 需要修改 `apps/<app>/src/settings.ts`
* 账号权限验证、登录过期模式、多账号、菜单数据来源、水印、反馈、锁屏、错误日志、更新检查、哀悼模式、版权、偏好设置
* 主题同步、亮/暗基础色、亮/暗主题、颜色方案、圆角、背景、色弱模式
* 导航菜单下拉 / 面板模式
* 工具栏收藏夹、菜单搜索、通知、国际化、全屏、颜色主题、布局
* 舞台快捷键、侧边位置、侧边宽度、最大舞台数

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 要调整哪些设置项
* 期望效果

示例：

```text
在 example 应用里修改框架设置：
打开水印，导航菜单改为面板模式。
主题改为不同步，亮色基础色用 stone，暗色基础色用 taupe，暗色主题用 blue。
```

## 结果

通常会修改：

* `apps/<app>/src/settings.ts`

必要时会参考但不会直接修改：

* `packages/settings/src/types.ts`
* `packages/settings/src/default.ts`
* `packages/settings/src/preferences.ts`

> 与默认值相同的配置项会被移除，`settings.ts` 只保留真正自定义的内容，框架会自动继承默认配置。
