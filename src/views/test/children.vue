<template>
  <!--匿名插槽-->
  <slot />

  <!--具名插槽-->
  <slot name="title" />

  <!--作用域插槽-->
  <slot name="footer" :scope="state" />
</template>

<script setup lang="ts">
import { useSlots, reactive } from 'vue'

const state = reactive({
  name: '张三',
  age: '25岁'
})

const slots = useSlots()

//@ts-ignore
const defaultSlot = reactive(slots.default && slots.default().length)
console.log(defaultSlot)
//@ts-ignore
const titleSlot = reactive(slots.title && slots.title().length)
console.log(titleSlot)
</script>
