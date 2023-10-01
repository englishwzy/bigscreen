<template>
  <div class="ratio-echart">
    <div class="title">男女比例</div>
    <div class="line-bg"></div>
    <div class="avatar">
      <div class="man">
        <img src="../../assets/images_screen/man.png" alt="" />
      </div>
      <div class="woman">
        <img src="../../assets/images_screen/woman.png" alt="" />
      </div>
    </div>
    <div class="chart-text">
        <div class="left">男：58%</div>
        <div class="right">女：42%</div>
    </div>
    <div ref="ratioEcharts" class="ratioEcharts"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import "echarts-liquidfill";
let ratioEcharts = ref();
onMounted(() => {
  let ratio = echarts.init(ratioEcharts.value);
  ratio.setOption({
    title: {
      text: "男女比例",
      textStyle: {
        color: "cyan",
      },
      left: "40%",
      top: 0,
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
      type: "category",
    },
    series: [
      {
        data: [58],
        type: "bar",
        barWidth: "20",
        z: "10",
        label: {
          show: true,
          formatter: (params) => {
            console.log("params", params);
            return `男：${params.data}%`;
          },
        },
        itemStyle:{
            borderRadius:10
        },
      },
      {
        data: [100],
        type: "bar",
        barWidth: "20",
        barGap: "-100%", //重叠
        itemStyle:{
            borderRadius:10,
            color:"red"
        },
      },
    ],
    grid: {
      // 距离容器的距离
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  });
});
</script>
<style lang="scss" scoped>
.ratio-echart {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex: 1;
  background: url(../../assets/images_screen/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  .ratioEcharts {
    width: 100%;
    flex: 1;
  }
  .title {
    color: #fff;
    margin-bottom: 5px;
  }
  .line-bg {
    width: 68px;
    height: 7px;
    background: url(../../assets/images_screen/dataScreen-title.png) no-repeat;
    background-size: 100% 100%;
  }

  .avatar {
    display: flex;
    justify-content: center;
    // border: 1px solid red;
    margin-top: 40px;
    .man {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      width: 110px;
      height: 110px;
      line-height: 110px;
      text-align: center;
      background: url(../../assets/images_screen/man-bg.png) no-repeat;
      background-size: 100% 100%;
    }
    .woman {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 110px;
      line-height: 110px;
      text-align: center;
      background: url(../../assets/images_screen/woman-bg.png) no-repeat;
      background-size: 100% 100%;
    }
  }

  .chart-text {
    display: flex;
    justify-content: space-between;
    color:#fff;
  }
}
</style>
