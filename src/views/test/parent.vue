<template>
  <Children>
    <!--匿名插槽-->
    <span>我是默认插槽</span>

    <!--具名插槽-->
    <template #title>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
    </template>

    <!--作用域插槽-->
    <template #footer="{ scope }">
      <footer>作用域插槽 —— 姓名：{{ scope.name }}，年龄：{{ scope.age }}</footer>
    </template>
  </Children>
</template>

<script setup lang="ts">
import Children from './children.vue'
</script>
