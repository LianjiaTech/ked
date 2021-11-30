/*
 * 配置浮层，包含：皮肤替换
 */

import React from 'react'
import { Drawer, Button, Icon, Tooltip } from '@ke/ked'
import '../../static/configLayer.less'

const changeTheme = require('../../../changeTheme')

export default class Demo extends React.Component {
  state = {
    visible: false,
    curSkin: 0,
    skinInfo: [
      {
        key: 'beike',
        color: '#3498F7',
        des: '贝壳蓝',
        antManCssFile:
          'https://s1.ljcdn.com/saas-skin-static/css/default-antman.9716c27e88153028a26e.css',
      },
      {
        key: 'deyou',
        color: '#DD1F1F',
        des: '德祐红',
        antManCssFile:
          'https://s1.ljcdn.com/saas-skin-static/css/skin001-antman.d5c0a3c7cf55ff247a47.css',
      },
      {
        key: 'link',
        color: '#29CB8A',
        des: '链家绿',
        antManCssFile:
          'https://s1.ljcdn.com/saas-skin-static/css/skin002-antman.ed1718c7b550b25dd5ca.css',
      },
      {
        key: '21century',
        color: '#C6A654',
        des: '21世纪黄',
        antManCssFile:
          'https://s1.ljcdn.com/saas-skin-static/css/skin003-antman.69a78894f2cca259fb4a.css',
      },
      {
        key: 'backup',
        color: '#E65828',
        des: '备用金',
        antManCssFile:
          'https://s1.ljcdn.com/saas-skin-static/css/skin004-antman.668db323a92366293c04.css',
      },
    ],
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  // 切换皮肤
  changeSkin = ({ item, i }) => {
    changeTheme.changeColor(item.color)
    this.setState({
      curSkin: i,
    })
  }

  render() {
    const { visible, skinInfo, curSkin } = this.state
    return (
      <section>
        <div className="configBtnWrap" style={{ right: `${visible ? '256px' : '0'}` }}>
          <Button type="primary" icon="setting" size="large" onClick={this.showDrawer} />
        </div>
        <Drawer title="风格设置" placement="right" onClose={this.onClose} visible={visible}>
          <section className="contentWrap">
            <h3 className="themeTitle">主题色</h3>
            <div className="themeContent">
              {skinInfo.map((item, i) => (
                <Tooltip placement="top" title={`${item.des}`} key={item.des}>
                  <div
                    className="themeBlock"
                    style={{ backgroundColor: `${item.color}` }}
                    onClick={() => this.changeSkin({ item, i })}
                  >
                    {curSkin === i && <Icon type="check" />}
                  </div>
                </Tooltip>
              ))}
            </div>
          </section>
        </Drawer>
      </section>
    )
  }
}
