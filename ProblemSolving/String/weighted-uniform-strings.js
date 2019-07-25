// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

const getWeight = char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

const weightedUniformStrings = (original, queries) => {
  const {length} = original;
  const subUniformWeight = new Set();

  for (let cur = 0; cur < length; cur++) {
    const weight = getWeight(original.charAt(cur));
    subUniformWeight.add(weight);
    let uniformed = 2;
    while (original.charAt(cur) === original.charAt(cur + 1)) {
      subUniformWeight.add(weight * uniformed);
      cur++;
      uniformed++;
    }
  }

  const ret = [];
  for (const query in queries) {
    if (subUniformWeight.has(queries[query])) {
      ret.push('Yes');
    } else {
      ret.push('No');
    }
  }

  return ret;
};
