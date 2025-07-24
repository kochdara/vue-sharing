import { createSSRApp, h } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

const routes = [
    {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./pages/NotFound.vue')
    },
  {
    path: '/',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/about',
    component: () => import('./pages/About.vue')
  }
]

export function createApp() {
  const app = createSSRApp({ render: () => h(App) })

  const router = typeof window !== 'undefined'
    ? createRouter({ history: createWebHistory(), routes })
    : createRouter({ history: createMemoryHistory(), routes })

  const head = createHead()

  app.use(router)
  app.use(head)

  return { app, router, head }
}
