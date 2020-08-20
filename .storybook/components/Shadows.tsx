import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { LabelBox } from './shared/LabelBox';
import { Label, MutedLabel } from './shared/Label';

const ShadowExample = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '60px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const ShadowBox = styled.div<{}>(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderStyle: 'solid',
  borderColor: `${theme.color.secondary}`,
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface ShadowsProps {
  shadows: Record<string, string>;
}

export const Shadows: FunctionComponent<ShadowsProps> = ({
  shadows,
  ...props
}) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(shadows).map(sKey => (
        <ShadowExample key={sKey}>
          <LabelBox>
            <Label>name: {sKey}</Label>
            <MutedLabel>value: {shadows[sKey]}</MutedLabel>
          </LabelBox>

          <ShadowBox
            style={{
              boxShadow: shadows[sKey],
            }}
          />
        </ShadowExample>
      ))}
    </Wrapper>
  );
};
