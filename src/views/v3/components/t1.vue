<script setup lang="ts">
import { ref } from 'vue'

interface User {
  name: string
  age: number
}

const msg1 = ref('1') // 会默认约束成string类型，因为TS类型推导
const msg2 = ref<string>('') //通过泛型约束类型
const user1 = ref<User>({ name: 'aaa', age: 1 }) // 类型约束
const user2 = ref({} as User) // 类型断言
</script>
<template>
  <div>{{ msg1 }}</div>
</template>
