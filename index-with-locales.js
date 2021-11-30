const ked = require('./components')

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/)

ked.locales = {}

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/)
  ked.locales[matches[1]] = req(mod).default
})

module.exports = ked
