<template>
  <div class="front-card">
    <h2>{{ vocabProp[0].word }}</h2>
    <!--    <h2>{{ vocabProp.map((key, vocab) => vocab[0].word) }}</h2>-->
    <h3>{{ vocabId[0] }}}</h3>
    <div class="button-group">
      <button class="button question">?</button>
      <button class="button flip" @click="flipCard">Flip</button>
      <button class="button next" @click="nextCard(vocabProp[0])">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontCard",
  props: ["vocabProp", "vocabId"],

  methods: {
    flipCard() {
      const flipElement = document.getElementById("flip-element");
      flipElement.style.transform = "rotateY(180deg)";
    },
    nextCard(id) {
      const flipElement = document.getElementById("flip-element");
      i++;
    },
  },
};
</script>

<style scoped></style>
