import * as React from 'react';

const CircleFinished = (props: any) => {
  const {prefixCls, iconWidth} = props
  return (
    <svg
      className={`${prefixCls}-icon`}
      width={iconWidth}
      height={iconWidth}
      style={{ margin: '0 auto' }}
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="对勾@3x" fill="#009944" fillRule="nonzero">
          <g
            id="分组-12"
            transform="translate(14.745804, 14.720515) rotate(-45.000000) translate(-14.745804, -14.720515) translate(1.745804, 7.220515)"
          >
            <rect
              id="矩形"
              x="4.09272616e-12"
              y="-9.09494702e-13"
              width="4"
              height="14.1818182"
              rx="2"
            />
            <path
              d="M12.8477086,-0.21789409 C13.9522781,-0.21789409 14.8477086,0.67753641 14.8477086,1.78210591 L14.8477086,22.6002877 C14.8477086,23.7048572 13.9522781,24.6002877 12.8477086,24.6002877 C11.7431391,24.6002877 10.8477086,23.7048572 10.8477086,22.6002877 L10.8477086,1.78210591 C10.8477086,0.67753641 11.7431391,-0.21789409 12.8477086,-0.21789409 Z"
              id="矩形-copy-83"
              transform="translate(12.847709, 12.191197) rotate(-90.000000) translate(-12.847709, -12.191197) "
            />
          </g>
        </g>
      </g>
    </svg>
)};

export default CircleFinished;
