<template>
  <div class="title">{{ title }}</div>
  <div v-color="'red'">{{ props.title }}</div>
  <button @click="add">add</button>
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
  <Test4 title="我是title" name="title" />
  <hr />
  <Form.T1>
    <Form.T2>2</Form.T2>
    <Form.T3>3</Form.T3>
  </Form.T1>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Hello from './hello.vue'
import Test1 from './test1.vue'
import Test2 from './test2.vue'
import Test3 from './test3.vue'
import Test4 from './test4.vue'
import * as Form from './form'

interface ListType {
  name: string
  age: number
}
interface Props {
  msg: string
  title?: string
  list: ListType[]
}
const hello = ref<any>(null)
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
})
const exposeFun = () => {
  hello.value.exposeFun('标题2')
}

const theme = {
  color: 'pink'
}
const total = ref(10)
const add = () => {
  total.value++
}
</script>
<style lang="less" scoped>
.title {
  color: v-bind('theme.color');
}
</style>
