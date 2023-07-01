import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ComponentStory } from '@storybook/react';
import React from 'react';

import ArticleDetailPage from './ArticalDetailPage';

export default {
    component: ArticleDetailPage,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'desctop',
        },
    },
};

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => (
    <ArticleDetailPage {...args} />
);

export const ArticleDetailPageDesc = Template.bind({});
