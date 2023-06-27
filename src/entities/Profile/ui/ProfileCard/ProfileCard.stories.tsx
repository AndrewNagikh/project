import { ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ProfileCard } from 'entities/Profile';
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    component: ProfileCard,
    title: 'entities/Profile',
};

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const ProfileCardDesc = Template.bind({});
ProfileCardDesc.args = {
    onFieldChange: (field: keyof Profile) => (value: any) => {
        console.log('123');
    },
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
};
ProfileCardDesc.decorators = [StoreDecorator({})];

export const ProfileLoading = Template.bind({});
ProfileLoading.args = {
    isLoading: true,
};
ProfileLoading.decorators = [StoreDecorator({})];

export const ProfileServerError = Template.bind({});
ProfileServerError.args = {
    error: 'ERROR',
};
ProfileServerError.decorators = [StoreDecorator({})];
