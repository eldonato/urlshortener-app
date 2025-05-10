<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      
      <BaseAppBar
        current-theme="theme"
        @change-theme="alterarTema()"
      />
      
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
import BaseAppBar from './components/BaseAppBar.vue';

const theme = ref('light')
function alterarTema() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped lang="css">
.pointer {
  cursor: pointer;
}

</style>