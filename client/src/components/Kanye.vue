<template>
  <div>
    <h1>I want inspiration</h1>
    <button @click="getQuote()">Click me for inspiration</button>
    <div v-if="this.quote.length > 0">
      <h2>{{ this.quote }}</h2>
    </div>
  </div>
</template>

<script>
import apiService from "../services/apiService";
export default {
  name: "Kanye",
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    getQuote: async function () {
      const dataFromApi = await apiService.getKanyeQuote();
      this.quote = dataFromApi.quote;
    },
  },
};
</script>

<style lang="scss" scoped></style>
