import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ComponentStory } from '@storybook/react';
import React from 'react';

import Avatar from './Avatar';

export default {
    component: Avatar,
    title: 'shared/Avater',
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'desctop',
        },
    },
};

const Template: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args} />
);

export const AvatarTemplate = Template.bind({});
AvatarTemplate.args = {
    size: 150,
    // eslint-disable-next-line max-len
    src: 'https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
};
