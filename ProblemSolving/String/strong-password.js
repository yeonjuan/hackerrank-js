// https://www.hackerrank.com/challenges/strong-password/problem

const minimumNumber = (length, password) => {
  const regExps = [/[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/, /[0-9]/];
  const unsatisfiedRegexCount = regExps.filter(regExps => !regExps.test(password)).length;
  const neededLength = 6 - length;
  return Math.max(unsatisfiedRegexCount, neededLength);
};
