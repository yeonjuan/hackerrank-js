// https://www.hackerrank.com/challenges/strong-password/problem

const minimumNumber = (length, password) => {
  const regExps = [/[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/, /[0-9]/];
  const unsatisfiedRegexCount = regExps.filter(regExp => !regExp.test(password)).length;
  const neededLength = 6 - length;

  return Math.max(unsatisfiedRegexCount, neededLength);
};
