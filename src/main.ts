import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
// Jsx 写法
// import App from './App.jsx'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

//自定义组件库
import OrangeUI from './libs/orange-ui'

import MyUI from './modules/my-ui'
import { MyButton } from './modules/my-ui'
import './modules/my-ui/common.css'

const app = createApp(App)

app.use(MyUI, {
  components: ['MyInput', 'MySelect']
})

app.use(MyButton)
app.use(router).use(Antd).use(OrangeUI).use(store).mount('#app')
