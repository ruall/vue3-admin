<template>
  <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <CarDot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      />
      <Director dir="prev" @dirClick="dirClick" />
      <Director dir="next" @dirClick="dirClick" />
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
import CarDot from './dot.vue'
import Director from './director.vue'

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
  },
  dotBgColor: {
    //小圆点背景色
    type: String,
    default: '#ff5000'
  }
})

const proxy = getCurrentInstance()

const slots = useSlots()

const state = reactive({
  currentIndex: <any>proxy?.props.initial,
  itemLen: 0
})
const { currentIndex, itemLen } = toRefs(state)
defineExpose({ currentIndex })

let t: any = null

const autoPlay = () => {
  if (proxy?.props.autoplay) {
    t = setInterval(() => {
      setIndex('next')
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

const dotClick = (index: number) => {
  state.currentIndex = index
}

const mouseEnter = () => {
  _clearIntervalFn()
}

const mouseLeave = () => {
  autoPlay()
}

function _clearIntervalFn() {
  clearInterval(t)
  t = null
}

const dirClick = (dir: string) => {
  setIndex(dir)
}

onMounted(() => {
  //@ts-ignore
  state.itemLen = slots?.default()[0].children.length
  autoPlay()
})

onUnmounted(() => {
  _clearIntervalFn()
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
