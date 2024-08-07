import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '../store/store'

// Components
import Home from './components/Home/Home.vue'
import JobDetail from './components/Home/JobDetail.vue'
import Calendar from './components/Calendar/Calendar.vue'
import Wallet from './components/Wallet/Wallet.vue'
import Apply from './components/Home/Apply.vue'
import CreateListing from './components/Home/CreateListing.vue'
import Login from './components/Login/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/detail', component: JobDetail },
        { path: '/apply', component: Apply },
        { path: '/calendar', component: Calendar },
        { path: '/wallet', component: Wallet },
        { path: '/create-listing', component: CreateListing },
        { path: '/login', component: Login },
    ]
});

router.beforeEach((to, from, next) => {
    const userStore = useStore();

    if (userStore.currUser === null && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
