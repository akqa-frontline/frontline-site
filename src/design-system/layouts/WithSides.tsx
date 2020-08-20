/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  FunctionComponent,
  memo,
  ReactNode,
} from 'react';
import { BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Flex } from '@/design-system/components/layout/flex/Flex';
import { Assign, ForwardRef } from '@/design-system/types';
import { Grid } from '@/design-system/components/layout/grid/Grid';
import { Container } from '@/design-system/components/layout/container/Container';
import { getLayout as getDefaultLayout } from './Default';

import theme from '@/design-system/theme-ui.theme';

export interface WithSidesLayoutProps {
  top?: ReactNode;
  right?: ReactNode;
  bottom?: ReactNode;
  left?: ReactNode;
  children: ReactNode;
}

const WrapperStyle: SxStyleProp = {
  flexDirection: 'column',
  height: 'full',
};

const TopWrapperStyle: SxStyleProp = {
  position: 'sticky',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 40,
  height: 'layoutTop',
};

const BottomWrapperStyle: SxStyleProp = {};

const ContentWrapperStyle: SxStyleProp = {
  flex: '1 0 auto',
};

const SharedSideWrapperStyle: SxStyleProp = {
  display: ['none', null, null, null, 'flex'],
  flexDirection: 'column',
};

const RightWrapperStyle: SxStyleProp = {
  ...SharedSideWrapperStyle,
};

const LeftWrapperStyle: SxStyleProp = {
  ...SharedSideWrapperStyle,
  height: `calc(100vh - ${theme.space['layoutTop']})`,
  top: theme.space['layoutTop'],
  overflowY: 'auto',
  position: 'sticky',
  bg: 'light',
  padding: 2,
};

const TopWrapper: ForwardRef<
  HTMLDivElement,
  Assign<ComponentPropsWithRef<'div'>, BoxOwnProps>
> = forwardRef(({ children, ...props }, ref) => (
  <Flex ref={ref} {...props}>
    {children}
  </Flex>
));

const BottomWrapper: ForwardRef<
  HTMLDivElement,
  Assign<ComponentPropsWithRef<'div'>, BoxOwnProps>
> = forwardRef(({ children, ...props }, ref) => (
  <Flex ref={ref} {...props}>
    {children}
  </Flex>
));

const ContentWrapper: ForwardRef<
  HTMLDivElement,
  Assign<ComponentPropsWithRef<'div'>, BoxOwnProps>
> = forwardRef(({ children, ...props }, ref) => (
  <Grid
    ref={ref}
    {...props}
    columns={['1', null, null, null, '300px 1fr 300px']}
    gap={0}
  >
    {children}
  </Grid>
));

const LeftWrapper: ForwardRef<
  HTMLDivElement,
  Assign<ComponentPropsWithRef<'div'>, BoxOwnProps>
> = forwardRef(({ children, ...props }, ref) => (
  <Flex ref={ref} {...props}>
    {children}
  </Flex>
));

const RightWrapper: ForwardRef<
  HTMLDivElement,
  Assign<ComponentPropsWithRef<'div'>, BoxOwnProps>
> = forwardRef(({ children, ...props }, ref) => (
  <Flex ref={ref} {...props}>
    {children}
  </Flex>
));

const WithSidesLayout: FunctionComponent<WithSidesLayoutProps> = memo<
  WithSidesLayoutProps
>(({ top, bottom, left, right, children, ...props }) => (
  <Flex {...props} sx={{ ...WrapperStyle }}>
    {top && <TopWrapper sx={{ ...TopWrapperStyle }}>{top}</TopWrapper>}

    <ContentWrapper
      sx={{
        ...ContentWrapperStyle,
      }}
    >
      {left && <LeftWrapper sx={{ ...LeftWrapperStyle }}>{left}</LeftWrapper>}

      <Container>{children}</Container>

      {right && (
        <RightWrapper sx={{ ...RightWrapperStyle }}>{right}</RightWrapper>
      )}
    </ContentWrapper>

    {bottom && (
      <BottomWrapper sx={{ ...BottomWrapperStyle }}>{bottom}</BottomWrapper>
    )}
  </Flex>
));

const getLayout = page =>
  getDefaultLayout(<WithSidesLayout>{page}</WithSidesLayout>);

export { WithSidesLayout, getLayout };
