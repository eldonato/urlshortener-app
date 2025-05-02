<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar title="Encurtador URL">
        <v-spacer></v-spacer>
        <v-btn :prepend-icon="iconTheme" text="Alterar Tema" slim @click="alterarTema"></v-btn>
      </v-app-bar>
      
      
      <v-main>
        <v-container class="fill-height bg-blue">
          <HomePage />
        </v-container>
      </v-main>

    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import HomePage from './components/HomePage.vue';

const theme = ref('light')
const iconTheme = computed(() => theme.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night')
function alterarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
