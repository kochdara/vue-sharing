import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import netlify from "@netlify/vite-plugin"

export default defineConfig(({ ssrBuild }) => {
  return {
    plugins: [vue(), ssr(), netlify()],
    build: {
      outDir: ssrBuild ? 'dist/server' : 'dist/client',
      ssr: ssrBuild ? 'src/entry-server.js' : false,
      // remove rollupOptions.input completely!
    },
    ssr: {
      noExternal: ['@vueuse/head']
    }
  }
})
