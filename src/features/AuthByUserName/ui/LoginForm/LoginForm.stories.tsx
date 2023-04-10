import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormPrimary = Template.bind({});
LoginFormPrimary.decorators = [ReduxDecorator({
    username: {
        username: '123',
        password: '123',
    },
})];
