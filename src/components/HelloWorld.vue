<template>
  <div class="hello">
      <h2>{{msg}}</h2>
      <h3>{{$store.state.count}}</h3>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from "@/vuex/store";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App123"
    }
  },
  created() {
    console.log(store);
  },
  store
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
