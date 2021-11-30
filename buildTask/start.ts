import { exec } from 'child_process'
import { mkdirSync } from 'fs'
// eslint-disable-next-line import/no-extraneous-dependencies
import rimraf from 'rimraf'
import { getProjectPath } from './utils/gulpHelp'
import { logger } from './utils/logger'

function start() {
  // 直接执行bisheng的启动
  logger.info('项目启动')
  rimraf.sync(getProjectPath('_site'))
  mkdirSync(getProjectPath('_site'))
  exec(
    `cross-env NODE_ENV=development concurrently "node ./scripts/generateColorLess" "bisheng start -c ./site/bisheng.config.js"`,
    (err) => {
      logger.error('启动失败', err)
    }
  )
}

start()
