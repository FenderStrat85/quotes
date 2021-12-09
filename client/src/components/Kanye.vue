<template>
  <div class="quote-container">
    <h1>I want inspiration</h1>
    <div class="h-40" v-if="this.quote.length > 0">
      <h2>"{{ this.quote }}"</h2>
      <h3>From the wisdom of Kanye "the voice of this generation" West</h3>
    </div>
    <div>
      <button class="bg-blue-600 hover:bg-blue-500" @click="getQuote()">
        Click me for inspiration
      </button>
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
