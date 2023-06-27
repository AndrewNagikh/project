/* eslint-disable max-len */

import { ComponentStory } from '@storybook/react';
import React from 'react';

import Select from './Select';

export default {
    component: Select,
    title: 'shared/Select',
};

const Template: ComponentStory<typeof Select> = (args) => (
    <Select {...args} />
);

export const SelectDesc = Template.bind({});
SelectDesc.args = {
    label: 'Test',
    options: [{ value: '123', label: '123' }, { value: '123', label: '123' }, { value: '123', label: '123' }],
};
