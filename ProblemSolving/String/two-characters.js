// https://www.hackerrank.com/challenges/two-characters/problem

const alternate = originString => {
  const chars = [...originString];
  const uniques = [...new Set(chars)];
  let max = 0;

  forUniquePairs(uniques, pair => {
    const alteredChars = chars.filter(char => pair.includes(char));
    if (isValid(alteredChars)) {
      max = Math.max(max, alteredChars.length);
    }
  });

  return max;
};

const forUniquePairs = (array, fn) => {
  const {length} = array;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      fn([array[i], array[j]]);
    }
  }
};

const isValid = array => (
  array.every((char, index, {length}) => {
    if (index >= length - 1) {
      return true;
    }

    return char !== array[index + 1];
  })
);
