class MVVM {
  constructor(el, data) {
    this.el = document.getElementById(el)
    this._data = data
    this.init()
  }
  init() {}
}

/**
 * 1、数据 -> 响应式数据 Object.defineProperty Proxy
 * 2、input -> input/keyup 时间处理函数的绑定 -> 改变数据
 * 3、相关的DOM -> 数据  绑定在一起  操作数据的某个属性，对应的DOM就发生改变
 */
