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

const Sample = styled.div({
  overflowWrap: 'anywhere',
});

const TypeSpecimen = styled.div<{}>(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  '&:not(:last-child)': { marginBottom: '1rem' },
}));

const Wrapper = styled.div<{}>(withReset, () => ({
  margin: '25px 0 40px',
}));

export interface FontWeightsProps {
  fontFamily?: string;
  fontWeights: Record<string, number>;
}

export const FontWeights: FunctionComponent<FontWeightsProps> = ({
  fontFamily,
  fontWeights,
  ...props
}) => {
  return (
    <Wrapper {...props} className="docblock-typeset">
      {Object.keys(fontWeights).map(fwKey => (
        <TypeSpecimen key={fwKey}>
          <Label>{fwKey}</Label>
          <Sample
            style={{
              fontFamily,
              // fontWeight: fontWeights[fwKey],
              fontVariationSettings: `"wght" ${fontWeights[fwKey]}`,
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
