import * as React from 'react';
import classNames from 'classnames';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import DefaultEmptyImg from './empty';
import SimpleEmptyImg from './simple';
import defaultEmptyImg from './images/empty.png'
import errorImg from './images/error.png'
import nopermissionImg from './images/nopermission.png'
import nowifiImg from './images/nowifi.png'

const defaultEmptySvg = <DefaultEmptyImg />;
const simpleEmptySvg = <SimpleEmptyImg />;

export interface TransferLocale {
  description: string;
}

export interface EmptyProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * @since 3.16.0
   */
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
}

interface EmptyType extends React.FC<EmptyProps> {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;

  PRESENTED_IMAGE_EMPTY: React.ReactNode;
  PRESENTED_IMAGE_ERROR: React.ReactNode;
  PRESENTED_IMAGE_NOPERMISSION: React.ReactNode;
  PRESENTED_IMAGE_NOWIFI: React.ReactNode;
}

const Empty: EmptyType = (props: EmptyProps) => (
  <ConfigConsumer>
    {({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        className,
        prefixCls: customizePrefixCls,
        image = defaultEmptyImg,
        description,
        children,
        imageStyle,
        title,
        ...restProps
      } = props;

      return (
        <LocaleReceiver componentName="Empty">
          {(locale: TransferLocale) => {
            const prefixCls = getPrefixCls('empty', customizePrefixCls);
            const des = typeof description !== 'undefined' ? description : locale.description;
            const alt = typeof des === 'string' ? des : 'empty';

            let imageNode: React.ReactNode = null;

            if (typeof image === 'string') {
              imageNode = <img alt={alt} src={image} />;
            } else {
              imageNode = image;
            }

            return (

              <div
                className={classNames(
                  prefixCls,
                  {
                    [`${prefixCls}-normal`]: image === simpleEmptySvg,
                  },
                  className,
                )}
                {...restProps}
              >
                {!!title && <div className={`${prefixCls}-title`}>{title}</div>}
                <div className={`${prefixCls}-image`} style={imageStyle}>
                  {imageNode}
                </div>
                {des && <p className={`${prefixCls}-description`}>{des}</p>}
                {children && <div className={`${prefixCls}-footer`}>{children}</div>}
              </div>
            );
          }}
        </LocaleReceiver>
      );
    }}
  </ConfigConsumer>
);

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptySvg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptySvg;

Empty.PRESENTED_IMAGE_EMPTY = defaultEmptyImg
Empty.PRESENTED_IMAGE_ERROR = errorImg
Empty.PRESENTED_IMAGE_NOPERMISSION = nopermissionImg
Empty.PRESENTED_IMAGE_NOWIFI = nowifiImg

export default Empty;
