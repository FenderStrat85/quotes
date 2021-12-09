<template>
  <div class="quote-container">
    <h1>I want inspiration</h1>
    <div v-if="this.quote.length > 0">
      <h2>"{{ this.quote }}"</h2>
      <h3>From the wisdom of Kanye "the voice of this generation" West</h3>
    </div>
    <button class="bg-blue-600" @click="getQuote()">
      Click me for inspiration
    </button>
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
