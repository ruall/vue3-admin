<template>
  <button :class="['my-btn', type]"><slot></slot></button>
</template>

<script lang="ts">
export default {
  name: 'MyButton'
}
</script>
<script lang="ts" setup>
defineProps({
  type: String
})
</script>
<style lang="less" scoped>
.my-btn {
  height: 34px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  &.primary {
    border: 1px solid #ddd;
    background-color: pink;
    color: #fff;
  }
  &.success {
    border: 1px solid #ddd;
    background-color: green;
    color: #fff;
  }
  &.danger {
    border: 1px solid #ddd;
    background-color: red;
    color: #fff;
  }
  &.warning {
    border: 1px solid #ddd;
    background-color: orange;
    color: #fff;
  }
}
</style>
