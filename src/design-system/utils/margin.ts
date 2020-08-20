import { getProps } from '@/design-system/utils/get-props';

const MRE = /^m[trblxy]?$/;

export const getMargin = getProps(k => MRE.test(k));
export const omitMargin = getProps(k => !MRE.test(k));
