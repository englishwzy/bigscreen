import {createRouter,createWebHashHistory} from "vue-router"
import routes from "./router"
const router = createRouter({
    history:createWebHashHistory(),   //hash模式
    routes:routes

})

export default router;