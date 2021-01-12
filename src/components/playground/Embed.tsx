/** @jsx jsx */
import { jsx } from 'theme-ui';

const DemoStyles = {
  width: '100%',
  // height: '100%',
  border: 0,
  borderRadius: '4px',
  overflow: 'hidden',
};

export const Embed = ({ id, height }) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark`}
      sx={DemoStyles}
      title={id}
      height={height ? height : '500px'}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};
