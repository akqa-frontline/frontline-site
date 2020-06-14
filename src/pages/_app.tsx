import React from 'react';
import { AppProps } from 'next/app';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';
import '@/design-system/styles/global.scss';
import MainNavigation from '@/design-system/components/navigation/main-navigation/MainNavigation';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeUIRenderer>
    <MainNavigation />
    <Component {...pageProps} />
  </ThemeUIRenderer>
);

export default App;
