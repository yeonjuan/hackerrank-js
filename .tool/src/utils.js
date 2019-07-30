const path = require('path');
const fs = require('fs');

const TAG_TYPES = ['difficulty', 'link', 'title'];

const isTag = (tag) => TAG_TYPES.includes(tag);
const getContentFromSource = (tag, source) => source.replace(`@${tag}`, '').trim();
const getTitleFromPath = (filePath) => filePath.slice(filePath.lastIndexOf('/') + 1).trim();
const getGithubPath = (filePath) => filePath.replace(path.resolve('./'), '.').trim();
const isDir = (dir) => !(/\./g.test(dir)) && fs.lstatSync(dir).isDirectory();

const CONFIG_PATH = path.resolve('./.genrc.json');
const HEADER_TEMPLATE_PATH = path.resolve('./.templates/header.md');
const PROBLEMS_TEMPLATE_PATH = path.resolve('./.templates/problems.md');
const TOC_TEMPLATE_PATH = path.resolve('./.templates/toc.md');


const Config = (() => {
  const configFile = fs.readFileSync(CONFIG_PATH);
  const config = JSON.parse(configFile);
  return {
    getSections: () => config.sections
  };
})();


module.exports = {
  isTag,
  getContentFromSource,
  getTitleFromPath,
  Config,
  getGithubPath,
  HEADER_TEMPLATE_PATH,
  PROBLEMS_TEMPLATE_PATH,
  TOC_TEMPLATE_PATH,
  isDir
};
