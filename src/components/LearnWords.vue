<template>
  <div v-if="vocabProp[all.i]" class="front-card">
    <h3 class="total-words">{{ vocabProp.length }} words to learn today</h3>
    <!--<h2>{{ vocabProp[all.i].word }}</h2>-->
    <h2>{{ vocabProp[all.i].word }}</h2>
    <!--    <h2>{{ vocabProp[all.i].word }}</h2>-->
    <!--    <h2>{{ vocabProp.map((key, vocab) => vocab[i].word) }}</h2>-->
    <!--                <h3>{{ vocabId[index].meaning }}</h3>-->
    <h3>{{ vocabId[all.i].meaning }}</h3>
    <!--        <h3>{{ index }}</h3>-->
    <!--    <h3>{{ all.i }}</h3>-->

    <div class="button-group">
      <button class="button previous" @click="$emit('prev')">Prev</button>
      <button class="button next" @click="$emit('next')">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnWords",
  props: ["vocabProp", "vocabId", "all"],
};
</script>

<style scoped></style>
