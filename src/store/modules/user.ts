import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '张三'
    }
  }
})
export default useUserStore
