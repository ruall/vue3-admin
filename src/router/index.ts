import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 加载当前文件夹下modules文件夹下所有的ts结尾的文件
const modules = import.meta.glob('./modules/*.ts')

const routes: RouteRecordRaw[] = []

// 遍历 modules 对象的 key 值来访问相应的模块
for (const path in modules) {
  const mod = await modules[path]()
  // 数据添加到routes中
  routes.push(...mod.default)
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
