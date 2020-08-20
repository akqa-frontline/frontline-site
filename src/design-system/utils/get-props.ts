import { SxStyleProp } from 'theme-ui';

const StylePropNames = [
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'color',
  'backgroundColor',
  'bg',
  'margin',
  'm',
  'marginTop',
  'mt',
  'marginRight',
  'mr',
  'marginBottom',
  'mb',
  'marginLeft',
  'ml',
  'marginX',
  'mx',
  'marginY',
  'my',
  'padding',
  'p',
  'paddingTop',
  'pt',
  'paddingRight',
  'pr',
  'paddingBottom',
  'pb',
  'paddingLeft',
  'pl',
  'paddingX',
  'px',
  'paddingY',
  'py',
  'top',
  'right',
  'bottom',
  'left',
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderColor',
  'borderWidth',
  'borderStyle',
  'borderRadius',
  'boxShadow',
  'textShadow',
  'zIndex',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'size',
];

const getThemeUiProps = props => {
  const themeUIProps = {};
  const otherProps = {};

  Object.keys(props).forEach(k => {
    if (StylePropNames.indexOf(k) > -1) {
      themeUIProps[k] = props[k];
    } else {
      otherProps[k] = props[k];
    }
  });

  return { sxProps: themeUIProps, otherProps };
};

const getProps = (test: (arg: string) => boolean) => (
  props: Record<string, any>
): Record<string, any> => {
  const next = {};
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (test(key || '')) next[key] = props[key];
    }
  }
  return next;
};

export { getThemeUiProps, getProps, StylePropNames };
