import React from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';

const Wrapper = styled.div<{}>(withReset, () => ({}));

const Row = styled.div<{}>(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
}));

const Cell = styled.div<{ fullWidth?: boolean }>(({ fullWidth }) => ({
  ...(fullWidth && { gridColumnEnd: 'span 3' }),
}));

export interface ComponentSupportProps {
  themeUi?: boolean;
  sx?: boolean;
  variant?: boolean;
}

const ComponentSupport: React.FunctionComponent<ComponentSupportProps> = ({
  themeUi = true,
  sx = true,
  variant = true,
}) => {
  const getIcon = isPositive => (isPositive ? '✅' : '❌');

  return (
    <Wrapper>
      <Row>
        <Cell fullWidth>
          <p>
            The <code>variant</code>, <code>SX</code> and Theme UI Style props
            are generic props available on most components.
          </p>
          <p>
            Some components that implements other third-party libraries (like{' '}
            <code>reach-ui</code>, which we use for interactive, aria compliant
            components) does not support using the Theme UI Style props such as{' '}
            <code>p={[1, 2]}</code> - instead you should use the more verbose{' '}
            <code>SX</code> prop to access theme values:{' '}
            <code>{'sx={{ p: [1, 2] }}'}</code>.
          </p>
          <p>
            Likewise, some components do not support the Theme UI{' '}
            <code>variant</code> property. Since no variants will be available
            for such a component, you will have to style your component by hand.
          </p>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <>
            ↗{' '}
            <a
              href="https://theme-ui.com/components#style-props"
              target="_blank"
            >
              Theme UI - Style props:
            </a>{' '}
            {getIcon(themeUi)}
          </>
        </Cell>
        <Cell>
          <>
            ↗{' '}
            <a href="https://theme-ui.com/sx-prop" target="_blank">
              Theme UI - <code>SX</code> props
            </a>{' '}
            {getIcon(sx)}
          </>
        </Cell>
        <Cell>
          <>
            ↗{' '}
            <a href="https://theme-ui.com/guides/variants" target="_blank">
              Theme UI - <code>variant</code> prop
            </a>{' '}
            {getIcon(variant)}
          </>
        </Cell>
      </Row>
    </Wrapper>
  );
};

export default ComponentSupport;
