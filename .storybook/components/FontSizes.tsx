import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { Label, MutedLabel } from './shared/Label';
import { LabelBox } from './shared/LabelBox';

const Sample = styled.div({
  overflowWrap: 'anywhere',
});

const TypeSpecimen = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface LetterSpacingsProps {
  fontSizes: Record<string, string | number>;
}

export const FontSizes: FunctionComponent<LetterSpacingsProps> = ({
  fontSizes,
  ...props
}) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(fontSizes).map(fsKey => (
        <TypeSpecimen key={fsKey}>
          <LabelBox>
            <Label>name: {fsKey}</Label>
            <MutedLabel>value: {fontSizes[fsKey]}</MutedLabel>
          </LabelBox>

          <Sample
            style={{
              fontSize: fontSizes[fsKey],
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            eum fugiat harum laudantium numquam quam recusandae rem vitae!
          </Sample>
        </TypeSpecimen>
      ))}
    </Wrapper>
  );
};
