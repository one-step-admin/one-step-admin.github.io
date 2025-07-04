import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'One-step-admin 官方文档',
  description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { 'http-equiv': 'Expires', 'content': '0' }],
    ['meta', { 'http-equiv': 'Pragma', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache-control', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache', 'content': 'no-cache' }],
    ['meta', { name: 'keywords', content: 'one-step-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['keywords', { content: 'one-step-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['description', { content: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。' }],
    ['script', {}, `
var _hmt = _hmt || [];
_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
  shouldTrackUrlChange: function(newPath, oldPath) {
    return newPath && oldPath;
  }
}]);
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d023f22d3c7fd011aed5f4499aebfabe";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
    `],
  ],
  themeConfig: {
    logo: '/logo.png',
    footer: {
      copyright: 'Copyright © 2021-present One-step-admin',
    },
    nav: [
      {
        text: '文档 <img src="https://img.shields.io/github/v/release/one-step-admin/basic?style=flat-square&label=%20&color=%2367C23B" style="display: inline-block; margin-top: -2px; margin-left: 4px; vertical-align: middle;" />',
        items: [
          {
            text: '指南',
            link: '/guide/intro',
          },
          {
            text: '组件',
            link: '/components/index',
          },
        ],
      },
      {
        text: '在线演示',
        items: [
          {
            text: 'Github',
            items: [
              {
                text: '基础版',
                link: 'https://one-step-admin.hurui.me/basic-example',
              },
              {
                text: '专业版',
                link: 'https://one-step-admin.hurui.me/pro-example',
              },
            ],
          },
          {
            text: 'Cloudflare',
            items: [
              {
                text: '基础版',
                link: 'https://one-step-admin.pages.dev/basic-example',
              },
              {
                text: '专业版',
                link: 'https://one-step-admin.pages.dev/pro-example',
              },
            ],
          },
        ],
      },
      {
        text: '技术支持',
        link: '/support',
      },
      {
        text: '下载 / 购买',
        items: [
          {
            text: '下载基础版',
            link: 'https://github.com/one-step-admin/basic/releases',
          },
          {
            text: '购买专业版 ⭐',
            link: '/buy',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/one-step-admin/basic',
      },
      {
        icon: 'github',
        link: 'https://github.com/one-step-admin/basic',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '文档说明', link: '/guide/intro' },
            { text: '为什么选择我们 ?', link: '/guide/why' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
          collapsed: false,
        },
        {
          text: '入门',
          items: [
            { text: '准备工作', link: '/guide/ready' },
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '配置', link: '/guide/configure' },
            { text: '导航', link: '/guide/menu' },
            { text: '窗口', link: '/guide/window' },
            { text: '路由', link: '/guide/router' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '资源', link: '/guide/resources' },
            { text: '图标', link: '/guide/svg-icon' },
            { text: '构建与预览', link: '/guide/build' },
          ],
          collapsed: false,
        },
        {
          text: '进阶',
          items: [
            { text: '登录', link: '/guide/login' },
            { text: '权限', link: '/guide/permission' },
            { text: '布局', link: '/guide/layout' },
            { text: '主题', link: '/guide/theme' },
            { text: '工具栏', link: '/guide/toolbar' },
            { text: '收藏夹', link: '/guide/favorites' },
            { text: '版权信息', link: '/guide/copyright' },
          ],
        },
        {
          text: '高级',
          items: [
            { text: '国际化', link: '/guide/i18n' },
            { text: 'RTL 模式', link: '/guide/rtl' },
            { text: '代码文件自动生成', link: '/guide/plop' },
            { text: '标准模块', link: '/guide/plop-module' },
            { text: '常用 API', link: '/guide/api' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '首屏 Loading', link: '/guide/loading' },
            { text: '页面水印', link: '/guide/watermark' },
            { text: '错误日志', link: '/guide/error-log' },
            { text: '自定义字体', link: '/guide/font' },
            { text: '用户偏好设置', link: '/guide/preferences' },
            { text: '使用 Composition API 开发', link: '/guide/vue3-composition-api' },
            {
              text: '替换 UI 组件库',
              items: [
                { text: '替换为 Ant Design Vue', link: '/guide/replace-to-antd' },
                { text: '替换为 Arco Design Vue', link: '/guide/replace-to-arco' },
                { text: '替换为 Naive UI', link: '/guide/replace-to-naive' },
                { text: '替换为 TDesign', link: '/guide/replace-to-tdesign' },
                { text: '替换为 Vexip UI', link: '/guide/replace-to-vexip' },
                { text: '替换为 iDux', link: '/guide/replace-to-idux' },
              ],
              collapsed: true,
            },
          ],
          collapsed: false,
        },
        {
          text: '其它',
          items: [
            { text: '框架更新', link: '/guide/upgrade' },
            { text: '常见问题', link: '/guide/q-a' },
          ],
          collapsed: false,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '介绍', link: '/components/' },
          ],
        },
        {
          text: '扩展组件',
          items: [
            { text: 'Auth 鉴权', link: '/components/auth' },
            { text: 'PageHeader 页头', link: '/components/page-header' },
            { text: 'PageMain 内容块', link: '/components/page-main' },
            { text: 'ActionContainer 固定底部操作栏', link: '/components/action-container' },
            { text: 'SearchBar 搜索面板', link: '/components/search-bar' },
            { text: 'ImageUpload 单图上传', link: '/components/image-upload' },
            { text: 'ImagesUpload 多图上传', link: '/components/images-upload' },
            { text: 'FileUpload 文件上传', link: '/components/file-upload' },
            { text: 'ImagePreview 图片预览', link: '/components/image-preview' },
            { text: 'SvgIcon SVG图标', link: '/components/svg-icon' },
            { text: 'Trend 趋势标记', link: '/components/trend' },
            { text: 'PcasCascader 省市区街道联动', link: '/components/pcas-cascader' },
            { text: 'Chip 纸片', link: '/components/chip' },
            { text: 'ColorfulCard 多彩渐变卡片', link: '/components/colorful-card' },
            { text: 'IconPicker 图标选择器', link: '/components/icon-picker' },
            { text: 'Sparkline 迷你图', link: '/components/sparkline' },
            { text: 'I18nSelector 国际化选择器', link: '/components/i18n-selector' },
            { text: 'StorageBox 储存箱', link: '/components/storage-box' },
          ],
        },
      ],
      '/': [
        {
          text: '',
          items: [
            { text: '购买专业版', link: '/buy' },
            { text: '技术支持', link: '/support' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
