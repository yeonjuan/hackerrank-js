// https://www.hackerrank.com/challenges/js10-loops/problem

const isVowel = letter => /^a|e|i|o|u/.test(letter);
const isConsonant = letter => !isVowel(letter);

const vowelsAndConsonants = letters => {
  [...letters].forEach(letter => {
    if (isVowel(letter)) {
      console.log(letter);
    }
  });
  [...letters].forEach(letter => {
    if (isConsonant(letter)) {
      console.log(letter);
    }
  });
};
