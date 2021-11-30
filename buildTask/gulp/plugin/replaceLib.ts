import { dirname } from 'path';
import fs from 'fs';
import { getProjectPath } from '../../utils/gulpHelp';

function replacePath(path: any) {
  if (path.node.source && /\/lib\//.test(path.node.source.value)) {
    const esModule = path.node.source.value.replace('/lib/', '/es/');
    const esPath = dirname(getProjectPath('node_modules', esModule));
    if (fs.existsSync(esPath)) {
      path.node.source.value = esModule;
    }
  }
}

export function replaceLib() {
  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath,
    },
  };
}

