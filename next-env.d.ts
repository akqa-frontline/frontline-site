/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.css' {
  export const content: { [className: string]: string };
}

declare module '*.scss' {
  export const content: { [className: string]: string };
}

declare module '*.module.scss' {
  export const content: { [className: string]: string };
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;

  const src: string;
  export default src;
}
