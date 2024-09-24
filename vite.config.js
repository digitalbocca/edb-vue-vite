import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import devtools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      },
      sass: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
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
  ],
  test: {
    environment: 'jsdom',
    reporters: [
      'default'
    ],
    coverage: {
      enabled: true,
      include: [
        'src/**'
      ],
      reportsDirectory: './tests/unit/coverage',
      reporter: [
        'html'
      ]
    }
  }
})
