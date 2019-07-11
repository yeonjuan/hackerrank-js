// https://www.hackerrank.com/challenges/grading/problem

const shouldRounded = grade => (grade % 5 >= 3) && (grade >= 38);
const getRounded = grade => Math.round(grade / 5) * 5;

const gradingStudents = grades => (
  grades.map(grade => shouldRounded(grade) ? getRounded(grade) : grade)
);
