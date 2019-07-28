/**
 * @title Conditional Statements: Switch
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-switch/problem
 */

const isGroupA = firstLetter => /^a|e|i|o|u/.test(firstLetter);

const isGroupB = firstLetter => /^b|c|d|f|g/.test(firstLetter);

const isGroupC = firstLetter => /^h|j|k|l|m/.test(firstLetter);

const isGroupD = firstLetter => /^n|p|q|r|s|t|v|w|x|y|z/.test(firstLetter);

const getLetter = letters => {
  let letter;
  const [firstLetter] = letters;
  if (isGroupA(firstLetter)) {
    letter = 'A';
  } else if (isGroupB(firstLetter)) {
    letter = 'B';
  } else if (isGroupC(firstLetter)) {
    letter = 'C';
  } else if (isGroupD(firstLetter)) {
    letter = 'D';
  }

  return letter;
};

