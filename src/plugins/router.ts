import HomePage from "@/components/HomePage.vue"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home',component: HomePage },
]

export default createRouter({
    history: createWebHistory(),
    routes
})