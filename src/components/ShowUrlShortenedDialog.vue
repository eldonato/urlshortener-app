<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

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
const { smAndDown } = useDisplay()
const showDialog = computed(() => props.dialog)
const snackbar = ref(false)

function fecharDialog() {
  emit('close')
}

function copyShortenedUrl() {
  navigator.clipboard.writeText(props.shortenedUrl)
  snackbar.value = true
}
</script>

<template>
  <v-dialog
    v-model="showDialog"
    :fullscreen="smAndDown ? true : false"
  >
    <div class="d-flex align-center justify-center fill-height px-5">
      <v-card
        class="mx-auto my-auto"
        max-width="500"
        width="100%"
      >
        <template #title>
          <v-icon color="green" icon="mdi-check-circle-outline" />
          <span class="pl-2">URL encurtada com sucesso!</span>
        </template>
        <template #text>
          <v-row
            class="d-flex border-md rounded-lg pa-3 my-2"
            :class="{
              'justify-center flex-column': smAndDown,
              'justify-space-between': !smAndDown,
            }"
          >
            <span class="text-blue" :class="{ 'text-h6': !smAndDown }">{{ props.shortenedUrl }}</span>
            <v-btn
              :class="{ 'mt-3': smAndDown }"
              :variant="smAndDown ? 'tonal' : 'plain'"
              @click="copyShortenedUrl"
            >
              Copiar
            </v-btn>
          </v-row>
        </template>
        <template #actions>
          <v-btn
            class="flex-grow-0 flex-shrink-0"
            text="Ok"
            @click="fecharDialog"
          />
        </template>
      </v-card>
    </div>

    <v-snackbar v-model="snackbar" timeout="2000" color="green">
      <span class="text-weight-bold text-h6">URL copiada com sucesso!</span>
    </v-snackbar>
  </v-dialog>
</template>
