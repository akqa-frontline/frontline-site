import React from 'react';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';
import { Heading } from '@/design-system/components/heading/Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [storyFn => <ThemeUIRenderer>{storyFn()}</ThemeUIRenderer>],
};

export const Default = () => <Heading>Default</Heading>;

export const h1 = () => <Heading>Heading 1</Heading>;
export const h2 = () => <Heading>Heading 2</Heading>;
export const h3 = () => <Heading>Heading 3</Heading>;
export const h4 = () => <Heading>Heading 4</Heading>;
export const h5 = () => <Heading>Heading 5</Heading>;
export const h6 = () => <Heading>Heading 6</Heading>;

export const display1 = () => (
  <Heading as="h1" variant="text.display1">
    Default
  </Heading>
);

export const display2 = () => (
  <Heading as="h6" variant="text.display2">
    Default
  </Heading>
);
