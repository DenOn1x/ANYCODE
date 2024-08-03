import {createApp} from 'vue'
import App from './App.vue'
import i18n from './i18n/i18n.js'
import router from "@/router/index.js";
import Particles from "particles.vue3";

const app = createApp(App)

app.use(router);
app.use(i18n);
app.use(Particles);
app.mount('#app')
