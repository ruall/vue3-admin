<template>
  <div class="title">{{ title }}</div>
  <div v-color="color">{{ props.title }}</div>
  <button @click="changeColor">changeColor</button>
  <br />
  <input v-my-directive="total" :value="total" />
  <button @click="add">add+1</button>
  <Hello :msg="msg" @change-msg="changeMsg" ref="hello" />
  <div @click="exposeFun">exposeFun</div>
  <Test1 class="my-class" title="标题" />
  <Test2>
    <div>默认插槽</div>
    <template #footer>
      <div>具名插槽</div>
    </template>
  </Test2>
  <Test3 />
  <Test4 title="我是title" name="title" ref="testRef" />
  <hr />
  <Form.T1>
    <Form.T2>2</Form.T2>
    <Form.T3>3</Form.T3>
  </Form.T1>

  <hr />
  <div>count:{{ counter.count }}</div>
  <div>name:{{ userStore.name }}</div>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue'
import Hello from './hello.vue'
import Test1 from './test1.vue'
import Test2 from './test2.vue'
import Test3 from './test3.vue'
import Test4 from './test4.vue'
import * as Form from './form'
import useCounterStore from '/@/store/modules/counter'
import userUserStore from '/@/store/modules/user'

interface ListType {
  name: string
  age: number
}
interface Props {
  msg: string
  title?: string
  list: ListType[]
}

const counter = useCounterStore()
setTimeout(() => {
  counter.increment()
}, 2000)

const userStore = userUserStore()
setTimeout(() => {
  userStore.name = '李四'
}, 3000)

const hello = ref<any>(null)

// 获取 Test4 组件实例
const testRef = ref<any>(null)
// const prop = defineProps<{ msg: string; title: string; list: ListType[] }>() //无默认值
const props = withDefaults(defineProps<Props>(), { title: '标题1' })
const title = 1

console.log(props.title)

const msg = ref()
const changeMsg = (v: string) => {
  msg.value = v
}

onMounted(() => {
  console.log(hello.value.title)
  console.log(testRef.value.$attrs.name)
})
const exposeFun = () => {
  hello.value.exposeFun('标题2')
}

const theme = {
  color: 'pink'
}
const color = ref('red')
const changeColor = () => {
  color.value = 'pink'
}

const total = ref(10)
const vMyDirective = {
  beforeMount: (el: { style: { borderColor: string } }, binding: any, vnode: any) => {
    el.style.borderColor = 'red'
  },
  updated(el: { value: number; style: { borderColor: string } }, binding: any, vnode: any) {
    if (el.value % 2 !== 0) {
      el.style.borderColor = 'blue'
    } else {
      el.style.borderColor = 'red'
    }
  }
}

const add = () => {
  total.value++
}

// 获取当前组件的实例对象，相当于 vue2 的 this
const instance = getCurrentInstance()
console.log(instance)

const Fun = (s: string, k: number) => {
  let arr: string[] = []
  let res: string[] = []
  arr = s.split(' ')
  res = arr.filter((v, i) => {
    return i < k ? v : ''
  })
  console.log(res.join(' '))
}
Fun('Hello how are you Contestant', 4)
</script>
<style lang="less" scoped>
.title {
  color: v-bind('theme.color');
}
</style>
