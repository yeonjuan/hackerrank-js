// https://www.hackerrank.com/challenges/js10-function/problem

const factorial = (n) => {
    let ret = 1, i = 1;
    for (; i <= n; i++) {
        ret *= i;
    }
    return ret;
}

