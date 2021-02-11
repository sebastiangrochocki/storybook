import React from 'react';

import { Select } from './Select';

// import base from 'paths.macro';

export default {
  title: 'Design system/6. Atoms/Select',
  component: Select,
  
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectstate: 'default',
  placeholder: 'Select your country',
  labeltext: 'Select your country',

};

export const Error = Template.bind({});
Error.args = {
  selectstate: 'error',
  placeholder: 'Please select country',
  labeltext: 'Select your country',
};

export const Active = Template.bind({});
Active.args = {
  selectstate: 'active',
  placeholder: 'Select country',
  labeltext: 'Select your country',
};
