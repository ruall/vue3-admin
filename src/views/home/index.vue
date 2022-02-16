<template>
  <MyButton type="warning" :callback="btnClick">我的按钮</MyButton>
  <MyButton type="success" @click="btnClick">我的按钮</MyButton>
  <hr />
  <MyInput placeholder="我的输入框" value="123" />
  <div class="my-select">
    <MySelect :data="data" :current-index="curIndex" :callback="setOption" />
  </div>

  <div>vuex中count:{{ count }}</div>
  <router-link to="/login">登录</router-link>
  <hr />
  <el-button type="primary" round>默认按钮</el-button>
  <div class="container">
    <Carousel :autoplay="true" :duration="5000" :initial="0" :has-dot="true" :has-director="true" dot-bg-color="#000">
      <carouselItem v-for="(item, index) in carouselData" :key="index">
        <img :src="`./src/assets/${item.img_name}`" alt="" />
      </carouselItem>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
// import { useStore } from 'vuex'
import useCounterStore from '/@/store/modules/counter'
import { storeToRefs } from 'pinia'
import carouselData from '../../data/carousel'
import _ from 'lodash'

// const store = useStore()
// const count = store.state.count

const { count } = storeToRefs(useCounterStore())

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

const setOption = (index: number, item: object) => {
  console.log(index, item)
}

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false }
]
const reduceFun = _.some(users, 'active')
console.log(reduceFun)

const saves = ['profile', 'settings']

const done = _.after(saves.length + 2, function () {
  console.log('done saving!')
})
_.forEach(saves, function (type) {
  console.log({ type: type, complete: done() })
})

done()
done()

const arr = _.map(['6', '8', '10'], _.ary(parseInt, 1))
console.log(arr)

const greet = function (this: { user: string }, greeting: string, punctuation: string) {
  return greeting + ' ' + this.user + punctuation
}

const object = { user: 'fred' }

const bound = _.bind(greet, object, 'hey')
console.log(bound('!!'))

const func = _.nthArg(-3)

console.log(func('a', 'b', 'c', 'd'))

/**
 * 数组类型转tree
 */
const arrs = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 2 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

/**
 * 方式一 递归
 */
interface arrType {
  id: number
  name: string
  pid: number
}
const getChildren = (arr: arrType[], res: arrType[], pid: number) => {
  for (const item of arr) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] }
      res.push(newItem)
      getChildren(arr, newItem.children, item.id)
    }
  }
}

const arrToTree = (arr: arrType[], pid: number) => {
  const res: arrType[] = []
  getChildren(arr, res, pid)
  console.log(res)
  return res
}

arrToTree(arrs, 0)

/**
 * 方式二 不用递归，两次遍历
 */
interface treeType {
  id: number
  pid: number
  children?: treeType[]
}

const arrayToTree = (items: treeType[]) => {
  const res = []
  const itemMap: treeType[] = []

  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    if (pid === 0) {
      res.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          id,
          pid,
          children: []
        }
      }
      ;(itemMap[pid].children as treeType[]).push(treeItem)
    }
  }
  console.log(res)
  return res
}
arrayToTree(arrs)

/**
 * 方式三 不用递归，一次遍历
 */
const arrToTree1 = (items: treeType[]) => {
  const res = []
  const itemMap = []

  for (const item of items) {
    const id = item.id
    const pid = item.pid

    if (!itemMap[id]) {
      itemMap[id] = {
        id,
        pid,
        children: []
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id]

    if (pid === 0) {
      res.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          id,
          pid,
          children: []
        }
      }
      ;(itemMap[pid].children as treeType[]).push(treeItem)
    }
  }
  console.log(res)
  return res
}
arrToTree1(arrs)
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
