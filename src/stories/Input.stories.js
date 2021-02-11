import React from 'react';

import { Input } from './Input';

export default {
  title: 'Design system/6. Atoms/Input',
  component: Input,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  placeholder: 'Your email',
  labeltext: 'Type your email',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  placeholder: 'Wrong email',
  labeltext: 'Type your email',
};

