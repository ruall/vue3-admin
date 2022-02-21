import { RouteRecordRaw } from 'vue-router'

const routes: [RouteRecordRaw] = [
  {
    path: '/xl',
    component: () => import('/@/views/xl/index.vue')
  }
]
export default routes
