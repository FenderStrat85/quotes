<template>
  <div>
    <h1>I want the truth!!!!</h1>
    <button @click="getQuote()">Click me for the truth</button>
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
      console.log(dataFromApi.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
