const compareCategories = (categoryA, categoryB) => categoryA.title.localeCompare(categoryB.title)

const DIFFICULTIES = {
  Easy: 0,
  Medium: 1,
  Hard: 2,
};
const compareDifficulties = (difficultyA, difficultyB) => (
  DIFFICULTIES[difficultyA] - DIFFICULTIES[difficultyB]
);

const compareTitles = (titleA, titleB) => (
  titleA.localeCompare(titleB)
);

const compareProblems = (problemA, problemB) => {
  const difficultyDiff = compareDifficulties(problemA.difficulty, problemB.difficulty);
  if (difficultyDiff !== 0) {
    return difficultyDiff;
  }
  return compareTitles(problemA.title, problemB.title);
};

module.exports = {
  compareCategories,
  compareProblems,
};
