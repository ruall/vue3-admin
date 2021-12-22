<template>
  <div class="my-select">
    <div class="result" @click="openOptions">{{ data[curIndex].text }}</div>
  </div>
  <div class="options" v-show="showOptions">
    <div class="option" v-for="(item, index) in data" :key="item.id" @click="setOption(index, item)">
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  name: 'MySelect'
}
</script>
<script lang="ts" setup>
const props = defineProps({
  data: <any>[],
  currentIndex: {
    type: Number,
    default: 0
  },
  callback: Function
})

const { data, currentIndex, callback } = toRefs(props)

const state = reactive({
  curIndex: currentIndex.value,
  showOptions: false
})
const { curIndex, showOptions } = toRefs(state)

const openOptions = () => {
  showOptions.value = true
}
const setOption = (index: number, item: any) => {
  curIndex.value = index
  showOptions.value = false
  //@ts-ignore
  callback?.value(index, item)
}
</script>
