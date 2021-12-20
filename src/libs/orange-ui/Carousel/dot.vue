<template>
  <div class="dot-wrapper">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a href=""></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const itemLen = reactive([])
</script>
