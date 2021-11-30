import React from 'react'
import { injectIntl } from 'react-intl'
import { Modal, message, Icon } from '@ke/ked'
import { isLocalStorageNameSupported, loadScript } from '../utils'

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.lessLoaded = false
  }

  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (
      localStorage.getItem('antd@1.0.0-notification-sent') !== 'true' &&
      Date.now() < new Date('2017/12/20').getTime()
    ) {
      this.infoNewVersion()
    }
  }

  handleColorChange = color => {
    const changeColor = () => {
      const {
        intl: { messages },
      } = this.props
      window.less
        .modifyVars({
          '@primary-color': color,
        })
        .then(() => {
          Icon.setTwoToneColor({ primaryColor: color })
          message.success(messages['app.footer.primary-color-changed'])
        })
    }

    const lessUrl = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'

    if (this.lessLoaded) {
      changeColor()
    } else {
      window.less = {
        async: true,
        javascriptEnabled: true,
      }
      loadScript(lessUrl).then(() => {
        this.lessLoaded = true
        changeColor()
      })
    }
  }

  infoNewVersion() {
    const {
      intl: { messages },
    } = this.props
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img src="https://img.ljcdn.com/beike/ked/1617095504422.png" alt="KED" />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="/changelog">
              antd@1.0.0
            </a>
            {messages['app.publish.intro']}
            {messages['app.publish.old-version-guide']}
            {messages['app.publish.old-version-tips']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('antd@1.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    })
  }

  render() {
    return (
      <footer id="footer">
        <div className="bottom-bar">
          Made with<span className="heart">❤</span>by{' '}
          <span rel="noopener noreferrer">
            beike-FE
          </span>
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
