import React from 'react';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';

import { Accordion } from '@/design-system/components/accordion/Accordion';

export default {
  title: 'Components/Accordion/components/Accordion',
  component: Accordion,
  decorators: [storyFn => <ThemeUIRenderer>{storyFn()}</ThemeUIRenderer>],
};

export const Default = () => <Accordion>Default</Accordion>;

export const Expanded = () => <Accordion defaultIndex={0}>Expanded</Accordion>;
