import { withConsole } from '@storybook/addon-console';

import { addParameters, addDecorator } from '@storybook/client-api';
import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './storybook.scss';

import '@/design-system/styles/global.scss';
import theme from '@/design-system/theme-ui.theme';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const themeUiViewports = {};

theme.breakpoints.forEach(breakpoint => {
  themeUiViewports[breakpoint] = {
    name: `theme-ui breakpoint - ${breakpoint}`,
    styles: { width: breakpoint, height: '100%' },
    type: 'desktop',
  };
});

addParameters({
  viewport: {
    viewports: {
      ...themeUiViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

export const parameters = {
  controls: { expanded: true },
};
