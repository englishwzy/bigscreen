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
    text: "柱状图和折线图标",
    textStyle: {
      color: "orange",
    },
  },
  xAxis: {
    type: "category",
    show: true,
    data: ["周一", "周二", "周三", "周四", "周五"],
  },
  yAxis: {},
  grid: {
    left: 50,
    top: 100,
    right: 50,
    bottom: 50,
  },
  series: [
    {
      data: [10, 20, 50, 4, 40],
      type: "bar",
      label: {
        show: true,
        position: "insideTop",
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
        color: function (params: any) {
          let arr = ["red", "yellow", "cyan", "purple", "skyblue"];
          return arr[params.dataIndex];
        },
      },
    },
    {
      type: "line",
      data: [10, 20, 50, 4, 40, 6, 10, 80],
      smooth: true,
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
