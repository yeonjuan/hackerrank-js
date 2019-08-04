// https://www.hackerrank.com/challenges/crush/problem

const queriesToTriplets = queries => (
  queries
    .reduce((arr, [start, end, value]) => {
      arr.push(
        ['start', start, value],
        ['end', end, value]
      );

      return arr;
    }, [])
);

const compareTriplets = ([typeA, indexA], [, indexB]) => {
  if (indexA !== indexB) {
    return indexA - indexB;
  }
  if (typeA === 'start') {
    return -1;
  }

  return 1;
};

const maxReducer = ([max, before], [type, , value]) => {
  const current = type === 'start'
    ? before + value
    : before - value;

  return [Math.max(max, current), current];
};

const arrayManipulation = (size, queries) => {
  const [max] = queriesToTriplets(queries)
    .sort(compareTriplets)
    .reduce(maxReducer, [-Infinity, 0]);

  return max;
};
