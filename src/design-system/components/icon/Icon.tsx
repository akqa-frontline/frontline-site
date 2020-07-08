/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';

export interface IconProps {
  width?: number | number[] | string | string[];
  height?: number | number[] | string | string[];
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
      lineHeight: '1',
      fontSize: width,
      color: color || 'currentColor',
      '> svg': {
        verticalAlign: 'top',
        width: '1em',
        height: '1em',
      },
    }}
  >
    {children}
  </div>
);

Icon.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  width: 1,
  height: 1,
};

export default Icon;
