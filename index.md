---
layout: home

title: One-step-admin
titleTemplate: 一款 Vue 中后台管理系统框架

hero:
  name: One-step-admin
  text: 巧妙的管理系统框架
  tagline: 快人一步，给你不一样的使用体验
  image:
    src: /logo.png
    alt: Vite
  actions:
    - theme: brand
      text: 开始
      link: /guide/intro
    - theme: alt
      text: 为什么选我们 ?
      link: /guide/why
    - theme: alt
      text: 更新日志
      link: /guide/changelog
    - theme: cta buy
      text: 购买合集，立减 799.00 元
      link: /buy
    - theme: cta
      text: 演示地址：基础版 ↗
      link: https://one-step-admin.gitee.io/basic-example
    - theme: cta
      text: 演示地址：专业版 ↗
      link: https://one-step-admin.gitee.io/pro-example

features:
- icon: 💪
  title: 先进的技术栈
  details: Vite + Vue3 + Pinia + TypeScript ，采用业内先进的技术栈，使框架始终保持新鲜
- icon: 🖥️
  title: 高效操作
  details: 采用全新交互方式，大幅提升操作效率，更好的利用高分屏/带鱼屏显示器
- icon: 🎨
  title: 风格百变
  details: 通过布局与主题组合搭配，可实现数百种不同风格的界面
- icon: 🗺️
  title: 多功能导航栏
  details: 支持前/后端生成导航栏，轻松实现导航嵌套、外链、标记、权限等功能
- icon: 🔑
  title: 全场景权限验证
  details: 内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证
- icon: 🌐
  title: 面向国际
  details: 内置业内通用国际化解决方案，通过简单配置实现多国语言切换
- icon: 📦
  title: 丰富的组件
  details: 内置常用组件，提高开发效率；同时提供组件快速生成工具
- icon: 📃
  title: 丰富的业务页面
  details: 通过真实场景及真实需求，沉淀出数十个业务应用的静态页面，方便开发人员直接使用
---

<script setup>
import { onMounted } from 'vue'
import { pureFrontendTag } from './.vitepress/utils/pureFrontendTag'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag'

onMounted(() => {
  pureFrontendTag()
  fetchReleaseTag()
})
</script>