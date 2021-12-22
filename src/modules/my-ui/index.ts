import Button from './Button/index.vue'
import Input from './Input/index.vue'
import Select from './Select/index.vue'

const MyUI: any = {}
const MyButton: any = {}
const MyInput: any = {}
const MySelect: any = {}

const COMPONENTS = [Button, Input, Select]

MyButton.install = (Vue: any) => Vue.component(Button.name, Button)
MyInput.install = (Vue: any) => Vue.component(Input.name, Input)
MySelect.install = (Vue: any) => Vue.component(Select.name, Select)

export { MyButton, MyInput, MySelect }

MyUI.install = function (Vue: any, options: any) {
  if (options && options.components) {
    const components = options.components
    components.forEach((componentName: string) => {
      COMPONENTS.forEach((component) => {
        if (componentName === component.name) {
          Vue.component(component.name, component)
        }
      })
    })
  } else {
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default MyUI
