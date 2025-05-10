<template>
    <v-app-bar>
    <v-app-bar-nav-icon>
      <BaseLogo />
    </v-app-bar-nav-icon>
    <v-app-bar-title class="pointer" @click="router.push({name: 'Home'})">
      <span class="text-h6">Encurtador URL</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn :prepend-icon="iconTheme" text="Alterar Tema" slim @click="changeTheme"></v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseLogo from './BaseLogo.vue';


const router = useRouter()

const props = defineProps({
  currentTheme: {
    type: String,
    required: true,
    default() {
      return 'light'
    },
    validator(value: string, _) {
      return ['light', 'dark'].includes(value)
    }
  }
})
const emit = defineEmits(['changeTheme'])

const iconTheme = computed(() => props.currentTheme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night')

function changeTheme() {
  emit('changeTheme')
}

</script>