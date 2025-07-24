import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, ssrBuild }) => {
  const isSSR = !!ssrBuild

  return {
    plugins: [vue()],
    build: {
      outDir: isSSR ? 'dist/server' : 'dist/client',
      ssr: isSSR ? 'src/entry-server.js' : false,
      rollupOptions: isSSR
        ? {} // ✅ SSR: do not include input
        : {
            input: './index.html' // ✅ Client: use index.html
          }
    },
    ssr: {
      noExternal: ['@vueuse/head']
    }
  }
})
