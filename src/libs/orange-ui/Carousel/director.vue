<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div class="director dir-prev" v-else-if="dir === 'prev'">
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Director'
}
</script>

<script setup lang="ts">
defineProps({
  dir: {
    type: String,
    default: 'next'
  }
})

const emit = defineEmits(['dirClick'])

const dirClick = (dir: string) => {
  emit('dirClick', dir)
}
</script>

<style lang="less" scoped>
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  a {
    color: #fff;
    text-decoration: none;
  }
  &.dir-next {
    right: 0;
  }
  &.dir-prev {
    left: 0;
  }
}
</style>
