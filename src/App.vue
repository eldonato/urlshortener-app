<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar>
        <v-app-bar-title class="pointer" @click="router.push({name: 'Home'})">
          Encurtador URL
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn :prepend-icon="iconTheme" text="Alterar Tema" slim @click="alterarTema"></v-btn>
      </v-app-bar>
      
      
      <v-main class="bg-blue">
        <v-container class="fill-height">
          <RouterView />
        </v-container>
      </v-main>

    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const theme = ref('light')
const iconTheme = computed(() => theme.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night')
function alterarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped lang="css">
.pointer {
  cursor: pointer;
}

</style>