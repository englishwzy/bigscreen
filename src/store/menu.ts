import {defineStore} from "pinia"
import type {RouteState} from "./type"
import Routes from "@/router/router"
const useMenu = defineStore("Menu",{
    state:():RouteState=>{
        return {
            menuRoutes:Routes,
        };  
    },
    actions:{

    }
})

export default useMenu;