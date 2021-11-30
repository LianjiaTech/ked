import * as React from 'react';

const CircleException = (props: any) => {
  const { prefixCls, iconWidth } = props
  return (
    <svg
      className={`${prefixCls}-icon`}
      width={iconWidth}
      height={iconWidth}
      style={{ margin: '0 auto' }}
      viewBox="0 0 4 29"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="叹号@3x" fill="#F5222D" fillRule="nonzero">
          <g id="Mask">
            <path
              d="M2,21.5555556 C1.01777778,21.5555556 0.222222222,20.8845217 0.222222222,20.0560386 L0.222222222,1.49951691 C0.222222222,0.671033816 1.01777778,1.24344979e-13 2,1.24344979e-13 C2.98222222,1.24344979e-13 3.77777778,0.671033816 3.77777778,1.49951691 L3.77777778,20.0560386 C3.77777778,20.8845217 2.98222222,21.5555556 2,21.5555556 Z M0,26.4444444 C0,27.5490139 0.8954305,28.4444444 2,28.4444444 C3.1045695,28.4444444 4,27.5490139 4,26.4444444 C4,25.3398749 3.1045695,24.4444444 2,24.4444444 C0.8954305,24.4444444 0,25.3398749 0,26.4444444 Z"
              id="path-1"
            />
          </g>
        </g>
      </g>
    </svg>
)};

export default CircleException;
