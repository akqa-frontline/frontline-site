/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import {
  Accordion as ReachAccordion,
  AccordionProps as ReachAccordionProps,
} from '@reach/accordion';
import { SystemStyleObject } from '@styled-system/css';

declare type AccordionIndex = number | number[];

export interface AccordionProps extends ReachAccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  collapsible?: boolean;
  readOnly?: boolean;
  defaultIndex?: AccordionIndex;
  index?: AccordionIndex;
  onChange?: (index?: number) => void;
  // accept theme-ui sx props
  sx?: SxStyleProp;
}

interface _ReachAccordionProps extends ReachAccordionProps {
  ref?: React.Ref<HTMLDivElement>;
}

const BaseAccordionStyles: SystemStyleObject = {};

const Accordion: React.FunctionComponent<AccordionProps> = ({
  collapsible = true,
  defaultIndex = 0,
  multiple = false,
  readOnly = false,
  sx,
  ...props
}) => (
  <ReachAccordion
    collapsible={collapsible}
    defaultIndex={defaultIndex}
    multiple={multiple}
    readOnly={readOnly}
    sx={{ ...BaseAccordionStyles, ...sx }}
    {...(props as _ReachAccordionProps)}
  />
);

export { Accordion };
