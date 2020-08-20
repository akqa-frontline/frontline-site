/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import {
  AccordionPanel as ReachAccordionPanel,
  AccordionPanelProps as ReachAccordionPanelProps,
} from '@reach/accordion';

export interface AccordionPanelProps extends ReachAccordionPanelProps {
  /**
   * Useful to convey hierachy in nested accordions, accepts theme-ui `spacing` values
   */
  paddingLeft?: number | string | number[] | string[];
  // accept theme-ui sx props
  sx?: SxStyleProp;
}

const BaseAccordionPanelStyles = {};

const AccordionPanel: React.FunctionComponent<AccordionPanelProps> = ({
  children,
  paddingLeft = 'pg2',
  sx,
  ...props
}) => (
  <ReachAccordionPanel
    {...props}
    children={children}
    sx={{
      ...BaseAccordionPanelStyles,
      paddingLeft,
      ...sx,
    }}
  />
);

export { AccordionPanel, BaseAccordionPanelStyles };
