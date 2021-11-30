/**
 * @description
 * @date  2016/11/17.
 */
export default (name, nodePath = '') => {
  nodePath &&
    Array.isArray(nodePath) &&
    nodePath.map(path => {
      if (!module.paths.includes(path)) {
        module.paths = module.paths.concat(path);
      }
    });
  return require.resolve(name);
};
