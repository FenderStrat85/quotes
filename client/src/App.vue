<template>
  <div>
    <h1>Truth, Inspiration and Conversation</h1>
    <div id="app" class="w-screen">
      <Trump class="w-6/12 h-3/6" />
      <Kanye class="w-6/12 h-3/6" />
    </div>
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
  margin-top: 30px;
  display: flex;
}
</style>
