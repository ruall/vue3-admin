<script lang="ts">
export default {
  name: 'TestFour',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { useAttrs } from 'vue'
interface attrsType {
  title?: string
  //   [name: string]: any
}
const attrs: attrsType = useAttrs()
</script>

<template>
  <div :title="attrs.title">hover看title</div>
  <!-- <div :title="$attrs.title">hover看title</div> -->
</template>
