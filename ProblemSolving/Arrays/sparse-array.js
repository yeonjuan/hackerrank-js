// https://www.hackerrank.com/challenges/sparse-arrays/problem

const matchingStrings = (targetStrings, queries) => (
  queries.map(query => (
    targetStrings.filter(target => target === query).length)
  )
);
