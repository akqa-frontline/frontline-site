import React from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { Icons } from '@storybook/components';
import icons from '@storybook/components/dist/icon/icons';

const Wrapper = styled.div<{}>(withReset, () => ({}));

const Row = styled.div<{}>(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
}));

const Cell = styled.div<{}>(() => ({}));

export interface ComponentSupportProps {
  themeUi?: boolean;
  sx?: boolean;
}

const ComponentSupport: React.FunctionComponent<ComponentSupportProps> = ({
  themeUi,
  sx = true,
}) => {
  const getIcon = isPositive => (isPositive ? '✅' : '❌');

  return (
    <Wrapper>
      <Row>
        <Cell>
          <p>Theme UI props: {getIcon(themeUi)}</p>
          {!themeUi && (
            <small>
              This component does not accept <code>theme-ui</code> props such as
              <code>p={4}</code> - if you want to use <code>theme-ui</code>{' '}
              props, you should use &nbsp;<code>theme-ui</code> enabled
              components nested inside this component.
            </small>
          )}
        </Cell>
        <Cell>
          <p>Theme UI - `SX` props: {getIcon(sx)}</p>
        </Cell>
      </Row>
    </Wrapper>
  );
};

export default ComponentSupport;
