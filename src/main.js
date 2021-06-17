
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router/router.js'
import "@fortawesome/fontawesome-free"
  
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
