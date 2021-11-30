import less from 'less';
import postcss from 'postcss';
import NpmImportPlugin from 'less-plugin-npm-import';
import { readFileSync } from 'fs';
import path from 'path';
import postcssConfig from '../config/postcssConfig';

export default function transformLess(
  lessFile: any,
  config = { cwd: process.cwd() },
) {
  const { cwd = process.cwd() } = config;
  const resolvedLessFile = path.resolve(cwd, lessFile);

  let data = readFileSync(resolvedLessFile, 'utf-8');
  data = data.replace(/^\uFEFF/, '');

  // Do less compile
  const lessOpts = {
    paths: [path.dirname(resolvedLessFile)],
    filename: resolvedLessFile,
    plugins: [new NpmImportPlugin({ prefix: '~' })],
    javascriptEnabled: true,
  };
  return less
    .render(data, lessOpts)
    .then((result: any) =>
      postcss(postcssConfig.plugins).process(result.css, { from: undefined }),
    )
    .then((r: any) => r.css);
}
