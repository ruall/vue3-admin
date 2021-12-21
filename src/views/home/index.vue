<template>
  <MyButton type="primary" @click="btnClick">我的按钮</MyButton>
  <hr />
  <MyInput placeholder="我的输入框" value="123" />

  <div>vuex中count:{{ count }}</div>
  <router-link to="/login">登录</router-link>

  <div class="container">
    <Carousel :autoplay="true" :duration="5000" :initial="0" :hasDot="true" :hasDirector="true" dotBgColor="#000">
      <carouselItem v-for="(item, index) in carouselData" :key="index">
        <img :src="`./src/assets/${item.img_name}`" />
      </carouselItem>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import carouselData from '../../data/carousel'

const store = useStore()
const count = store.state.count

const btnClick = (e: object) => {
  console.log(e)
  console.log('我的按钮')
}
</script>

<style lang="less" scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 150px auto;
}
</style>
