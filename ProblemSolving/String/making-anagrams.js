// https://www.hackerrank.com/challenges/making-anagrams/problem

const makingAnagrams = (strA, strB) => {
  const strACountMap = createCountMapFromString(strA);
  const strBCountMap = createCountMapFromString(strB);
  return getEntriesDistanceSum(strACountMap, strBCountMap);
};

const createCountMapFromString = (str) => (
  [...str].reduce((map, char) => {
      const count = map.has(char) ? map.get(char) + 1 : 1;
      map.set(char, count);
      return map;
    }, new Map())
);

const getEntriesDistanceSum = (mapA, mapB) => {
  const setA = new Set([...mapA.keys()]);
  const setB = new Set([...mapB.keys()]);

  const intersectionSum =
    getIntersectionEntries(setA, setB)
      .reduce((sum, char) => sum + Math.abs(mapA.get(char) - mapB.get(char)), 0);

  const differenceASum =
    getDifferenceEntries(setA, setB)
      .reduce((sum, char) => sum + mapA.get(char), 0);

  const differenceBSum =
    getDifferenceEntries(setB, setA)
      .reduce((sum, char) => sum + mapB.get(char), 0);

  return intersectionSum + differenceASum + differenceBSum;
};

const getIntersectionEntries = (setA, setB) => [
  ...new Set([...setA].filter(key => setB.has(key)))
];

const getDifferenceEntries = (setA, setB) => [
  ...new Set([...setA].filter(key => !setB.has(key)))
];
