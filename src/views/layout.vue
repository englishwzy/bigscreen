<script setup lang="ts">
import useMenu from "@/store/menu";
import topbar from "./topbar/index.vue";
import { useRoute } from "vue-router";
import {watch,ref,nextTick} from "vue"
const $route = useRoute();
const MenuStore = useMenu();
console.log(MenuStore.menuRoutes);

let flag = ref(true);

watch(()=>MenuStore.refresh, (newVal, oldVal) => {
      flag.value = false;
      nextTick(()=>{
        flag.value = true;
      })
      console.log(`New: ${newVal}, Old: ${oldVal}`)
})
</script>

<template>
  <div class="layout">
    <div
      class="side"
      :class="{ 'side-collapse': MenuStore.collapse ? true : false }"
    >
      <div class="side-logo"></div>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#fff"
        :default-active="$route.path"
        :collapse="MenuStore.collapse"
        :collapse-transition="false"
      >
        <SideMenu :menuList="MenuStore.menuRoutes"></SideMenu>
      </el-menu>
    </div>
    <div class="right">
      <div
        class="topbar"
        :class="{ 'topbar-collapse': MenuStore.collapse ? true : false }"
      >
        <topbar />
      </div>
      <div class="content">
        <div class="main">
          <router-view v-if="flag"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  // background-color: purple;
  display: flex;
  .side {
    width: $side-width;
    height: 100vh;
    background-color: cyan;
    transition: all 0.5s;
    &.side-collapse {
      width: $side-collapse-width;
    }
    .side-logo {
      width: 100%;
      height: 50px;
      background-color: orange;
    }
    .el-menu-vertical-demo {
      width: 100%;
      transition: all 0.5s;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .topbar {
      position: fixed;
      top: 0;
      left: $side-width;
      width: calc(100% - $side-width);
      height: $topbar-height;
      transition: all 0.5s;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &.topbar-collapse {
        width: calc(100% - $side-collapse-width);
        left: $side-collapse-width;
      }
    }

    .content {
      margin-top: $topbar-height;
      height: calc(100vh - $topbar-height);
      background-color: yellow;
      overflow: auto;
      padding: 20px;
      .main {
        background: blue;
        height: 1000px;
        color: #fff;
      }
    }
  }
}
</style>
