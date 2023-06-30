import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from '../ui/ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        data: {
            first: 'Name',
            lastname: 'Name',
            age: 22,
            city: 'City',
            country: Country.ARMENIA,
            // eslint-disable-next-line max-len
            avatar: 'https://www.discordavatars.com/wp-content/uploads/2020/07/the-witcher-game-avatar-074.jpg',
            currency: Currency.EUR,
            username: 'User',
        },
        isLoading: false,
        readonly: false,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        data: {
            first: 'Name',
            lastname: 'Name',
            age: 22,
            city: 'City',
            country: Country.ARMENIA,
            // eslint-disable-next-line max-len
            avatar: 'https://www.discordavatars.com/wp-content/uploads/2020/07/the-witcher-game-avatar-074.jpg',
            currency: Currency.EUR,
            username: 'User',
        },
        isLoading: false,
        readonly: false,
    },
})];
