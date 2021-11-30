// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp'
import { exec } from 'child_process'
import { logger } from './utils/logger'

const build = async (type: string) => {
  // build的参数是lib或者site

  if (type !== 'lib' && type !== 'site') {
    console.log('build type should be "lib" or "site",eg: build lib')
    return
  }
  if (type === 'lib') {
    logger.info('构建 lib...')
    return new Promise<void>((resolve, reject) => {
      const startDate = new Date()
      // 直接走gulp
      if (type === 'lib') {
        // @ts-nocheck
        require('./gulp/gulpfile')
        const start = process.hrtime()
        const metadata = {
          task: 'buildAll',
          hrDuration: null,
        }
        try {
          gulp.task(
            'buildAll',
            gulp.series('compile', 'dist', done => {
              logger.info(
                `build successed - ${(new Date().getTime() - startDate.getTime()) / 1000}s`,
              )
              resolve()
            }),
          )
        } catch {
          logger.error('打包失败')
          reject()
        }
        const taskInstance = gulp.task('buildAll')
        try {
          taskInstance.apply(gulp);
          (metadata.hrDuration as any) = process.hrtime(start);
          gulp.emit('task_stop', metadata)
          gulp.emit('stop')
        } catch (err) {
          err.hrDuration = process.hrtime(start)
          err.task = metadata.task
          gulp.emit('task_err', err)
        }
      }
    })
  }

  logger.info('构建 site...')
  await exec('NODE_ENV=production bisheng build -c ./site/bisheng.config.js')
}

const args = process.argv.slice(2)
const params: any = {}
args.forEach(item => {
  const param = item.split('=')
  params[param[0]] = param[1]
})
build(params.type)
