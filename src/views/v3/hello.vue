<template>
  <div>{{ msg }}</div>
  <div @click="changeMessage">修改</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'hahaha'
  }
})
// defineProps<{ msg: string }>() // TS写法

// const emits = defineEmits<{ (e: 'changeMsg', v: string): void }>() // TS写法
const emits = defineEmits(['changeMsg'])
const changeMessage = () => {
  emits('changeMsg', 'hello')
}
const exposeFun = (v: string) => {
  console.log(v)
}
const title = ref('标题')
defineExpose({
  title,
  exposeFun
})
</script>
