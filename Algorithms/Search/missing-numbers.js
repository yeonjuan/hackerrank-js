/**
 * @title Missing Numbers
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/missing-numbers/problem
 */

const getOnlyMissingNums = (missingCount, originCount) => {
  const onlyMissingNums = [];
  for (const [num, count] of Object.entries(originCount)) {
    if (count > Number(missingCount[num] || 0)) {
      onlyMissingNums.push(num);
    }
  }

  return onlyMissingNums;
};

const count = arr => arr.reduce((counter, num) => {
  counter[num] = (Number(counter[num]) || 0) + 1;

  return counter;
}, {});

const missingNumbers = (missingNums, originNums) => {
  const missingNumsCount = count(missingNums);
  const originNumsCount = count(originNums);

  return getOnlyMissingNums(missingNumsCount, originNumsCount)
    .sort((a, b) => a - b);
};
