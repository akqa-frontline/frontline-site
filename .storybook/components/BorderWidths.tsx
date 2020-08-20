import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { LabelBox } from './shared/LabelBox';
import { Label, MutedLabel } from './shared/Label';

const BorderExample = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const BorderBox = styled.div<{}>(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderStyle: 'solid',
  borderColor: `${theme.color.secondary}`,
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface BorderWidthsProps {
  borderWidths: Record<string, string | number>;
}

export const BorderWidths: FunctionComponent<BorderWidthsProps> = ({
  borderWidths,
  ...props
}) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(borderWidths).map(bwKey => (
        <BorderExample key={bwKey}>
          <LabelBox>
            <Label>name: {bwKey}</Label>
            <MutedLabel>value: {borderWidths[bwKey]}</MutedLabel>
          </LabelBox>

          <BorderBox
            key={bwKey}
            style={{
              borderWidth: borderWidths[bwKey],
            }}
          />
        </BorderExample>
      ))}
    </Wrapper>
  );
};
