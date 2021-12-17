import { RouteRecordRaw } from 'vue-router'

const routes: [RouteRecordRaw] = [
  {
    path: '/test',
    component: () => import('/@/views/test/index.vue')
  },
  {
    path: '/father',
    component: () => import('/@/views/test/father.vue')
  }
]
export default routes
