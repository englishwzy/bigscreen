<script setup lang="ts">
import { useRoute } from 'vue-router';
import useMenu from "@/store/menu"
const $route = useRoute(); 
const MenuState = useMenu();
console.log($route.matched);

// 是否缩小
const handleCollapse = ()=>{
  console.log(MenuState.collapse);
  MenuState.modifyCollapse(!MenuState.collapse);
  // MenuState.collapse = !MenuState.collapse;
}



// 原生的全屏
const handleFullscreen = ()=>{
  let full = document.fullscreenElement;
  if(!full) {
    // 进入全屏状态
    document.documentElement.requestFullscreen();
  }else {
    // 退出全屏状态
    document.exitFullscreen();
  }
  
}
</script>

<template>
 
    <div class="topbar-left" >
      <div class="icon" @click="handleCollapse" style="cursor: pointer;">
        <el-icon>
          <Fold></Fold>
        </el-icon>
      </div>
      <el-breadcrumb separator-icon="ArrowRight">
        <!-- 这里使用v-show的原因是v-if在vue3中的优先级比v-for高 -->
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-show="!item.meta.breadHidden" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="topbar-right">
      <div class="topbar-btn">
        <el-button icon="Edit" circle />
        <el-button icon="Check" circle />
        <el-button icon="FullScreen" circle  @click="handleFullscreen"/>
      </div>
      <div class="topbar-dropdown">
        <el-dropdown>
          <el-button type="primary">
            Dropdown List<el-icon class="el-icon--right"
              ><arrow-down
            /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
</template>

<style scoped lang="scss">
  .topbar-left {
    display: flex;
    .icon {
      margin-left: 20px;
      margin-right: 10px;
    }
  }
  .topbar-right {
    display: flex;
    margin-right: 10px;
    .topbar-btn {
        margin-right: 10px;
    }
    .dropdown {
    }
  }
</style>
