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
    <div class="flex justify-between mt-3">
      <div>
        <button
          :disabled="this.incrementButtonsDisabled"
          @click="increaseInspired"
          class="bg-green-400 hover:bg-green-300 mb-2"
        >
          I see the light!
        </button>
        <p>{{ this.inspired }}</p>
      </div>
      <div>
        <button
          :disabled="this.incrementButtonsDisabled"
          @click="increaseNotInspired"
          class="bg-red-400 hover:bg-red-300 mb-2"
        >
          Are you serious?
        </button>
        <p>{{ this.notInspired }}</p>
      </div>
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
      inspired: 0,
      notInspired: 0,
      incrementButtonsDisabled: true,
    };
  },
  methods: {
    getQuote: async function () {
      try {
        const dataFromApi = await apiService.getKanyeQuote();
        this.quote = dataFromApi.quote;
        this.incrementButtonsDisabled = false;
      } catch (e) {
        console.error("Error in api call", e);
      }
    },
    increaseInspired() {
      this.inspired += 1;
      this.incrementButtonsDisabled = true;
    },
    increaseNotInspired() {
      this.notInspired += 1;
      this.incrementButtonsDisabled = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
