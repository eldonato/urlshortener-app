import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
