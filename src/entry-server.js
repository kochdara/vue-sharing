import { createApp } from './main'

export async function render(url, manifest) {
  const { app, router, head } = createApp()

  router.push(url)
  await router.isReady()

  return { app, head }
}