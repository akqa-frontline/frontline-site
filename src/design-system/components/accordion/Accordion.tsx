/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  Accordion as ReachAccordion,
  AccordionProps as ReachAccordionProps,
} from '@reach/accordion';

declare type AccordionIndex = number | number[];

export interface AccordionProps extends ReachAccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  collapsible?: boolean;
  readOnly?: boolean;
  defaultIndex?: AccordionIndex;
  index?: AccordionIndex;
  onChange?: (index?: number) => void;
}

interface _ReachAccordionProps extends ReachAccordionProps {
  ref?: React.Ref<HTMLDivElement>;
}

const accordionStyles = {};

const Accordion: React.FunctionComponent<AccordionProps> = ({
  collapsible = true,
  defaultIndex = 0,
  multiple = false,
  readOnly = false,
  ...props
}) => (
  <ReachAccordion
    collapsible={collapsible}
    defaultIndex={defaultIndex}
    multiple={multiple}
    readOnly={readOnly}
    sx={{ ...accordionStyles }}
    {...(props as _ReachAccordionProps)}
  />
);

export { Accordion, accordionStyles };
