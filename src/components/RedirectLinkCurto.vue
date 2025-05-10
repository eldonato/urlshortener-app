<script setup lang="ts">
import { obterUrl } from '@/services/encurtar-url.service'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const urlOriginal = ref('')
const error = ref(false)

onMounted(async () => {
  const urlCurta = route.params.urlCurta as string
  urlOriginal.value = await obterUrl(urlCurta)
  if (urlOriginal.value) {
    window.location.replace(urlOriginal.value)
  }
  else {
    error.value = true
  }
})
</script>

<template>
  <v-row v-if="error" class="d-flex flex-column">
    <v-sheet class="ma-2 pa-2 text-center">
      Ops, parece que o código curto informado não existe!
    </v-sheet>
    <v-sheet class="ma-2 pa-2 text-center">
      Se quiser criar seu próprio link curto:
    </v-sheet>
    <v-sheet class="ma-2 pa-2 text-center">
      <RouterLink to="/">
        Clique Aqui!
      </RouterLink>
    </v-sheet>
  </v-row>
</template>
