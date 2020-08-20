/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '@/design-system/theme-ui.theme';
import ThemeUIPrism from '@/design-system/Theme-UI-Prism';
import { Heading } from '@/design-system/components/elements/heading/Heading';
import { Text } from '@/design-system/components/elements/text/Text';

// Add a href anchor to all headings
const heading = as => props => <Heading as={as} {...props} />;

const text = () => props => <Text {...props} />;

const components = {
  pre: ({ children }) => <>{children}</>,
  code: ThemeUIPrism,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  p: text(),
};

const ThemeUIRenderer: React.FunctionComponent = ({ children }) => (
  <ThemeProvider
    // @ts-ignore
    components={components}
    theme={theme}
  >
    {children}
  </ThemeProvider>
);

export default ThemeUIRenderer;
