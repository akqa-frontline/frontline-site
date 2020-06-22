/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  Accordion as ReachAccordion,
  AccordionProps as ReachAccordionProps,
} from '@reach/accordion';

export interface AccordionProps extends ReachAccordionProps {
  ref?: React.Ref<HTMLDivElement>;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  ref,
  children,
  ...props
}) => (
  <ReachAccordion
    {...props}
    ref={ref as React.Ref<HTMLDivElement>}
    children={children}
    sx={{
      overflowX: 'hidden',
    }}
  />
);

export { Accordion };
