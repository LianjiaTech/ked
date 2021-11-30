import fs from 'fs';
import { getProjectPath } from '../../utils/gulpHelp';

module.exports = function () {
  let my;
  if (fs.existsSync(getProjectPath('tsconfig.json'))) {
    my = require(getProjectPath('tsconfig.json')) || {};
  }
  return {
    noUnusedParameters: true,
      noUnusedLocals: true,
      strictNullChecks: true,
      target: 'es6',
      jsx: 'preserve',
      moduleResolution: 'node',
      declaration: true,
      allowSyntheticDefaultImports: true,
    ...my.compilerOptions,
  };
};
