import { createApp } from "vue";
import App from "./App.vue";
import 'virtual:svg-icons-register'
import gloablComponent from "@/components/index"
import elementPlus from "element-plus"
import 'element-plus/dist/index.css'    //element-plus的样式
import router from "@/router/index"
console.log(import.meta.env.VITE_APP_BASE_API);
const app = createApp(App);
app.use(elementPlus);
app.use(gloablComponent);
app.use(router)
app.mount("#app");

function read() {
  console.log(11);
}

read();
