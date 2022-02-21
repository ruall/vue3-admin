<template>
  <sub-menu>
    <template #title>{{ data.name }}</template>
    <template v-for="c in data.children" :key="c.id">
      <menu-item v-if="!c.children">{{ c.name }}</menu-item>
      <re-sub-menu v-else :data="c"></re-sub-menu>
    </template>
  </sub-menu>
</template>
<script lang="ts">
export default {
  name: 'ReSubMenu'
}
</script>
<script setup lang="ts">
interface DataType {
  id: number
  name: string
  children?: DataType[]
}
interface Props {
  id: number
  name: string
  children?: DataType[]
}

defineProps<{ data: Props }>()
</script>
