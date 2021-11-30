import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import MockDate from 'mockdate';
import DatePicker from '..';
import Input from '../../input';
import { selectDate, openPanel } from './utils';

const { MonthPicker, WeekPicker, RangePicker } = DatePicker;

describe('DatePicker', () => {
  beforeEach(() => {
    MockDate.set(moment('2016-11-22'));
  });

  afterEach(() => {
    MockDate.reset();
  });

  it('should focus trigger input after select date in DatePicker', () => {
    const wrapper = mount(<DatePicker />, { attachTo: document.body });
    openPanel(wrapper);
    selectDate(wrapper, moment('2016-11-23'));
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode()).toBe(document.activeElement);
    wrapper.unmount();
  });

  it('should focus trigger input after select date in RangePicker', () => {
    const wrapper = mount(<RangePicker />, { attachTo: document.body });
    openPanel(wrapper);
    selectDate(wrapper, moment('2016-11-23'), 0);
    selectDate(wrapper, moment('2016-11-28'), 1);
    expect(wrapper.find('.ant-calendar-picker').getDOMNode()).toBe(document.activeElement);
    wrapper.unmount();
  });

  it('should focus trigger input after select date in MonthPicker', () => {
    const wrapper = mount(<MonthPicker />, { attachTo: document.body });
    openPanel(wrapper);
    wrapper
      .find('.ant-calendar-month-panel-month')
      .first()
      .simulate('click');
    wrapper
      .find('.ant-calendar-month-panel-cell')
      .at(6)
      .hasClass('ant-calendar-month-panel-selected-cell');
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode()).toBe(document.activeElement);
    wrapper.unmount();
  });

  it('should focus trigger input after select date in WeekPicker', () => {
    const wrapper = mount(<WeekPicker />, { attachTo: document.body });
    openPanel(wrapper);
    selectDate(wrapper, moment('2016-11-23'));
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode()).toBe(document.activeElement);
    wrapper.unmount();
  });

  it('should not auto focus trigger input when open prop is true in DatePicker', () => {
    const wrapper = mount(<DatePicker open />, { attachTo: document.body });
    const wrapperInput = mount(<Input />);
    wrapperInput.instance().select();
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode()).not.toBe(
      document.activeElement,
    );
    wrapper.unmount();
  });

  it('should not auto focus trigger input when open prop is true in RangePicker', () => {
    const wrapper = mount(<RangePicker open />, { attachTo: document.body });
    const wrapperInput = mount(<Input />);
    wrapperInput.instance().select();
    expect(wrapper.find('.ant-calendar-picker').getDOMNode()).not.toBe(document.activeElement);
    wrapper.unmount();
  });

  it('should not auto focus trigger input when open prop is true in WeekPicker', () => {
    const wrapper = mount(<WeekPicker open />, { attachTo: document.body });
    const wrapperInput = mount(<Input />);
    wrapperInput.instance().select();
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode()).not.toBe(
      document.activeElement,
    );
    wrapper.unmount();
  });

  it('should not auto focus trigger input when open prop is true in MonthPicker', () => {
    const wrapper = mount(<MonthPicker open />, { attachTo: document.body });
    const wrapperInput = mount(<Input />);
    wrapperInput.instance().select();
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode()).not.toBe(
      document.activeElement,
    );
    wrapper.unmount();
  });
});
