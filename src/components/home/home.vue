<template>
  <div class="home">
      <div ref="audio">
          <audio id="autio" :src="item.src"></audio>
      </div>
      <div>{{item.name}}—{{item.singer}}</div>
      <button @click="pre">上一首</button><button @click="play">{{msg}}</button><button @click="next">下一首</button>
      <!-- <button @click="stop">暂停</button> -->
    <!-- <mt-tabbar v-model="selected">
      <mt-tab-item id="发现">
        <img slot="icon" >
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" >
        我的
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
      msg: '播放',
      item: {},
      selected:{

      },
      list:[
          {
              src: 'https://music.163.com/song/media/outer/url?id=546279760.mp3',
              name: '目不转睛',
              singer: '王以太'
          },
          {
              src: 'https://music.163.com/song/media/outer/url?id=557581476.mp3',
              name: '去年夏天',
              singer: '王大毛'
          },
          {
              src: 'https://music.163.com/song/media/outer/url?id=531295576.mp3',
              name: '最美的期待',
              singer: '周笔畅'
          }
      ]
    };
  },
  mounted(){
      this.item = this.list[0]
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toBack() {},
    play(){
        let autio = document.getElementById('autio');
        if(autio.paused){
            autio.play()
            this.msg = '暂停'
        }else {
            autio.pause()
            this.msg = '继续'
        }
    },
    playAuto() {
        let autio = document.getElementById('autio');
        autio.play()
    },
    pre() {
        for(let i=0;i<this.list.length;i++){
            if(this.item.name === this.list[i].name){
                if(i === 0){
                    this.item = this.list[this.list.length-1]
                }else {
                    i--
                    this.item = this.list[i]
                    console.log(this.item)
                }
                setTimeout(() => {
                    this.playAuto()
                }, 0);
            }
        }
    },
    next() {
        for(let i=0;i<this.list.length;i++){
            if(this.item.name === this.list[i].name){
                if(i === this.list.length-1){
                    this.item = this.list[0]
                }else {
                    i++
                    this.item = this.list[i]
                    console.log(this.item)
                }
                setTimeout(() => {
                    this.playAuto()
                }, 0);
            }
        }
    }
  }
};
</script>

<style>
</style>
