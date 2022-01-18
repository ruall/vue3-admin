<script setup lang="ts">
import { useCssModule } from 'vue'

// 不传递参数，获取<style module>代码块编译后的css类对象
const style = useCssModule()
console.log(style.success) // 获取到的是success类名经过 hash 计算后的类名

const contentStyle = useCssModule('content')
</script>
<template>
  <div class="success">普通的style</div>

  <div :class="style.success">默认的cssModule</div>
  <div :class="$style.primary">默认的cssModule</div>

  <div :class="content.success">具名的cssModule</div>
  <div :class="contentStyle.primary">具名的sccModule</div>
</template>

<!-- 普通的style -->
<style>
.success {
  color: aqua;
}
</style>

<!-- 无值的css module -->
<style lang="less" module>
.success {
  color: pink;
}
.primary {
  color: goldenrod;
}
</style>

<!-- 具名的css module -->
<style lang="less" module="content">
.success {
  color: yellowgreen;
}
.primary {
  color: green;
}
</style>
