/** @jsx jsx */
import { jsx } from 'theme-ui';
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
}

const accordionPanelStyles = {};

const AccordionPanel: React.FunctionComponent<AccordionPanelProps> = ({
  children,
  paddingLeft = 'pg2',
  ...props
}) => (
  <ReachAccordionPanel
    {...props}
    children={children}
    sx={{
      ...accordionPanelStyles,
      paddingLeft,
    }}
  />
);

export { AccordionPanel, accordionPanelStyles };
