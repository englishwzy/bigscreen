<script setup lang="ts">
import { useRoute } from 'vue-router';
const $route = useRoute(); 
console.log($route.matched);

</script>

<template>
  <div class="topbar">
    <div class="topbar-left">
      <div class="icon">
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
        <el-button icon="Message" circle />
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
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
</style>
