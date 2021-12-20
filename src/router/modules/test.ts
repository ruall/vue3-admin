import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/test',
    component: () => import('/@/views/test/index.vue')
  },
  {
    path: '/father',
    component: () => import('/@/views/test/father.vue')
  },
  {
    path: '/parent',
    component: () => import('/@/views/test/parent.vue')
  },
  {
    path: '/provide',
    component: () => import('/@/views/test/provide.vue')
  }
]
export default routes
