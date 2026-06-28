---
url: /guide/skills.md
---
# AI 技能 (Skills)

这里收录项目内所有 `oc-*` 技能文档。

## 说明

* 本项目是 monorepo 架构，大多数技能都会先确认目标应用，也就是 `apps/<app>/`
* 如果用户没有明确指定目标应用，技能会先提问并阻塞等待回复，不会自行猜测
* 技能会优先遵循框架的目录约定和内建能力

## 技能列表

* [oc-framework-settings](./oc-framework-settings) - 管理和配置框架设置（`src/settings.ts`）
* [oc-i18n-manager](./oc-i18n-manager) - 管理国际化配置与翻译文案
* [oc-slot-creator](./oc-slot-creator) - 创建或修改框架布局插槽
* [oc-store-generator](./oc-store-generator) - 生成 Pinia Store 模块
* [oc-theme-customizer](./oc-theme-customizer) - 定制基础色与主题配色
