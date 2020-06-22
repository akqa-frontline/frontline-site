import React from 'react';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';

import { AccordionButton } from './AccordionButton';
import {
  Accordion as UnstyledAccordion,
  AccordionItem as UnstyledAccordionItem,
} from '@reach/accordion';

export default {
  title: 'Components/Accordion/components/AccordionButton',
  component: AccordionButton,
  decorators: [storyFn => <ThemeUIRenderer>{storyFn()}</ThemeUIRenderer>],
};

export const Default = () => <AccordionButton>Default</AccordionButton>;

export const Expanded = () => (
  <UnstyledAccordion defaultIndex={0}>
    <UnstyledAccordionItem>
      <AccordionButton>Expanded (open)</AccordionButton>
    </UnstyledAccordionItem>
  </UnstyledAccordion>
);
