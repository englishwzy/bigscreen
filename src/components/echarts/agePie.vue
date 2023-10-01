<template>
  <div class="ratio-echart">
    <div class="title">男女比例</div>
    <div class="line-bg"></div>
    <div ref="ratioEcharts" class="ratioEcharts"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import "echarts-liquidfill";
let ratioEcharts = ref();
let option = {
  legend: {
    orient:"vertical",
    right:0,
    top:'50%',
    textStyle:{
        color:"#fff",//图例组件的文字颜色设置
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['20%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'inner',
        color:"#fff",
        fontSize:16,
      },
    //   移动label变大，强调效果
    //   emphasis: {
    //     label: {
    //       show: true,
    //       fontSize: 40,
    //       fontWeight: 'bold'
    //     }
    //   },
      labelLine: {
        show: false
      },
      data: [
        { value: 20, name: '20%' },
        { value: 30, name: '30%' },
        { value: 10, name: '10%' },
        { value: 35, name: '35%' },
        { value: 5, name: '5%' }
      ]
    }
  ]
};
onMounted(() => {
  let ratio = echarts.init(ratioEcharts.value);
  ratio.setOption(option);
});
</script>
<style lang="scss" scoped>
.ratio-echart {
  display: flex;
  flex: 1;

  background: url(../../assets/images_screen/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  .ratioEcharts {
    width: 100%;
    flex: 1;
  }
}
</style>
