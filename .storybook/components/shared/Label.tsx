import { styled } from '@storybook/theming';
import { transparentize } from 'polished';

const Label = styled.div<{}>(({ theme }) => ({
  marginRight: 30,
  fontSize: `${theme.typography.size.s2}px`,
  color: theme.color.defaultText,
}));

const MutedLabel = styled.div<{}>(({ theme }) => ({
  marginRight: 30,
  marginTop: 15,
  fontSize: `${theme.typography.size.s1}px`,
  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

export { Label, MutedLabel };
