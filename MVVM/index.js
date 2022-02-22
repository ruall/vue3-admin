class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el)
    // this._data = data
    this.data = data // Proxy 写法
    this.domPool = {}
    this.init()
  }
  init() {
    this.initData()
    this.initDom()
  }
  initDom() {
    this.bindDom(this.el)
    this.bindInput(this.el)
  }
  initData() {
    /**
     * 1、静态数据转成响应式数据 this.data
     */
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    // this.data = {}
    // for (let key in this._data) {
    //   Object.defineProperty(this.data, key, {
    //     get() {
    //       console.log('获取数据：', key, _this._data[key])
    //       return _this._data[key]
    //     },
    //     set(newVal) {
    //       console.log('修改数据：', key, newVal)
    //       _this.domPool[key].innerHTML = newVal
    //       _this._data[key] = newVal
    //     }
    //   })
    // }
    // console.log(this.data)

    //Proxy 写法
    this.data = new Proxy(this.data, {
      get(target, key) {
        return Reflect.get(target, key)
      },
      set(target, key, val) {
        _this.domPool[key].innerHTML = val
        return Reflect.set(target, key, val)
      }
    })
  }

  bindDom(el) {
    const childNodes = el.childNodes

    childNodes.forEach((item) => {
      if (item.nodeType === 3) {
        const _value = item.nodeValue
        if (_value.trim().length) {
          let _isValid = /\{\{(.+?)\}\}/.test(_value)
          if (_isValid) {
            const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim()
            this.domPool[_key] = item.parentNode
            item.parentNode.innerText = this.data[_key] || undefined
          }
        }
      }
      item.childNodes && this.bindDom(item)
    })
  }

  bindInput(el) {
    /**
     * 2、绑定事件处理函数，修改数据
     */
    const _allInputs = el.querySelectorAll('input')
    _allInputs.forEach((input) => {
      const _vModal = input.getAttribute('v-model')

      if (_vModal) {
        input.addEventListener('keyup', this.handelInput.bind(this, _vModal, input), false)
      }
    })
  }
  handelInput(key, input) {
    const _value = input.value
    this.data[key] = _value
    console.log(this.data)
  }

  setData(key, val) {
    this.data[key] = val
  }
}

/**
 * 1、数据 -> 响应式数据 Object.defineProperty Proxy
 * 2、input -> input/keyup 时间处理函数的绑定 -> 改变数据
 * 3、相关的DOM -> 数据  绑定在一起  操作数据的某个属性，对应的DOM就发生改变
 */
