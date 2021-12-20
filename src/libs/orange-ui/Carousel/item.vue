<template>
  <transition>
    <div class="carousel-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts">
export default {
  name: 'CarouselItem'
}
</script>
<script lang="ts" setup>
import { getCurrentInstance, reactive, toRefs, useSlots } from 'vue'
const instance = getCurrentInstance()

const state = reactive({
  selfIndex: instance?.vnode.key,
  //@ts-ignore
  currentIndex: instance?.parent?.exposed.currentIndex
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
.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}
.v-enter-active {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave-active {
  transform: translateX(0);
}
.v-leave-to {
  transform: translateX(-100%);
}

img {
  width: 100%;
  height: 100%;
}
</style>
