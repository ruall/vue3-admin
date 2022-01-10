import { RouteRecordRaw } from 'vue-router'

const routes: [RouteRecordRaw] = [
  {
    path: '/ts',
    component: () => import('/@/views/typescript/index.vue')
  }
]
export default routes
