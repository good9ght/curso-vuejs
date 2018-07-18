<template>
  <div id="app">
    <mensagem>{{ msg }}</mensagem>
  </div>
</template>

<script>
import Mensagem from "./components/Mensagem.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  components: {
    Mensagem
  }
}
</script>

<style>
</style>
