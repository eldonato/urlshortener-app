import HomePage from "@/components/HomePage.vue"
import Teste from "@/components/RedirectLinkCurto.vue"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home',component: HomePage },
    { path: '/:urlCurta', component: Teste },
]

export default createRouter({
    history: createWebHistory(),
    routes
})