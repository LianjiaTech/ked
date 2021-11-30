import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { enquireScreen } from 'enquire-js'
import { addLocaleData, IntlProvider } from 'react-intl'
import 'moment/locale/zh-cn'
import { ConfigProvider } from '@ke/ked'
import zhCN from '@ke/ked/es/locale/zh_CN'
import cnLocale from '../../zh-CN'

if (typeof window !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister())
  })
}

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style')

  // Expose to iframe
  window.react = React
  window['react-dom'] = ReactDOM
  window.ked = require('@ke/ked')
  /* eslint-enable global-require */
}

let isMobile = false
enquireScreen(b => {
  isMobile = b
})

export default class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    isMobile: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    const appLocale = cnLocale
    addLocaleData(appLocale.data)

    this.state = {
      appLocale,
      isMobile,
    }
  }

  getChildContext() {
    const { isMobile: mobile } = this.state
    return { isMobile: mobile }
  }

  componentDidMount() {
    const { router } = this.context
    router.listen(loc => {
      if (typeof window.ga !== 'undefined') {
        window.ga('send', 'pageview', loc.pathname + loc.search)
      }
      // eslint-disable-next-line
      if (typeof window._hmt !== 'undefined') {
        // eslint-disable-next-line
        window._hmt.push(['_trackPageview', loc.pathname + loc.search])
      }
    })

    const nprogressHiddenStyle = document.getElementById('nprogress-style')
    if (nprogressHiddenStyle) {
      this.timer = setTimeout(() => {
        nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle)
      }, 0)
    }

    enquireScreen(b => {
      this.setState({
        isMobile: !!b,
      })
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { children } = this.props
    const { appLocale } = this.state

    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <ConfigProvider locale={zhCN}>
          <div className="page-wrapper">{children}</div>
        </ConfigProvider>
      </IntlProvider>
    )
  }
}
