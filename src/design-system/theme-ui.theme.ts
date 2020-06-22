import { tailwind } from '@theme-ui/presets';
import { lighten } from '@theme-ui/color';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

import typography from './tokens/typography/typography';

export default {
  ...tailwind,
  fonts: {
    ...typography.fonts,
  },
  fontSizes: [...typography.fontSizes],
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
    },
    display1: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: 10,
      letterSpacing: 'widest',
      fontWeight: 'thin',
    },
    display2: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: 9,
      letterSpacing: 'wider',
      fontWeight: 'thin',
    },
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
    },
    // typography
    // - make all sizes responsive over 1 breakpoint
    // - reset set all fontWeights, this will be handled by the variable font except for code
    p: {
      ...tailwind.styles.p,
      fontSize: [1, 2],
      fontWeight: 'normal',
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [6, 7],
      fontWeight: 'normal',
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [5, 6],
      fontWeight: 'normal',
    },
    h3: {
      ...tailwind.styles.h2,
      fontSize: [4, 5],
      fontWeight: 'normal',
    },
    h4: {
      ...tailwind.styles.h2,
      fontSize: [3, 4],
      fontWeight: 'normal',
    },
    h5: {
      ...tailwind.styles.h2,
      fontSize: [2, 3],
      fontWeight: 'normal',
    },
    h6: {
      ...tailwind.styles.h2,
      fontSize: [2, 3],
      fontWeight: 'normal',
    },
    // code / syntaxhighlight
    pre: {
      p: 3,
      borderRadius: 4,
    },
    code: {
      ...nightOwl,
      fontFamily: typography.fonts.monospace,
      '.highlight': {
        background: lighten(nightOwl.backgroundColor, 0.075),
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
