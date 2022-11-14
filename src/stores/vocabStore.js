import { defineStore } from "pinia";

export const useVocabStore = defineStore("vocabStore", {
  state: () => ({
    vocabs: [
      {
        id: 1,
        word: "Hello",
        meaning: "Merhaba",
        isFav: true,
        isLearned: false,
        level: "Beginner",
        category: "Greetings",
      },
      {
        id: 2,
        word: "Goodbye",
        meaning: "Güle güle",
        isFav: true,
        isLearned: false,
        level: "Beginner",
        category: "Greetings",
      },
      {
        id: 3,
        word: "How are you?",
        meaning: "Nasılsın?",
        isFav: true,
        isLearned: true,
        level: "Intermediate",
        category: "Introductions",
      },
      {
        id: 4,
        word: "I am fine",
        meaning: "İyiyim",
        isFav: false,
        isLearned: true,
        level: "Intermediate",
        category: "Introductions",
      },
    ],
    nameOfApp: "Learn with Pineapple",
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
