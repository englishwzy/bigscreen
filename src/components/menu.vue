<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";
import { PropType } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

defineProps({
  menuList: {
    type: Array as PropType<RouteRecordRaw[]>,
  },
});
const $route = useRoute();
const router = useRouter();

const handleSwitchRoute = (vc) => {
  console.log("vd:", vc.index);
  router.push(vc.index);
};
</script>

<template>
  
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.hidden">
        <el-menu-item
          :index="item.path"
          v-if="!item.children || item.children.length <= 0"
          @click="handleSwitchRoute"
        >
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length >= 1"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <SideMenu
          :menuList="item.children"
          style="margin-left: 10px"
        ></SideMenu>
      </el-sub-menu>
    </template>
</template>

<style scoped></style>
