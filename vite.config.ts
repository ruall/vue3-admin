import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  server: {
    port: 8080, //项目启动端口
    open: true, //项目启动时是否自动打开浏览器
    proxy: {
      // 代理
      '/foo': 'http://localhost:4567/', //代理方式 /foo --> http://localhost:4567/foo
      // 选项写法
      '/api': {
        target: 'http://123.456.com', //代理方式 /api --> http://123.456.com
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: resolve('./dist') // 打包输出目录， 默认dist
  },
  plugins: [vue()]
})
