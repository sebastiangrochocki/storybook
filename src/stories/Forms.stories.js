import React from 'react';

import { Forms } from './Forms';
// import base from 'paths.macro';

export default {
  title: 'Design system/7. Molecules/Form',
  component: Forms,
};

const Template = (args) => <Forms {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

export const Defualt = Template.bind({});
Defualt.args = {
  state: 'default',
  label: true,
  fieldstate: 'default',
};

export const Card = Template.bind({});
Card.args = {
  state: 'card',
  label: true,
  fieldstate: 'default',
};

export const Filled = Template.bind({});
Filled.args = {
  state: 'filled',
  label: true,
  fieldstate: 'default',
};