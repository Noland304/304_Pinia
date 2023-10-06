

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {bootstrap} from 'bootstrap/dist/js/bootstrap'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
app.use(router)
app.use(bootstrap)
app.mount('#app')
