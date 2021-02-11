import React from 'react';

import { Header } from './Header';
// import base from 'paths.macro';

export default {
  title: 'Design system/7. Molecules/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;


export const Default = Template.bind({});
Default.args = {};
