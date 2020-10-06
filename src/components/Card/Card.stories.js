import React from 'react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Base = Template.bind({});
Base.args = {
  primary: true,
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
