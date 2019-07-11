// https://www.hackerrank.com/challenges/sock-merchant/problem

const getCountMap = colors => (
  colors.reduce((countMap, color) => {
    const count = countMap[color];
    countMap[color] = count ? count + 1 : 1;

    return countMap;
  }, Object.create(null))
);

const sockMerchant = (num, colors) => {
  const socksCountMap = getCountMap(colors);
  let pairCount = 0;
  for (const count of Object.values(socksCountMap)) {
    if (count >= 2) {
      pairCount += parseInt(count / 2, 10);
    }
  }

  return pairCount;
};
