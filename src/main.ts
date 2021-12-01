import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
// Jsx 写法
// import App from './App.jsx'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(router).use(Antd).use(store).mount('#app')
