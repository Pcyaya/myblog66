<template>
  <div class="start">
    <div class="bg" v-if="outtime>-1" @click="GetBg">
      <div @click.stop="GetSkip">跳过({{outtime}})</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            outtime:3
        }
    },
    created() {
        setInterval(() => {
            if(this.outtime>-1){
                this.outtime--;
            }else {
                return;
            }
        }, 1000);
    },
    methods: {
        GetSkip() {
            setTimeout(() => {
                this.outtime= -1
            }, 500);
        },
        GetBg(){
            console.log('66666')
        }
    }
};
</script>

<style scoped>
.bg {
  z-index: 1995;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(orange, skyblue, pink);
}
.bg > div {
  position: absolute;
  right: 10px;
  top: 5px;
  color: #333;
}
.bg > div:active {
  color: #666;
}
</style>

