<template>
  <Inject />
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import Inject from './inject.vue'

let name = ref('Jerry')

provide('provideState', {
  name,
  changeName: () => {
    name.value = 'Tome'
  }
})

//监听name的变化
watch(name, () => {
  console.log(`name变成了${name.value}`)
  setTimeout(() => {
    console.log(name.value)
  }, 1000)
})
</script>
