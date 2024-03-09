<script setup lang="ts">
import { inputNomeStore } from '@/stores/input_nome'
import QrCodeVue from './components/QrCodeVue.vue'


const inputNome = inputNomeStore()


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <h1>Aqui e seu site vue para gerar o qr code escreva no input aqui <span>&darr;</span> </h1>
  </header>

  <main>
    <input type="text" v-model="inputNome.inputNome" >
    <QrCodeVue :urlOpen="inputNome.inputNomeComputed"/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: var(--section-gap);

  input {
    margin-top: 30px;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid var(black);
    border-radius: 0.5rem;
  }

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
