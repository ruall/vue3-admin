<template>
  <div>
    <div class="class1">{{ count }}</div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="add">增加</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const count = ref(1)
    const data = reactive({
      name: '张三',
      age: 18
    })
    const add = () => {
      count.value++
    }
    return {
      ...toRefs(data),
      count,
      add
    }
  }
})
</script>
