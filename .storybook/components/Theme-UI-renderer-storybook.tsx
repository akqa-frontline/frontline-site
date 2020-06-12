import React from 'react';
import { ThemeProvider } from 'theme-ui';
import ThemeUIPrism from '@/design-system/Theme-UI-Prism';

const ThemeUIRendererStorybook: React.FunctionComponent<{ theme: unknown }> = ({
  theme,
  children,
}) => (
  <ThemeProvider
    theme={theme}
    // @ts-ignore
    components={components}
  >
    {children}
  </ThemeProvider>
);

export default ThemeUIRendererStorybook;
