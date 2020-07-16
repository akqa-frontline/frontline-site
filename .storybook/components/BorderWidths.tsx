import React, { FunctionComponent, useEffect, useState } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { transparentize } from 'polished';

const Label = styled.div<{}>(({ theme }) => ({
  marginRight: 30,
  fontSize: `${theme.typography.size.s1}px`,
  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

const BorderExample = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const BorderBox = styled.div<{}>(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderStyle: 'solid',
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
          <Label>{bwKey}</Label>

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
