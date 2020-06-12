import React from 'react';
import { AppProps } from 'next/app';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';
import '@/design-system/styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeUIRenderer>
    <Component {...pageProps} />
  </ThemeUIRenderer>
);

export default App;
