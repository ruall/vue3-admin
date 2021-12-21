import MyButton from './Button/index.vue'
import MyInput from './Input/index.vue'

const MyUI: any = {}

MyUI.install = function (Vue: any, options: any) {
  console.log(options)
}

export default MyUI
