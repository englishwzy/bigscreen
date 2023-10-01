import type {RouteRecordRaw} from "vue-router"


export interface RouteState {
    menuRoutes:RouteRecordRaw[],
    collapse:boolean,
    refresh:boolean,
}