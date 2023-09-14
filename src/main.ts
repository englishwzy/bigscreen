import { createApp } from "vue";
import App from "./App.vue";
import 'virtual:svg-icons-register'
import gloablComponent from "@/components/index"
import elementPlus from "element-plus"
import 'element-plus/dist/index.css'    //element-plus的样式
import router from "@/router/index"
import "@/assets/css/index.scss"
console.log(import.meta.env.VITE_APP_BASE_API);
import {createPinia} from "pinia"

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(elementPlus);
app.use(router)
app.use(gloablComponent);
app.mount("#app");

function read() {
  console.log(11);
}

read();
