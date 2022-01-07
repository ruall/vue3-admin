<template>
  <div></div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const provideState = inject('provideState')
//@ts-ignore  子组件触发name改变
provideState.changeName()
</script>
