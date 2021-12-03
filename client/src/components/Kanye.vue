<template>
  <div>
    <h1>I want inspiration</h1>
    <button @click="getQuote()">Click me for the truth</button>
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
      console.log(dataFromApi.quote);
    },
  },
};
</script>

<style lang="scss" scoped></style>
