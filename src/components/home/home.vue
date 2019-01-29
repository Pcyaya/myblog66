<template>
  <div class="home">
    <div class="bg"></div>
    <div ref="audio">
      <audio id="audio" :src="item.src"></audio>
    </div>
    <div class="info">
      <div>{{item.name}}—{{item.singer}}</div>
      <div v-if="tolos!= ''">{{playTime}}/{{tolos}}</div>
    </div>
    <div>
      <el-slider v-model="time" :format-tooltip="formatTooltip" @change="changeTip" :max="maxTime"></el-slider>
    </div>
    <div class="btn">
      <div @click="pre">
        <img src="../../assets/images/pre.png" alt>
      </div>
      <div @click="playAuto">
        <img v-if="msg === 0 || msg === 2" src="../../assets/images/stop.png" alt>
        <img v-if="msg === 1" src="../../assets/images/play.png" alt>
      </div>
      <div @click="next">
        <img src="../../assets/images/next.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 0,
      item: {},
      time: 0,
      maxTime: 0,
      currentTime: "",
      tolos: "",
      list: [
        {
          src: "https://music.163.com/song/media/outer/url?id=546279760.mp3",
          name: "目不转睛",
          singer: "王以太"
        },
        {
          src: "https://music.163.com/song/media/outer/url?id=557581476.mp3",
          name: "去年夏天",
          singer: "王大毛"
        },
        {
          src: "https://music.163.com/song/media/outer/url?id=531295576.mp3",
          name: "最美的期待",
          singer: "周笔畅"
        }
      ]
    };
  },
  mounted() {
    this.item = this.list[0];
  },
  methods: {
    playAuto() {
      const that = this;
      let audio = document.getElementById("audio");
      if (audio.paused) {
        audio.play();
        this.msg = 1;
      } else {
        audio.pause();
        this.msg = 2;
      }
      this.playTime = this.formatDuration(audio.currentTime);
      this.tolos = this.formatDuration(audio.duration);
      this.maxTime = audio.duration;
      let start = setInterval(() => {
        this.$forceUpdate();
        this.playTime = this.formatDuration(audio.currentTime);
        this.time = audio.currentTime;
        if(this.playTime == this.tolos){
          audio.pause();
          clearInterval(start)
          setTimeout(() => {
            that.msg = 0;
            that.next();
          }, 1000);
        }
      }, 1000);
    },
    pre() {
      for (let i = this.list.length-1; i >=0; i--) {
        if (this.item.name === this.list[i].name) {
          if (i === 0) {
            this.item = this.list[this.list.length - 1];
          } else {
            i--;
            this.item = this.list[i];
          }
          setTimeout(() => {
            this.playAuto();
            this.time = 0;
          }, 300);
        }
      }
    },
    next() {
      for (let i = 0; i < this.list.length; i++) {
        if (this.item.name === this.list[i].name) {
          if (i === this.list.length - 1) {
            this.item = this.list[0];
          } else {
            i++;
            this.item = this.list[i];
          }
          setTimeout(() => {
            this.playAuto();
            this.time = 0;
          }, 300);
        }
      }
    },
    formatTooltip(val) {
      return this.formatDuration(val);
    },
    changeTip(val) {
      let audio = document.getElementById("audio");
      audio.currentTime = val;
    },
    formatDuration(value) {
      let other = value % 3600;
      let minutes =
        Math.floor(other / 60) < 10
          ? "0" + Math.floor(other / 60)
          : Math.floor(other / 60);
      let seconds =
        Math.floor(other % 60) < 10
          ? "0" + Math.floor(other % 60)
          : Math.floor(other % 60);
      return `${minutes}:${seconds}`;
    }
  }
};
</script>

<style scoped>
/* .bg{
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
} */
.home {
  padding: 5px 15px;
  border-top: 1px solid #ccc;
  /* background: #ccc; */
  position: fixed;
  width: calc(100% - 30px);
  bottom: 0;
}
.btn {
  display: flex;
  justify-content: center;
}
.btn > div {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  /* border: 1px solid #ccc; */
  outline: none;
  margin: 0 10px;
}
.btn > div:active {
  opacity: 0.5;
}
.btn img {
  width: 100%;
  height: 100%;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
