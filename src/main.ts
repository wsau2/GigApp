import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Unicon from 'vue-unicons'
import { uniFilter, uniSearch } from 'vue-unicons/dist/icons'

Unicon.add([uniFilter, uniSearch])

import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(Unicon)
app.use(createPinia())
app.mount('#app')
