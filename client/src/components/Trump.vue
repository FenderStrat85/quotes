<template>
  <div class="quote-container">
    <h1>I want the truth</h1>
    <div v-if="this.quote.length > 0">
      <h2 data-test="quote-display">"{{ this.quote }}"</h2>
      <h3>Courtesy of the bulls**t machine the is Donald J Drumpf</h3>
    </div>
    <button class="bg-red-600" @click="getQuote()">
      Click me for the truth
    </button>
  </div>
</template>

<script>
import apiService from "../services/apiService";
export default {
  name: "Trump",
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    getQuote: async function () {
      try {
        const dataFromApi = await apiService.getTrumpQuote();
        this.quote = dataFromApi.value;
      } catch (e) {
        console.log("Error in apiCall");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
