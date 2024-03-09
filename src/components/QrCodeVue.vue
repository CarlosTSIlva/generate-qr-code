<template>
    <vue-qrcode
        :value="urlOpen"
        @change="onDataUrlChange"
        type='image/png'
    />
  </template>
  <script >
  import VueQrcode from 'vue-qrcode'

  export default {
    props: {
      urlOpen: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        dataUrl: null,
      }
    },
    components: {
      VueQrcode,
    },
    methods: {
      onDataUrlChange(dataUrl) {
        this.dataUrl = dataUrl
      },
    },
  }
  </script>