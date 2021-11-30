import * as React from 'react';
import * as PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import RcCheckbox from 'rc-checkbox';
import shallowEqual from 'shallowequal';
import CheckboxGroup, { CheckboxGroupContext } from './Group';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import warning from '../_util/warning';

export interface AbstractCheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
}

export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean;
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

class Checkbox extends React.Component<CheckboxProps, {}> {
  static Group: typeof CheckboxGroup;

  static __ANT_CHECKBOX = true;

  static defaultProps = {
    indeterminate: false,
  };

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };

  context: any;

  private rcCheckbox: any;

  componentDidMount() {
    const { value } = this.props;
    const { checkboxGroup = {} } = this.context || {};
    if (checkboxGroup.registerValue) {
      checkboxGroup.registerValue(value);
    }

    warning(
      'checked' in this.props || (this.context || {}).checkboxGroup || !('value' in this.props),
      'Checkbox',
      '`value` is not validate prop, do you mean `checked`?',
    );
  }

  shouldComponentUpdate(
    nextProps: CheckboxProps,
    nextState: {},
    nextContext: CheckboxGroupContext,
  ) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup)
    );
  }

  componentDidUpdate({ value: prevValue }: CheckboxProps) {
    const { value } = this.props;
    const { checkboxGroup = {} } = this.context || {};
    if (value !== prevValue && checkboxGroup.registerValue && checkboxGroup.cancelValue) {
      checkboxGroup.cancelValue(prevValue);
      checkboxGroup.registerValue(value);
    }
  }

  componentWillUnmount() {
    const { value } = this.props;
    const { checkboxGroup = {} } = this.context || {};
    if (checkboxGroup.cancelValue) {
      checkboxGroup.cancelValue(value);
    }
  }

  saveCheckbox = (node: any) => {
    this.rcCheckbox = node;
  };

  focus() {
    this.rcCheckbox.focus();
  }

  blur() {
    this.rcCheckbox.blur();
  }

  renderCheckbox = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { props, context } = this;
    const {
      prefixCls: customizePrefixCls,
      className,
      children,
      indeterminate,
      style,
      onMouseEnter,
      onMouseLeave,
      ...restProps
    } = props;
    const { checkboxGroup } = context;
    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const checkboxProps: CheckboxProps = { ...restProps };
    if (checkboxGroup) {
      checkboxProps.onChange = (...args) => {
        if (restProps.onChange) {
          restProps.onChange(...args);
        }
        checkboxGroup.toggleOption({ label: children, value: props.value });
      };
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
      checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
    }
    const classString = classNames(className, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: checkboxProps.disabled,
    });
    const checkboxClass = classNames({
      [`${prefixCls}-indeterminate`]: indeterminate,
    });
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        className={classString}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <RcCheckbox
          {...checkboxProps}
          prefixCls={prefixCls}
          className={checkboxClass}
          ref={this.saveCheckbox}
        />
        {children !== undefined && <span>{children}</span>}
      </label>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderCheckbox}</ConfigConsumer>;
  }
}

polyfill(Checkbox);

export default Checkbox;
