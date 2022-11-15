<template>
  <div class="back-card">
    <h2>Merhaba</h2>

    <div class="button-group">
      <button class="button flip" @click="flipCard">&#10007;</button>
      <button class="button flip" @click="flipCard">Flip</button>

      <button class="button next" @click="nextCard">&checkmark;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackCard",
  methods: {
    flipCard() {
      const flipElement = document.getElementById("flip-element");
      flipElement.style.transform = "rotateY(0deg)";
    },
  },
};

</script>

<style scoped></style>
