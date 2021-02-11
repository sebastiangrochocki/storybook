import React from 'react';

import { Icon } from './Icon';
// import base from 'paths.macro';

export default {
  title: 'Design system/6. Atoms/Icon',
  component: Icon,
  
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Icon {...args} />;

export const Teal = Template.bind({});
Teal.args = {
color: 'teal',
};

export const Green = Template.bind({});
Green.args = {
color: 'green',
};

export const Blue = Template.bind({});
Blue.args = {
color: 'blue',
};

