<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import "echarts-liquidfill";
let LiquorEcharts = ref();
onMounted(() => {
  let liquid = echarts.init(LiquorEcharts.value);
  liquid.setOption({
    series: [
      {
        radius: "80%",
        type: "liquidFill",
        data: [0.3, 0.5, 0.6],
        color: ["cyan", "yellow", "rgba(36, 255, 226, 0.936)"],
        backgroundStyle: {
          borderWidth: 5,
          borderColor: "cyan",
          color: "#fff",
        },
        outline: {
          show: true, //隐藏外边框
          borderDistance: 20,
          itemStyle: {
            borderType: "dashed",
            borderWidth: 5,
            borderColor: "cyan",
            shadowBlur: 10, //阴影大小
            shadowColor: "cyan", //阴影颜色
            // color:"cyan",
            color: {
                type: 'linear',
                x: 0,
                y: 0.7,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0, color: 'cyan' // 0% 处的颜色 
                }, {
                    offset: 0.5, color: 'transparent' // 100% 处的颜色
                }],
            },
          },
        },
        label: {
          position: ["50%", "50%"],
          formatter: function () {
            return "预计人数";
          },
          fontSize: 40,
          color: "#D94854",
        },
      },
    ],
  });
});
</script>

<template>
  <div class="liquid-echart">
    <div class="title">实时游客统计</div>
    <div class="line-bg"></div>
    <div class="book-father">
      <div class="book">可预约量：<span>1100</span></div>
    </div>
    <div class="num">
      <div class="num-item">1</div>
      <div class="num-item">1</div>
      <div class="num-item">1</div>
      <div class="num-item">1</div>
      <div class="num-item">1</div>
      <div class="num-item">1</div>
      <div class="num-item">人</div>
    </div>
    <div ref="LiquorEcharts" class="LiquorEcharts"></div>
  </div>
</template>

<style scoped lang="scss">
.liquid-echart {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  flex: 1.3;
  color: rgba(36, 255, 226, 0.936);
  background-color: purple;
  background: url(../../assets/images_screen/dataScreen-main-lt.png) no-repeat;
  background-size: 100% 100%;
  .title {
    color: #fff;
    margin-bottom: 5px;
  }
  .book-father {
    overflow: hidden;
    .book {
      float: right;
      margin-right: 20px;
      color: #fff;
      span {
        color: orange;
      }
    }
  }
  .line-bg {
    width: 68px;
    height: 7px;
    background: url(../../assets/images_screen/dataScreen-title.png) no-repeat;
    background-size: 100% 100%;
  }
  .num {
    margin-top: 40px;
    display: flex;
    .num-item {
      margin: 0 10px;
      flex: 1;
      height: 45px;
      line-height: 45px;
      text-align: center;
      color: #fff;
      background: url(../../assets/images_screen/total.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .LiquorEcharts {
    width: 100%;
    flex: 1;
  }
}
</style>
