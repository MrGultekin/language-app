import { defineStore } from "pinia";

export const useVocabStore = defineStore("vocabStore", {
  state: () => ({
    vocabs: [
      {
        id: 0,
        word: "Hello",
        meaning: "Hallo",
        isFav: true,
        isLearned: false,
        level: "Beginner",
        category: "Greetings",
      },
      {
        id: 1,
        word: "Goodbye",
        meaning: "Auf Wiedersehen",
        isFav: true,
        isLearned: false,
        level: "Beginner",
        category: "Greetings",
      },
      {
        id: 2,
        word: "How are you?",
        meaning: "Wie geht es dir?",
        isFav: true,
        isLearned: false,
        level: "Intermediate",
        category: "Introductions",
      },
      {
        id: 3,
        word: "I am fine",
        meaning: "Mir geht es gut",
        isFav: false,
        isLearned: true,
        level: "Intermediate",
        category: "Introductions",
      },
    ],
    nameOfApp: "Learn with Pineapple",
    i: 0,
  }),
  getters: {
    getIsLearned() {
      return this.vocabs.filter((v) => v.isLearned);
    },
    getNotLearned() {
      return this.vocabs.filter((v) => !v.isLearned);
    },
    getNumberOfAll: (state) => {
      return state.vocabs.length;
    },
    getNumberOfLearned() {
      return this.vocabs.reduce((p, c) => {
        return c.isLearned ? p + 1 : p;
      }, 0);
    },
  },
});
