import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { Label, MutedLabel } from './shared/Label';
import { LabelBox } from './shared/LabelBox';

const SizeExample = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const SizeBox = styled.div<{}>(({ theme }) => ({
  border: `1px solid ${theme.color.secondary}`,
  height: '50px',
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface SpacesProps {
  sizes: Record<string, string | number>;
}

export const Sizes: FunctionComponent<SpacesProps> = ({ sizes, ...props }) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(sizes).map(sKey => (
        <SizeExample key={sKey}>
          <LabelBox>
            <Label>name: {sKey}</Label>
            <MutedLabel>value: {sizes[sKey]}</MutedLabel>
          </LabelBox>

          <SizeBox
            style={{
              width: sizes[sKey],
            }}
          />
        </SizeExample>
      ))}
    </Wrapper>
  );
};
