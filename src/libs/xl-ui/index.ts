import TreeMenu from './TreeMenu/index.vue'
import MenuItem from './TreeMenu/MenuItem.vue'
import SubMenu from './TreeMenu/SubMenu.vue'
import ReSubMenu from './TreeMenu/ReSubMenu.vue'

import './resets.css'

const XlUI: any = {}

XlUI.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(TreeMenu.name, TreeMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(SubMenu.name, SubMenu)
  Vue.component(ReSubMenu.name, ReSubMenu)
}

export default XlUI
