import React from 'react';
import { render, mount } from 'enzyme';
import { Col, Row } from '../grid';
import mountTest from '../../../tests/shared/mountTest';

jest.mock('enquire.js', () => {
  let that;
  let unmatchFun;
  return {
    unregister: jest.fn(),
    register: (media, options) => {
      if (media === '(max-width: 575px)') {
        that = this;
        options.match.call(that);
        unmatchFun = options.unmatch;
      }
    },
    callunmatch() {
      unmatchFun.call(that);
    },
  };
});

describe('Grid', () => {
  mountTest(Row);
  mountTest(Col);

  it('should render Col', () => {
    const wrapper = render(<Col span={2} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Row', () => {
    const wrapper = render(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  it('when typeof gutter is object', () => {
    const wrapper = mount(<Row gutter={{ xs: 8, sm: 16, md: 24 }} />);
    expect(wrapper.instance().getGutter()).toEqual([8, 0]);
  });

  it('when typeof gutter is object array', () => {
    const wrapper = mount(
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
        ]}
      />,
    );
    expect(wrapper.instance().getGutter()).toEqual([8, 8]);
  });

  it('when typeof gutter is object array in large screen', () => {
    const wrapper = mount(
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
          { xs: 8, sm: 16, md: 24, lg: 100, xl: 400 },
        ]}
      />,
    );
    wrapper.setState({
      screens: { md: true, lg: true, xl: true },
    });
    expect(wrapper.instance().getGutter()).toEqual([40, 400]);
  });

  it('renders wrapped Col correctly', () => {
    const MyCol = () => <Col span={12} />;
    const wrapper = render(
      <Row gutter={20}>
        <div>
          <Col span={12} />
        </div>
        <MyCol />
      </Row>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('when component has been unmounted, componentWillUnmount should be called', () => {
    const wrapper = mount(<Row />);
    const willUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
    wrapper.unmount();
    expect(willUnmount).toHaveBeenCalled();
  });

  it('should work correct when gutter is object', () => {
    // eslint-disable-next-line global-require
    const enquire = require('enquire.js');
    const wrapper = mount(<Row gutter={{ xs: 20 }} />);
    expect(wrapper.find('div').prop('style')).toEqual({
      marginLeft: -10,
      marginRight: -10,
    });
    enquire.callunmatch();
    expect(
      wrapper
        .update()
        .find('div')
        .prop('style'),
    ).toEqual({});
    wrapper.unmount();
    expect(enquire.unregister).toHaveBeenCalled();
  });

  it('should work currect when gutter is array', () => {
    const wrapper = mount(<Row gutter={[16, 20]} />);
    expect(wrapper.find('div').prop('style')).toEqual({
      marginLeft: -8,
      marginRight: -8,
      marginTop: -10,
      marginBottom: -10,
    });
  });
});
