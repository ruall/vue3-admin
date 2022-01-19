export default {
  install(app: any) {
    app.directive('color', {
      // color 是指令的名字
      beforeMount(el: { style: { color: string } }, binding: { value: string }) {
        // el 是当前绑定的元素，binding 是一个对象
        console.log(binding.value)
        el.style.color = binding.value // binding.value 就是指令绑定的内容，也是等号里面的值
      },
      updated(el: { style: { color: string } }, binding: { value: string }) {
        el.style.color = binding.value
      }
    })
  }
}
