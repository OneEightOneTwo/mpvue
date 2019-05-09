import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 仓库
  state: {
    showGallery: false
  },
  // 修改state的方法
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    }
  }
})

export default store
