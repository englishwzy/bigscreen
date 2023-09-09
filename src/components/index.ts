import BsSvg from "./Svg/BsSvg.vue"
import test from "./test.vue"
import type { App,Component } from "vue"
const components: { [name: string]: Component } = { BsSvg,test };
console.log(components,"--components");

export default {
    install(app:App) {
        Object.keys(components).forEach((key:string)=>{
            app.component(key,components[key]);
        })
    }
}