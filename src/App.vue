<template>
  <div id="app">
    <Start-animation/>
    <router-view/>
  </div>
</template>

<script>
import StartAnimation from './components/pages/startAnimation'
export default {
  name: 'App',
  data() {
    return{

    }
  },
  // props:['StartAnimation'],
  components: {StartAnimation}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
