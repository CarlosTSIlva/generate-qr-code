import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const inputNomeStore = defineStore('inputNome', () => {
  const inputNome = ref("")
    const inputNomeComputed = computed(() => {
        return inputNome.value
    })


  return { inputNome, inputNomeComputed }
})
