import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueClipboard from 'vue-clipboard2'

createApp(App).use(VueClipboard).use(router).mount('#app')
