<template>
  <div class="front-card">
    <h2>{{ vocabProp[all.i].word }}</h2>
    <!--    <h2>{{ vocabProp.map((key, vocab) => vocab[0].word) }}</h2>-->
    <!--        <h3>{{ vocabId[index].meaning }}</h3>-->
    <!--    <h3>{{ vocabId[all.i].meaning }}</h3>-->
    <!--        <h3>{{ index }}</h3>-->
    <!--        <h3>{{ all.i }}</h3>-->

    <div class="button-group">
      <button class="button previous" @click="$emit('prev')">Prev</button>
      <button class="button flip" @click="flipCard">Flip</button>
      <button class="button next" @click="$emit('next')">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontCard",
  props: ["vocabProp", "vocabId", "all"],
  // data() {
  //    return {
  //     index: 0,
  //   };
  // },

  methods: {
    // flipCard() {
    //   const flipElement = document.getElementById("flip-element");
    //   flipElement.style.transform = "rotateY(180deg)";
    // },
    // nextWord() {
    //   if (this.index < this.vocabProp.length - 1) {
    //     this.index++;
    //   } else {
    //     this.index = 0;
    //   }
    // },
    // previousWord() {
    //   if (this.index > 0) {
    //     this.index--;
    //   } else {
    //     this.index = this.vocabProp.length - 1;
    //   }
    // },
    // nextWord: function () {
    //   if (this.all.i < this.vocabProp.length - 1) {
    //     this.all.i++;
    //   } else {
    //     this.all.i = 0;
    //   }
    // },
    flipCard() {
      const flipElement = document.getElementById("flip-element");
      flipElement.style.transform = "rotateY(180deg)";
    },
  },
};
</script>

<style scoped></style>
