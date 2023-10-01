import {defineStore} from "pinia"
import type {RouteState} from "./type"
import Routes from "@/router/router"
const useMenu = defineStore("Menu",{
    state:():RouteState=>{
        return {
            menuRoutes:Routes,
            collapse:false,
            refresh:true,
        };  
    },
    actions:{
        modifyCollapse(flag:boolean) {
            this.collapse = flag;
        }
    }
})

export default useMenu;