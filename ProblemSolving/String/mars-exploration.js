// https://www.hackerrank.com/challenges/mars-exploration/problem

const marsExploration = messages => {
  const SOS = 'SOS';
  const {length: lengthSOS} = SOS;
  const {length: lengthMsgs} = messages;
  const msgNum = lengthMsgs / lengthSOS;

  const origin = SOS.repeat(msgNum);

  let ret = 0;
  for (let index = 0; index < lengthMsgs; index++) {
    if (origin.charAt(index) !== messages.charAt(index)) {
      ret++;
    }
  }

  return ret;
};
