<script setup lang="ts">
import moment from "moment";
import { onMounted, ref } from "vue";
let time = ref();
let timer;
onMounted(() => {
  timer = setInterval(()=>{
    time.value = moment().format("YYYY-MM-DD HH:mm:ss");
  },1000)
});
</script>

<template>
  <div class="left">
    <button class="btn">首页</button>
  </div>
  <div class="middle">
    <div class="title">智慧旅游可视化大数据平台</div>
  </div>
  <div class="right">
    <button class="btn">首页</button>
    <span>当前时间：{{ time }}</span>
  </div>
</template>

<style scoped lang="scss">
.left {
  flex: 1;
  background: url(../assets/images_screen/dataScreen-header-left-bg.png)
    no-repeat;
  background-size: 100% 100%;
  .btn {
    float: right;
    width: 135px;
    height: 100%;
    background: url(../assets/images_screen/dataScreen-header-btn-bg-l.png);
    background-size: 100% 100%;
    color: aqua;
  }
}
.middle {
  flex: 2;
  .title {
    color: aqua;
    text-align: center;
    height: 74px;
    line-height: 74px;
    background: url(../assets/images_screen/dataScreen-header-center-bg.png)
      no-repeat;
    background-size: 100% 100%;
  }
}
.right {
 line-height: 40px;
  color: aqua;
  flex: 1;
  background: url(../assets/images_screen/dataScreen-header-right-bg.png)
    no-repeat;
  background-size: 100% 100%;
  .btn {
    float: left;
    width: 135px;
    height: 100%;
    background: url(../assets/images_screen/dataScreen-header-btn-bg-l.png);
    background-size: 100% 100%;
  }
}
</style>
