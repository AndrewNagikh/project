import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import Text, { TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
};

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args} />
);

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text',
};
TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const TextPrimaryLight = Template.bind({});
TextPrimaryLight.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text',
};
TextPrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
export const TextTextProps = Template.bind({});
TextTextProps.args = {
    text: 'Text',
};
export const TextTitleProps = Template.bind({});
TextTitleProps.args = {
    title: 'Title',
};
export const TextError = Template.bind({});
TextError.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text',
    theme: TextTheme.ERROR,
};
