import React from 'react';
import ReactJson, { ReactJsonViewProps } from 'react-json-view';

const reactJsonProps: Omit<ReactJsonViewProps, 'src'> = {
  displayDataTypes: false,
  displayObjectSize: false,
  enableClipboard: false,
  name: false,
};

const ThemeUIThemeOutput: React.FunctionComponent<{ theme: object }> = ({
  theme,
}) => <ReactJson src={theme} {...reactJsonProps} />;

export default ThemeUIThemeOutput;
