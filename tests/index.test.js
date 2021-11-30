import pkg from '../package.json'

const testDist = process.env.LIB_DIR === 'dist'

describe('ked dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const ked = testDist ? require('../dist/ked') : require('../components') // eslint-disable-line
    expect(Object.keys(ked)).toMatchSnapshot()
  })

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have ked.version', () => {
      const ked = require('../dist/ked') // eslint-disable-line
      expect(ked.version).toBe(pkg.version)
    })
  }
})
