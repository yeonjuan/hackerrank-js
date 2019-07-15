//https://www.hackerrank.com/challenges/js10-switch/problem

const isGroupA = letters => /^a|e|i|o|u/.test(letters[0]);

const isGroupB = letters => /^b|c|d|f|g/.test(letters[0]);

const isGroupC = letters => /^h|j|k|l|m/.test(letters[0]);

const isGroupD = letters => /^n|p|q|r|s|t|v|w|x|y|z/.test(letters[0]);

function getLetter(s) {
    let letter;
    if (isGroupA(s)) letter = "A";
    else if (isGroupB(s)) letter = "B";
    else if (isGroupC(s)) letter = "C";
    else if (isGroupD(s)) letter = "D";
    else  {
        console.log("error!");
        return;
    }
    return letter;
}