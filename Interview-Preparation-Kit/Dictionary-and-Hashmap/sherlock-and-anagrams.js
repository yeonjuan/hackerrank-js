/**
 * @title Sherlock and Anagrams
 * @difficulty Medium
 * @link https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
 */

const isAnagram = (origin, cand) => {
  for (let i = 0; i < cand.length; i++) {
    const del = origin.indexOf(cand.charAt(i));
    if (del !== -1) {
      origin = origin.substring(0, del) + origin.substring(del + 1);
    } else {
      return false;
    }
  }

  return true;
};

const sherlockAndAnagrams = query => {
  const {length} = query;
  let cnt = 0;
  for (let l = 1; l < length; l++) {
    for (let start = 0; start + l < length; start++) {
      const origin = query.substring(start, start + l);
      for (let idx = start + 1; idx + l <= length; idx++) {
        const cand = query.substring(idx, idx + l);
        cnt = (isAnagram(origin, cand)) ? cnt + 1 : cnt;
      }
    }
  }

  return cnt;
};
