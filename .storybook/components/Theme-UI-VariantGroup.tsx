import React from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';

const Wrapper = styled.div<{}>(withReset, () => ({}));

const Row = styled.div<{}>(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '10px',
}));

const Cell = styled.div<{}>(() => ({}));

export interface ThemeUIVariantGroupProps {
  name?: string | boolean;
  defaultStylesName?: string | boolean;
}

const ThemeUIVariantGroup: React.FunctionComponent<ThemeUIVariantGroupProps> = ({
  name,
  defaultStylesName,
}) => (
  <Wrapper>
    <Row>
      <Cell>
        {name ? (
          name === 'none' ? (
            <p>
              This component does not have a default style-variant group <br />{' '}
              - use full object reference (ie.{' '}
              <code>variant="text.display1"</code>)
            </p>
          ) : (
            <p>
              This component can use style-variants defined in the variant
              group:{' '}
              <strong>
                <code>theme.{name}</code>
              </strong>
            </p>
          )
        ) : (
          <p>This component does not support style variants</p>
        )}

        {defaultStylesName ? (
          <p>
            This component uses global / MDX styles defined in:{' '}
            <strong>
              <code>{defaultStylesName}</code>
            </strong>
          </p>
        ) : (
          <p>This component does not use any global / MDX styles</p>
        )}
      </Cell>
    </Row>
  </Wrapper>
);

export default ThemeUIVariantGroup;
