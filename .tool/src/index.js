const parse = require('./parse');
const {
  Config,
  HEADER_TEMPLATE_PATH,
  TOC_TEMPLATE_PATH,
  PROBLEMS_TEMPLATE_PATH
} = require('./utils');
const {
  compareCategories,
  compareProblems,
} = require('./comparators');
const template = require('./template');
const fs = require('fs');
const path = require('path');
const sections = Config.getSections();
const parsed = parse(sections);

parsed.sections.forEach(section => {
  section.categories.sort(compareCategories);
  section.categories.forEach(category => {
    category.problems.sort(compareProblems);
  });
});

const templates = template([
  {path: HEADER_TEMPLATE_PATH, obj: null},
  {path: TOC_TEMPLATE_PATH, obj: parsed},
  {path: PROBLEMS_TEMPLATE_PATH, obj: parsed}
]);

const readme = templates.reduce((md,cur) => {
  return md + cur;
}, '');
const readmePath = path.resolve('./README.md');
const createREADME = (newReadme) => {
  if (fs.existsSync(readmePath)) {
    fs.unlinkSync(readmePath)
  }
  fs.writeFileSync(readmePath, newReadme);
};
createREADME(readme);


