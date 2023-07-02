/* eslint-disable max-len */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ComponentStory } from '@storybook/react';
import React from 'react';

import Code from './Code';

export default {
    component: Code,
    title: 'shared/Code',
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'desctop',
        },
    },
};

const Template: ComponentStory<typeof Code> = (args) => (
    <Code {...args} />
);

export const CodeDesc = Template.bind({});
CodeDesc.args = {
    children: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};
