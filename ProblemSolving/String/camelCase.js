// https://www.hackerrank.com/challenges/camelcase/problem

const isUpperCase = word => word >= 'A' && word < 'a';

const camelcase = string => {
  let ret = 1;
  const {length} = string;

  for (let i = 0; i < length; i++) {
    if (isUpperCase(string.charAt(i))) {
      ret++;
    }
  }

  return ret;
};
