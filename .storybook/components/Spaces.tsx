import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { Label, MutedLabel } from './shared/Label';
import { LabelBox } from './shared/LabelBox';

const SpaceExample = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const SpaceBox = styled.div<{}>(({ theme }) => ({
  border: `1px solid ${theme.color.secondary}`,
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface SpacesProps {
  space: Record<string, string | number>;
}

export const Spaces: FunctionComponent<SpacesProps> = ({ space, ...props }) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(space).map(sKey => (
        <SpaceExample key={sKey}>
          <LabelBox>
            <Label>name: {sKey}</Label>
            <MutedLabel>value: {space[sKey]}</MutedLabel>
          </LabelBox>

          <SpaceBox
            style={{
              width: space[sKey],
              height: space[sKey],
            }}
          />
        </SpaceExample>
      ))}
    </Wrapper>
  );
};
