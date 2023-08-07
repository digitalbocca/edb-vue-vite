import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import devtools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  plugins: [
    devtools(),
    vue()
  ]
})
