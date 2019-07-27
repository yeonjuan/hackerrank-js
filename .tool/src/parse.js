const path = require('path');
const parseComment = require('comment-parser');
const {
  readdirSync,
  readFileSync
} = require('fs');
const {
  isTag,
  getContentFromSource,
  getTitleFromPath,
  getGithubPath,
  isDir
} = require('./utils');

const parseSolution = (solutionFile) => {
  const solutionSource = readFileSync(solutionFile, 'utf8');
  const parsedResult = Object.create(null);
  const parsed = parseComment(solutionSource);
  if (parsed.length <= 0) {
    return null;
  }
  const tags = parsed[0].tags;
  tags.forEach(({tag, source}) => {
    if (isTag(tag)) {
      parsedResult[tag] = getContentFromSource(tag, source);
    }
  });
  parsedResult.path = getGithubPath(solutionFile);
  return parsedResult;
};

const parseCategory = (categoryDir) => {
  const parsedResult =  {
    title: getTitleFromPath(categoryDir),
    problems: [],
  };
  const solutionFiles = readdirSync(categoryDir);

  solutionFiles.forEach(solutionFile => {
    const result = parseSolution(path.join(categoryDir, solutionFile));
    if (result) {
      parsedResult.problems.push(result);
    }
  });
  return parsedResult;
};

const parseSection = (sectionDir) => {
  const parsedResult = {
    title: getTitleFromPath(sectionDir),
    categories: [],
  };
  const categoryDirs = readdirSync(sectionDir);
  categoryDirs.forEach((categoryDir) => {
    if (isDir(path.join(sectionDir, categoryDir))) {
      const result = parseCategory(path.join(sectionDir, categoryDir));
      parsedResult.categories.push(result);
    }
  });
  return parsedResult;
};

const parse = (sectionDirs) => {
  const parsedResult = {
    sections: [],
  };
  sectionDirs.forEach((sectionDir) => {
    if (isDir(sectionDir)) {
      const result = parseSection(path.resolve(sectionDir));
      parsedResult.sections.push(result);
    }
  });
  return parsedResult;
};

module.exports = parse;
