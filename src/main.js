import {createApp} from 'vue'
import App from './App.vue'
import i18n from './i18n/i18n.js'
import router from "@/router/index.js";

const app = createApp(App)

app.use(i18n);
app.use(router);
app.mount('#app')
