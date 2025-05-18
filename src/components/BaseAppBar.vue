<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseLogo from './BaseLogo.vue'

const router = useRouter()
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon>
      <BaseLogo />
    </v-app-bar-nav-icon>
    <v-app-bar-title class="pointer" @click="router.push({ name: 'Home' })">
      <span class="text-h6">Encurtador URL</span>
    </v-app-bar-title>
  </v-app-bar>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
