import React from 'react'
import { mount } from 'enzyme'
import Avatar from '..'
import mountTest from '../../../../tests/shared/mountTest'

describe('Avatar Render', () => {
  mountTest(Avatar)

  let originOffsetWidth
  beforeAll(() => {
    // Mock offsetHeight
    originOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth').get
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get() {
        if (this.className === 'ant-avatar-string') {
          return 100
        }
        return 80
      },
    })
  })

  afterAll(() => {
    // Restore Mock offsetHeight
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get: originOffsetWidth,
    })
  })

  it('Render long string correctly', () => {
    const wrapper = mount(<Avatar>TestString</Avatar>)
    const children = wrapper.find('.ant-avatar-string')
    expect(children.length).toBe(1)
  })

  it('should render fallback string correctly', () => {
    const div = global.document.createElement('div')
    global.document.body.appendChild(div)

    const wrapper = mount(<Avatar src="http://error.url">Fallback</Avatar>, { attachTo: div })
    wrapper.instance().setScale = jest.fn(() => {
      if (wrapper.state().scale === 0.5) {
        return
      }
      wrapper.instance().setState({ scale: 0.5 })
    })
    wrapper.find('img').simulate('error')

    const children = wrapper.find('.ant-avatar-string')
    expect(children.length).toBe(1)
    expect(children.text()).toBe('Fallback')
    expect(wrapper.instance().setScale).toHaveBeenCalled()
    expect(div.querySelector('.ant-avatar-string').style.transform).toContain('scale(0.5)')

    wrapper.detach()
    global.document.body.removeChild(div)
  })

  it('should handle onError correctly', () => {
    const LOAD_FAILURE_SRC = 'http://error.url'
    const LOAD_SUCCESS_SRC = 'https://img.ljcdn.com/beike/ked/1617095504422.png'

    const div = global.document.createElement('div')
    global.document.body.appendChild(div)

    class Foo extends React.Component {
      state = {
        src: LOAD_FAILURE_SRC,
      }

      handleImgError = () => {
        this.setState({
          src: LOAD_SUCCESS_SRC,
        })
        return false
      }

      render() {
        const { src } = this.state
        return <Avatar src={src} onError={this.handleImgError} />
      }
    }

    const wrapper = mount(<Foo />, { attachTo: div })
    // mock img load Error, since jsdom do not load resource by default
    // https://github.com/jsdom/jsdom/issues/1816
    wrapper.find('img').simulate('error')

    expect(wrapper.find(Avatar).instance().state.isImgExist).toBe(true)
    expect(div.querySelector('img').getAttribute('src')).toBe(LOAD_SUCCESS_SRC)

    wrapper.detach()
    global.document.body.removeChild(div)
  })

  it('should show image on success after a failure state', () => {
    const LOAD_FAILURE_SRC = 'http://error.url'
    const LOAD_SUCCESS_SRC = 'https://img.ljcdn.com/beike/ked/1617095504422.png'

    const div = global.document.createElement('div')
    global.document.body.appendChild(div)

    // simulate error src url
    const wrapper = mount(<Avatar src={LOAD_FAILURE_SRC}>Fallback</Avatar>, { attachTo: div })
    wrapper.find('img').simulate('error')

    expect(wrapper.find(Avatar).instance().state.isImgExist).toBe(false)
    expect(wrapper.find('.ant-avatar-string').length).toBe(1)

    // simulate successful src url
    wrapper.setProps({ src: LOAD_SUCCESS_SRC })
    wrapper.update()

    expect(wrapper.find(Avatar).instance().state.isImgExist).toBe(true)
    expect(wrapper.find('.ant-avatar-image').length).toBe(1)

    // cleanup
    wrapper.detach()
    global.document.body.removeChild(div)
  })

  it('should calculate scale of avatar children correctly', () => {
    const wrapper = mount(<Avatar>Avatar</Avatar>)
    expect(wrapper.state().scale).toBe(0.72)
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get() {
        if (this.className === 'ant-avatar-string') {
          return 100
        }
        return 40
      },
    })
    wrapper.setProps({ children: 'xx' })
    expect(wrapper.state().scale).toBe(0.32)
  })
})
