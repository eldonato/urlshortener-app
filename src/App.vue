<script setup lang="ts">
import BaseAppBar from './components/BaseAppBar.vue'
</script>

<template>
  <v-responsive class="border rounded">
    <v-app theme="light">
      <BaseAppBar />

      <v-main class="bg-blue">
        <v-container class="fill-height">
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
