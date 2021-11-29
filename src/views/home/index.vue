<template>
  <div>vuex中count:{{ count }}</div>
  <router-link to="/login">登录</router-link>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
const count = store.state.count
</script>
