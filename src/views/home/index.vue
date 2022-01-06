<template>
  <MyButton type="warning" :callback="btnClick">我的按钮1</MyButton>
  <MyButton type="success" @click="btnClick">我的按钮2</MyButton>
  <hr />
  <MyInput placeholder="我的输入框" value="123" />
  <div class="my-select">
    <MySelect :data="data" :currentIndex="curIndex" :callback="setOption" />
  </div>

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
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import carouselData from '../../data/carousel'
import _ from 'lodash'

const store = useStore()
const count = store.state.count

const btnClick = (e: object) => {
  console.log(e)
  console.log('我的按钮')
}

const data = reactive([
  {
    id: 1,
    value: 'orange',
    text: '橙子'
  },
  {
    id: 2,
    value: 'apple',
    text: '苹果'
  },
  {
    id: 3,
    value: 'pear',
    text: '梨'
  }
])

const curIndex = ref(1)

const setOption = (index: any, item: any) => {
  console.log(index, item)
}

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false }
]
const reduceFun = _.some(users, 'active')
console.log(reduceFun)

var saves = ['profile', 'settings']

var done = _.after(saves.length + 2, function () {
  console.log('done saving!')
})
_.forEach(saves, function (type) {
  console.log({ type: type, complete: done() })
})

done()
done()

const arr = _.map(['6', '8', '10'], _.ary(parseInt, 1))
console.log(arr)

var greet = function (this: any, greeting: string, punctuation: string) {
  return greeting + ' ' + this.user + punctuation
}

var object = { user: 'fred' }

var bound = _.bind(greet, object, 'hey')
console.log(bound('!!'))

var func = _.nthArg(-3)

console.log(func('a', 'b', 'c', 'd'))
</script>

<style lang="less" scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 150px auto;
}
.my-select {
  width: 100%;
  height: 100px;
  margin: 20px auto;
}
</style>
