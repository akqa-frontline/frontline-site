import { getProps } from '@/design-system/utils/get-props';

const PRE = /^p[trblxy]?$/;

export const getPadding = getProps(k => PRE.test(k));
export const omitPadding = getProps(k => !PRE.test(k));
