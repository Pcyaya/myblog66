<template>
  <div id="app">
    <Start-animation/>
    <!-- <router-view/> -->
    <div class="bgzz"></div>
    <play/>
  </div>
</template>

<script>
import StartAnimation from './components/pages/startAnimation'
import play from './components/home/home'
export default {
  name: 'App',
  data() {
    return{

    }
  },
  // props:['StartAnimation'],
  components: {StartAnimation,play}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  z-index: 111;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* width: 100%; */
  position: absolute;
  width: 100%;
  height: 100%;
}
.bgzz{
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url('http://cdn.mtnhao.com/music/bg.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(12);
  opacity: .5;
  transform: translateZ(0);
  transition: all .8s;
}
</style>
