import React from 'react';

import { SVG } from './SVG';
// import base from 'paths.macro';

export default {
  title: 'Design system/6. Atoms/SVG',
  component: SVG,
  
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <SVG {...args} />;

export const Default = Template.bind({});
Default.args = {
  // animation: './anim.json',
};


