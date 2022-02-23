import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const app = createApp(App)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
  })
app.use(ElementPlus)

app.use(router)

app.mount('#app')
