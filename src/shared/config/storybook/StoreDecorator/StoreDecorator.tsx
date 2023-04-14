import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
    >
        <StoryComponent />
    </StoreProvider>
);