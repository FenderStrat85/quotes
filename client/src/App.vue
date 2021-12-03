<template>
  <div id="app">
    <Trump />
    <Kanye />
  </div>
</template>

<script>
import Trump from "./components/Trump.vue";
import Kanye from "./components/Kanye.vue";

export default {
  name: "App",
  components: {
    Trump,
    Kanye,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
