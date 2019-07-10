// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

const shouldGoFirst = (pre, shift) => {
  const post = String.fromCharCode(pre.charCodeAt(0) + shift);

  return (post > 'z') ? true : !!((pre <= 'Z' && post.charCodeAt(0) > 'Z'.charCodeAt(0)));
};

const isSymbol = letter => (letter >= 'A' && letter <= 'Z') ? false :
  !((letter >= 'a' && letter <= 'z'));

const caesarCipher = (letters, shift) => {
  const {length} = letters;
  shift = shift % 26;

  let ret = '';

  for (let i = 0; i < length; i++) {
    const cur = letters.charAt(i);
    if (isSymbol(cur)) {
      ret += cur;
    } else if (shouldGoFirst(cur, shift)) {
      const moved = (cur <= 'Z') ? (String.fromCharCode('A'.charCodeAt(0) + (cur.charCodeAt(0) + shift - 'Z'.charCodeAt(0)) - 1)) : String.fromCharCode('a'.charCodeAt(0) + (cur.charCodeAt(0) + shift - 'z'.charCodeAt(0)) - 1);
      ret += moved;
    } else {
      ret += String.fromCharCode(cur.charCodeAt(0) + shift);
    }
  }

  return ret;
};