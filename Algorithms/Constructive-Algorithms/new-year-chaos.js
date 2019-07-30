/**
 * @title New Year Chaos
 * @difficulty Medium
 * @link https://www.hackerrank.com/challenges/new-year-chaos/problem
 */

const getDistFromIdx = (line, idx) => {
  const num = idx + 1;
  let dist = 1;
  while (dist <= 2 && line[idx - dist] !== num) {
    dist++;
  }

  return dist;
};

const fixLine = (line, dist, idx) => {
  const fixed = line;
  const num = line[idx - dist];
  for (let i = dist; i > 0; i--) {
    fixed[idx - i] = fixed[idx - i + 1];
  }
  fixed[idx] = num;

  return fixed;
};

// Complete the minimumBribes function below.
const minimumBribes = query => {
  const {length} = query;
  let line = query;
  let cnt = 0;

  for (let i = length - 1; i >= 0; i--) {
    if (line[i] !== i + 1) {
      const dist = getDistFromIdx(line, i);
      if (dist <= 2) {
        cnt += dist;
        line = fixLine(line, dist, i);
      } else {
        console.log('Too chaotic');

        return;
      }
    }
  }

  console.log(cnt);
};
