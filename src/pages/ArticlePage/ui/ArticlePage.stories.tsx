import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ComponentStory } from '@storybook/react';
import React from 'react';

import ArticlePage from './ArticlePage';

export default {
    component: ArticlePage,
    title: 'pages/ArticlePage',
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'desctop',
        },
    },
};

const Template: ComponentStory<typeof ArticlePage> = (args) => (
    <ArticlePage {...args} />
);

export const ArticlePageDesc = Template.bind({});
