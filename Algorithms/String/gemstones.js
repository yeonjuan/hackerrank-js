/**
 * @title Gemstones
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/gem-stones/problem
 */

const gemstones = arr => {
  const {length} = arr;
  const gem = new Set(Array.from(arr[0]));

  for (let i = 1; i < length; i++) {
    for (const g of gem) {
      if (!arr[i].includes(g)) {
        gem['delete'](g);
      }
    }
  }

  return gem.size;
};
