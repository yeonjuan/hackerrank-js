/**
 * @title Common Child
 * @difficulty Medium
 * @link https://www.hackerrank.com/challenges/common-child/problem
 */

const lca = (string1, string2) => {
  const s1 = (string1.length <= string2.length) ? [...string1] : [...string2];
  const s2 = (string1.length <= string2.length) ? [...string2] : [...string1];
  const {length: rowLength} = s1;
  const {length: colLength} = s2;
  let row = s1.reduce(acc => {
    acc.push(0);

    return acc;
  }, []);
  row.push(0);

  const cur = [...row];

  for (let idxS2 = 0; idxS2 < colLength; idxS2++) {
    for (let idxS1 = 0; idxS1 < rowLength; idxS1++) {
      if (s1[idxS1] === s2[idxS2]) {
        cur[idxS1 + 1] = row[idxS1] + 1;
      } else {
        cur[idxS1 + 1] = (Math.max(cur[idxS1], row[idxS1 + 1]));
      }
    }
    row = [...cur];
  }

  return cur[rowLength];
};

const commonChild = (s1, s2) => lca(s1, s2);
