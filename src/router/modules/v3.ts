import { RouteRecordRaw } from 'vue-router'

const routes: [RouteRecordRaw] = [
  {
    path: '/v3',
    component: () => import('/@/views/v3/index.vue')
  }
]
export default routes
