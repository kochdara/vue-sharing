import { createApp } from './main'

const { app, router, head } = createApp()

router.isReady().then(() => {
  app.mount('#app')
})