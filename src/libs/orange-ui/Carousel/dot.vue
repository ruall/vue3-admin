<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{ backgroundColor: item - 1 === currentIndex ? dotBgColor : '#fff' }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CarDot'
}
</script>

<script setup lang="ts">
defineProps({
  itemLen: Number, //小圆点个数
  currentIndex: Number, //当前选中的第几个
  hasDot: {
    //是否显示
    type: Boolean,
    default: true
  },
  dotBgColor: String
})

const emit = defineEmits(['dotClick'])
const dotClick = (index: number) => {
  emit('dotClick', index)
}
</script>

<style lang="less" scoped>
.dot-wrapper {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;
  background-color: rgba(255, 255, 255, 0.3);
  .dot-item {
    display: inline-block;
    margin: 3px;
    .dot-lk {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
</style>
