<template>
  <div class="side-bar">
    <tree-menu>
      <template v-for="item in MenuData" :key="item.id">
        <menu-item v-if="!item.children">
          <a href="">{{ item.name }}</a>
        </menu-item>
        <re-sub-menu v-else :data="item"></re-sub-menu>
      </template>
    </tree-menu>
  </div>
</template>
<script lang="ts">
export default {
  name: 'XlIndex'
}
</script>
<script setup lang="ts">
import MenuData from '/@/data/menu'
</script>
<style lang="less" scoped>
.side-bar {
  width: 180px;
  background-color: #000;
}
</style>
