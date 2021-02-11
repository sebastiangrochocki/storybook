import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';
// import base from 'paths.macro';

export default {
  title: 'Design system/8. Pages/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Demo = Template.bind({});
Demo.args = {
};

