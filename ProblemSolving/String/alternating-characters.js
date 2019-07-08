// https://www.hackerrank.com/challenges/alternating-characters/problem

const alternatingCharacters = str => {
  const alteredString = alternateString(str);

  return str.length - alteredString.length;
};

const alternateString = str => (
  [...str].reduce((altered, cur) => (
    altered.slice(-1) === cur
      ? altered
      : altered + cur
  ))
);
