<template>
  <span @click="changeInfo">我叫{{ modelValue }}，今年{{ age }}岁</span>
</template>

<script setup lang="ts">
defineProps({
  modelValue: String,
  age: Number
})

const emit = defineEmits(['update:modelValue', 'update:age'])

const changeInfo = () => {
  //触发父组件的值改变
  emit('update:modelValue', 'Tom')
  emit('update:age', 20)
}
</script>
