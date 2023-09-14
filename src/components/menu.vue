<script setup lang="ts">
import type {RouteRecordRaw} from "vue-router"
import { PropType } from "vue";
import { useRouter,useRoute } from "vue-router";
import {ref} from "vue"
defineProps({
  menuList:{
    type:Array as PropType <RouteRecordRaw[]>,
  }
})
const $route = useRoute();
const router = useRouter();


const handleSwitchRoute = (vc) =>{
  console.log("vd:",vc.index);
  router.push(vc.index);  
}
</script>

<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="pink"
      :default-active="$route.path"
    >
      <template v-for="item in menuList" :key="item.path">
        <template v-if="!item.hidden">
          <el-menu-item
          :index="item.path"
          v-if="!item.children || item.children.length <= 0"
          @click="handleSwitchRoute"
          >
          <span style="margin-right:10px">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
          </span>
          <span>{{ item.meta.title }}</span></el-menu-item
        >
        </template>
        <el-sub-menu :index="item.path" v-if="item.children&&item.children.length>=1">
          <span style="margin-right:10px">
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
            </span>
          <template #title>
            <span>{{ item.meta.title }}}</span>
          </template>
          <SideMenu :menuList="item.children"></SideMenu>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<style scoped></style>
