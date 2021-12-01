import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

const resolve = (dir: string) => path.resolve(__dirname, dir)
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: resolve('./dist') // 打包输出目录， 默认dist
  },
  plugins: [vue(), vueJsx()]
})
