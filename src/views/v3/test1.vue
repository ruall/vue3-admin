<template>
  <div>{{ $attrs.title }}</div>
</template>
<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()

console.log(attrs.class) // my-class
console.log(attrs.title) // 标题
</script>
