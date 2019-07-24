// https://www.hackerrank.com/challenges/2d-array/problem

const sum = (...args) => args.reduce((prev, cur) => (
  prev + cur
));

const getHourGlassSumAt = (array, topRow, leftCol) => {
  const centerCol = leftCol + 1;
  const rightCol = leftCol + 2;
  const centerRow = topRow + 1;
  const bottomRow = topRow + 2;

  const topRowSum = sum(...array[topRow].slice(leftCol, rightCol + 1));
  const centerRowSum = array[centerRow][centerCol];
  const bottomRowSum = sum(...array[bottomRow].slice(leftCol, rightCol + 1));

  return sum(...[topRowSum, centerRowSum, bottomRowSum]);
};

const create2DArray = (rowNum, colNum) => (
  Array.from({length: rowNum}, () => Array.from({length: colNum}))
);

const getHourglassSumArray = array => {
  const {length} = array;
  const sumArrayLength = length - 2;
  const sumArray = create2DArray(sumArrayLength, sumArrayLength);

  for (let row = 0; row < sumArrayLength; row += 1) {
    for (let col = 0; col < sumArrayLength; col += 1) {
      sumArray[row][col] = getHourGlassSumAt(array, row, col);
    }
  }

  return sumArray;
};

const hourglassSum = array => {
  const hourGlassSumArray = getHourglassSumArray(array);
  const {length} = hourGlassSumArray;
  let max = -Infinity;
  for (let row = 0; row < length; row += 1) {
    for (let col = 0; col < length; col += 1) {
      max = Math.max(max, hourGlassSumArray[row][col]);
    }
  }

  return max;
};
