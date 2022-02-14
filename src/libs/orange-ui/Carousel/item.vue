<template>
  <transition :name="setName">
    <div v-if="selfIndex === currentIndex" class="carousel-item">
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
import { getCurrentInstance, reactive, ref, toRefs, watch } from 'vue'
const instance = getCurrentInstance()

const state = reactive({
  selfIndex: instance?.vnode.key,
  //@ts-ignore
  currentIndex: instance?.parent?.exposed.currentIndex
})
const { selfIndex, currentIndex } = toRefs(state)

const setName = ref('')

watch(currentIndex, (val, oldval) => {
  if (val > oldval) {
    setName.value = 'next'
  } else {
    setName.value = 'prev'
  }
})
</script>
<style lang="less">
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.next-enter-active,
.next-leave-active {
  transition: all 0.3s linear;
}
.next-enter-active {
  transform: translateX(100%);
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave-active {
  transform: translateX(0);
}
.next-leave-to {
  transform: translateX(-100%);
}

.prev-enter-active,
.prev-leave-active {
  transition: all 0.3s linear;
}
.prev-enter-active {
  transform: translateX(-100%);
}
.prev-enter-to {
  transform: translateX(0);
}
.prev-leave-to {
  transform: translateX(0);
}
.prev-leave-active {
  transform: translateX(100%);
}

img {
  width: 100%;
  height: 100%;
}
</style>
