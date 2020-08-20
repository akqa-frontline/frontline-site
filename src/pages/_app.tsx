import React from 'react';
import { AppProps } from 'next/app';

import '@reach/accordion/styles.css';

import ThemeUIRenderer from '@/design-system/Theme-UI-renderer';

import '@/design-system/styles/global.scss';

const App = ({ Component, pageProps, router }: AppProps) => {
  // @ts-ignore
  if (Component.getLayout) {
    // @ts-ignore
    return Component.getLayout(
      <ThemeUIRenderer>
        <Component {...pageProps} />
      </ThemeUIRenderer>
    );
  }

  return (
    <ThemeUIRenderer>
      <Component {...pageProps} />
    </ThemeUIRenderer>
  );
};

export default App;
