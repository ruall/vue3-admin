<template>
  <span @click="changeInfo">我叫{{ modelValue }}，今年{{ age }}岁</span>
  <h2>{{ state.sex }}</h2>
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive, toRefs } from 'vue'
defineProps({
  modelValue: String,
  age: Number
})

const state = reactive({
  sex: '男'
})

const proxy = getCurrentInstance()

console.log(proxy?.props.age)

defineExpose({
  ...toRefs(state),
  changeSex() {
    state.sex = '女'
  }
})

const emit = defineEmits(['update:modelValue', 'update:age'])

const changeInfo = () => {
  //触发父组件的值改变
  emit('update:modelValue', 'Tom')
  emit('update:age', 20)
}
</script>
