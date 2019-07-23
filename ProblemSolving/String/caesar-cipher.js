// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

const caesarCipher = (letters, shift) => {
  const range = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const shiftMod = shift % range;

  const ret = [...letters].map(letter => {
    if (/[a-z]/.test(letter)) {
      let moved = letter.charCodeAt(0) + shiftMod;
      if (moved > 'z'.charCodeAt(0)) {
        moved -= range;
      }

      return String.fromCharCode(moved);
    }
    if (/[A-Z]/.test(letter)) {
      let moved = letter.charCodeAt(0) + shiftMod;
      if (moved > 'Z'.charCodeAt(0)) {
        moved -= range;
      }

      return String.fromCharCode(moved);
    }

    return letter;
  });

  return ret.join('');
};
