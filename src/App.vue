<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import HelloWorld from './components/HelloWorld.vue'
import VueQrcode from 'vue-qrcode'


const counter = useCounterStore()


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <h1>Counter: {{ counter.count }}</h1>
    <h1>Couter double: {{ counter.doubleCount }}</h1>
    <button @click="counter.increment()">Increment</button>
    <vue-qrcode
    value="https://www.1stg.me"
    @change="onDataUrlChange"
  />
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
