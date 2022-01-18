export default {
  install(app: any) {
    app.directive('color', {
      // color 是指令的名字
      created(el: { style: { backgroundColor: any } }, binding: { value: any }) {
        debugger
        // el 是当前绑定的元素，binding 是一个对象
        console.log(binding.value)
        el.style.backgroundColor = binding.value // binding.value 就是指令绑定的内容，也是等号里面的值
      },
      updated(el: { style: { backgroundColor: any } }, binding: { value: any }) {
        el.style.backgroundColor = binding.value
      }
    })
  }
}
