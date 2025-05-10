<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
  shortenedUrl: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])
const showDialog = computed(() => props.dialog)
const completeShortenedUrl = computed(formatUrl)
const snackbar = ref(false)

function formatUrl() {
  const baseDomain = import.meta.env.VITE_APP_BASE_URL.replace('http://', '').replace('https://', '')
  return `${baseDomain}/${props.shortenedUrl}`
}

function fecharDialog() {
  emit('close')
}

function copyShortenedUrl() {
  navigator.clipboard.writeText(completeShortenedUrl.value)
  snackbar.value = true
}
</script>

<template>
  <v-dialog
    v-model="showDialog"
    width="auto"
  >
    <v-card
      width="70vw"
      max-width="600"
    >
      <template #title>
        <v-icon color="green" icon="mdi-check-circle-outline" />
        <span class="pl-2">URL encurtada com sucesso!</span>
      </template>
      <template #text>
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between border-md rounded-xl">
            <span class="text-h6 text-blue">{{ completeShortenedUrl }}</span>
            <v-btn
              variant="plain"
              @click="copyShortenedUrl"
            >
              Copiar
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template #actions>
        <v-btn
          class="ms-auto"
          text="Ok"
          @click="fecharDialog"
        />
      </template>
    </v-card>

    <v-snackbar v-model="snackbar" timeout="2000" color="green">
      <span class="text-weight-bold text-h6">URL copiada com sucesso!</span>
    </v-snackbar>
  </v-dialog>
</template>
