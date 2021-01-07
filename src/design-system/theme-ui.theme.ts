import { tailwind } from '@theme-ui/presets';
import { lighten } from '@theme-ui/color';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

import typography from './tokens/typography/typography';
import { Theme } from 'theme-ui';

const theme: Theme = {
  ...tailwind,
  borderWidths: {
    ...tailwind.borderWidths,
    1: '1px',
  },
  fonts: {
    ...typography.fonts,
  },
  fontSizes: [...typography.fontSizes],
  space: {
    ...tailwind.space,
    // add a nice little pixel grid
    pg0: 0,
    pg1: '4px',
    pg2: '8px',
    pg3: '12px',
    pg4: '16px',
    pg5: '20px',
    pg6: '24px',
    pg7: '28px',
    pg8: '32px',
    layoutTop: '3.75rem',
  },
  sizes: {
    ...tailwind.sizes,
    container: '800px',
    layoutTop: '3.75rem',
  },
  fontVariationSettings: {
    hairline: '"wght" 100',
    thin: '"wght" 200',
    light: '"wght" 300',
    normal: '"wght" 400',
    medium: '"wght" 500',
    semibold: '"wght" 600',
    bold: '"wght" 700',
    extrabold: '"wght" 800',
    black: '"wght" 900',
  },
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
      mt: 0,
      mb: 3,
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontVariationSettings: ['semibold', 'bold'],
      mt: 0,
      mb: 3,
    },
    display1: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: [9, 10],
      letterSpacing: 'tighter',
      fontVariationSettings: ['thin', 'light'],
    },
    display2: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: [7, 9],
      letterSpacing: 'wider',
      fontVariationSettings: ['bold', 'extrabold'],
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 'full',
    },
  },
  links: {
    nav: {
      color: 'secondary',
      fontVariationSettings: 'bold',
      textDecoration: 'none',
      cursor: 'pointer',
      px: 3,
      '&:hover, &:focus, &:active': {
        textDecoration: 'none',
      },
    },
    sidebar: {
      color: 'secondary',
    },
  },
  labels: {
    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
  },
  radio: {
    small: {
      size: 3,
    },
  },
  checkbox: {
    small: {
      size: 3,
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
      variant: 'text.default',
      fontVariationSettings: ['light', 'normal'],
      fontSize: [1, 2],
    },
    h1: {
      ...tailwind.styles.h1,
      variant: 'text.heading',
      fontSize: [6, 7],
    },
    h2: {
      ...tailwind.styles.h2,
      variant: 'text.heading',
      fontSize: [5, 6],
    },
    h3: {
      ...tailwind.styles.h3,
      variant: 'text.heading',
      fontSize: [4, 5],
    },
    h4: {
      ...tailwind.styles.h4,
      variant: 'text.heading',
      fontSize: [3, 4],
    },
    h5: {
      ...tailwind.styles.h5,
      variant: 'text.heading',
      fontSize: [2, 3],
    },
    h6: {
      ...tailwind.styles.h6,
      variant: 'text.heading',
      fontSize: [2, 3],
    },
    // code / syntaxhighlight
    pre: {
      p: 3,
      borderRadius: 4,
    },
    code: {
      ...nightOwl,
      fontFamily: typography.fonts.monospace,
      overflowX: 'auto',
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
    // Why is there no MDX styles for an image lol
    img: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
    },
  },
};

export default theme;
