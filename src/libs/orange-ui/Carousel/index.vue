<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Carousel',
  props: {
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
  },
  setup() {
    return {}
  }
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
  }
}
</style>
