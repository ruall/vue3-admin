<template>
  <div>
    <a-button type="primary" @click="handleClickIncrement">累加</a-button>
    <router-link to="/">去首页</router-link>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
const handleClickIncrement = () => {
  store.dispatch('increment')
}
</script>
