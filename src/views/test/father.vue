<template>
  <son v-model="state.name" v-model:age="state.age"></son>
  <br />
  <span>age值为：{{ state.age }}</span>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import son from './son.vue'

const state = reactive({
  name: 'Jerry',
  age: 30
})

watch(state, () => {
  console.log(state)
})
</script>
