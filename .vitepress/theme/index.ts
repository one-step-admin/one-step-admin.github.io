import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/var.css'
import HomePreview from './components/HomePreview.vue'
import ZoomImg from './components/ZoomImg.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePreview),
    })
  },
  enhanceApp({ app }) {
    app.component('ZoomImg', ZoomImg)
  },
}
