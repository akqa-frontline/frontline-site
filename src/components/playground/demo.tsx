import { Button } from '@/design-system/components/elements/button/Button';
import React, { useState } from 'react';

export const Demo = () => {
  const [tapped, setTapped] = useState(false);

  return (
    <Button onClick={() => setTapped(!tapped)}>
      Tap this React Component {tapped ? 'Yes' : 'No'}
    </Button>
  );
};
