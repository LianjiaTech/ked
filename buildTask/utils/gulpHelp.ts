import path from 'path';

const cwd = process.cwd();

function getProjectPath(...filePath: string[]) {
  return path.join(cwd, ...filePath);
}

function resolve(moduleName: string) {
  return require.resolve(moduleName);
}

export { getProjectPath, resolve };
