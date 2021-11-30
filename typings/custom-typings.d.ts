declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.png'

declare module 'shallowequal';

declare module 'warning';

declare module 'array-tree-filter';

declare module 'lodash/debounce';

declare module 'lodash/uniqBy';

declare module 'raf';

declare module 'intersperse';

declare module 'omit.js';

declare module 'css-animation*';

declare module 'react-lazy-load';

declare module 'dom-closest';

declare module 'react-copy-to-clipboard';

// https://github.com/ant-design/ant-design/pull/19254
declare module 'react-lifecycles-compat';

declare module 'react-intl'

declare module 'rc-pagination*';

declare module 'rc-radio';

declare module 'rc-progress';

declare module 'rc-menu';

declare module 'rc-drawer';

declare module 'rc-calendar*';

declare module 'rc-time-picker*';

declare module 'rc-pagination/*';

declare module 'rc-animate';

declare module 'rc-util*';

declare module 'rc-select';

declare module 'rc-cascader';

declare module 'rc-checkbox';

declare module 'rc-dropdown';

declare module 'rc-editor-mention';

declare module 'rc-tabs*';

declare module 'rc-tree';
declare module 'rc-tree/lib/util';

declare module 'rc-tooltip*';

declare module 'rc-calendar';

declare module 'rc-input-number';

declare module 'rc-collapse';

declare module 'rc-notification';

declare module 'rc-dialog';

declare module 'rc-rate';

declare module 'rc-queue-anim';

declare module 'rc-slider';

declare module 'rc-slider/lib/Slider';

declare module 'rc-slider/lib/Range';

declare module 'rc-slider/lib/Handle';

declare module 'rc-steps';

declare module 'rc-switch';

declare module 'rc-table';

declare module 'rc-tree-select';

declare module 'rc-upload';

declare module 'rc-form*';
