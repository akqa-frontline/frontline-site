import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { LabelBox } from './shared/LabelBox';
import { Label, MutedLabel } from './shared/Label';

const RadiusExample = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const RadiusBox = styled.div<{}>(({ theme }) => ({
  width: '50px',
  height: '50px',
  border: `1px solid ${theme.color.secondary}`,
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface RadiiProps {
  radii: Record<string, string | number>;
}

export const Radii: FunctionComponent<RadiiProps> = ({ radii, ...props }) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(radii).map(rKey => (
        <RadiusExample key={rKey}>
          <LabelBox>
            <Label>name: {rKey}</Label>
            <MutedLabel>value: {radii[rKey]}</MutedLabel>
          </LabelBox>

          <RadiusBox
            key={rKey}
            style={{
              borderRadius: radii[rKey],
            }}
          />
        </RadiusExample>
      ))}
    </Wrapper>
  );
};
