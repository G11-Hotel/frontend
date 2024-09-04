import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"

const app = createApp(App)

app.provide('HOST', 'https://backend-production-08dc.up.railway.app')

app.use(router)

app.mount('#app')
