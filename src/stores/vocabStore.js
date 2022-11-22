import { defineStore } from "pinia";

export const useVocabStore = defineStore("vocabStore", {
  state: () => ({
    vocabs: [],
    nameOfApp: "Learn with Pineapple",
    loading: false,
    i: 0,
  }),
  actions: {
    async fetchVocabs() {
      this.loading = true;
      const res = await fetch("http://localhost:3000/vocabs");
      const data = await res.json();
      this.vocabs = data;
      this.loading = false;
    },
  },
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
    getWordAnsMeaning() {
      return this.vocabs[this.i].word + " - " + this.vocabs[this.i].meaning;
    },
  },
});
