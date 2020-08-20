import { withConsole } from '@storybook/addon-console';

import { addParameters, addDecorator } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './storybook.scss';

import '@/design-system/styles/global.scss';
import theme from '@/design-system/theme-ui.theme';
import { compareStoryPaths } from './compare-story-paths';

const storiesOrder = {
  'usage': null,
  'theme ui': {
    'theme': null,
    'usage': null,
    'prism': null,
  },
  'mdx': {
    'components': null,
    'kitchen sinks': null,
  },
  'design tokens': null,
  'elements': null,
  'components': {
    'usage': null,
  },
}

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
  options: {
    storySort: ([story1Id, story1], [story2Id, story2]) => {
      const story1Path = [...story1.kind.split('/'), story1.name].map(key => key.toLowerCase());
      const story2Path = [...story2.kind.split('/'), story2.name].map(key => key.toLowerCase());

      return compareStoryPaths(storiesOrder, story1Path, story2Path);
    },
  }
});

export const parameters = {
  controls: { expanded: true },
};
