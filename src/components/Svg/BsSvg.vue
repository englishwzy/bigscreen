<script setup lang="ts">
defineProps({
    prefix:{
        default:"#icon-"
    },
    name:{
        type:String,
    },
    color:{
        type:String,
        default:""
    },
    width:{
        type:String,
        default:"16"
    },
    height:{
        type:String,
        default:"16"
    }
})
</script>   

<template>
<div>
    <svg :style="{width:width+'px',height:height+'px'}">
        <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
</div>

</template>

<style scoped>

</style>