import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '@/design-system/theme-ui.theme';
import ThemeUIPrism from '@/design-system/Theme-UI-Prism';
import { Heading } from '@/design-system/components/heading/Heading';

// Add a href anchor to all headings
const heading = as => props => {
  if (!props.id) {
    return <Heading as={as} {...props} />;
  }

  return (
    <Heading as={as} {...props}>
      <a href={`#${props.id}`}>#</a>
      {props.children}
    </Heading>
  );
};

const components = {
  pre: ({ children }) => <>{children}</>,
  code: ThemeUIPrism,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
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
