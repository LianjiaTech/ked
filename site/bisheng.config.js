const path = require('path')
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const fs = require('fs')
const changeTheme = require('./changeTheme')
const replaceLib = require('./replaceLib')

const isDev = process.env.NODE_ENV === 'development'
const usePreact = process.env.REACT_ENV === 'preact'

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib)
      }
      // eslint-disable-next-line
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1,
      )
    } else if (rule.use) {
      alertBabelConfig(rule.use)
    }
  })
}

function getPublicPath() {
  if (!isDev) {
    const packageJson = fs.readFileSync((path.join(process.cwd(), 'package.json'))).toString();
    const pkg = JSON.parse(packageJson);
    const publicPath = process.env.API_ENV === 'test' ? `//file.ljcdn.com/nebula/kegem/test/site/${pkg.pid}/${pkg.version
      }/` : `//file.ljcdn.com/nebula/kegem/site/${pkg.pid}/${pkg.version
      }/`
    return publicPath
  }
  return '/'
}

function getRootPath() {
  if (!isDev) {
    const packageJson = fs.readFileSync((path.join(process.cwd(), 'package.json'))).toString();
    const pkg = JSON.parse(packageJson);
    const publicPath = `/site/${pkg.pid}/${pkg.version}/index/`
    return publicPath
  }
  return ''
}

module.exports = {
  port: 9001,
  hash: true,
  root: getRootPath(),
  source: {
    components: './components',
    docs: './docs',
    changelog: ['CHANGELOG.md'],
  },
  theme: './site/theme',
  themeConfig: {
    categoryOrder: {
      其他: 99,
      Other: 99,
      Components: 100,
      组件: 100,
      友情链接: 101,
    },
    typeOrder: {
      General: 0,
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
      Feedback: 5,
      Other: 6,
      通用: 0,
      布局: 1,
      导航: 2,
      数据录入: 3,
      数据展示: 4,
      反馈: 5,
      其他: 6,
      // 数据可视化: 7,
    },
  },
  htmlTemplate: './site/theme/static/template.html',
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index.html']
    }
    // if (filePath.endsWith('/index.html')) {
    //   return [filePath, filePath.replace(/\/index\.html$/, '/index.html')]
    // }
    // if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
    //   return [filePath, ffilePath)]
    // }
    return filePath
  },
  doraConfig: {
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    config.output.publicPath = getPublicPath()
    // eslint-disable-next-line
    config.resolve.alias = {
      '@ke/ked/lib': path.join(process.cwd(), 'components'),
      '@ke/ked/es': path.join(process.cwd(), 'components'),
      '@ke/ked': path.join(process.cwd(), 'index'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    }

    // eslint-disable-next-line
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    }

    if (usePreact) {
      // eslint-disable-next-line
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
        'react-router': 'react-router',
      })
    }

    if (isDev) {
      // eslint-disable-next-line
      config.devtool = 'source-map'
    }

    alertBabelConfig(config.module.rules)

    config.plugins.push(new CSSSplitWebpackPlugin({ size: 8000 }))

    const colors = changeTheme.getAntdSerials('#0984f9')
    const newClors = colors.concat(['#0984f9', '#1890ff'])
    config.plugins.push(
      new ThemeColorReplacer({
        matchColors: newClors, // 主色系列
        injectCss: true, // optional. Inject css text in js file, not need to download `theme-colors-xxx.css` any more.
        isJsUgly: process.env.NODE_ENV !== 'development',
        changeSelector(selector) {
          switch (selector) {
            case '.ked-calendar-today .ked-calendar-date':
              return `:not(.ked-calendar-selected-date)${selector}`
            case '.ked-btn:focus,.ked-btn:hover':
              return '.ked-btn:focus:not(.ked-btn-primary),.ked-btn:hover:not(.ked-btn-primary)'
            case '.ked-btn.active,.ked-btn:active':
              return '.ked-btn.active:not(.ked-btn-primary),.ked-btn:active:not(.ked-btn-primary)'
            default:
              return selector
          }
        },
      }),
    )
    return config
  },

  htmlTemplateExtraData: {
    isDev,
    usePreact,
    cdn: getPublicPath(),
  },
}
