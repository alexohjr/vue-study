// import { create } from 'core-js/core/object'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app')
