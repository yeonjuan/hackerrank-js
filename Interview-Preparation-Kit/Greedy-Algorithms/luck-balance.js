/**
 * @title Luck Balance
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/luck-balance/problem
 */

const luckBalance = (limit, contests) => {
  const {length} = contests;
  const sorted = contests.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }

    return (a[1] > b[1]) ? 1 : -1;
  });

  let numImportant = length - [...sorted].findIndex(x => x[1] === 1);
  numImportant = (numImportant > length) ? 0 : numImportant;

  const unImportant = [...sorted].slice(0, length - numImportant);
  const loseImportant = [...sorted].slice(length - numImportant, length - numImportant + limit);
  const winImportant = [...sorted].slice(length - numImportant + limit);

  const sumLuck = (unImportant.reduce((sum, [luck]) => sum + luck, 0) || 0) +
        (loseImportant.reduce((sum, [luck]) => sum + luck, 0) || 0) -
        (winImportant.reduce((sum, [luck]) => sum + luck, 0) || 0);

  return sumLuck;
};
