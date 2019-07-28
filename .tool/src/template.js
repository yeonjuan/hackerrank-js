const {existsSync, readFileSync} = require('fs');
const handlebars = require('handlebars');
const replaceAll = (str, search, replacement) => str.split(search).join(replacement);
handlebars.registerHelper('makeTitle', (title) => replaceAll(title, '-', ' '));
handlebars.registerHelper('makeAnchor', (title) => replaceAll(title, ' ', '-'));

const getTemplate = ({path, obj}) => {
  if (!existsSync(path)) {
    throw new Error(`File Not Found: ${path}`);
  }
  const templateSource = readFileSync(path, 'utf8');
  return handlebars.compile(templateSource)(obj);
};

module.exports = (templatePairs) => (
  templatePairs
    .map((pair) => getTemplate(pair))
);
