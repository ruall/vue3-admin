<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Carousel'
}
</script>

<script setup lang="ts">
import { getCurrentInstance, reactive, toRefs, onMounted, onUnmounted, useSlots } from 'vue'

defineProps({
  autoplay: {
    //自动轮播显示
    type: Boolean,
    default: true
  },
  duration: {
    //轮播速度
    type: Number,
    default: 3000
  },
  initial: {
    //初始显示第几张图片
    type: Number,
    default: 0
  },
  hasDot: {
    //是否显示小圆点指示器
    type: Boolean,
    default: true
  },
  hasDirector: {
    //是否显示方向指示器
    type: Boolean,
    default: true
  }
})

const proxy = getCurrentInstance()

const slots = useSlots()

const state = reactive({
  currentIndex: proxy?.props.initial,
  itemLen: 0
})
const { currentIndex } = toRefs(state)
defineExpose({ currentIndex })

let t: any = null

const autoPlay = () => {
  if (proxy?.props.autoplay) {
    t = setInterval(() => {
      setIndex('prev')
      console.log(1)
      //@ts-ignore
    }, proxy?.props.duration)
  }
}

const setIndex = (dir: string) => {
  switch (dir) {
    case 'next':
      //@ts-ignore
      state.currentIndex += 1
      if (state.currentIndex === state.itemLen) {
        state.currentIndex = 0
      }
      break
    case 'prev':
      //@ts-ignore
      state.currentIndex -= 1
      if (state.currentIndex === -1) {
        state.currentIndex = state.itemLen - 1
      }
      break
    default:
      break
  }
}

onMounted(() => {
  //@ts-ignore
  state.itemLen = slots?.default()[0].children.length
  autoPlay()
})

onUnmounted(() => {
  clearInterval(t)
  t = null
})
</script>
<style lang="less" scoped>
.carousel {
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
