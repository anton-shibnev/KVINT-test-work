import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Switch from '../src/components/Switch/Switch';

export default {
  title: 'Тестовая стори',
  decorators: [
    withKnobs,
    (storyFn: () => React.ReactNode): React.ReactNode => storyFn(),
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const StorySwitch = () => {
  return <Switch />;
};

StorySwitch.story = {
  name: 'switch',
};
