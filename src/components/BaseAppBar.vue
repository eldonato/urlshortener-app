<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseLogo from './BaseLogo.vue'

const props = defineProps({
  currentTheme: {
    type: String,
    default() {
      return 'light'
    },
  },
})

const emit = defineEmits(['changeTheme'])

const router = useRouter()

const iconTheme = computed(() => props.currentTheme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night')

function changeTheme() {
  emit('changeTheme')
}
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon>
      <BaseLogo />
    </v-app-bar-nav-icon>
    <v-app-bar-title class="pointer" @click="router.push({ name: 'Home' })">
      <span class="text-h6">Encurtador URL</span>
    </v-app-bar-title>
    <v-spacer />
    <v-btn :prepend-icon="iconTheme" text="Alterar Tema" slim @click="changeTheme" />
  </v-app-bar>
</template>
