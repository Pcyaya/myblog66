import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

//访问状态对象
const state = {
  count: 1,
  name: 'pc',
  age: 23
}
//修改状态
const mutations = {
  add(state, num) {
    state.count+=num
    setTimeout(() => {
      state.count-=num
    }, 3000);
    console.log(666)
  },
  reduce(state, num) {
    state.count-=num
  }
}
//计算过滤操作
const getters = {
  count:state=>{
    return state.count +=5
  }
}
//actions异步修改状态
const actions = {
  addAction(context){
    setTimeout(() => {
      context.commit('add',10)
    }, 3000);
    console.log('add')
  },
  reduceAction(context){
    context.commit('reduce',5)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})