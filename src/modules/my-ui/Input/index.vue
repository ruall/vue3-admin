<template>
  <input class="my-input" type="text" :placeholder="placeholder" :value="value" />
</template>

<script lang="ts">
export default {
  name: 'MyInput'
}
</script>

<script lang="ts" setup>
defineProps({
  placeholder: String,
  value: String
})
</script>

<style lang="less" scoped>
.my-input {
  height: 34px;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>
