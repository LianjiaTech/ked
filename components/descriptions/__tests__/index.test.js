import React from 'react';
import MockDate from 'mockdate';
import { mount } from 'enzyme';
import Descriptions from '..';
import mountTest from '../../../../tests/shared/mountTest';
import { resetWarned } from '../../_util/warning';

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

describe('Descriptions', () => {
  mountTest(Descriptions);

  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    MockDate.reset();
    errorSpy.mockReset();
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it('when max-width: 575px，column=1', () => {
    // eslint-disable-next-line global-require
    const enquire = require('enquire.js');
    const wrapper = mount(
      <Descriptions>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item>No-Label</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper.find('tr')).toHaveLength(5);
    expect(wrapper.find('.ant-descriptions-item-no-label')).toHaveLength(1);

    enquire.callunmatch();
    wrapper.unmount();
  });

  it('when max-width: 575px，column=2', () => {
    // eslint-disable-next-line global-require
    const enquire = require('enquire.js');
    const wrapper = mount(
      <Descriptions column={{ xs: 2 }}>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper.find('tr')).toHaveLength(2);

    enquire.callunmatch();
    wrapper.unmount();
  });

  it('column is number', () => {
    // eslint-disable-next-line global-require
    const wrapper = mount(
      <Descriptions column="3">
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('when typeof column is object', () => {
    const wrapper = mount(
      <Descriptions column={{ xs: 8, sm: 16, md: 24 }}>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper.instance().getColumn()).toBe(8);
    wrapper.unmount();
  });

  it('warning if ecceed the row span', () => {
    resetWarned();

    mount(
      <Descriptions column={3}>
        <Descriptions.Item label="Product" span={2}>
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Billing" span={2}>
          Prepaid
        </Descriptions.Item>
      </Descriptions>,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [ked: Descriptions] Sum of column `span` in a line exceeds `column` of Descriptions.',
    );
  });

  it('when item is rendered conditionally', () => {
    const hasDiscount = false;
    const wrapper = mount(
      <Descriptions>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        {hasDiscount && <Descriptions.Item label="Discount">$20.00</Descriptions.Item>}
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('vertical layout', () => {
    // eslint-disable-next-line global-require
    const wrapper = mount(
      <Descriptions layout="vertical">
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('Descriptions.Item support className', () => {
    const wrapper = mount(
      <Descriptions>
        <Descriptions.Item label="Product" className="my-class">
          Cloud Database
        </Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Descriptions support colon', () => {
    const wrapper = mount(
      <Descriptions colon={false}>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Descriptions support style', () => {
    const wrapper = mount(
      <Descriptions style={{ backgroundColor: '#e8e8e8' }}>
        <Descriptions.Item>Cloud Database</Descriptions.Item>
      </Descriptions>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('keep key', () => {
    const wrapper = mount(
      <Descriptions>
        <Descriptions.Item key="bamboo" />
      </Descriptions>,
    );

    expect(wrapper.find('Col').key()).toBe('label-bamboo');
  });

  // https://github.com/ant-design/ant-design/issues/19887
  it('should work with React Fragment', () => {
    if (!React.Fragment) {
      return;
    }
    const wrapper = mount(
      <Descriptions>
        <Descriptions.Item label="bamboo">bamboo</Descriptions.Item>
        <>
          <Descriptions.Item label="bamboo">bamboo</Descriptions.Item>
          <Descriptions.Item label="bamboo">bamboo</Descriptions.Item>
        </>
      </Descriptions>,
    );

    expect(wrapper.render()).toMatchSnapshot();
  });
});
