<template>
  <div class="back-card">
    <h2>{{ vocabProp[all.i].meaning }}</h2>
    <div class="button-group">
      <button class="button flip" @click="true">&#10007;</button>
      <button class="button flip" @click="flipCard">Flip</button>
      <button class="button next" @click="false">&checkmark;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackCard",
  props: ["vocabProp", "all"],
  methods: {
    flipCard() {
      const flipElement = document.getElementById("flip-element");
      flipElement.style.transform = "rotateY(0deg)";
    },
  },
};
</script>

<style scoped></style>
