<script setup></script>

<template>
  <!--  <header class="text-xl font-bold text-center">-->
  <!--  <h1>Welcome to {{ vocabStore.nameOfApp }}</h1>-->
  <SelectMode @mode="mode" />
  <!--loading-->
  <!--  <div v-if="loading" class="loading">-->
  <!--    <h3>Loading...</h3>-->
  <!--  </div>-->

  <!--    <nav>-->
  <!--      <button @click="filter = 'all'">All Vocabs</button>-->
  <!--      <button @click="filter = 'isLearned'">Learned Vocabs</button>-->
  <!--    </nav>-->
  <!--&lt;!&ndash;    <img src="./components/icons/pina.svg" alt="pinaIcon" />&ndash;&gt;-->
  <!--  </header>-->

  <!--  Test Mode is enabled-->
  <div class="flip-card" v-if="modeValue === 'test'">
    <div class="flip-card">
      <div id="flip-element" class="flip-card-inner">
        <FrontCard
          :vocab-prop="vocabStore.vocabs"
          :vocab-id="vocabStore.vocabs.map((vocab) => vocab)"
          :all="vocabStore"
          @next="next()"
          @prev="prev()"
        />
        <BackCard :vocab-prop="vocabStore.vocabs" :all="vocabStore" />
      </div>
    </div>
  </div>

  <!--Learning Mode is enabled-->
  <div class="learn flip-card" v-if="modeValue === 'learn'">
    <LearnWords
      :vocab-prop="vocabStore.vocabs"
      :vocab-id="vocabStore.vocabs.map((vocab) => vocab)"
      :all="vocabStore"
      @next="next()"
      @prev="prev()"
    />
  </div>


  <!--  <div class="pl-12 text text-center" v-if="filter === 'all'">-->
  <!--    <p class="text-sm font-bold">-->
  <!--      Whole list has {{ vocabStore.getNumberOfAll }} words-->
  <!--    </p>-->
  <!--    <div v-for="vocab in vocabStore.vocabs" :key="vocab.id">-->
  <!--      <VocabDetails :vocabProp="vocab" />-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="isLearned text text-center" v-if="filter === 'isLearned'">-->
  <!--    <p class="text-md font-bold">-->
  <!--      {{ vocabStore.getNumberOfLearned }} words have learned already.-->
  <!--    </p>-->
  <!--    <div v-for="vocab in vocabStore.getIsLearned">-->
  <!--      <VocabDetails :vocabProp="vocab" />-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="meaning text text-center">-->
  <!--    <p class="text-md font-bold">-->
  <!--      {{ vocabStore.getNumberOfAll - vocabStore.getNumberOfLearned }} word(s)-->
  <!--      not learned yet-->
  <!--    </p>-->
  <!--    <div v-for="vocab in vocabStore.getNotLearned">-->
  <!--      <VocabMeaning :vocabProp="vocab" />-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import { useVocabStore } from "./stores/vocabStore";
import VocabDetails from "./components/VocabDetails.vue";
import VocabMeaning from "./components/VocabMeaning.vue";
import FrontCard from "@/components/FrontCard.vue";
import { ref } from "vue";
import BackCard from "@/components/BackCard.vue";
import SelectMode from "@/components/SelectMode.vue";
import LearnWords from "@/components/LearnWords.vue";

export default {
  components: {
    VocabDetails,
    VocabMeaning,
    FrontCard,
    BackCard,
    SelectMode,
    LearnWords,
  },
  setup() {
    const vocabStore = useVocabStore();
    // fetch vocabs from store
    vocabStore.fetchVocabs();

    const modeValue = ref("memorized");

    const mode = (mode) => {
      console.log(mode);
      modeValue.value = mode;
      return { mode };
    };

    // const next = () => {
    //   console.log("next");
    //   vocabStore.i++;
    // };
    const next = () => {
      console.log("next");
      if (vocabStore.i < vocabStore.vocabs.length - 1) {
        vocabStore.i++;
      } else {
        vocabStore.i = 0;
      }
    };
    const prev = () => {
      console.log("prev");
      if (vocabStore.i > 0) {
        vocabStore.i--;
      } else {
        vocabStore.i = vocabStore.vocabs.length - 1;
      }
    };

    return {
      vocabStore,
      next,
      prev,
      modeValue,
      mode,
      loading: vocabStore.loading,
    };
  },
};
</script>
