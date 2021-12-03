<template>
  <div>
    <h1>I want the truth!!!!</h1>
    <button @click="getQuote()">Click me for the truth</button>
    <div v-if="this.quote.length > 0">
      <h2>{{ this.quote }}</h2>
    </div>
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
      const dataFromApi = await apiService.getTrumpQuote();
      this.quote = dataFromApi.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
