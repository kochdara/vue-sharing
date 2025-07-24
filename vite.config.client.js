// vite.config.client.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: './index.html' // ✅ Only for client build
    }
  }
})
