<template>
  <son ref="childRef" v-model="state.name" v-model:age="state.age"></son>
  <br />
  <span>age值为：{{ state.age }}</span>
</template>

<script setup lang="ts">
import { reactive, watch, ref, nextTick } from 'vue'
import son from './son.vue'

const state = reactive({
  name: 'Jerry',
  age: 30
})

const childRef = ref('childRef')

nextTick(() => {
  // @ts-ignore
  console.log(childRef.value.sex)

  // @ts-ignore
  childRef.value.changeSex()
})

watch(state, () => {
  console.log(state)
})
</script>
