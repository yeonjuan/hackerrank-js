// https://www.hackerrank.com/challenges/funny-string/problem

const funnyString = str => {
  const origin = toAsciiArray(str);
  const reverse = toAsciiArray(str).reverse();

  return isFunny(origin, reverse) ? 'Funny' : 'Not Funny';
};

const toAsciiArray = str => [...str].map(char => char.charCodeAt(0));

const isFunny = (origin, reversed) => (
  origin.every((value, index) => (
    index >= origin.length - 1
      ? true
      : Math.abs(origin[index] - origin[index + 1]) === Math.abs(reversed[index] - reversed[index + 1])
  ))
);
