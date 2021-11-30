import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface TimelineItemProps {
  prefixCls?: string;
  className?: string;
  color?: string;
  dot?: React.ReactNode;
  pending?: boolean;
  position?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  passed?: boolean;
}

const TimelineItem: React.SFC<TimelineItemProps> = props => (
  <ConfigConsumer>
    {({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls: customizePrefixCls,
        className,
        color = '',
        children,
        pending,
        dot,
        passed,
        ...restProps
      } = props;

      const prefixCls = getPrefixCls('timeline', customizePrefixCls);
      const itemClassName = classNames(
        {
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-pending`]: pending,
          [`${prefixCls}-passed`]: !!passed,
        },
        className,
      );

      const dotClassName = classNames({
        [`${prefixCls}-item-head`]: true,
        [`${prefixCls}-item-head-custom`]: dot,
        [`${prefixCls}-item-head-${color}`]: true,
      });

      return (
        <li {...omit(restProps, ['position'])} className={itemClassName}>
          <div className={`${prefixCls}-item-tail`} />
          <div
            className={dotClassName}
            style={{ borderColor: /blue|red|green|gray/.test(color) ? undefined : color }}
          >
            {dot}
          </div>
          <div className={`${prefixCls}-item-content`}>{children}</div>
        </li>
      );
    }}
  </ConfigConsumer>
);

TimelineItem.defaultProps = {
  color: 'blue',
  pending: false,
  position: '',
  passed: false,
};

export default TimelineItem;
