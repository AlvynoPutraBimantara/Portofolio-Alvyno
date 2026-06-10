// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/style.css'
import FontAwesomeIcon from './fontawesome.js'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
