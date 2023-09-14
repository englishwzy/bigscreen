import BsSvg from "./Svg/BsSvg.vue"
import test from "./test.vue"
import SideMenu from "./menu.vue"
import type { App,Component } from "vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components: { [name: string]: Component } = { BsSvg,test,SideMenu };
console.log(components,"--components");

export default {
    install(app:App) {
        Object.keys(components).forEach((key:string)=>{
            app.component(key,components[key]);
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
          }
    }
}