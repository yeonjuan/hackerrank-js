// https://www.hackerrank.com/challenges/game-of-thrones/problem

function gameOfThrones(str) {
  const countMap = getCountMap(str);
  const oddCountNum = [...countMap.values()].filter(count => count % 2 === 1).length;

  return str.length % 2 === 1 && oddCountNum === 1
    ? 'YES'
    : oddCountNum === 0
    ? 'YES'
    : 'NO';
}

const getCountMap = (str) => [...str].reduce((map, char) => {
  const count = map.has(char) ? map.get(char) + 1 : 1;
  map.set(char, count);
  return map;
}, new Map());
