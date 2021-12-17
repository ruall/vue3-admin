<template>
  <div class="carousel-item" v-if="selfIndex === currentIndex">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, reactive, toRefs } from 'vue'
const instance = getCurrentInstance()

const state = reactive({
  selfIndex: instance?.vnode.key,
  currentIndex: 0
})

const { selfIndex, currentIndex } = toRefs(state)
</script>
<style lang="less">
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>
