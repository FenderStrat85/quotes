<template>
  <div class="quote-container">
    <h1>I want the truth</h1>
    <div class="h-40" v-if="this.quote.length > 0">
      <h2 data-test="quote-display">"{{ this.quote }}"</h2>
      <h3>Courtesy of the bulls**t machine the is Donald J Drumpf</h3>
    </div>
    <div>
      <button class="bg-red-600 hover:bg-red-500" @click="getQuote()">
        Click me for the truth
      </button>
    </div>
    <div class="flex justify-between mt-3">
      <div>
        <button
          :disabled="this.incrementButtonsDisabled"
          @click="increaseAgree"
          class="bg-green-400 hover:bg-green-300 mb-2"
        >
          Sounds about right
        </button>
        <p>{{ this.agree }}</p>
      </div>
      <div>
        <button
          :disabled="this.incrementButtonsDisabled"
          @click="increaseDisagree"
          class="bg-red-400 hover:bg-red-300 mb-2"
        >
          I smell bulls**t
        </button>
        <p>{{ this.disagree }}</p>
      </div>
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
      agree: 0,
      disagree: 0,
      incrementButtonsDisabled: true,
    };
  },
  methods: {
    getQuote: async function () {
      try {
        const dataFromApi = await apiService.getTrumpQuote();
        this.quote = dataFromApi.value;
        this.incrementButtonsDisabled = false;
      } catch (e) {
        console.error("Error in api call", e);
      }
    },
    increaseAgree() {
      this.agree += 1;
      this.incrementButtonsDisabled = true;
    },
    increaseDisagree() {
      this.disagree += 1;
      this.incrementButtonsDisabled = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
