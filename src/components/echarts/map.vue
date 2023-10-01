<template>
  <div class="container">
    <div ref="map" class="map"></div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import mapJSON from "./map.json";
echarts.registerMap("china", mapJSON as any);
let map = ref();
onMounted(() => {
  let mychar = echarts.init(map.value);
  mychar.setOption({
    geo: {
      map: "china",
      zoom: 1.3,
      left: 150,
      top: 150,
      bottom: -100,
      right: 150,
      label: {
        show: true,
        color: "#fff",
        fontSize: 17,
      },
      itemStyle: {
        areaColor: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "skyblue", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "blue", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      emphasis: {
        itemStyle: {
          areaColor: "cyan",
        },
      },
    },
    // 航线设置
    series: [
      {
        type: "lines",
        data: [
          {
            coords: [
              [110.33119, 20.031971], // 起点
              [116.405285, 39.904989], // 终点
              // 如果 polyline 为 true 还可以设置更多的点
            ],
            // 统一的样式设置
            lineStyle: {
                width:6,
                color:"yellow",
                type:"dashed"
            },
          },
        ],
        // 动效设置
        effect:{
            show:true,
            symbol:"arrow", //设置动效的img
            symbolSize:20,  //大小
            color:"cyan"
        }
      },
    ],
  });
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
