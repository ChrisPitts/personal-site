import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './css/style.scss'
import App from './App.vue'
import Home from './pages/Home.vue';
import SMAA from './pages/projects/SMAA.vue';
import Strikle from './pages/projects/Strikle.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/smaa', name: 'SMAA', component: SMAA},
        {path: '/strikle', name: 'Strikle', component: Strikle},
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
