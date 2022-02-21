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
  <Modal
    :show="true"
    :width="500"
    :border-radius="10"
    header-color="orange"
    header-text="Dialog Tips"
    header-text-color="#333"
    content-text="This is a dialog Content"
    content-text-color="#333"
    position="center"
    :btn-group-show="true"
    confirm-text="yes"
    cancel-text="no"
    @confirm="confirmFun"
    @cancel="cancelFun"
  />
</template>
<script lang="ts">
export default {
  name: 'XlIndex'
}
</script>
<script setup lang="ts">
import MenuData from '/@/data/menu'

const confirmFun = (formData: object) => {
  console.log(formData)
  console.log('confirm')
}
const cancelFun = () => {
  console.log('cancel')
}
</script>
<style lang="less" scoped>
.side-bar {
  width: 180px;
  background-color: #000;
}
</style>
