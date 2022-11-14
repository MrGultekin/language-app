<template>
  <h3>{{ vocabProp.word }} and its meaning: {{ vocabProp.meaning }}</h3>
</template>

<script>
export default {
  name: "VocabMeaning",
  props: ["vocabProp"],
};
</script>

<style scoped></style>
