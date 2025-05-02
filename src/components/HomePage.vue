<template>
  <v-container class="d-flex fill-height justify-center align-center">
    <v-form @submit.prevent="handleSubmit">
      <v-card class="pa-5 rounded-xl" width="90vw">
        
        <v-card-title>
          <v-row class="align-center justify-start">
            <v-img src="@/assets/logo.svg" alt="Logo do Encurtador de URL" width="50px" max-width="50px">
            </v-img>
            <h1 class="text-lg-h2 text-sm-h3 font-weight-bold text-wrap">Encurtador URL</h1>
          </v-row>
        </v-card-title>

        <v-card-text class="pt-6">
          <v-text-field
            v-model="urlOriginal"
            label="Cole sua URL longa aqui"
            variant="outlined"
            placeholder="http://exemplo.com/link-muito-grande"
            clearable
            @blur="onBlur"
            :rules="[(v) => regraFormatoUrl2(v)]"
          ></v-text-field>
        </v-card-text>
        
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            :disabled="!urlOriginal"
            type="submit"
          >
            Encurtar URL
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

  </v-container>
</template>

<script setup lang="ts">
import { encurtarUrl } from '@/services/encurtar-url.service'
import { ref } from 'vue'
import type { ValidationResult } from 'vuetify/lib/composables/validation.mjs'

const urlOriginal = ref('')
const urlCurta = ref('')

async function handleSubmit() {
  const urlNormalizada = normalizarUrl(urlOriginal.value)
  urlCurta.value = await encurtarUrl(urlNormalizada);
}

function normalizarUrl(url: string) {
  if (!url) return ""
  if(!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url
  }
  if (!url.endsWith('/')) {
    url = url + '/'
  }

  return url
}

function regraFormatoUrl2(url: string): ValidationResult {
  if (!url) return true;
  const urlNormalizada = normalizarUrl(url);
  const mensagemErro = "Infrome uma URL válida, como: exemplo.com/ex"

  try {
    const url = new URL(urlNormalizada)
    console.log('passou url', url);
    
    return url.protocol === "http:" || url.protocol === "https:" || mensagemErro;
  } catch {
    return mensagemErro;
  }
} 

function onBlur() {
    urlOriginal.value = normalizarUrl(urlOriginal.value)
}

</script>''