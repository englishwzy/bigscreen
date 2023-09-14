<script setup lang="ts"> 
import useMenu from "@/store/menu"
import topbar from "./topbar/index.vue"
const MenuStore = useMenu();
console.log(MenuStore.menuRoutes);

</script>

<template>
  <div class="layout">
    <div class="side">
      <div class="side-logo">
        
      </div>
      <SideMenu :menuList="MenuStore.menuRoutes"></SideMenu>
    </div>
    <div class="right">
      <div class="topbar">
        <topbar />
      </div>
      <div class="content">
        <div class="main">
            <router-view></router-view>
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
    // background-color:cyan;
    .side-logo {
      width:100%;
      height: 50px;
      background-color: orange;
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
