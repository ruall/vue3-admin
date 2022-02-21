<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>
<script setup lang="ts"></script>
<style lang="less" scoped>
.menu-item {
  cursor: pointer;
  height: 50px;
  text-align: center;
  line-height: 50px;
  &:hover {
    color: cornflowerblue;
  }
}
</style>
