<template>
  <div class="tree-menu">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TreeMenu'
}
</script>
<script setup lang="ts"></script>
<style lang="less" scoped>
.tree-menu {
  width: 100%;
  color: #fff;
  background: #000;
}
</style>
