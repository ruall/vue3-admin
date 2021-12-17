<script setup lang="jsx">
import { getCurrentInstance, reactive, ref } from 'vue'
import Child from './child.vue'

const init = getCurrentInstance()

const state = reactive({
  message: 'hello world'
})
const count = ref(1)
const add = () => {
  count.value++
}

init.render = () => {
  return (
    <div>
      <div className="redColor">{state.message}</div>
      <h1 style={{ fontSize: '28px' }}>{count.value}</h1>
      <button onClick={add}>累加</button>
      <Child></Child>
    </div>
  )
}
</script>

<style scoped>
.redColor {
  color: red;
}
</style>
