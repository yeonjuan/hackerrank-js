/**
 * @title Counting Valleys
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/counting-valleys/problem
 */

const getCurrentDepth = (beforeDepth, direction) => beforeDepth + (direction === 'U' ? 1 : -1);
const isEnteringInValley = (isInValley, isBellowSeaLevel) => !isInValley && isBellowSeaLevel;

const countingValleys = (num, str) => {
  const initialState = {
    isInValley: false,
    depth: 0,
    valleysCount: 0
  };
  const {
    valleysCount: totalValleysCount
  } = [...str].reduce(
    ({isInValley, depth, valleysCount}, direction) => {
      const curDepth = getCurrentDepth(depth, direction);
      const isBelowSeaLevel = curDepth < 0;

      return {
        isInValley: isBelowSeaLevel,
        depth: curDepth,
        valleysCount: valleysCount + Number(isEnteringInValley(isInValley, isBelowSeaLevel))
      };
    }, initialState);

  return totalValleysCount;
};
