import merge2 from 'merge2'
import webpack from 'webpack'
import through2 from 'through2'
import babel from 'gulp-babel'
import ts from 'gulp-typescript'
import rimraf from 'rimraf'
import stripCode from 'gulp-strip-code'
import getBabelCommonConfig from './config/getBabelCommonConfig'
import transformLess from './process/transformLess'
import { cssInjection } from '../utils/styleUtil'
import { getProjectPath } from '../utils/gulpHelp'
import { replaceLib } from './plugin/replaceLib'

const argv = require('minimist')(process.argv.slice(2))
const tsConfig = require('./config/getTSCommonConfig')()
const gulp = require('gulp')

const tsDefaultReporter = ts.reporter.defaultReporter()
const libDir = getProjectPath('lib')
const esDir = getProjectPath('es')

function dist(done) {
  rimraf.sync(getProjectPath('dist'))

  process.env.RUN_ENV = 'PRODUCTION'
  const webpackConfig = require('./config/webpackConf')
  try {
    // @ts-ignore
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error(err.stack || err)
        if (err) {
          console.error(err)
        }
        return
      }

      const info = stats.toJson()

      if (stats.hasErrors()) {
        console.error(info.errors)
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings)
      }

      const buildInfo = stats.toString({
        colors: true,
        children: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        hash: false,
        version: false,
      })
      console.log(buildInfo)

      done(0)
    })
  } catch (e) {
    console.log('build dist error', e)
  }
}

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules)
  // @ts-ignore
  delete babelConfig.cacheDirectory

  if (modules === false) {
    // @ts-ignore
    babelConfig.plugins.push(replaceLib)
  } else {
    babelConfig.plugins.push(require.resolve('babel-plugin-add-module-exports'))
  }
  let stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function z(file, encoding, next) {
      this.push(file.clone())
      if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
        const content = file.contents.toString(encoding)
        if (content.indexOf("'react-native'") !== -1) {
          next()
          return
        }

        file.contents = Buffer.from(cssInjection(content))
        file.path = file.path.replace(/index\.js/, 'css.js')
        this.push(file)
        next()
      } else {
        next()
      }
    }),
  )
  if (modules === false) {
    stream = stream.pipe(
      stripCode({
        start_comment: '@remove-on-es-build-begin',
        end_comment: '@remove-on-es-build-end',
      }),
    )
  }
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir))
}

function compile(modules?: any) {
  rimraf.sync(modules !== false ? libDir : esDir)
  const less = gulp
    .src(['components/**/*.less'])
    .pipe(
      through2.obj(function(file, encoding, next) {
        this.push(file.clone())
        if (
          file.path.match(/(\/|\\)style(\/|\\)index\.less$/) ||
          file.path.match(/(\/|\\)style(\/|\\)v2-compatible-reset\.less$/)
        ) {
          transformLess(file.path)
            .then(css => {
              file.contents = Buffer.from(css)
              file.path = file.path.replace(/\.less$/, '.css')
              this.push(file)
              next()
            })
            .catch(e => {
              console.error(e)
            })
        } else {
          next()
        }
      }),
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir))
  const assets = gulp
    .src(['components/**/*.@(png|svg)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir))
  let error = 0
  const source = ['components/**/*.tsx', 'components/**/*.ts', 'typings/**/*.d.ts']
  // allow jsx file in components/xxx/
  if (tsConfig.allowJs) {
    source.unshift('components/**/*.jsx')
  }
  const tsResult = gulp.src(source).pipe(
    ts(tsConfig, {
      error(e) {
        // @ts-ignore
        tsDefaultReporter.error(e)
        error = 1
      },
      finish: tsDefaultReporter.finish,
    }),
  )

  function check() {
    if (error && !argv['ignore-error']) {
      process.exit(1)
    }
  }

  tsResult.on('finish', check)
  tsResult.on('end', check)
  const tsFilesStream = babelify(tsResult.js, modules)
  const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir))
  return merge2([less, tsFilesStream, tsd, assets])
}

gulp.task(
  'dist',
  gulp.series(done => {
    dist(done)
  }),
)

gulp.task('compile-with-es', done => {
  console.log('[Parallel] Compile to es...')
  compile(false).on('finish', done)
})

gulp.task('compile-with-lib', done => {
  console.log('[Parallel] Compile to js...')
  compile().on('finish', done)
})

gulp.task('compile', gulp.parallel('compile-with-es', 'compile-with-lib'))
