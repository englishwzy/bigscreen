<template>
  <div class="container">
    <div class="line-echart" ref="line"></div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
let line = ref();
let option = {
  title: {
    text: "折线图",
    textStyle: {
      color: "orange",
    },
  },
  xAxis: {
    type: "category",
    boundaryGap:false,//两边留白
    splitLine:{
        show:false,//分割线
    },
    data:["monday","towday","周三","周四","周五","周六","周日"]
  },
  yAxis: {
    splitLine:{
        show:false,//分割线
    },
    // y轴轴线
    axisLine:{
        show:true,
    }  
},
  grid: {
    left: 50,
    top: 50,
    right: 50,
    bottom: 50,
  },
  series: [
    {
      data: [100, 20, 500, 4,400,6,100,80],
      type: "line",
      smooth: true,
    //   填充颜色
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "red", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "blue", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};
onMounted(() => {
  let lineEchart = echarts.init(line.value);
  lineEchart.setOption(option);
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .line-echart {
    width: 100%;
    height: 100%;
  }
}
</style>
