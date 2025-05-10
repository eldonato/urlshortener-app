<script setup lang="ts">
import type { ValidationResult } from 'vuetify/lib/composables/validation.mjs'
import { encurtarUrl } from '@/services/encurtar-url.service'
import { nextTick, ref } from 'vue'
import BaseLogo from './BaseLogo.vue'
import ShortenedUrlDialog from './ShowUrlShortenedDialog.vue'

const originalUrl = ref('')
const shortenedUrl = ref('')
const showShortenedUrl = ref(false)
const loading = ref(false)

async function handleSubmit() {
  originalUrl.value = normalizarUrl(originalUrl.value)
  loading.value = true
  try {
    shortenedUrl.value = await encurtarUrl(originalUrl.value)
    showShortenedUrl.value = true
    nextTick(() => originalUrl.value = '')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = false
  }
}

function normalizarUrl(url: string) {
  if (!url)
    return ''
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `http://${url}`
  }
  if (!url.endsWith('/')) {
    url = `${url}/`
  }

  return url
}

function regraFormatoUrl(url: string): ValidationResult {
  if (!url)
    return true
  const urlNormalizada = normalizarUrl(url)
  const mensagemErro = 'Infrome uma URL válida, como: exemplo.com/ex'

  try {
    const url = new URL(urlNormalizada)
    return url.protocol === 'http:' || url.protocol === 'https:' || mensagemErro
  }
  catch {
    return mensagemErro
  }
}

function onBlur() {
  originalUrl.value = normalizarUrl(originalUrl.value)
}
</script>

<template>
  <v-container class="d-flex fill-height justify-center align-center">
    <v-form @submit.prevent="handleSubmit">
      <v-card class="pa-5 rounded-xl">
        <v-card-title>
          <v-row class="align-center justify-start">
            <BaseLogo />
            <h1 class="pl-2 text-lg-h2 text-sm-h4 font-weight-bold text-wrap">
              Encurtador URL
            </h1>
          </v-row>
        </v-card-title>

        <v-card-text class="pt-6">
          <v-text-field
            v-model="originalUrl"
            label="Cole sua URL longa aqui"
            variant="outlined"
            placeholder="http://exemplo.com/link-muito-grande"
            clearable
            :rules="[(v) => regraFormatoUrl(v)]"
            @blur="onBlur"
          />
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            :disabled="!originalUrl"
            variant="tonal"
            size="x-large"
            :loading="loading"
            type="submit"
          >
            Encurtar URL
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

    <ShortenedUrlDialog
      :dialog="showShortenedUrl"
      :shortened-url="shortenedUrl"
      @close="showShortenedUrl = false"
    />
  </v-container>
</template>
