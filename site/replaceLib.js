/* eslint-disable */
'use strict';

const { dirname } = require('path');
const fs = require('fs');

function getProjectPath(...filePath) {
  return path.join(cwd, ...filePath);
}

function replacePath(path) {
  if (path.node.source && /\/lib\//.test(path.node.source.value)) {
    const esModule = path.node.source.value.replace('/lib/', '/es/');
    const esPath = dirname(getProjectPath('node_modules', esModule));
    if (fs.existsSync(esPath)) {
      path.node.source.value = esModule;
    }
  }
}



function replaceLib() {
  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath,
    },
  };
}

module.exports = replaceLib;
