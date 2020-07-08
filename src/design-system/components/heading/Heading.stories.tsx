import React from 'react';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';
import { Heading } from '@/design-system/components/heading/Heading';

export default {
  title: 'Components/Heading',
  decorators: [storyFn => <ThemeUIRenderer>{storyFn()}</ThemeUIRenderer>],
};

export const Default = () => <Heading>Default</Heading>;

export const h1 = () => <Heading as="h1">Heading 1</Heading>;
export const h2 = () => <Heading as="h2">Heading 2</Heading>;
export const h3 = () => <Heading as="h3">Heading 3</Heading>;
export const h4 = () => <Heading as="h4">Heading 4</Heading>;
export const h5 = () => <Heading as="h5">Heading 5</Heading>;
export const h6 = () => <Heading as="h6">Heading 6</Heading>;

export const display1 = () => (
  <Heading as="h1" variant="text.display1">
    Display 1
  </Heading>
);

export const display2 = () => (
  <Heading as="h6" variant="text.display2">
    Display 2
  </Heading>
);
