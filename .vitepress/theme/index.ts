import { h, nextTick, onMounted, toRefs, watch } from 'vue'
import Theme, { VPBadge } from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import mediumZoom from 'medium-zoom'
// import MirrorSite from './components/MirrorSite.vue'
import SponsorsAside from './components/SponsorsAside.vue'
import HomePreview from './components/HomePreview.vue'
import ZoomImg from './components/ZoomImg.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      // 'layout-top': () => h(MirrorSite),
      'home-features-after': () => h(HomePreview),
      'aside-bottom': () => h(SponsorsAside),
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )

    // 获取前言和路由
    const { frontmatter } = toRefs(useData())
    // 评论组件 - https://giscus.app/
    giscusTalk({
      repo: 'one-step-admin/one-step-admin.github.io',
      repoId: 'R_kgDOJpKIUg',
      category: 'Announcements', // 默认: `General`
      categoryId: 'DIC_kwDOJpKIUs4CeSdr',
      mapping: 'pathname', // 默认: `pathname`
      inputPosition: 'top', // 默认: `top`
      lang: 'zh-CN', // 默认: `zh-CN`
      lightTheme: 'light', // 默认: `light`
      darkTheme: 'transparent_dark', // 默认: `transparent_dark`
      loading: true,
    }, {
      frontmatter,
      route,
    },
    // 是否全部页面启动评论区。
    // 默认为 true，表示启用，此参数可忽略；
    // 如果为 false，表示不启用。
    // 可以在页面使用 `comment: true` 前言单独启用
    true)
  },
  enhanceApp({ app }) {
    app.component('Badge', VPBadge)
    app.component('ZoomImg', ZoomImg)
  },
}
