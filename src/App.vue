<script setup></script>

<template>
  <header class="text-xl font-bold text-center">
    <h1>Welcome to {{ vocabStore.nameOfApp }}</h1>
    <nav>
      <button @click="filter = 'all'">All Vocabs</button>
      <button @click="filter = 'isLearned'">Learned Vocabs</button>
    </nav>
    <img src="./components/icons/pina.svg" alt="pinaIcon" />
  </header>

  <div class="pl-12 text text-center" v-if="filter === 'all'">
    <p class="text-sm font-bold">
      Whole list has {{ vocabStore.getNumberOfAll }} words
    </p>
    <div v-for="vocab in vocabStore.vocabs" :key="vocab.id">
      <VocabDetails :vocabProp="vocab" />
    </div>
  </div>

  <div class="isLearned text text-center" v-if="filter === 'isLearned'">
    <p class="text-md font-bold">
      {{ vocabStore.getNumberOfLearned }} words have learned already.
    </p>
    <div v-for="vocab in vocabStore.getIsLearned">
      <VocabDetails :vocabProp="vocab" />
    </div>
  </div>

  <div class="meaning text text-center">
    <p class="text-md font-bold">
      {{ vocabStore.getNumberOfAll - vocabStore.getNumberOfLearned }} word(s)
      not learned yet
    </p>
    <div v-for="vocab in vocabStore.getNotLearned">
      <VocabMeaning :vocabProp="vocab" />
    </div>
  </div>
</template>

<script>
import { useVocabStore } from "./stores/vocabStore";
import VocabDetails from "./components/VocabDetails.vue";
import VocabMeaning from "./components/VocabMeaning.vue";
import { ref } from "vue";

export default {
  components: {
    VocabDetails,
    VocabMeaning,
  },
  setup() {
    const vocabStore = useVocabStore();
    const filter = ref("all");

    return { vocabStore, filter };
  },
};
</script>
