// vite.config.server.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    ssr: 'src/entry-server.js', // ✅ Dedicated SSR entry
    outDir: 'dist/server'
  },
  ssr: {
    noExternal: ['@vueuse/head']
  }
})
