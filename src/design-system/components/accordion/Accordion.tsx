/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  Accordion as ReachAccordion,
  AccordionProps as ReachAccordionProps,
} from '@reach/accordion';

interface AccordionProps extends ReachAccordionProps {
  ref: React.Ref<HTMLDivElement>;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  ...props
}) => (
  <ReachAccordion {...props}>
    {children as React.Ref<HTMLDivElement>}
  </ReachAccordion>
);

export { Accordion };
