<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()

// 在JS中访问默认插槽和具名插槽footer
console.log(slots.default)
console.log(slots.footer)
</script>
<template>
  <div>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
