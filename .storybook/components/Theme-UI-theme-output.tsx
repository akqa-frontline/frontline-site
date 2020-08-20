import React, { useCallback, useState } from 'react';
import ReactJson, { ReactJsonViewProps } from 'react-json-view';
import { Button } from '@storybook/components';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';

const Wrapper = styled.div<{}>(withReset, () => ({}));

const Row = styled.div<{}>(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '10px',
}));

const Cell = styled.div<{}>(() => ({}));

const CellSpaced = styled.div<{}>(() => ({
  marginBottom: '1em',
}));

const reactJsonProps: Omit<ReactJsonViewProps, 'src'> = {
  displayDataTypes: false,
  displayObjectSize: false,
  enableClipboard: false,
  name: false,
};

const ThemeUIThemeOutput: React.FunctionComponent<{ theme: object }> = ({
  theme,
}) => {
  const [collapsed, setCollapsed] = useState<number | boolean>(false);

  const handleCollapse = useCallback(() => {
    setCollapsed(c => (c === 1 ? false : 1));
  }, []);

  return (
    <Wrapper>
      <Row>
        <CellSpaced>
          <Button secondary onClick={handleCollapse}>
            {collapsed === 1 ? 'Expand all' : 'Collapse all'}
          </Button>
        </CellSpaced>
      </Row>
      <Row>
        <Cell>
          <ReactJson src={theme} {...reactJsonProps} collapsed={collapsed} />
        </Cell>
      </Row>
    </Wrapper>
  );
};

export default ThemeUIThemeOutput;
