import React, { FunctionComponent, useEffect, useState } from 'react';
import { styled } from '@storybook/theming';
import { withReset } from '@storybook/components/dist/typography/shared';
import { getBlockBackgroundStyle } from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import { transparentize } from 'polished';

const exists = val => val !== 'undefined' || val !== null;

const fontFeatureSettings = (features: Record<string, boolean>): string => {
  let result = ``;

  Object.keys(features).forEach(key => {
    result += `'${key}' ${features[key] ? '1' : '0'}, `;
  });

  return result.replace(/,\s*$/, '');
};

const Label = styled.label<{}>(({ theme }) => ({
  display: 'block',
  marginRight: 15,
  fontSize: `${theme.typography.size.s1}px`,
}));

const CheckboxLabel = styled.label<{}>(({ theme }) => ({
  display: 'block',
  marginLeft: 8,
  fontSize: `${theme.typography.size.s1}px`,
}));

const SubLabel = styled.small<{}>(({ theme }) => ({
  display: 'block',
  marginTop: '4px',
  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

const Input = styled.input<{}>(({ theme }) => ({}));

const Value = styled.span<{}>(({ theme }) => ({
  fontSize: '1.25rem',
  display: 'block',
}));

const Field = styled.div<{}>(({ theme }) => ({
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  marginRight: 15,
}));

const CheckboxField = styled.div<{}>(({ theme }) => ({
  display: 'flex',
  flex: '0 0 100px',
  alignItems: 'flex-start',
  // justifyContent: 'space-between',
  marginRight: 15,
  marginBottom: 7,
}));

const Fields = styled.div<{}>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '20px',
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

export interface TypesetProps {
  fontFamily?: string;

  fontSize?: number;
  fontSizeRange?: number[];

  fontWeight?: number;
  fontWeightRange?: number[];

  fontSlant?: number;
  fontSlantRange?: number[];

  features?: Record<string, string>;
}

export const VariableTypeset: FunctionComponent<TypesetProps> = ({
  fontFamily,

  fontSize,
  fontSizeRange,

  fontWeight,
  fontWeightRange,

  fontSlant,
  fontSlantRange,

  features,
  ...props
}) => {
  const [_fontWeight, setFontWeight] = useState<number>(fontWeight);
  const [_fontSize, setFontSize] = useState<number>(fontSize);
  const [_fontSlant, setFontSlant] = useState<number>(fontSlant);

  const [_featureToggles, setFeatureToggles] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const featureToggles = {};

    Object.keys(features).forEach(k => {
      featureToggles[k] = false;
    });

    setFeatureToggles(featureToggles);
  }, [features]);

  const toggleFeature = (key: string) => {
    const featureToggles = {
      ..._featureToggles,
      [key]: !_featureToggles[key],
    };

    setFeatureToggles(featureToggles);
  };

  return (
    <Wrapper {...props} className="docblock-typeset">
      <Fields>
        {exists(fontSizeRange) && exists(fontSize) && (
          <Field>
            <Label htmlFor="fontSize">
              Font size: <Value>{_fontSize}px</Value>
            </Label>
            <Input
              id="fontSize"
              type="range"
              value={_fontSize}
              min={fontSizeRange[0]}
              max={fontSizeRange[1]}
              step={1}
              onChange={e => setFontSize(parseInt(e.target.value, 10))}
            />
          </Field>
        )}

        {exists(fontWeightRange) && exists(fontWeight) && (
          <Field>
            <Label htmlFor="fontWeight">
              Font weight: <Value>{_fontWeight}</Value>
            </Label>
            <Input
              id="fontWeight"
              type="range"
              value={_fontWeight}
              min={fontWeightRange[0]}
              max={fontWeightRange[1]}
              step={1}
              onChange={e => setFontWeight(parseInt(e.target.value, 10))}
            />
          </Field>
        )}

        {exists(fontSlantRange) && exists(fontSlant) && (
          <Field>
            <Label htmlFor="fontSlant">
              Font slant: <Value>{_fontSlant}</Value>
            </Label>
            <Input
              id="fontSlant"
              type="range"
              value={_fontSlant}
              min={fontSlantRange[0]}
              max={fontSlantRange[1]}
              step={0.1}
              onChange={e => setFontSlant(parseInt(e.target.value, 10))}
            />
          </Field>
        )}
      </Fields>

      {exists(features) && (
        <Fields>
          {Object.keys(_featureToggles).map(key => (
            <CheckboxField key={key}>
              <Input
                id={key}
                type="checkbox"
                checked={_featureToggles[key]}
                onChange={() => toggleFeature(key)}
              />
              <CheckboxLabel htmlFor={key}>
                {key} <SubLabel>{features[key]}</SubLabel>
              </CheckboxLabel>
            </CheckboxField>
          ))}
        </Fields>
      )}

      <TypeSpecimen>
        <Sample
          contentEditable={true}
          dangerouslySetInnerHTML={{
            __html:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~',
          }}
          style={{
            fontFamily,
            fontSize: _fontSize,
            fontVariationSettings: `'wght' ${_fontWeight}, 'slnt' ${-Math.abs(
              _fontSlant,
            )}`,
            fontFeatureSettings: fontFeatureSettings(_featureToggles),
          }}
        />
      </TypeSpecimen>
    </Wrapper>
  );
};
