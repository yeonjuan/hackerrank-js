// https://www.hackerrank.com/challenges/camelcase/problem

const camelcase = string => {
  let ret = 1;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) >= 'A' && string.charAt(i) < 'a') {
      ret++;
    }
  }

  return ret;
};
