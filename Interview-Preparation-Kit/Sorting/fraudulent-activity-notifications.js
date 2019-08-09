/**
 * @title Fraudulent Activity Notifications
 * @difficulty Median
 * @link https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
 */

const initState = {
  'countSorted': {},
  'recentExpenditure': 0,
  'numOverSpend': 0
};

const findValueAtIndex = (countSorted, findIndex) => {
  let curPosition = 0;
  let foundValue = 0;
  for (const num in countSorted) {
    if (countSorted.hasOwnProperty(num)) {
      curPosition += countSorted[num];
      if (curPosition > findIndex) {
        foundValue = num;
        break;
      }
    }
  }

  return parseInt(foundValue, 10);
};

const findMedian = (sortedArr, length) => {
  let median = findValueAtIndex(sortedArr, parseInt(length / 2, 10));
  median = (length % 2 === 0) ?
    median + findValueAtIndex(sortedArr, parseInt(length / 2, 10) - 1) :
    median * 2;

  return median;
};

const computeOverSpend = (spendState, spend, index, restExpenditure) => {
  const {length: restDays} = restExpenditure;
  const {length: recordDays} = spendState.recentExpenditure;

  const median = findMedian(spendState.countSorted, recordDays);

  if (spend >= median) {
    spendState.numOverSpend++;
  }

  spendState.countSorted[spendState.recentExpenditure.shift()]--;
  spendState.recentExpenditure.push(spend);
  spendState.countSorted[spend] = (spendState.countSorted[spend] || 0) + 1;

  if (index === restDays - 1) {
    return spendState.numOverSpend;
  }

  return spendState;
};

function activityNotifications(expenditure, d) {
  initState.recentExpenditure = expenditure.slice(0, d);
  initState.countSorted = initState.recentExpenditure.reduce((countSorted, value) => {
    countSorted[value] = (countSorted[value] || 0) + 1;

    return countSorted;
  }, {});

  const restExpenditure = expenditure.splice(d);
  const ret = restExpenditure.reduce(computeOverSpend, initState);

  return ret;
}
