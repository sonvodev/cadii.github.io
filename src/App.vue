<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-hello></app-hello>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/helloworld.vue'

export default {
  name: 'app',
  components: {
    'app-hello': HelloWorld
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
