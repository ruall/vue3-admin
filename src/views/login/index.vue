<template>
  <div>
    <h1 :class="style.name">ling</h1>
    <h1 :class="$style.name">ling</h1>
    <a-button type="primary" @click="handleClickIncrement">累加</a-button>
    <router-link to="/">去首页</router-link>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import style from '@/assets/style.module.less'
import { getWeather } from '../../utils/request'

enum Gender {
  Male,
  Female
}

const store = useStore()

console.log(Gender.Male)

const handleClickIncrement = () => {
  store.dispatch('increment')
}

const data = await getWeather()
console.log(data)
</script>
<style module>
.name {
  color: green;
}
</style>
