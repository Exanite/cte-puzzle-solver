const countCharacters = function (rawWord) {
  const characters = {};

  for (const character of rawWord) {
    if (!characters[character]) {
      characters[character] = 0;
    }

    characters[character]++;
  }

  return characters;
};

const hasSameCharacters = function (a, b) {
  if (a.rawWord.length !== b.rawWord.length) {
    return false;
  }

  for (const character in a.characters) {
    if (!b.characters[character]) {
      return false;
    }

    if (a.characters[character] !== b.characters[character]) {
      return false;
    }
  }

  return true;
};

const createWord = function (rawWord) {
  rawWord = rawWord.toLowerCase();

  return {
    rawWord: rawWord,
    characters: countCharacters(rawWord),
    hasSameCharacters(other) {
      return hasSameCharacters(this, other);
    },
  };
};

const createSolver = function (rawWords) {
  const words = [];

  for (const rawWord of rawWords) {
    words.push(createWord(rawWord));
  }

  return {
    words,
    findMatches(scrambledRawWord) {
      const results = [];
      const target = createWord(scrambledRawWord);

      for (const word of this.words) {
        if (word.hasSameCharacters(target)) {
          results.push(word);
        }
      }

      return results;
    },
  };
};

export {
  countCharacters,
  createWord,
  hasSameCharacters,
  createSolver,
};