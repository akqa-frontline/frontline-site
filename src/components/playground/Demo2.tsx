import { Button } from '@/design-system/components/elements/button/Button';
import React, { useState } from 'react';

const DemoStyles = {
  backgroundColor: 'dark',
  '&:hover': {
    backgroundColor: 'black',
  },
};

export const Demo = () => {
  const [tapped, setTapped] = useState(false);

  return (
    <Button
      sx={{
        ...(tapped && {
          ...DemoStyles,
        }),
      }}
      onClick={() => setTapped(!tapped)}
    >
      Tap this React Component
    </Button>
  );
};
