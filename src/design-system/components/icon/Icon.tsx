/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

export interface IconProps {
  width?: number | number[];
  height?: number | number[];
  color?: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  width,
  height,
  color,
  children,
}) => (
  <div
    sx={{
      display: 'inline-block',
      width: width || '16px',
      height: height || '16px',
      color: color || 'currentColor',
      '> svg': {
        width: width || '16px',
        height: height || '16px',
      },
    }}
  >
    {children}
  </div>
);

export default Icon;
