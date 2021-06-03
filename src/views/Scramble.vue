<template>
  <h2>Scramble Chest Solver</h2>
  <input v-model="scrambledWord" placeholder="Scrambed word">
  <ul>
    <li v-for="result in results" :key="result">
      {{ result }}
    </li>
  </ul>
</template>

<script>
import Words from "!raw-loader!@/assets/scramble/words.txt";
import { createSolver } from "@/js/solver";

const rawWords = Words.split("\n");
const solver = createSolver(rawWords);

export default {
  name: "Scramble",
  data() {
    return {
      scrambledWord: null,
    };
  },
  computed: {
    results() {
      if (!this.scrambledWord) {
        return [];
      }

      const results = [];

      for (const match of solver.findMatches(this.scrambledWord)) {
        results.push(match.rawWord);
      }

      return results;
    },
  },
};
</script>
