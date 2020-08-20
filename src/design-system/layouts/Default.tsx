/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import {
  ComponentPropsWithRef,
  forwardRef,
  FunctionComponent,
  memo,
  ReactNode,
} from 'react';
import { BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Flex } from '@/design-system/components/layout/flex/Flex';
import { Assign, ForwardRef } from '@/design-system/types';
import { Grid } from '@/design-system/components/layout/grid/Grid';
import exp from 'constants';
import { WithSidesLayout } from '@/design-system/layouts/WithSides';

export interface DefaultLayoutProps {
  top?: ReactNode;
  bottom?: ReactNode;
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
  <Grid ref={ref} {...props} columns={1} gap={0}>
    {children}
  </Grid>
));

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = memo<
  DefaultLayoutProps
>(({ top, bottom, children, ...props }) => (
  <Flex {...props} sx={{ ...WrapperStyle }}>
    {top && <TopWrapper sx={{ ...TopWrapperStyle }}>{top}</TopWrapper>}

    <ContentWrapper
      sx={{
        ...ContentWrapperStyle,
      }}
    >
      {children}
    </ContentWrapper>

    {bottom && (
      <BottomWrapper sx={{ ...BottomWrapperStyle }}>{bottom}</BottomWrapper>
    )}
  </Flex>
));

const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export { DefaultLayout, getLayout };
