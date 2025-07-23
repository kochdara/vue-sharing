import { createApp, h } from 'vue'
import App from './App.vue'

export { render }

function render(pageContext) {
  const { Page, pageProps } = pageContext
  const app = createApp({
    render: () => h(App, { Page, pageProps })
  })
  app.mount('#app')
}
