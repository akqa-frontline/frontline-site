import { tailwind } from '@theme-ui/presets';
import { lighten } from '@theme-ui/color';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

import typography from './tokens/typography/typography';

export default {
  ...tailwind,
  fonts: {
    ...typography,
  },
  styles: {
    ...tailwind.styles,
    pre: {
      p: 3,
      borderRadius: 4,
    },
    code: {
      ...nightOwl,
      fontFamily: typography.monospace,
      '.highlight': {
        background: lighten('#011627', 0.075),
        marginLeft: -3,
        marginRight: -3,
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 0,
        boxShadow: `inset 5px 0 0 0 ${tailwind.colors.primary}`,
      },
    },
  },
};
