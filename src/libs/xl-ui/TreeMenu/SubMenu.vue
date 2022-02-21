<template>
  <div class="sub-menu" @mouseenter="showSubMenu" @mouseleave="hideSubMenu">
    <div class="title">
      <div class="title">
        <slot name="title"></slot>
        <span class="icon">&gt;</span>
      </div>
      <div v-show="showSub" class="sub-item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubMenu'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const showSub = ref(false)

const showSubMenu = () => {
  showSub.value = true
}

const hideSubMenu = () => {
  showSub.value = false
}
</script>
<style lang="less" scoped>
.sub-menu {
  position: relative;
  cursor: pointer;

  .title {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    &:hover {
      color: cornflowerblue;
    }
    .icon {
      position: absolute;
      top: 0;
      right: 15px;
    }
  }
  .sub-item {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
  }
}
</style>
