/* eslint-disable import/no-extraneous-dependencies */
const client = require('webpack-theme-color-replacer/client')
const generate = require('@ant-design/colors/lib/generate').default

module.exports = {
  getAntdSerials(color) {
    const lightCount = 9
    const divide = 10
    // 淡化（即less的tint）
    let lightens = new Array(lightCount).fill(0)
    lightens = lightens.map((_, i) => client.varyColor.lighten(color, i / divide))
    const colorPalettes = generate(color)
    const rgb = client.varyColor.toNum3(color.replace('#', '')).join(',')
    return lightens.concat(colorPalettes).concat(rgb)
  },
  changeColor(color){
    if (!color) {
      return Promise.resolve()
    }
    const options = {
      // new colors array, one-to-one corresponde with `matchColors`
      newColors: this.getAntdSerials(color),
      changeUrl(cssUrl) {
        // while router is not `hash` mode, it needs absolute path
        return `/${cssUrl}`
      },
    }
    return client.changer.changeColor(options, Promise)
  },
}
