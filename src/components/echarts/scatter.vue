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
    text: "散点图",
    textStyle: {
      color: "orange",
    },
  },
  xAxis: {
    type: "category",
    show: false,
    splitLine: {
      show: false,
    },  
  },
  yAxis: {
    show: false,
    splitLine: {
      show: false,
    },
  },
  grid: {
    left: 50,
    top: 100,
    right: 50,
    bottom: 50,
  },
  series: [
    {
      data: [10, 20, 50, 4, 40,10, 20, 50, 4, 40,10, 20, 50, 4, 40],
      type: "scatter",
      symbol:"arrow",
      label: {
        show: true,
        position: "top",
        color: "#fff",
      },
      showBackground: true,
      backgroundStyle: {
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

      itemStyle: {
        color: "cyan"
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
