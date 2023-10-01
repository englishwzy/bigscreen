<script setup lang="ts">
import { getScale } from "@/utils/getScale";
import { onMounted, ref } from "vue";
import Top from "@/components/top.vue";
import liquidEchart from "@/components/echarts/liquidFill.vue";
import ratioEchart from "@/components/echarts/radio.vue"
import agePie from '@/components/echarts/agePie.vue'
import Mymap from "@/components/echarts/map.vue"
import lineTrend from "@/components/echarts/lineTrend.vue";
import barLine from "@/components/echarts/right-top.vue"
import scatter from "@/components/echarts/scatter.vue"
import radar from "@/components/echarts/radar.vue"
let box = ref();
onMounted(() => {
  box.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
});
window.onresize = () => {
  console.log(`scale(${getScale()} translate(-50%,-50%)`);

  box.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
};
</script>

<template>
  <div class="screen">
    <div class="content-box" ref="box">
      <div class="top">
        <Top />
      </div>
      <div class="main">
        <div class="left">
          <liquidEchart />
          <ratioEchart/>
          <agePie/>
        </div>
        <div class="middle">
          <div class="map">
            <Mymap/>
          </div>
          <div class="line">
            <lineTrend/>
          </div>
        </div>
        <div class="right">
          <div class="right-top">
            <barLine/>
          </div>
          <div class="right-middle">
            <scatter/>
          </div>
          <div class="right-footer">
            <radar/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  width: 100%;
  height: 100vh;
  background: url(../assets/images_screen/bg.png) no-repeat;
  background-size: cover;
  .content-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform-origin: left top; //设置基点
    width: 1920px;
    height: 1080px;
    .top {
      height: 40px;
      display: flex;
      .left {
        display: flex;
        
      }
    }
    .main {
      height: calc(100% - 40px);
      display: flex;
      .left {
        padding-top: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .middle {
        flex: 2;
        display: flex;
        flex-direction: column;
        .map {
          flex:2;
          // background-color: cyan;
        }
        .line {
          flex:1;
          // background-color: pink;
        }
        
      }
      .right {
        margin-top: 20px;
        flex: 1;
        // background-color: blue;
        display: flex;
        flex-direction: column;
        .right-top {
          flex:1;
          background-color: #fff;
          background: url(../assets/images_screen/dataScreen-main-rb.png) no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .right-middle {
          flex:1;
          background-color: pink;
          background: url(../assets/images_screen/dataScreen-main-rb.png) no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .right-footer {
          flex:1;
          background-color:yellow;
          background: url(../assets/images_screen/dataScreen-main-rb.png) no-repeat;
          background-size: 100% 100%;

        }
      }
    }
  }
}
</style>
