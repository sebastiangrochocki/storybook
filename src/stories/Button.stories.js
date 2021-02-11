import React from 'react';

import { Button } from './Button';
// import base from 'paths.macro';

export default {
  title: 'Design system/6. Atoms/Button',
  component: Button,
  
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Start free trial',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Start free trial',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  label: 'Start free trial',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Start free trial',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Start free trial',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  label: 'Start free trial',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  label: 'Start free trial',
};

// export const Mode = Template.bind({});
// Mode.args = {
//   label: 'Dark',
// };
