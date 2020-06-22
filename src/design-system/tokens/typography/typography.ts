import ModularRemScale from '@danscan/modular-scale';

const rootFontSizePx = 16;
const ratioNumber = 1.125; //Major Second
const ratioName = 'major-second'; // 1.125

const scale = new ModularRemScale({
  firstPower: -1,
  ratio: ratioName,
  rootFontSizePx,
});

export default {
  fonts: {
    body:
      '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI",' +
      '"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",' +
      '"Helvetica Neue", sans-serif',
    heading:
      '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI",' +
      '"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",' +
      '"Helvetica Neue", sans-serif',
    monospace: '"Fira Code", monospace',
  },
  fontSizes: [
    ...Object.values(scale.getMap(9)),
    // add some display fonts sizes (xx-large) - start from 12, add 2 - skip 3
    `${(ratioNumber ** (12 + -1 - 1)).toFixed(2)}rem`,
    `${(ratioNumber ** (15 + -1 - 1)).toFixed(2)}rem`,
  ],
};
