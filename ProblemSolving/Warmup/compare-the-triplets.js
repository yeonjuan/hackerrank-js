// https://www.hackerrank.com/challenges/compare-the-triplets/problem

const zipArrays = (arrA, arrB) => arrA.map((elem, index) => [arrA[index], arrB[index]]);
const reduceRatingsToScores = ([scoreA, scoreB], [ratingA, ratingB]) => (
  [
    scoreA + (ratingA > ratingB ? 1 : 0),
    scoreB + (ratingB > ratingA ? 1 : 0)
  ]
);

const compareTriplets = (tripletA, tripletB) => (
  zipArrays(tripletA, tripletB)
    .reduce(reduceRatingsToScores, [0, 0])
);
