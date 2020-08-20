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

export interface LineHeightsProps {
  fontFamily?: string;
  lineHeights: Record<string, string | number>;
}

export const LineHeights: FunctionComponent<LineHeightsProps> = ({
  fontFamily,
  lineHeights,
  ...props
}) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(lineHeights).map(lhKey => (
        <TypeSpecimen key={lhKey}>
          <LabelBox>
            <Label>name: {lhKey}</Label>
            <MutedLabel>value: {lineHeights[lhKey]}</MutedLabel>
          </LabelBox>

          <Sample
            style={{
              fontFamily,
              lineHeight: lineHeights[lhKey],
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            eum fugiat harum laudantium numquam quam recusandae rem vitae!
            Aliquam consectetur doloribus, et facilis, illum ipsa ipsam iure
            natus omnis quod repudiandae rerum sed tempora ullam veritatis. Ab
            adipisci alias architecto aut debitis delectus dolores doloribus
            dolorum, exercitationem facilis fuga fugiat, in, inventore iste
            iusto libero magni maiores nulla officiis provident quod repellendus
            sapiente sint suscipit unde vel vero. Consequuntur cumque dicta hic
            iusto voluptate voluptatum! Dolore laudantium maiores molestias odio
            odit omnis sapiente? Autem debitis doloribus eaque error fugiat,
            iste labore neque, nihil possimus quod reiciendis similique suscipit
            vel. Ab accusantium adipisci aliquid assumenda delectus earum,
            impedit ipsum maxime praesentium, quos, repudiandae unde veniam
            voluptates? Aperiam deserunt doloribus eum.
          </Sample>
        </TypeSpecimen>
      ))}
    </Wrapper>
  );
};
